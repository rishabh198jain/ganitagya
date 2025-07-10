# 🔌 Ganitagya API Documentation

RESTful API endpoints for the Ganitagya mathematics education platform.

## 🏗️ API Architecture

### Base URL
```
Development: http://localhost:3001/api
Production: https://api.ganitagya.com
```

### Authentication
- **Type**: JWT (JSON Web Tokens)
- **Header**: `Authorization: Bearer <token>`
- **Expiration**: 24 hours (configurable)

## 🔐 Authentication Endpoints

### POST /auth/register
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "student" // or "admin"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "student",
      "subscription": "free",
      "avatar": "👨‍🎓",
      "createdAt": "2024-01-15T10:30:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### POST /auth/login
Authenticate user and get access token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "student",
      "subscription": "premium",
      "avatar": "👨‍🎓"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### POST /auth/logout
Invalidate user session.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "message": "Successfully logged out"
}
```

### GET /auth/me
Get current user information.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "student",
      "subscription": "premium",
      "avatar": "👨‍🎓",
      "profile": {
        "bio": "Mathematics enthusiast",
        "location": "New York, USA",
        "joinedAt": "2024-01-15T10:30:00Z"
      }
    }
  }
}
```

## 👥 User Management Endpoints

### GET /users
Get all users (Admin only).

**Headers:** `Authorization: Bearer <admin_token>`

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `role`: Filter by role (student/admin)
- `subscription`: Filter by subscription (free/premium/lifetime)

**Response:**
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": "user_123",
        "name": "John Doe",
        "email": "john@example.com",
        "role": "student",
        "subscription": "premium",
        "status": "active",
        "lastLogin": "2024-01-15T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "pages": 8
    }
  }
}
```

### PUT /users/:id
Update user information.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "name": "John Smith",
  "bio": "Updated bio",
  "location": "Boston, USA"
}
```

### DELETE /users/:id
Delete user account (Admin only).

**Headers:** `Authorization: Bearer <admin_token>`

## 📚 Course Management Endpoints

### GET /courses
Get all available courses.

**Query Parameters:**
- `category`: Filter by category (algebra/geometry/calculus/statistics)
- `difficulty`: Filter by difficulty (beginner/intermediate/advanced)
- `subscription`: Filter by required subscription (free/premium)

**Response:**
```json
{
  "success": true,
  "data": {
    "courses": [
      {
        "id": "course_123",
        "title": "Algebra Fundamentals",
        "description": "Master the basics of algebra",
        "category": "algebra",
        "difficulty": "beginner",
        "duration": "4 weeks",
        "lessons": 12,
        "instructor": "Dr. Ganitagya",
        "subscription": "free",
        "rating": 4.8,
        "enrollments": 1247
      }
    ]
  }
}
```

### GET /courses/:id
Get specific course details.

**Response:**
```json
{
  "success": true,
  "data": {
    "course": {
      "id": "course_123",
      "title": "Algebra Fundamentals",
      "description": "Master the basics of algebra",
      "category": "algebra",
      "difficulty": "beginner",
      "duration": "4 weeks",
      "lessons": [
        {
          "id": "lesson_1",
          "title": "Introduction to Variables",
          "duration": "15 minutes",
          "type": "video",
          "order": 1
        }
      ],
      "instructor": {
        "name": "Dr. Ganitagya",
        "bio": "Expert mathematician",
        "avatar": "👨‍🏫"
      }
    }
  }
}
```

### POST /courses/:id/enroll
Enroll in a course.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "enrollment": {
      "courseId": "course_123",
      "userId": "user_123",
      "enrolledAt": "2024-01-15T10:30:00Z",
      "progress": 0
    }
  }
}
```

## 📊 Progress Tracking Endpoints

### GET /progress/courses
Get user's course progress.

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "courses": [
      {
        "courseId": "course_123",
        "title": "Algebra Fundamentals",
        "progress": 75,
        "completedLessons": 9,
        "totalLessons": 12,
        "lastAccessed": "2024-01-15T10:30:00Z"
      }
    ]
  }
}
```

### PUT /progress/lessons/:id
Update lesson progress.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "completed": true,
  "timeSpent": 900, // seconds
  "score": 85 // percentage
}
```

## 💳 Payment Endpoints

### GET /payments/plans
Get available subscription plans.

**Response:**
```json
{
  "success": true,
  "data": {
    "plans": [
      {
        "id": "free",
        "name": "Free Plan",
        "price": 0,
        "interval": "forever",
        "features": ["3 basic courses", "Community support"]
      },
      {
        "id": "premium",
        "name": "Premium Plan",
        "price": 2900, // cents
        "interval": "month",
        "features": ["All courses", "Priority support", "Certificates"]
      }
    ]
  }
}
```

### POST /payments/subscribe
Create subscription.

**Headers:** `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "planId": "premium",
  "paymentMethodId": "pm_1234567890"
}
```

## 📈 Analytics Endpoints

### GET /analytics/dashboard
Get dashboard analytics (Admin only).

**Headers:** `Authorization: Bearer <admin_token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "stats": {
      "totalUsers": 1247,
      "activeUsers": 892,
      "totalCourses": 12,
      "totalRevenue": 45680,
      "newSignups": 23
    },
    "charts": {
      "userGrowth": [...],
      "revenueGrowth": [...],
      "coursePopularity": [...]
    }
  }
}
```

## 🔧 Error Handling

### Error Response Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  }
}
```

### HTTP Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `422`: Validation Error
- `500`: Internal Server Error

## 🔒 Security Features

### Rate Limiting
- **Authentication**: 5 requests per minute
- **General API**: 100 requests per minute
- **Payment**: 10 requests per minute

### Data Validation
- Input sanitization
- SQL injection prevention
- XSS protection
- CSRF tokens

### Encryption
- Passwords: bcrypt hashing
- Sensitive data: AES-256 encryption
- API communication: HTTPS only

---

This API documentation provides a complete reference for integrating with the Ganitagya backend services.
