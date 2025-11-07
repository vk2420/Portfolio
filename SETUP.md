# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Assets**
   - Add your profile picture: `/public/profile.jpg`
   - Add your resume: `/public/resume.pdf`
   - Add project images: `/public/projects/`
   - Add company logos: `/public/logos/`

3. **Configure Contact Form**
   - Sign up at [Formspree](https://formspree.io/)
   - Get your form ID
   - Update `components/sections/Contact.tsx` line 30:
     ```typescript
     const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
     ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## Customization Checklist

- [ ] Update personal info in `data/portfolio.ts`
- [ ] Add profile picture (`/public/profile.jpg`)
- [ ] Add resume PDF (`/public/resume.pdf`)
- [ ] Add project images (`/public/projects/`)
- [ ] Add company logos (`/public/logos/`)
- [ ] Configure Formspree or API route for contact form
- [ ] Update social media links if needed
- [ ] Customize colors in `tailwind.config.ts` if desired
- [ ] Update SEO metadata in `app/layout.tsx`

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Deploy!

## Adding Blog Section (Future)

1. Install MDX:
   ```bash
   npm install @next/mdx @mdx-js/loader @mdx-js/react
   ```

2. Create blog structure:
   - `app/blog/page.tsx` - Blog listing
   - `app/blog/[slug]/page.tsx` - Individual posts
   - `content/blog/` - MDX files

3. Add blog data to `data/blog.ts`

## Adding AI Demo Section (Future)

1. Create `app/demos/page.tsx`
2. Add demo components in `components/demos/`
3. Integrate with your AI APIs
4. Consider using Web Workers for heavy computations

