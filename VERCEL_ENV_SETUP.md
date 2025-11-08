# Vercel Environment Variables Setup

Your Resend API key is configured! Now you need to add it to Vercel so emails work in production.

## Quick Setup Steps

### 1. Go to Vercel Dashboard
- Visit [vercel.com](https://vercel.com)
- Go to your **Portfolio** project
- Click **Settings** → **Environment Variables**

### 2. Add Environment Variables

Add these two variables:

**Variable 1:**
- **Name:** `RESEND_API_KEY`
- **Value:** `re_FvTKeKuZ_GHN7j847rCskmjEsvZzwNBzH`
- **Environment:** Select all (Production, Preview, Development)

**Variable 2:**
- **Name:** `CONTACT_EMAIL`
- **Value:** `kalibana001@gmail.com`
- **Environment:** Select all (Production, Preview, Development)

### 3. Redeploy

After adding the variables:
- Go to **Deployments** tab
- Click the **three dots** (⋯) on your latest deployment
- Click **Redeploy**

Or simply push a new commit to trigger a new deployment.

## Local Development

For local development, create a `.env.local` file in the root directory:

```bash
RESEND_API_KEY=re_FvTKeKuZ_GHN7j847rCskmjEsvZzwNBzH
CONTACT_EMAIL=kalibana001@gmail.com
```

**Note:** `.env.local` is already in `.gitignore`, so it won't be committed to GitHub.

## Testing

1. **Test locally:**
   ```bash
   npm run dev
   ```
   Submit the contact form and check your email.

2. **Test on Vercel:**
   - After adding environment variables and redeploying
   - Visit your live site
   - Submit the contact form
   - Check `kalibana001@gmail.com` for the email

## Troubleshooting

### Emails not sending?
1. Check Vercel logs: **Deployments** → Click deployment → **Functions** tab
2. Verify environment variables are set correctly
3. Check Resend dashboard for email logs
4. Make sure the API key is active in Resend

### Build fails?
- Make sure `resend` package is installed: `npm install resend`
- Check that environment variables are set for all environments

## Security Note

✅ Your API key is safe:
- `.env.local` is in `.gitignore` (not committed)
- Vercel environment variables are encrypted
- Never commit API keys to GitHub

## Next Steps

1. ✅ Resend installed
2. ✅ API route created
3. ✅ Code updated
4. ⏳ Add environment variables to Vercel (do this now!)
5. ⏳ Redeploy
6. ✅ Test contact form

Your contact form is ready! Just add the environment variables to Vercel and redeploy.


