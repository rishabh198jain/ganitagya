// Database configuration for Ganitagya
const { Pool } = require('pg');
const { MongoClient } = require('mongodb');
const redis = require('redis');

// PostgreSQL configuration
const pgPool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'ganitagya',
  password: process.env.DB_PASSWORD || 'password',
  port: process.env.DB_PORT || 5432,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// MongoDB configuration
let mongoClient;
let mongoDb;

const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017';
    mongoClient = new MongoClient(mongoUrl, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    await mongoClient.connect();
    mongoDb = mongoClient.db(process.env.MONGODB_DB_NAME || 'ganitagya');
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Redis configuration
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  retry_strategy: (options) => {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      return new Error('The server refused the connection');
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      return new Error('Retry time exhausted');
    }
    if (options.attempt > 10) {
      return undefined;
    }
    return Math.min(options.attempt * 100, 3000);
  }
});

redisClient.on('connect', () => {
  console.log('✅ Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('❌ Redis connection error:', err);
});

// Database initialization
const initializeDatabases = async () => {
  try {
    // Initialize PostgreSQL tables
    await initializePostgreSQL();
    
    // Connect to MongoDB
    await connectMongoDB();
    
    // Connect to Redis
    await redisClient.connect();
    
    console.log('✅ All databases initialized successfully');
  } catch (error) {
    console.error('❌ Database initialization failed:', error);
    process.exit(1);
  }
};

const initializePostgreSQL = async () => {
  const createTablesQuery = `
    -- Create user roles enum
    DO $$ BEGIN
      CREATE TYPE user_role AS ENUM ('student', 'teacher', 'admin');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    -- Create subscription types enum
    DO $$ BEGIN
      CREATE TYPE subscription_type AS ENUM ('free', 'premium', 'lifetime');
    EXCEPTION
      WHEN duplicate_object THEN null;
    END $$;

    -- Users table
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      role user_role NOT NULL DEFAULT 'student',
      subscription subscription_type DEFAULT 'free',
      avatar VARCHAR(255) DEFAULT '👨‍🎓',
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW(),
      last_login TIMESTAMP
    );

    -- Subscriptions table
    CREATE TABLE IF NOT EXISTS subscriptions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      plan_type VARCHAR(50) NOT NULL,
      status VARCHAR(20) DEFAULT 'active',
      start_date TIMESTAMP NOT NULL,
      end_date TIMESTAMP,
      amount DECIMAL(10,2) NOT NULL,
      stripe_subscription_id VARCHAR(255),
      created_at TIMESTAMP DEFAULT NOW()
    );

    -- User progress tracking
    CREATE TABLE IF NOT EXISTS user_progress (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      course_id VARCHAR(255) NOT NULL,
      lesson_id VARCHAR(255) NOT NULL,
      progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
      completed_at TIMESTAMP,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW(),
      UNIQUE(user_id, course_id, lesson_id)
    );

    -- User sessions for JWT blacklisting
    CREATE TABLE IF NOT EXISTS user_sessions (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      token_hash VARCHAR(255) NOT NULL,
      expires_at TIMESTAMP NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );

    -- Analytics events
    CREATE TABLE IF NOT EXISTS analytics_events (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id) ON DELETE SET NULL,
      event_type VARCHAR(100) NOT NULL,
      event_data JSONB,
      ip_address INET,
      user_agent TEXT,
      created_at TIMESTAMP DEFAULT NOW()
    );

    -- Create indexes for better performance
    CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
    CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
    CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
    CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
    CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
    CREATE INDEX IF NOT EXISTS idx_user_progress_course_id ON user_progress(course_id);
    CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
    CREATE INDEX IF NOT EXISTS idx_user_sessions_expires_at ON user_sessions(expires_at);
    CREATE INDEX IF NOT EXISTS idx_analytics_events_user_id ON analytics_events(user_id);
    CREATE INDEX IF NOT EXISTS idx_analytics_events_type ON analytics_events(event_type);
    CREATE INDEX IF NOT EXISTS idx_analytics_events_created_at ON analytics_events(created_at);
  `;

  try {
    await pgPool.query(createTablesQuery);
    console.log('✅ PostgreSQL tables initialized');
  } catch (error) {
    console.error('❌ PostgreSQL initialization error:', error);
    throw error;
  }
};

// MongoDB collections initialization
const initializeMongoCollections = async () => {
  try {
    // Create collections with validation
    await mongoDb.createCollection('courses', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['title', 'description', 'difficulty', 'category'],
          properties: {
            title: { bsonType: 'string' },
            description: { bsonType: 'string' },
            difficulty: { enum: ['beginner', 'intermediate', 'advanced'] },
            category: { bsonType: 'string' },
            instructor_id: { bsonType: 'string' },
            price: { bsonType: 'number', minimum: 0 }
          }
        }
      }
    });

    await mongoDb.createCollection('ai_conversations', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['user_id', 'session_id', 'messages'],
          properties: {
            user_id: { bsonType: 'string' },
            session_id: { bsonType: 'string' },
            messages: { bsonType: 'array' }
          }
        }
      }
    });

    // Create indexes
    await mongoDb.collection('courses').createIndex({ category: 1, difficulty: 1 });
    await mongoDb.collection('courses').createIndex({ instructor_id: 1 });
    await mongoDb.collection('courses').createIndex({ created_at: -1 });
    
    await mongoDb.collection('ai_conversations').createIndex({ user_id: 1, session_id: 1 });
    await mongoDb.collection('ai_conversations').createIndex({ created_at: -1 });

    console.log('✅ MongoDB collections initialized');
  } catch (error) {
    if (error.code !== 48) { // Collection already exists
      console.error('❌ MongoDB collections initialization error:', error);
      throw error;
    }
  }
};

// Graceful shutdown
const closeConnections = async () => {
  try {
    await pgPool.end();
    if (mongoClient) {
      await mongoClient.close();
    }
    await redisClient.quit();
    console.log('✅ All database connections closed');
  } catch (error) {
    console.error('❌ Error closing database connections:', error);
  }
};

// Export database connections and utilities
module.exports = {
  pgPool,
  mongoDb: () => mongoDb,
  redisClient,
  initializeDatabases,
  initializeMongoCollections,
  closeConnections
};
