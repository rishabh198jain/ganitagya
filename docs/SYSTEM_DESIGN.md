# 🏗️ Ganitagya System Design

## High-Level Design (HLD)

### System Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client Apps   │    │   Load Balancer │    │   API Gateway   │
│  (Web, Mobile)  │◄──►│    (Nginx)      │◄──►│   (Express.js)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                        │
                       ┌─────────────────────────────────┼─────────────────────────────────┐
                       │                                 │                                 │
                       ▼                                 ▼                                 ▼
            ┌─────────────────┐              ┌─────────────────┐              ┌─────────────────┐
            │  Auth Service   │              │  Course Service │              │   AI Service    │
            │   (Node.js)     │              │   (Node.js)     │              │   (Python)      │
            └─────────────────┘              └─────────────────┘              └─────────────────┘
                       │                                 │                                 │
                       ▼                                 ▼                                 ▼
            ┌─────────────────┐              ┌─────────────────┐              ┌─────────────────┐
            │  User Database  │              │ Content Database│              │  Vector Database│
            │   (PostgreSQL)  │              │   (MongoDB)     │              │    (Pinecone)   │
            └─────────────────┘              └─────────────────┘              └─────────────────┘
```

### Core Components

#### 1. Frontend Layer
- **React.js Application**: Main user interface
- **TypeScript**: Type safety and better development experience
- **Responsive Design**: Mobile-first approach
- **PWA Features**: Offline capability and app-like experience

#### 2. API Gateway
- **Express.js**: Main API server
- **Rate Limiting**: Prevent abuse and ensure fair usage
- **Authentication Middleware**: JWT-based auth
- **Request Validation**: Input sanitization and validation

#### 3. Microservices Architecture
- **Auth Service**: User authentication and authorization
- **Course Service**: Course management and content delivery
- **AI Service**: AI-powered features and integrations
- **Payment Service**: Subscription and payment processing
- **Analytics Service**: User behavior and performance tracking

#### 4. Database Layer
- **PostgreSQL**: User data, transactions, structured data
- **MongoDB**: Course content, flexible document storage
- **Redis**: Caching, session storage, real-time features
- **Vector Database**: AI embeddings and semantic search

## Low-Level Design (LLD)

### Database Schema Design

#### PostgreSQL Schema
```sql
-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role user_role NOT NULL DEFAULT 'student',
    subscription subscription_type DEFAULT 'free',
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    plan_type VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'active',
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP,
    amount DECIMAL(10,2) NOT NULL
);

-- User progress tracking
CREATE TABLE user_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    course_id VARCHAR(255) NOT NULL,
    lesson_id VARCHAR(255) NOT NULL,
    progress_percentage INTEGER DEFAULT 0,
    completed_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW()
);
```

#### MongoDB Schema
```javascript
// Courses collection
{
  _id: ObjectId,
  title: String,
  description: String,
  difficulty: String, // 'beginner', 'intermediate', 'advanced'
  category: String,
  instructor_id: String,
  lessons: [{
    id: String,
    title: String,
    content: String,
    video_url: String,
    exercises: [{
      question: String,
      options: [String],
      correct_answer: String,
      explanation: String
    }]
  }],
  price: Number,
  created_at: Date,
  updated_at: Date
}

// AI conversations collection
{
  _id: ObjectId,
  user_id: String,
  session_id: String,
  messages: [{
    role: String, // 'user' or 'assistant'
    content: String,
    timestamp: Date
  }],
  context: String,
  created_at: Date
}
```

### API Design

#### Authentication Endpoints
```typescript
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
GET  /api/auth/profile
PUT  /api/auth/profile
```

#### Course Management Endpoints
```typescript
GET    /api/courses              // List all courses
GET    /api/courses/:id          // Get specific course
POST   /api/courses              // Create new course (admin/instructor)
PUT    /api/courses/:id          // Update course
DELETE /api/courses/:id          // Delete course
GET    /api/courses/:id/lessons  // Get course lessons
POST   /api/courses/:id/enroll   // Enroll in course
```

#### AI Service Endpoints
```typescript
POST /api/ai/tutor/ask           // Ask AI tutor
POST /api/ai/courses/generate    // Generate course with AI
POST /api/ai/problems/generate   // Generate practice problems
POST /api/ai/content/optimize    // Optimize content with AI
```

### Caching Strategy

#### Redis Implementation
```typescript
// Cache user sessions
SET user:session:{sessionId} {userdata} EX 3600

// Cache course data
SET course:{courseId} {courseData} EX 1800

// Cache AI responses
SET ai:response:{hash} {response} EX 7200

// Rate limiting
INCR rate_limit:{userId}:{endpoint} EX 60
```

### Security Implementation

#### Authentication Flow
```typescript
// JWT Token Structure
{
  "sub": "user_id",
  "email": "user@example.com",
  "role": "student",
  "subscription": "premium",
  "iat": 1234567890,
  "exp": 1234567890
}

// Middleware for protected routes
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
  }
};
```

## Performance Optimization

### Frontend Optimization
- **Code Splitting**: Lazy loading of components
- **Image Optimization**: WebP format, lazy loading
- **Bundle Optimization**: Tree shaking, minification
- **CDN Integration**: Static asset delivery

### Backend Optimization
- **Database Indexing**: Optimized queries
- **Connection Pooling**: Efficient database connections
- **Horizontal Scaling**: Load balancing across instances
- **Caching Layers**: Redis for frequently accessed data

### Monitoring and Logging
```typescript
// Application monitoring
import { createLogger, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});

// Performance monitoring
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info({
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration: `${duration}ms`
    });
  });
  next();
});
```

## Deployment Architecture

### Production Environment
```yaml
# docker-compose.yml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      
  api:
    build: ./backend
    ports:
      - "3001:3001"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - REDIS_URL=${REDIS_URL}
      
  postgres:
    image: postgres:14
    environment:
      - POSTGRES_DB=ganitagya
      - POSTGRES_USER=${DB_USER}
      - POSTGRES_PASSWORD=${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
      
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
      
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
```

### CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]
    
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test
        
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to server
        run: |
          docker-compose down
          docker-compose pull
          docker-compose up -d
```

This system design provides a scalable, maintainable, and secure foundation for the Ganitagya platform with proper separation of concerns and modern best practices.
