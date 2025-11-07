# Vishal Khandelwal - Portfolio Website

A modern, professional portfolio website built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalist, and premium UI/UX
- **Responsive**: Fully responsive across desktop, tablet, and mobile devices
- **Dark Mode**: Built-in dark/light mode toggle
- **SEO Optimized**: Meta tags, OG tags, and structured data
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Performance**: Optimized for fast loading and smooth interactions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with shadcn/ui patterns
- **Theme**: next-themes for dark mode

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Personal Information

Edit `data/portfolio.ts` to update:
- Personal info (name, title, contact details)
- About section
- Skills
- Experience
- Projects
- Leadership roles
- Certifications

### Add Images

1. **Profile Picture**: Add your profile image as `/public/profile.jpg`
2. **Project Images**: Add project images to `/public/projects/`
3. **Company Logos**: Add company logos to `/public/logos/`
4. **Resume**: Add your resume PDF as `/public/resume.pdf`

### Configure Contact Form

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form and get your form ID
3. Update the form ID in `components/sections/Contact.tsx`:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

Alternatively, you can create an API route in `app/api/contact/route.ts` for custom form handling.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Build for Production

```bash
npm run build
npm start
```

## 📝 Sections

- **Hero**: Introduction with CTA buttons
- **About**: Bio and key focus areas
- **Skills**: Categorized skill badges
- **Experience**: Timeline of work experience
- **Projects**: Showcase of projects with images and links
- **Leadership**: Community involvement and leadership roles
- **Certifications**: Professional certifications
- **Contact**: Contact form and social links

## 🔮 Future Enhancements

### Blog Section
To add a blog section:
1. Create `app/blog/page.tsx` for blog listing
2. Create `app/blog/[slug]/page.tsx` for individual posts
3. Use MDX for markdown support
4. Add blog data to `data/blog.ts`

### AI Demo Section
To add an AI demo section:
1. Create `app/demos/page.tsx`
2. Integrate with your AI models/APIs
3. Add interactive components for demos
4. Consider using Web Workers for heavy computations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vishal Khandelwal**
- LinkedIn: [@vishal2410](https://linkedin.com/in/vishal2410)
- GitHub: [@vk2420](https://github.com/vk2420)
- Email: kalibana001@gmail.com

---

Built with ❤️ using Next.js and TypeScript

