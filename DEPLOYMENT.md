# 🚀 Free Hosting Guide for Ganitagya Website

This guide provides step-by-step instructions for deploying your Ganitagya mathematics website to various free hosting platforms.

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js installed (v20.14.0 or higher)
- Git installed and configured
- A GitHub account
- Your project built and tested locally

## 🏗️ Build Your Project

First, create a production build:

```bash
npm run build
```

This creates a `dist` folder with optimized static files.

## 🌐 Free Hosting Options

### 1. **Netlify** (Recommended)

**Why Netlify?**
- Easy drag-and-drop deployment
- Automatic HTTPS
- Custom domain support
- Continuous deployment from Git

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Drag and drop your `dist` folder to Netlify
4. Your site is live instantly!

**For Git-based deployment:**
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy automatically on every push

### 2. **Vercel**

**Why Vercel?**
- Optimized for React applications
- Excellent performance
- Easy GitHub integration

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your GitHub repository
4. Vercel auto-detects Vite settings
5. Deploy with one click

### 3. **GitHub Pages**

**Why GitHub Pages?**
- Free with GitHub account
- Direct integration with repositories
- Custom domain support

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://yourusername.github.io/ganitagya",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`
4. Enable GitHub Pages in repository settings

### 4. **Firebase Hosting**

**Why Firebase?**
- Google's reliable infrastructure
- Easy CLI deployment
- Great for future backend integration

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Set public directory to `dist`
5. Deploy: `firebase deploy`

### 5. **Surge.sh**

**Why Surge?**
- Simple command-line deployment
- Custom domain support
- Fast deployment

**Steps:**
1. Install Surge: `npm install -g surge`
2. Build your project: `npm run build`
3. Navigate to dist: `cd dist`
4. Deploy: `surge`
5. Follow prompts for domain setup

## 🔧 Configuration for Deployment

### Update Vite Config for GitHub Pages

If using GitHub Pages, update `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ganitagya/', // Replace with your repo name
})
```

### Environment Variables

For production, create `.env.production`:

```
VITE_API_URL=https://your-backend-url.com
VITE_SITE_URL=https://your-site-url.com
```

## 📱 Custom Domain Setup

### For Netlify:
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Update DNS records as instructed

### For Vercel:
1. Go to Project Settings > Domains
2. Add your domain
3. Configure DNS records

### For GitHub Pages:
1. Add CNAME file to public folder with your domain
2. Configure DNS A records to GitHub's IPs

## 🔒 HTTPS and Security

All recommended platforms provide:
- Automatic HTTPS certificates
- CDN for fast global delivery
- DDoS protection
- Security headers

## 📊 Performance Optimization

Before deployment:

1. **Optimize images**: Use WebP format
2. **Minify code**: Vite handles this automatically
3. **Enable compression**: Most platforms do this
4. **Use CDN**: Included with hosting platforms

## 🚀 Recommended Deployment Workflow

1. **Development**: Work locally with `npm run dev`
2. **Testing**: Build and test with `npm run build && npm run preview`
3. **Version Control**: Commit changes to Git
4. **Deploy**: Push to main branch (auto-deploys on Netlify/Vercel)

## 🔄 Continuous Deployment

Set up automatic deployments:

1. **Netlify**: Connects to GitHub automatically
2. **Vercel**: Auto-deploys on Git push
3. **GitHub Actions**: For GitHub Pages automation

## 📈 Analytics and Monitoring

Add analytics to track visitors:

1. **Google Analytics**: Add tracking code
2. **Netlify Analytics**: Built-in analytics
3. **Vercel Analytics**: Performance monitoring

## 🆘 Troubleshooting

**Common Issues:**

1. **404 on refresh**: Configure redirects for SPA
2. **Build fails**: Check Node.js version compatibility
3. **Assets not loading**: Verify base URL configuration

**Solutions:**

- Add `_redirects` file for Netlify: `/* /index.html 200`
- Add `vercel.json` for Vercel with rewrites configuration
- Check console for specific error messages

## 🎯 Best Practices

1. **Use environment variables** for configuration
2. **Set up monitoring** for uptime
3. **Configure caching** for better performance
4. **Use semantic versioning** for releases
5. **Set up staging environment** for testing

## 📞 Support

If you encounter issues:
- Check platform documentation
- Use platform support channels
- Community forums and Stack Overflow
- GitHub Issues for code-related problems

---

**Recommended Choice**: Start with **Netlify** for its simplicity and powerful features. You can always migrate to other platforms later if needed.

Your Ganitagya mathematics website will be live and accessible to students worldwide! 🌍📚
