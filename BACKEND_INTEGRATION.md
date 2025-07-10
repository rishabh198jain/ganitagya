# 🔗 Backend Integration Guide

Complete Node.js backend integration for Ganitagya with authentication, user management, and API endpoints.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
npm run server:install

# Or install both at once
npm run full:install
```

### 2. Environment Setup

**Frontend (.env):**
```bash
cp .env.example .env
# Edit .env with your configuration
```

**Backend (server/.env):**
```bash
cp server/.env.example server/.env
# Edit server/.env with your configuration
```

### 3. Start Development Servers

```bash
# Frontend only (recommended for development)
npm run dev

# Backend only
npm run server:dev

# Both frontend and backend together
npm run full:dev
```

## 🏗️ Architecture Overview

### Frontend (React + Vite)
- **Port**: 5173
- **API Client**: `src/utils/api.js`
- **Authentication**: Context-based with API integration
- **Fallback**: Mock data when API unavailable

### Backend (Node.js + Express)
- **Port**: 3001
- **Database**: In-memory (easily replaceable with MongoDB/PostgreSQL)
- **Authentication**: JWT tokens with bcrypt password hashing
- **Security**: Helmet, CORS, rate limiting

## 🔐 Authentication Flow

### Registration Process
1. **Frontend**: User fills signup form
2. **Validation**: Client-side validation
3. **API Call**: POST `/api/auth/register`
4. **Backend**: Validates data, hashes password, creates user
5. **Response**: Returns user data + JWT token
6. **Frontend**: Stores token, updates auth context

### Login Process
1. **Frontend**: User submits login form
2. **API Call**: POST `/api/auth/login`
3. **Backend**: Validates credentials, generates JWT
4. **Response**: Returns user data + JWT token
5. **Frontend**: Stores token, redirects based on role

### Token Management
- **Storage**: localStorage (frontend)
- **Expiry**: 24 hours (configurable)
- **Refresh**: Manual re-login (auto-refresh can be added)
- **Security**: HTTP-only cookies option available

## 📡 API Endpoints

### Authentication Endpoints

#### POST `/api/auth/register`
Register a new user account.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "student"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "123",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "student",
      "subscription": "free",
      "avatar": "👨‍🎓"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

#### POST `/api/auth/login`
Authenticate user and get access token.

**Request:**
```json
{
  "email": "john@example.com",
  "password": "password123",
  "userType": "student"
}
```

#### GET `/api/auth/me`
Get current user information (requires authentication).

#### PUT `/api/auth/me`
Update user information (requires authentication).

#### POST `/api/auth/logout`
Logout user (requires authentication).

### User Management Endpoints

#### GET `/api/users`
Get all users (admin only).

### Health Check

#### GET `/api/health`
Check API server status.

## 🛡️ Security Features

### Password Security
- **Hashing**: bcrypt with 10 salt rounds
- **Validation**: Minimum 6 characters
- **Storage**: Never stored in plain text

### JWT Security
- **Secret**: Environment variable
- **Expiry**: 24 hours
- **Payload**: User ID, email, role only

### Rate Limiting
- **Authentication**: 5 requests per 15 minutes
- **General API**: 100 requests per 15 minutes
- **IP-based**: Prevents brute force attacks

### CORS Protection
- **Origin**: Configurable allowed origins
- **Credentials**: Enabled for authenticated requests
- **Headers**: Restricted to necessary headers

### Additional Security
- **Helmet**: Security headers
- **Input Validation**: Sanitized inputs
- **Error Handling**: No sensitive data in errors

## 🔄 Fallback System

The frontend includes a robust fallback system:

### API Availability Check
```javascript
const isApiAvailable = await apiUtils.isApiAvailable()
```

### Automatic Fallback
- **API Available**: Uses real backend
- **API Unavailable**: Falls back to mock data
- **Seamless**: User experience unchanged

### Mock Data
- **Users**: Pre-configured demo accounts
- **Authentication**: Local simulation
- **Persistence**: localStorage only

## 🧪 Testing

### Demo Accounts

**Admin Account:**
- Email: `admin@ganitagya.com`
- Password: `password123`
- Role: `admin`

**Educator Account:**
- Email: `teacher@ganitagya.com`
- Password: `password123`
- Role: `teacher`

**Student Account:**
- Email: `student@example.com`
- Password: `password123`
- Role: `student`

### API Testing

```bash
# Health check
curl http://localhost:3001/api/health

# Register user
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123","role":"student"}'

# Login user
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 🚀 Deployment

### Environment Variables

**Production Frontend:**
```bash
VITE_API_URL=https://api.yourdomain.com/api
VITE_ENABLE_MOCK_API=false
```

**Production Backend:**
```bash
NODE_ENV=production
PORT=3001
JWT_SECRET=your-super-secure-secret
FRONTEND_URL=https://yourdomain.com
```

### Database Migration

Replace in-memory storage with real database:

1. **Install Database Driver**:
   ```bash
   cd server
   npm install mongoose  # for MongoDB
   # or
   npm install pg        # for PostgreSQL
   ```

2. **Update Connection**:
   ```javascript
   // Replace users array with database models
   const User = require('./models/User')
   ```

3. **Environment Configuration**:
   ```bash
   MONGODB_URI=mongodb://localhost:27017/ganitagya
   # or
   DATABASE_URL=postgresql://user:pass@localhost/ganitagya
   ```

## 🔧 Development Tips

### Hot Reload
- **Frontend**: Vite hot reload enabled (`npm run dev`)
- **Backend**: Nodemon for auto-restart (`npm run server:dev`)
- **Full Stack**: `npm run full:dev` for both together

### Debugging
- **Frontend**: Browser DevTools + React DevTools
- **Backend**: Console logs + Morgan HTTP logging
- **API**: Postman/Insomnia for endpoint testing

### Code Organization
- **Frontend API**: `src/utils/api.js`
- **Backend Routes**: `server/app.js`
- **Authentication**: Context + JWT middleware

## 📈 Future Enhancements

### Database Integration
- **MongoDB**: User profiles, courses, progress
- **PostgreSQL**: Relational data, analytics
- **Redis**: Session storage, caching

### Advanced Features
- **Email Verification**: Account activation
- **Password Reset**: Email-based recovery
- **OAuth**: Google, Facebook login
- **Real-time**: WebSocket notifications

### Monitoring
- **Logging**: Winston, Morgan
- **Analytics**: User behavior tracking
- **Performance**: Response time monitoring
- **Errors**: Sentry integration

---

## 🎯 Ready for Production

The backend integration provides:
- ✅ **Secure Authentication**: JWT + bcrypt
- ✅ **Role-based Access**: Student, Educator, Admin
- ✅ **API Security**: Rate limiting, CORS, Helmet
- ✅ **Fallback System**: Works with/without backend
- ✅ **Development Ready**: Hot reload, debugging
- ✅ **Production Ready**: Environment configs, security

🚀 **Your full-stack Ganitagya platform is ready!**
