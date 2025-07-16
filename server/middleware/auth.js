// Authentication and authorization middleware
const jwt = require("jsonwebtoken");
const { pgPool, redisClient } = require("../config/database");

// Authenticate JWT token
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access token required",
      });
    }

    // Check if token is blacklisted
    const isBlacklisted = await redisClient.get(`blacklist:${token}`);
    if (isBlacklisted) {
      return res.status(401).json({
        success: false,
        message: "Token has been revoked",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user still exists and is active
    const userResult = await pgPool.query(
      "SELECT id, email, name, role, subscription FROM users WHERE id = $1",
      [decoded.id]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = {
      ...decoded,
      ...userResult.rows[0],
    };

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(403).json({
        success: false,
        message: "Invalid token",
      });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired",
      });
    }

    console.error("Authentication error:", error);
    res.status(500).json({
      success: false,
      message: "Authentication failed",
    });
  }
};

// Require specific role(s)
const requireRole = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Insufficient permissions",
      });
    }

    next();
  };
};

// Require subscription level
const requireSubscription = (requiredLevel) => {
  const subscriptionLevels = {
    free: 0,
    premium: 1,
    lifetime: 2,
  };

  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const userLevel = subscriptionLevels[req.user.subscription] || 0;
    const requiredLevelValue = subscriptionLevels[requiredLevel] || 0;

    if (userLevel < requiredLevelValue) {
      return res.status(403).json({
        success: false,
        message: `${requiredLevel} subscription required`,
        upgrade_required: true,
        current_subscription: req.user.subscription,
      });
    }

    next();
  };
};

// Rate limiting middleware
const createRateLimit = (windowMs, maxRequests, keyGenerator) => {
  return async (req, res, next) => {
    try {
      const key = keyGenerator ? keyGenerator(req) : `rate_limit:${req.ip}`;
      const current = await redisClient.incr(key);

      if (current === 1) {
        await redisClient.expire(key, Math.ceil(windowMs / 1000));
      }

      if (current > maxRequests) {
        const ttl = await redisClient.ttl(key);
        return res.status(429).json({
          success: false,
          message: "Too many requests",
          retry_after: ttl,
        });
      }

      // Add rate limit headers
      res.set({
        "X-RateLimit-Limit": maxRequests,
        "X-RateLimit-Remaining": Math.max(0, maxRequests - current),
        "X-RateLimit-Reset": new Date(Date.now() + windowMs).toISOString(),
      });

      next();
    } catch (error) {
      console.error("Rate limiting error:", error);
      next(); // Continue on error to avoid blocking requests
    }
  };
};

// API key authentication for external services
const authenticateApiKey = async (req, res, next) => {
  try {
    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
      return res.status(401).json({
        success: false,
        message: "API key required",
      });
    }

    // Check API key in database or cache
    const keyData = await redisClient.get(`api_key:${apiKey}`);

    if (!keyData) {
      return res.status(401).json({
        success: false,
        message: "Invalid API key",
      });
    }

    const parsedKeyData = JSON.parse(keyData);
    req.apiKey = parsedKeyData;

    next();
  } catch (error) {
    console.error("API key authentication error:", error);
    res.status(500).json({
      success: false,
      message: "API key authentication failed",
    });
  }
};

// Blacklist token (for logout)
const blacklistToken = async (token, expiresIn = 3600) => {
  try {
    await redisClient.setEx(`blacklist:${token}`, expiresIn, "true");
  } catch (error) {
    console.error("Error blacklisting token:", error);
  }
};

// Check if user owns resource
const requireOwnership = (resourceIdParam = "id", userIdField = "user_id") => {
  return async (req, res, next) => {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: "Authentication required",
        });
      }

      // Admin can access any resource
      if (req.user.role === "admin") {
        return next();
      }

      const resourceId = req.params[resourceIdParam];

      // This is a simplified check - in practice, you'd query the database
      // to verify ownership based on the specific resource type
      if (req.body[userIdField] && req.body[userIdField] !== req.user.id) {
        return res.status(403).json({
          success: false,
          message: `Access denied - resource ownership required for ${resourceId}`,
        });
      }

      next();
    } catch (error) {
      console.error("Ownership check error:", error);
      res.status(500).json({
        success: false,
        message: "Ownership verification failed",
      });
    }
  };
};

// Validate request origin (CORS-like)
const validateOrigin = (allowedOrigins) => {
  return (req, res, next) => {
    const origin = req.headers.origin;

    if (!origin || !allowedOrigins.includes(origin)) {
      return res.status(403).json({
        success: false,
        message: "Origin not allowed",
      });
    }

    next();
  };
};

module.exports = {
  authenticateToken,
  requireRole,
  requireSubscription,
  createRateLimit,
  authenticateApiKey,
  blacklistToken,
  requireOwnership,
  validateOrigin,
};
