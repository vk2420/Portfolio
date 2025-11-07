# Deployment Guide - Vercel

## Quick Deploy Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No**
   - Project name? (Press Enter for default: `vishal-portfolio`)
   - Directory? (Press Enter for `./`)
   - Override settings? **No**

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub + Vercel Dashboard (Easier)

1. **Push to GitHub**:
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/vishal-portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

## Environment Variables

If you need to add environment variables (e.g., for Formspree):
- Go to your project settings on Vercel
- Navigate to "Environment Variables"
- Add your variables

## Custom Domain

1. Go to your project on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Build Settings (Auto-detected)

Vercel automatically detects:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify dark/light mode toggle works
- [ ] Check all links (resume, GitHub, LinkedIn)
- [ ] Test contact form (if Formspree is configured)
- [ ] Verify images load correctly
- [ ] Test on mobile devices
- [ ] Check SEO meta tags

## Troubleshooting

### Build Fails
- Check build logs on Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript errors are fixed

### Images Not Loading
- Ensure images are in `/public` folder
- Check image paths are correct
- Verify Next.js image configuration

### Contact Form Not Working
- Update Formspree form ID in `components/sections/Contact.tsx`
- Or create an API route for custom form handling

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment

