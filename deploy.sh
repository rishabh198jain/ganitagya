#!/bin/bash

# Ganitagya Deployment Script
# This script helps deploy the Ganitagya website to various hosting platforms

echo "🧮 Ganitagya Deployment Helper"
echo "=============================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🏗️  Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

# Show deployment options
echo ""
echo "🚀 Choose your deployment platform:"
echo "1. Netlify (Drag & Drop)"
echo "2. Vercel (GitHub Integration)"
echo "3. GitHub Pages (GitHub Actions)"
echo "4. Firebase Hosting"
echo "5. Surge.sh"
echo "6. Preview locally"

read -p "Enter your choice (1-6): " choice

case $choice in
    1)
        echo "📁 For Netlify deployment:"
        echo "1. Go to https://netlify.com"
        echo "2. Drag and drop the 'dist' folder"
        echo "3. Your site will be live instantly!"
        echo ""
        echo "📂 Your build files are in the 'dist' directory"
        ;;
    2)
        echo "🔗 For Vercel deployment:"
        echo "1. Push your code to GitHub"
        echo "2. Go to https://vercel.com"
        echo "3. Import your GitHub repository"
        echo "4. Vercel will auto-deploy!"
        echo ""
        echo "📄 vercel.json configuration is already set up"
        ;;
    3)
        echo "🐙 For GitHub Pages deployment:"
        echo "1. Push your code to GitHub"
        echo "2. Go to Settings > Pages in your repository"
        echo "3. Enable GitHub Actions deployment"
        echo "4. The workflow will auto-deploy on push to main"
        echo ""
        echo "📄 GitHub Actions workflow is in .github/workflows/deploy.yml"
        ;;
    4)
        echo "🔥 For Firebase Hosting:"
        echo "1. Install Firebase CLI: npm install -g firebase-tools"
        echo "2. Login: firebase login"
        echo "3. Initialize: firebase init hosting"
        echo "4. Deploy: firebase deploy"
        echo ""
        echo "📄 firebase.json configuration is already set up"
        ;;
    5)
        echo "🌊 For Surge.sh deployment:"
        echo "1. Install Surge: npm install -g surge"
        echo "2. Navigate to dist: cd dist"
        echo "3. Deploy: surge"
        echo "4. Follow the prompts"
        ;;
    6)
        echo "👀 Starting local preview..."
        npm run preview
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment setup complete!"
echo "📚 For detailed instructions, see DEPLOYMENT.md"
echo "🌐 Your Ganitagya website is ready to share with the world!"
