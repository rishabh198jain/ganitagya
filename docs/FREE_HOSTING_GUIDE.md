# 🆓 Free Hosting Guide for Ganitagya

## Overview

This guide provides multiple free hosting options for deploying the Ganitagya mathematics learning platform, from development to production-ready solutions.

## 🚀 Recommended Free Hosting Stack

### **Option 1: Vercel + Railway (Recommended)**

#### Frontend (Vercel)
- **Cost**: Free tier (100GB bandwidth/month)
- **Features**: Automatic deployments, CDN, SSL
- **Perfect for**: React/Next.js applications

```bash
# Deploy to Vercel
npm install -g vercel
vercel login
vercel --prod

# Or connect GitHub for auto-deployment
# 1. Go to vercel.com
# 2. Import your GitHub repository
# 3. Configure build settings:
#    - Build Command: npm run build
#    - Output Directory: dist
#    - Install Command: npm install
```

#### Backend (Railway)
- **Cost**: Free tier ($5 credit/month)
- **Features**: PostgreSQL, Redis, auto-scaling
- **Perfect for**: Node.js APIs with databases

```yaml
# railway.toml
[build]
builder = "NIXPACKS"

[deploy]
healthcheckPath = "/api/health"
healthcheckTimeout = 300
restartPolicyType = "ON_FAILURE"

[[services]]
name = "api"
source = "."

[services.api.variables]
NODE_ENV = "production"
PORT = "3001"

[[services]]
name = "postgres"
source = "postgres:15"

[[services]]
name = "redis"
source = "redis:7"
```

### **Option 2: Netlify + Supabase**

#### Frontend (Netlify)
- **Cost**: Free tier (100GB bandwidth/month)
- **Features**: Forms, functions, identity
- **Perfect for**: Static sites with serverless functions

```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

#### Backend (Supabase)
- **Cost**: Free tier (500MB database, 2GB bandwidth)
- **Features**: PostgreSQL, Auth, Real-time, Storage

```javascript
// supabase/config.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

// Authentication
export const signUp = async (email, password, userData) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: userData
    }
  })
  return { data, error }
}

// Database operations
export const getCourses = async () => {
  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })
  
  return { data, error }
}
```

### **Option 3: GitHub Pages + Firebase**

#### Frontend (GitHub Pages)
- **Cost**: Free for public repositories
- **Features**: Custom domains, HTTPS
- **Perfect for**: Static sites

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### Backend (Firebase)
- **Cost**: Free tier (1GB storage, 10GB bandwidth)
- **Features**: Firestore, Auth, Functions, Hosting

```javascript
// firebase/functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// API endpoint
exports.api = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.status(204).send('');
    return;
  }
  
  // Route handling
  const path = req.path;
  const method = req.method;
  
  if (path === '/courses' && method === 'GET') {
    return getCourses(req, res);
  }
  
  res.status(404).json({ error: 'Not found' });
});

const getCourses = async (req, res) => {
  try {
    const snapshot = await admin.firestore().collection('courses').get();
    const courses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
```

## 🔧 Deployment Scripts

### Automated Deployment Script
```bash
#!/bin/bash
# deploy.sh - Automated deployment script

set -e

echo "🚀 Starting deployment process..."

# Build frontend
echo "📦 Building frontend..."
npm run build

# Deploy to Vercel
echo "🌐 Deploying frontend to Vercel..."
vercel --prod --yes

# Deploy backend to Railway
echo "🚂 Deploying backend to Railway..."
railway login
railway up

# Update environment variables
echo "⚙️ Updating environment variables..."
railway variables set NODE_ENV=production
railway variables set JWT_SECRET=$JWT_SECRET
railway variables set OPENAI_API_KEY=$OPENAI_API_KEY

echo "✅ Deployment completed successfully!"
echo "🌍 Frontend: https://ganitagya.vercel.app"
echo "🔗 Backend: https://ganitagya-api.railway.app"
```

### Environment Configuration
```bash
# .env.production
# Frontend (Vercel)
VITE_API_URL=https://ganitagya-api.railway.app
VITE_APP_NAME=Ganitagya
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Backend (Railway)
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://user:pass@host:port/db
REDIS_URL=redis://user:pass@host:port
JWT_SECRET=your-super-secret-jwt-key
OPENAI_API_KEY=your-openai-api-key
```

## 📊 Free Tier Limitations & Solutions

### **Vercel Limitations**
- **Bandwidth**: 100GB/month
- **Build Time**: 45 minutes/month
- **Functions**: 100GB-hours/month

**Solutions**:
```javascript
// Optimize bundle size
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@mui/material', '@emotion/react']
        }
      }
    }
  }
}
```

### **Railway Limitations**
- **Credit**: $5/month
- **Sleep**: Apps sleep after 30 minutes of inactivity

**Solutions**:
```javascript
// Keep-alive service
const keepAlive = () => {
  setInterval(() => {
    fetch('https://ganitagya-api.railway.app/api/health')
      .catch(console.error);
  }, 25 * 60 * 1000); // Every 25 minutes
};

if (process.env.NODE_ENV === 'production') {
  keepAlive();
}
```

### **Database Optimization for Free Tiers**
```sql
-- Optimize queries for free tier limits
CREATE INDEX CONCURRENTLY idx_users_email ON users(email);
CREATE INDEX CONCURRENTLY idx_courses_category ON courses(category);
CREATE INDEX CONCURRENTLY idx_user_progress_user_id ON user_progress(user_id);

-- Connection pooling
-- Use connection pooling to minimize database connections
-- Max connections for free tier: 20-100 depending on provider
```

## 🔄 CI/CD Pipeline for Free Hosting

```yaml
# .github/workflows/deploy-production.yml
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run type-check

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'

  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - name: Deploy to Railway
        run: |
          npm install -g @railway/cli
          railway login --token ${{ secrets.RAILWAY_TOKEN }}
          railway up --service api
```

## 🌐 Custom Domain Setup (Free)

### Using Cloudflare (Free CDN + DNS)
```javascript
// cloudflare-worker.js - Edge functions
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Route API requests to Railway
  if (url.pathname.startsWith('/api/')) {
    const apiUrl = 'https://ganitagya-api.railway.app' + url.pathname
    return fetch(apiUrl, request)
  }
  
  // Route everything else to Vercel
  const frontendUrl = 'https://ganitagya.vercel.app' + url.pathname
  return fetch(frontendUrl, request)
}
```

## 📈 Monitoring for Free Hosting

### Simple Uptime Monitoring
```javascript
// monitoring/uptime.js - Run on GitHub Actions
const checkUptime = async () => {
  const endpoints = [
    'https://ganitagya.vercel.app',
    'https://ganitagya-api.railway.app/api/health'
  ];
  
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint);
      console.log(`✅ ${endpoint}: ${response.status}`);
    } catch (error) {
      console.error(`❌ ${endpoint}: ${error.message}`);
      // Send alert (email, Slack, etc.)
    }
  }
};

checkUptime();
```

## 🎯 Migration Path to Paid Hosting

When you outgrow free tiers:

1. **Frontend**: Vercel Pro ($20/month)
2. **Backend**: Railway Pro ($20/month) or DigitalOcean ($12/month)
3. **Database**: Supabase Pro ($25/month) or PlanetScale ($29/month)
4. **CDN**: Cloudflare Pro ($20/month)

**Total Cost**: ~$50-100/month for production-ready hosting

This free hosting strategy allows you to launch Ganitagya with zero hosting costs while maintaining professional features and performance!
