# 🚀 Traffic and Load Handling Guide for Ganitagya

## Overview

This guide outlines strategies and implementations for handling high traffic and load on the Ganitagya mathematics learning platform.

## 📊 Current Performance Baseline

### Expected Traffic Patterns
- **Peak Hours**: 6-9 PM (student study time)
- **Peak Days**: Weekdays during school terms
- **Seasonal Spikes**: Exam periods, back-to-school
- **Geographic Distribution**: Primarily India timezone

### Performance Targets
- **Response Time**: < 200ms for API calls
- **Page Load Time**: < 2 seconds
- **Uptime**: 99.9% availability
- **Concurrent Users**: Support 10,000+ simultaneous users

## 🏗️ Load Balancing Strategy

### 1. Application Load Balancer (ALB)
```nginx
# nginx.conf - Load balancer configuration
upstream backend {
    least_conn;
    server app1:3001 weight=3 max_fails=3 fail_timeout=30s;
    server app2:3001 weight=3 max_fails=3 fail_timeout=30s;
    server app3:3001 weight=2 max_fails=3 fail_timeout=30s;
    keepalive 32;
}

server {
    listen 80;
    server_name ganitagya.com;
    
    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=login:10m rate=5r/m;
    
    # API routes
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_connect_timeout 5s;
        proxy_send_timeout 10s;
        proxy_read_timeout 10s;
    }
    
    # Auth routes with stricter limits
    location /api/auth/ {
        limit_req zone=login burst=5 nodelay;
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
    
    # Static files with caching
    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        gzip_static on;
    }
}
```

### 2. Database Load Balancing
```javascript
// database/loadBalancer.js
const { Pool } = require('pg');

class DatabaseLoadBalancer {
  constructor() {
    this.readPools = [
      new Pool({ connectionString: process.env.DB_READ_1_URL }),
      new Pool({ connectionString: process.env.DB_READ_2_URL }),
      new Pool({ connectionString: process.env.DB_READ_3_URL })
    ];
    
    this.writePool = new Pool({ 
      connectionString: process.env.DB_WRITE_URL 
    });
    
    this.currentReadIndex = 0;
  }
  
  // Round-robin read queries
  async query(text, params, options = {}) {
    if (options.write || this.isWriteQuery(text)) {
      return this.writePool.query(text, params);
    }
    
    const pool = this.readPools[this.currentReadIndex];
    this.currentReadIndex = (this.currentReadIndex + 1) % this.readPools.length;
    
    try {
      return await pool.query(text, params);
    } catch (error) {
      // Fallback to write pool if read fails
      console.warn('Read query failed, falling back to write pool:', error);
      return this.writePool.query(text, params);
    }
  }
  
  isWriteQuery(query) {
    const writeKeywords = ['INSERT', 'UPDATE', 'DELETE', 'CREATE', 'ALTER', 'DROP'];
    return writeKeywords.some(keyword => 
      query.trim().toUpperCase().startsWith(keyword)
    );
  }
}

module.exports = new DatabaseLoadBalancer();
```

## 🗄️ Caching Strategy

### 1. Multi-Layer Caching
```javascript
// cache/cacheManager.js
const redis = require('redis');
const NodeCache = require('node-cache');

class CacheManager {
  constructor() {
    this.redisClient = redis.createClient(process.env.REDIS_URL);
    this.memoryCache = new NodeCache({ stdTTL: 300 }); // 5 minutes
  }
  
  async get(key) {
    // L1: Memory cache (fastest)
    let value = this.memoryCache.get(key);
    if (value) return value;
    
    // L2: Redis cache
    value = await this.redisClient.get(key);
    if (value) {
      const parsed = JSON.parse(value);
      this.memoryCache.set(key, parsed, 300);
      return parsed;
    }
    
    return null;
  }
  
  async set(key, value, ttl = 3600) {
    // Set in both caches
    this.memoryCache.set(key, value, ttl);
    await this.redisClient.setEx(key, ttl, JSON.stringify(value));
  }
  
  async invalidate(pattern) {
    // Clear memory cache
    this.memoryCache.flushAll();
    
    // Clear Redis cache by pattern
    const keys = await this.redisClient.keys(pattern);
    if (keys.length > 0) {
      await this.redisClient.del(keys);
    }
  }
}

module.exports = new CacheManager();
```

### 2. CDN Configuration
```javascript
// CDN setup for static assets
const CDN_CONFIG = {
  provider: 'CloudFlare', // or AWS CloudFront
  domains: {
    static: 'static.ganitagya.com',
    images: 'images.ganitagya.com',
    videos: 'videos.ganitagya.com'
  },
  caching: {
    static: '1y',      // CSS, JS files
    images: '30d',     // User avatars, icons
    videos: '7d',      // Course videos
    api: '5m'          // API responses (selective)
  }
};

// Middleware to add CDN headers
const addCDNHeaders = (req, res, next) => {
  if (req.path.startsWith('/static/')) {
    res.set({
      'Cache-Control': 'public, max-age=31536000, immutable',
      'CDN-Cache-Control': 'max-age=31536000'
    });
  }
  next();
};
```

## 📈 Auto-Scaling Implementation

### 1. Horizontal Pod Autoscaler (Kubernetes)
```yaml
# k8s/hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ganitagya-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ganitagya-api
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60
```

### 2. Application-Level Scaling
```javascript
// server/cluster.js - Multi-process scaling
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Master ${process.pid} is running`);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart worker
  });
  
  // Graceful shutdown
  process.on('SIGTERM', () => {
    console.log('Master received SIGTERM, shutting down gracefully');
    for (const id in cluster.workers) {
      cluster.workers[id].kill();
    }
  });
} else {
  require('./app.js');
  console.log(`Worker ${process.pid} started`);
}
```

## 🔍 Performance Monitoring

### 1. Application Performance Monitoring
```javascript
// monitoring/apm.js
const prometheus = require('prom-client');

// Create metrics
const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code']
});

const activeConnections = new prometheus.Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
});

const databaseQueryDuration = new prometheus.Histogram({
  name: 'database_query_duration_seconds',
  help: 'Duration of database queries in seconds',
  labelNames: ['query_type']
});

// Middleware to track metrics
const metricsMiddleware = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestDuration
      .labels(req.method, req.route?.path || req.path, res.statusCode)
      .observe(duration);
  });
  
  next();
};

// Health check endpoint
const healthCheck = async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    database: await checkDatabaseHealth(),
    redis: await checkRedisHealth()
  };
  
  res.json(health);
};

module.exports = {
  httpRequestDuration,
  activeConnections,
  databaseQueryDuration,
  metricsMiddleware,
  healthCheck
};
```

### 2. Database Performance Optimization
```sql
-- Performance monitoring queries
-- Slow query monitoring
SELECT 
  query,
  calls,
  total_time,
  mean_time,
  rows
FROM pg_stat_statements 
ORDER BY total_time DESC 
LIMIT 10;

-- Index usage analysis
SELECT 
  schemaname,
  tablename,
  indexname,
  idx_scan,
  idx_tup_read,
  idx_tup_fetch
FROM pg_stat_user_indexes 
ORDER BY idx_scan DESC;

-- Connection monitoring
SELECT 
  state,
  count(*) 
FROM pg_stat_activity 
GROUP BY state;
```

## 🚨 Circuit Breaker Pattern

```javascript
// utils/circuitBreaker.js
class CircuitBreaker {
  constructor(options = {}) {
    this.failureThreshold = options.failureThreshold || 5;
    this.resetTimeout = options.resetTimeout || 60000;
    this.monitoringPeriod = options.monitoringPeriod || 10000;
    
    this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    this.failureCount = 0;
    this.lastFailureTime = null;
    this.successCount = 0;
  }
  
  async execute(operation) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime > this.resetTimeout) {
        this.state = 'HALF_OPEN';
        this.successCount = 0;
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }
    
    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
  
  onSuccess() {
    this.failureCount = 0;
    
    if (this.state === 'HALF_OPEN') {
      this.successCount++;
      if (this.successCount >= 3) {
        this.state = 'CLOSED';
      }
    }
  }
  
  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
    }
  }
}

// Usage example
const dbCircuitBreaker = new CircuitBreaker({
  failureThreshold: 5,
  resetTimeout: 30000
});

const queryWithCircuitBreaker = async (query, params) => {
  return dbCircuitBreaker.execute(async () => {
    return await db.query(query, params);
  });
};
```

## 📊 Load Testing Strategy

### 1. Artillery.js Load Testing
```yaml
# load-tests/api-test.yml
config:
  target: 'https://api.ganitagya.com'
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Warm up"
    - duration: 300
      arrivalRate: 50
      name: "Sustained load"
    - duration: 120
      arrivalRate: 100
      name: "Peak load"
  payload:
    path: "./users.csv"
    fields:
      - "email"
      - "password"

scenarios:
  - name: "User journey"
    weight: 70
    flow:
      - post:
          url: "/api/auth/login"
          json:
            email: "{{ email }}"
            password: "{{ password }}"
          capture:
            - json: "$.token"
              as: "token"
      - get:
          url: "/api/courses"
          headers:
            Authorization: "Bearer {{ token }}"
      - get:
          url: "/api/courses/{{ $randomString() }}"
          headers:
            Authorization: "Bearer {{ token }}"
  
  - name: "AI Tutor"
    weight: 30
    flow:
      - post:
          url: "/api/ai/tutor/ask"
          json:
            question: "Explain quadratic equations"
            context: "high school level"
```

This comprehensive load handling strategy ensures Ganitagya can scale efficiently to handle growing user traffic while maintaining optimal performance.
