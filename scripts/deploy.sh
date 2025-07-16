#!/bin/bash

# Ganitagya Deployment Script
# This script deploys the application to free hosting platforms

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
FRONTEND_URL="https://ganitagya.vercel.app"
BACKEND_URL="https://ganitagya-api.railway.app"

echo -e "${BLUE}🚀 Starting Ganitagya deployment process...${NC}"

# Check if required tools are installed
check_dependencies() {
    echo -e "${YELLOW}📋 Checking dependencies...${NC}"
    
    if ! command -v node &> /dev/null; then
        echo -e "${RED}❌ Node.js is not installed${NC}"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        echo -e "${RED}❌ npm is not installed${NC}"
        exit 1
    fi
    
    echo -e "${GREEN}✅ Dependencies check passed${NC}"
}

# Install project dependencies
install_dependencies() {
    echo -e "${YELLOW}📦 Installing project dependencies...${NC}"
    npm ci
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Run tests
run_tests() {
    echo -e "${YELLOW}🧪 Running tests...${NC}"
    
    if npm test; then
        echo -e "${GREEN}✅ All tests passed${NC}"
    else
        echo -e "${RED}❌ Tests failed${NC}"
        read -p "Continue deployment anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
}

# Build frontend
build_frontend() {
    echo -e "${YELLOW}🏗️ Building frontend...${NC}"
    
    # Set production environment variables
    export VITE_API_URL=$BACKEND_URL
    export VITE_APP_NAME="Ganitagya - Mathematics Learning Platform"
    export NODE_ENV=production
    
    if npm run build; then
        echo -e "${GREEN}✅ Frontend build completed${NC}"
    else
        echo -e "${RED}❌ Frontend build failed${NC}"
        exit 1
    fi
}

# Deploy to Vercel
deploy_frontend() {
    echo -e "${YELLOW}🌐 Deploying frontend to Vercel...${NC}"
    
    if command -v vercel &> /dev/null; then
        # Deploy using Vercel CLI
        if vercel --prod --yes; then
            echo -e "${GREEN}✅ Frontend deployed to Vercel${NC}"
            echo -e "${BLUE}🔗 Frontend URL: $FRONTEND_URL${NC}"
        else
            echo -e "${RED}❌ Vercel deployment failed${NC}"
            exit 1
        fi
    else
        echo -e "${YELLOW}⚠️ Vercel CLI not found. Please deploy manually:${NC}"
        echo -e "${BLUE}1. Install Vercel CLI: npm i -g vercel${NC}"
        echo -e "${BLUE}2. Run: vercel --prod${NC}"
        echo -e "${BLUE}3. Or push to GitHub and connect to Vercel${NC}"
    fi
}

# Deploy to Railway
deploy_backend() {
    echo -e "${YELLOW}🚂 Deploying backend to Railway...${NC}"
    
    if command -v railway &> /dev/null; then
        # Login to Railway (if not already logged in)
        if ! railway whoami &> /dev/null; then
            echo -e "${YELLOW}🔐 Please login to Railway...${NC}"
            railway login
        fi
        
        # Deploy to Railway
        if railway up; then
            echo -e "${GREEN}✅ Backend deployed to Railway${NC}"
            echo -e "${BLUE}🔗 Backend URL: $BACKEND_URL${NC}"
        else
            echo -e "${RED}❌ Railway deployment failed${NC}"
            exit 1
        fi
    else
        echo -e "${YELLOW}⚠️ Railway CLI not found. Please deploy manually:${NC}"
        echo -e "${BLUE}1. Install Railway CLI: npm i -g @railway/cli${NC}"
        echo -e "${BLUE}2. Run: railway login && railway up${NC}"
        echo -e "${BLUE}3. Or connect your GitHub repository to Railway${NC}"
    fi
}

# Setup environment variables
setup_environment() {
    echo -e "${YELLOW}⚙️ Setting up environment variables...${NC}"
    
    # Check if .env.production exists
    if [ ! -f .env.production ]; then
        echo -e "${YELLOW}📝 Creating .env.production template...${NC}"
        cat > .env.production << EOF
# Production Environment Variables
VITE_API_URL=$BACKEND_URL
VITE_APP_NAME=Ganitagya - Mathematics Learning Platform
VITE_APP_VERSION=1.0.0

# Backend Variables (Set these in Railway dashboard)
NODE_ENV=production
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-here
OPENAI_API_KEY=your-openai-api-key-here
DATABASE_URL=postgresql://user:password@host:port/database
REDIS_URL=redis://user:password@host:port
EOF
        echo -e "${YELLOW}⚠️ Please update .env.production with your actual values${NC}"
    fi
    
    echo -e "${GREEN}✅ Environment setup completed${NC}"
}

# Health check
health_check() {
    echo -e "${YELLOW}🏥 Performing health checks...${NC}"
    
    # Check frontend
    if curl -f -s "$FRONTEND_URL" > /dev/null; then
        echo -e "${GREEN}✅ Frontend is healthy${NC}"
    else
        echo -e "${RED}❌ Frontend health check failed${NC}"
    fi
    
    # Check backend
    if curl -f -s "$BACKEND_URL/api/health" > /dev/null; then
        echo -e "${GREEN}✅ Backend is healthy${NC}"
    else
        echo -e "${RED}❌ Backend health check failed${NC}"
    fi
}

# Cleanup
cleanup() {
    echo -e "${YELLOW}🧹 Cleaning up...${NC}"
    # Remove temporary files if any
    rm -rf .temp
    echo -e "${GREEN}✅ Cleanup completed${NC}"
}

# Main deployment function
main() {
    echo -e "${BLUE}🎯 Ganitagya Deployment Script${NC}"
    echo -e "${BLUE}================================${NC}"
    
    # Parse command line arguments
    SKIP_TESTS=false
    FRONTEND_ONLY=false
    BACKEND_ONLY=false
    
    while [[ $# -gt 0 ]]; do
        case $1 in
            --skip-tests)
                SKIP_TESTS=true
                shift
                ;;
            --frontend-only)
                FRONTEND_ONLY=true
                shift
                ;;
            --backend-only)
                BACKEND_ONLY=true
                shift
                ;;
            -h|--help)
                echo "Usage: $0 [OPTIONS]"
                echo "Options:"
                echo "  --skip-tests      Skip running tests"
                echo "  --frontend-only   Deploy only frontend"
                echo "  --backend-only    Deploy only backend"
                echo "  -h, --help        Show this help message"
                exit 0
                ;;
            *)
                echo -e "${RED}Unknown option: $1${NC}"
                exit 1
                ;;
        esac
    done
    
    # Run deployment steps
    check_dependencies
    install_dependencies
    setup_environment
    
    if [ "$SKIP_TESTS" = false ]; then
        run_tests
    fi
    
    if [ "$BACKEND_ONLY" = false ]; then
        build_frontend
        deploy_frontend
    fi
    
    if [ "$FRONTEND_ONLY" = false ]; then
        deploy_backend
    fi
    
    # Wait a bit for deployments to complete
    echo -e "${YELLOW}⏳ Waiting for deployments to complete...${NC}"
    sleep 30
    
    health_check
    cleanup
    
    echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
    echo -e "${BLUE}📱 Frontend: $FRONTEND_URL${NC}"
    echo -e "${BLUE}🔗 Backend: $BACKEND_URL${NC}"
    echo -e "${BLUE}📚 Documentation: https://github.com/rishabh198jain/ganitagya${NC}"
}

# Run main function
main "$@"
