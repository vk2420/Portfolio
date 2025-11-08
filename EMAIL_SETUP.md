# Email Setup Guide for Contact Form

The contact form is now using a Next.js API route. Currently, messages are logged to the server console. To receive actual emails, set up one of these services:

## Option 1: Resend (Recommended - Free Tier Available)

1. **Sign up at [Resend](https://resend.com)**
   - Free tier: 3,000 emails/month
   - Easy setup with Next.js

2. **Get your API Key**
   - Go to Resend dashboard → API Keys
   - Create a new API key

3. **Install Resend SDK**
   ```bash
   npm install resend
   ```

4. **Update the API Route**
   - Open `app/api/contact/route.ts`
   - Uncomment the Resend code
   - Add your API key to environment variables

5. **Add Environment Variables**
   - Create `.env.local` file:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxxx
     CONTACT_EMAIL=your-email@example.com
     ```
   - Add to Vercel: Settings → Environment Variables

## Option 2: SendGrid

1. **Sign up at [SendGrid](https://sendgrid.com)**
2. **Get API Key** from SendGrid dashboard
3. **Install SendGrid**:
   ```bash
   npm install @sendgrid/mail
   ```
4. **Update API route** to use SendGrid
5. **Add environment variables**:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   CONTACT_EMAIL=your-email@example.com
   ```

## Option 3: Nodemailer with SMTP

1. **Install Nodemailer**:
   ```bash
   npm install nodemailer
   ```
2. **Configure SMTP** (Gmail, Outlook, etc.)
3. **Update API route** with SMTP configuration
4. **Add environment variables**:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=your-email@example.com
   ```

## Option 4: Formspree (Original)

If you prefer Formspree:

1. **Sign up at [Formspree](https://formspree.io)**
2. **Create a new form** and get your form ID
3. **Update `components/sections/Contact.tsx`**:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

## Quick Setup with Resend (Recommended)

1. Install Resend:
   ```bash
   npm install resend
   ```

2. Update `app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   await resend.emails.send({
     from: 'Portfolio Contact <onboarding@resend.dev>',
     to: process.env.CONTACT_EMAIL || 'kalibana001@gmail.com',
     subject: `New Contact Form Submission from ${name}`,
     html: `
       <h2>New Contact Form Submission</h2>
       <p><strong>Name:</strong> ${name}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Message:</strong></p>
       <p>${message}</p>
     `,
   });
   ```

3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=kalibana001@gmail.com
   ```

4. Add same variables to Vercel environment variables

## Testing

After setup, test the form:
1. Fill out the contact form
2. Submit
3. Check your email inbox
4. Check server logs (if email fails)

## Current Status

✅ Form submission works
✅ Validation is in place
⚠️ Emails are logged to console (check Vercel logs)
📧 Set up email service to receive actual emails


