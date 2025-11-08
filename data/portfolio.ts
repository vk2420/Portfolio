// Portfolio data - centralized for easy updates

export const personalInfo = {
  name: "Vishal Khandelwal",
  title: "AI + Product Innovator | Building scalable tech solutions that bridge operations and intelligence.",
  tagline: "I'm an AI-driven problem solver passionate about designing products that simplify complex operational workflows and enhance user experience.",
  email: "kalibana001@gmail.com",
  phone: "+966-570529521",
  linkedin: "https://linkedin.com/in/vishal2410",
  github: "https://github.com/vk2420",
  resume: "/resume.pdf",
};

export const about = {
  bio: "I'm currently part of Landmark Group's Supply Chain team in Jeddah, where I build digital tools that enhance operational efficiency and data visibility. Having completed IBM's AI Engineering Certification, I combine analytical thinking with product development to create scalable solutions. I'm now looking to transition into an Associate Product Manager role to leverage my tech, AI, and operations experience in delivering impactful products.",
  keySkills: [
    "Product Strategy",
    "Data Analysis",
    "AI & ML Concepts",
    "React.js",
    "Python",
    "Firebase",
    "Cross-functional Collaboration",
  ],
};

export const skills = {
  "Product Analytics": [
    "Product Strategy",
    "User Research",
    "Product Discovery",
    "Wireframing",
    "Roadmapping",
    "Data-Driven Decision Making",
  ],
  Technical: [
    "Python",
    "SQL",
    "JavaScript",
    "React.js",
    "Flask",
    "Node.js",
    "TensorFlow",
    "Keras",
    "Pandas",
    "NumPy",
  ],
  "Cloud Tools": [
    "Google Cloud",
    "AWS (S3, EC2)",
    "Figma",
    "GitHub",
    "Power BI",
    "Tableau",
  ],
  "Soft Skills": [
    "Leadership",
    "Cross-Functional Collaboration",
    "Communication",
    "Critical Thinking",
    "Time Management",
  ],
};

export const experience = [
  {
    company: "Landmark Group",
    position: "Executive Trainee (Supply Chain and Product Innovation)",
    location: "Jeddah, Saudi Arabia",
    duration: "July 2025 - Present",
    highlights: [
      "Designed and implemented internal digital tools to enhance logistics visibility and process efficiency.",
      "Collaborated with cross-functional teams to identify operational bottlenecks and translate them into scalable tech prototypes.",
      "Conducted user feedback sessions to improve UI/UX of tracking systems.",
      "Utilized AI-driven insights to support decision-making and reporting automation.",
    ],
    logo: "/logos/landmark.png",
  },
  {
    company: "PentaDots",
    position: "UI/UX Designer Intern",
    location: "Remote",
    duration: "Oct 2023 - Jan 2024",
    highlights: [
      "Research and Testing: Conducted iterative user research and feedback testing, aligning design outputs with user goals and business requirements.",
      "Collaboration: Collaborated with developers to ensure consistent design implementation and interaction accuracy across web platforms.",
      "Designed: Designed intuitive, high-fidelity UI prototypes for SaaS products in Figma, improving client product usability.",
    ],
    logo: "/logos/pentadots.png", // Placeholder
  },
  {
    company: "IIT Bombay",
    position: "ML Research Intern",
    location: "On-Site",
    duration: "May 2024 - Jul 2024",
    highlights: [
      "ML Model: Built and optimized a U-Net segmentation model for material microstructure classification.",
      "Android Development: Deployed via Flask API and Android app, turning a complex research model into a usable digital product.",
    ],
    logo: "/logos/iitbombay.png", // Placeholder
  },
  {
    company: "St. Vincent's Home",
    position: "Full Stack Developer (Social Impact Project)",
    location: "Remote",
    duration: "Oct 2024 - Feb 2025",
    highlights: [
      "Social Service: Led end-to-end development of a social welfare website, connecting donors with beneficiaries.",
      "User Friendly: Focused on usability and accessibility, improving engagement metrics and platform efficiency.",
    ],
    logo: "/logos/stvincent.png", // Placeholder
  },
  {
    company: "DCM Shriram Ltd.",
    position: "Project Intern (Polymer dept)",
    location: "On-Site",
    duration: "Jan 2025 - Mar 2025",
    highlights: [
      "Compounding: Analyzed QA processes for medical-grade PVC compounds, identifying process optimization opportunities.",
      "Analysis: Provided data-driven insights to improve product stability and reduce waste during production cycles.",
    ],
    logo: "/logos/dcm.png", // Placeholder
  },
];

export const projects = [
  {
    title: "Pallet Tracking System",
    problem: "Lack of visibility across 20,000+ warehouse pallets.",
    solution: "Designed and deployed a web-based tracking system using React and Firebase.",
    impact: "Improved inventory visibility and process efficiency.",
    tech: ["React", "Firebase", "Tailwind", "Vercel"],
    image: "/projects/pallet.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "Container Tracking Solution",
    problem: "Manual reporting processes causing delays and errors in multi-warehouse operations.",
    solution: "Prototyped a multi-warehouse container tracking solution with real-time updates.",
    impact: "Aimed at reducing manual reporting by 70% (under review for implementation).",
    tech: ["React", "Firebase", "Python", "Vercel"],
    image: "/projects/container.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "AI-Assisted Delivery Tracker",
    problem: "Inefficient communication and manual message generation for delivery updates.",
    solution: "Designed and built an AI-assisted delivery communication tool integrating PDF parsing and OpenAI API.",
    impact: "Automated message generation, reducing manual work and improving response time (pilot phase).",
    tech: ["React", "OpenAI API", "Python", "Firebase"],
    image: "/projects/delivery.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "AI Skin-Care Recommendation Platform",
    problem: "Difficulty finding accurate and personalized skincare suggestions online.",
    solution: "Developed a full-stack AI skincare recommendation web app using React, Express, and ML models that suggests personalized skincare routines based on gender, age, and skin type.",
    impact: "Provides accurate, personalized skincare recommendations, improving user experience in finding suitable products.",
    tech: ["React", "Node.js", "Express", "ML Classification Models", "Firebase"],
    image: "/projects/skincare.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "Options Trading Assistant",
    problem: "Manual analysis time in options trading requiring extensive research to identify profitable opportunities.",
    solution: "Designed a backend ML-based trading tool that identifies optimal options pairs with >85% success probability and >3.5 profit ratio, automating signal discovery.",
    impact: "Reduced manual analysis time significantly while maintaining high success rates and profit ratios in options trading.",
    tech: ["Python", "Pandas", "Scikit-learn", "Flask API", "Recharts"],
    image: "/projects/trading.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
];

export const leadership = [
  {
    role: "Design Head – ISTE NITC Chapter",
    description: "Led design and tech events impacting 3,000+ students.",
  },
  {
    role: "Design Head – IEDC Summit '24 (Kerala)",
    description:
      "Coordinated state-level innovation and entrepreneurship initiatives.",
  },
];

export const certifications = [
  {
    name: "IBM AI Engineering Professional Certificate",
    issuer: "Coursera",
    status: "13/13 Completed",
    year: "2025",
  },
  {
    name: "AWS Cloud Solutions Architect",
    issuer: "Coursera",
    status: "In Progress",
    year: "2025",
  },
  {
    name: "Google TensorFlow Developer Certificate",
    issuer: "Google",
    status: "Target 2025",
    year: "2025",
  },
];

