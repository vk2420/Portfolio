# Vercel 401 Errors - Troubleshooting Guide

## Understanding the Logs

The 401 (Unauthorized) errors you're seeing are **normal** for Vercel preview deployments. Here's what's happening:

### ✅ Good Signs (200 responses):
- `GET /` → 200 ✅ (Main page loads successfully)
- `GET /_next/image` → 200 ✅ (Images load successfully)

### ⚠️ Expected Behavior (401 responses):
- Preview deployments may require authentication
- `/meta.json` 401s are from Next.js metadata fetching (harmless)
- These don't affect your production site

## Why 401 Errors Occur

1. **Preview Deployment Protection**: Vercel may have password protection enabled on preview deployments
2. **Metadata Fetching**: Next.js tries to fetch `/meta.json` which doesn't exist (harmless)
3. **Preview URLs**: Preview deployments are protected by default in some Vercel plans

## Solutions

### Option 1: Check Vercel Settings (Recommended)

1. Go to your Vercel project dashboard
2. Click **Settings** → **Deployment Protection**
3. Check if **"Password Protection"** is enabled
4. If enabled, you can:
   - **Disable it** for public access
   - **Keep it enabled** for preview deployments only (production will still be public)

### Option 2: Deploy to Production

Production deployments are **always public** and won't show 401 errors:

```bash
vercel --prod
```

Or promote a deployment to production in the Vercel dashboard.

### Option 3: Ignore Preview 401s (If Production Works)

If your production site (the main URL) works fine, you can ignore the preview deployment 401s. They're just protecting your preview URLs.

## Check Your Production URL

Your production site should be accessible at:
- `https://portfolio-*.vercel.app` (main production URL)
- Or your custom domain if configured

## Verify Everything Works

1. **Check Production URL**: Visit your main production URL (not preview)
2. **Test All Pages**: Navigate through all sections
3. **Check Images**: Verify images load correctly
4. **Test Dark Mode**: Toggle theme
5. **Test Responsive**: Check on mobile/tablet

## If Production Also Shows 401s

If your **production** site also shows 401s:

1. Check Vercel project settings
2. Verify deployment protection settings
3. Check if you're on a team with restricted access
4. Contact Vercel support if needed

## Summary

- ✅ **200 responses = Site is working!**
- ⚠️ **401 on preview = Normal (protection enabled)**
- 🎯 **Focus on production URL** for public access

Your portfolio is deployed and working! The 401s are just preview protection.


