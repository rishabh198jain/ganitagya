const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || "ganitagya-secret-key-2024";

// Middleware
app.use(helmet());
app.use(morgan("combined"));
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === "test" ? 100 : 50, // Increased limit for development
  message: {
    success: false,
    message: "Too many authentication attempts, please try again later.",
    retryAfter: "15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === "test" ? 1000 : 500, // Higher limit for development
  message: {
    success: false,
    message: "Too many requests, please try again later.",
    retryAfter: "15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/auth", authLimiter);
app.use("/api", generalLimiter);

// In-memory database (replace with actual database in production)
let users = [
  {
    id: "1",
    name: "Dr. Ganitagya",
    email: "admin@ganitagya.com",
    password: "$2a$10$gkZaj6pVddZl8Dyd7e4PTOc98ShXJ3Wcxz4O2KU70CXPuDtTqIv7u", // password123
    role: "admin",
    subscription: "premium",
    avatar: "👨‍🏫",
    createdAt: new Date("2024-01-01"),
    lastLogin: new Date(),
  },
  {
    id: "2",
    name: "Prof. Sarah Wilson",
    email: "teacher@ganitagya.com",
    password: "$2a$10$gkZaj6pVddZl8Dyd7e4PTOc98ShXJ3Wcxz4O2KU70CXPuDtTqIv7u", // password123
    role: "teacher",
    subscription: "premium",
    avatar: "👩‍🏫",
    createdAt: new Date("2024-01-01"),
    lastLogin: new Date(),
  },
  {
    id: "3",
    name: "John Doe",
    email: "student@ganitagya.com",
    password: "$2a$10$gkZaj6pVddZl8Dyd7e4PTOc98ShXJ3Wcxz4O2KU70CXPuDtTqIv7u", // password123
    role: "student",
    subscription: "free",
    avatar: "👨‍🎓",
    createdAt: new Date("2024-01-01"),
    lastLogin: new Date(),
  },
];

// Helper functions
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
};

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    res.status(400).json({
      success: false,
      message: "Invalid token.",
    });
  }
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password && password.length >= 6;
};

const getAvatarByRole = (role) => {
  switch (role) {
    case "admin":
      return "👨‍🏫";
    case "teacher":
      return "👩‍🏫";
    case "student":
      return "👨‍🎓";
    default:
      return "👨‍🎓";
  }
};

// Routes

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Ganitagya API is running!",
    timestamp: new Date().toISOString(),
  });
});

// Register
app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password, role = "student" } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required",
      });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    if (!validatePassword(password)) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
    }

    if (!["student", "teacher", "admin"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role specified",
      });
    }

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      role,
      subscription: "free",
      avatar: getAvatarByRole(role),
      createdAt: new Date(),
      lastLogin: new Date(),
    };

    users.push(newUser);

    // Generate token
    const token = generateToken(newUser);

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: userWithoutPassword,
        token,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Login
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password, userType } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // Find user
    const user = users.find((u) => u.email === email.toLowerCase().trim());
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check user type if specified
    if (userType && user.role !== userType) {
      return res.status(401).json({
        success: false,
        message: `Invalid credentials for ${userType} account`,
      });
    }

    // Update last login
    user.lastLogin = new Date();

    // Generate token
    const token = generateToken(user);

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      message: "Login successful",
      data: {
        user: userWithoutPassword,
        token,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Get current user
app.get("/api/auth/me", verifyToken, (req, res) => {
  try {
    const user = users.find((u) => u.id === req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      data: {
        user: userWithoutPassword,
      },
    });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Update user
app.put("/api/auth/me", verifyToken, (req, res) => {
  try {
    const { name, subscription } = req.body;

    const userIndex = users.findIndex((u) => u.id === req.user.id);
    if (userIndex === -1) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Update user data
    if (name) users[userIndex].name = name.trim();
    if (subscription) users[userIndex].subscription = subscription;

    const { password: _, ...userWithoutPassword } = users[userIndex];

    res.json({
      success: true,
      message: "User updated successfully",
      data: {
        user: userWithoutPassword,
      },
    });
  } catch (error) {
    console.error("Update user error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Logout (client-side token removal, but we can log it)
app.post("/api/auth/logout", verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "Logged out successfully",
  });
});

// Get all users (admin only)
app.get("/api/users", verifyToken, (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin role required.",
      });
    }

    const usersWithoutPasswords = users.map(
      ({ password: _password, ...user }) => user
    );

    res.json({
      success: true,
      data: {
        users: usersWithoutPasswords,
        total: users.length,
      },
    });
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// Error handling middleware
app.use((err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server only if not in test environment
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`🚀 Ganitagya API Server running on port ${PORT}`);
    console.log(`📚 Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(
      `🔗 Frontend URL: ${process.env.FRONTEND_URL || "http://localhost:5173"}`
    );
  });
}

module.exports = app;
