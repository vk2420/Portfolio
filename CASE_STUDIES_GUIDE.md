# Case Studies Guide

## How to Add Your 6 Case Studies

Edit the file `data/case-studies.ts` and add your case studies to the `caseStudies` array.

## Case Study Structure

Each case study should follow this structure:

```typescript
{
  slug: "unique-url-friendly-name",
  title: "Case Study Title",
  excerpt: "A brief 1-2 sentence summary of the case study",
  category: "Product Idea" | "Case Study" | "Research",
  date: "2025-01-15", // YYYY-MM-DD format
  readTime: "5 min read",
  image: "/case-studies/your-image.jpg", // Add images to /public/case-studies/
  content: {
    overview: "Detailed overview of the case study...",
    problem: "The problem you were solving...",
    solution: "Your solution approach...",
    impact: "Measurable impact and results (optional)",
    keyFeatures: ["Feature 1", "Feature 2", "Feature 3"], // Optional
    techStack: ["React", "Python", "Firebase"], // Optional
    challenges: ["Challenge 1", "Challenge 2"], // Optional
    learnings: ["Learning 1", "Learning 2"], // Optional
    nextSteps: "Future improvements and iterations" // Optional
  },
  tags: ["AI", "Product", "ML"] // 3-5 tags
}
```

## Example Case Study

Here's a complete example:

```typescript
{
  slug: "ai-powered-supply-chain-optimization",
  title: "AI-Powered Supply Chain Optimization",
  excerpt: "Leveraging machine learning to optimize warehouse operations, reduce costs, and improve efficiency across multiple facilities.",
  category: "Case Study",
  date: "2025-01-15",
  readTime: "8 min read",
  image: "/case-studies/supply-chain.jpg",
  content: {
    overview: "This case study explores how we implemented an AI-driven solution to optimize supply chain operations at Landmark Group, resulting in significant cost savings and operational improvements.",
    problem: "The warehouse operations were facing challenges with inventory management, leading to overstocking, stockouts, and inefficient resource allocation across 20,000+ assets.",
    solution: "Developed a machine learning model that analyzes historical data, demand patterns, and seasonal trends to predict optimal inventory levels and automate reordering processes.",
    impact: "Reduced inventory costs by 25%, improved stock availability to 98%, and decreased manual reporting time by 70%.",
    keyFeatures: [
      "Real-time inventory tracking",
      "Predictive analytics for demand forecasting",
      "Automated reorder recommendations",
      "Multi-warehouse visibility dashboard"
    ],
    techStack: ["Python", "TensorFlow", "React", "Firebase", "Vercel"],
    challenges: [
      "Integrating with legacy systems",
      "Ensuring data accuracy across multiple warehouses",
      "Training the team on new tools"
    ],
    learnings: [
      "AI models need continuous retraining with fresh data",
      "User adoption is critical for success",
      "Clear metrics help measure ROI effectively"
    ],
    nextSteps: "Expand the model to include supplier performance analysis and integrate with transportation management systems."
  },
  tags: ["AI", "Supply Chain", "Machine Learning", "Operations"]
}
```

## Adding Images

1. Create a folder: `/public/case-studies/`
2. Add your case study images there
3. Reference them in the `image` field: `/case-studies/your-image.jpg`

## Display

All case studies will be displayed on a single page in the "Case Studies & Product Ideas" section. Each case study shows:
- Full content (Problem, Solution, Impact)
- Key features, tech stack, challenges, learnings
- Tags and metadata
- Beautiful card layout with images

## Tips

- Keep excerpts concise (1-2 sentences)
- Use clear, action-oriented language
- Include specific metrics in impact section
- Add 3-5 relevant tags per case study
- Use high-quality images (recommended: 800x600px)

