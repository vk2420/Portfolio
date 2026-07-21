// Portfolio data - centralized for easy updates

export const personalInfo = {
  name: "Vishal Khandelwal",
  title: "Supply Chain Ops → Product | Shipped a workforce optimization tool now saving 82K SAR/month, on track for 175K+ this quarter",
  tagline: "I run supply chain operations at Landmark Group. In June 2026 I presented a product I built independently to the CEO — it had saved 82,000 SAR in its first month. Nobody asked me to build it. I saw the problem on the floor, built the solution, shipped it, and proved the impact. That's the operating pattern I want to bring to a product team full-time.",
  email: "kalibana001@gmail.com",
  phone: "+966-570529521",
  linkedin: "https://linkedin.com/in/vishal2410",
  github: "https://github.com/vk2420",
  resume: "/resume.pdf",
};

export const about = {
  bio: "I'm making a deliberate move from supply chain operations into product management — and I'm making the case with evidence, not just a career-change story. Most enterprise tools fail not because of bad technology, but because nobody understood what actually happens on the floor before building them. I spent months inside Landmark Group's warehouse and logistics operations in KSA before writing a single line of code. That floor time is exactly what most product hires don't have, and it's the edge I bring.\n\nThen I started building — independently, without a dedicated engineering team, without ERP access, and against significant IT constraints. I built 6 operational tools, shipped one that saved 82,000 SAR in its first month (projected 1M SAR annually), presented it to the CEO, and am currently leading a 65M SAR network optimization initiative assigned directly by senior leadership. Every one of those started the same way a PM's work should: find the real problem, validate it with the people living it, ship something, measure the impact.\n\nThree of my tools were cancelled because central product teams were already building identical solutions — without me knowing. That's not bad luck. It means my problem identification was calibrated correctly.\n\nIBM AI Product Manager | IBM AI Engineer | NIT Calicut | McKinsey Forward | Targeting APM, Product Analyst, and AI PM roles in GCC and India.",
  keySkills: [
    "Product Strategy",
    "User Research & Discovery",
    "AI & ML Integration",
    "Stakeholder Management",
    "Data-Driven Decision Making",
    "Cross-functional Collaboration",
    "React.js / Python / SQL",
    "OpenAI API / LLM Products",
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
    position: "Executive Trainee — Supply Chain & Product Innovation",
    location: "Jeddah, Saudi Arabia (KSA)",
    duration: "July 2025 - Present",
    highlights: [
      "🏆 Designed and shipped Skill Matrix System independently — presented to CEO, saved 82,000 SAR in first month, projected 1M SAR annual saving. Started with 40+ supervisor interviews, built Excel version (approved by leadership), then proposed and developed system implementation.",
      "📊 Assigned by senior leadership to lead KSA Home Network Optimization — a 65M SAR cost problem spanning all warehouses, stores, cross-docks, and feeder routes across KSA. Built interactive HTML visualization of complete network, currently analyzing cost structure by cluster and zone.",
      "🚚 Built AI-Assisted Delivery Tracking System for 8,000+ deliveries across 5 clusters — creatively solved zero-ERP-access problem by using OpenAI API to parse PDF trip sheets, extracting invoice, customer, driver, and cluster data to power a live operations dashboard.",
      "📦 Designed Container Tracking Platform — identified chaos across 5 manual sources, built centralized scheduling and SLA system across all KSA distribution centers. Presented independently to Vice President level; validated by leadership, paused due to IT constraints.",
      "🔍 Built Pallet Tracking System for 20,000+ pallets including damage tracking, accountability, and barcode scanning. During investigation, independently discovered a gap in Landmark's central PDT system and escalated to the central product team.",
      "📍 Developed Bin Consolidation Tool after spotting putaway inefficiencies on the warehouse floor — identified duplicate stock locations and quantified recoverable space across distribution centers.",
      "🤖 Developed ML-based Throughput Forecasting model for manpower allocation. Identified missing cost data inputs and escalated proactively rather than continuing with incomplete assumptions.",
      "✅ Three tools independently validated when central product teams confirmed identical solutions were already in development — confirming problem identification accuracy.",
    ],
    logo: "/logos/landmark.png",
  },
  {
    company: "PentaDots",
    position: "UI/UX Designer Intern",
    location: "Remote",
    duration: "Nov 2023 - May 2024",
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
    title: "Skill Matrix System",
    badge: "SHIPPED · CEO Presentation",
    problem: "No visibility into delivery and furniture installation team skill sets — managers couldn't form optimal teams or track capability gaps across 40+ staff.",
    solution: "Conducted 40+ supervisor interviews to identify skill parameters. Built Excel version (approved by leadership), then developed full system implementation. Presented results directly to CEO.",
    impact: "82,000 SAR saved in first month (measured). On track for 175,000+ SAR this quarter at that run rate; projected ~1M SAR annually. Live and actively used by operations leadership.",
    tech: ["React", "Firebase", "Python", "Excel", "Data Analysis"],
    image: "/projects/skillmatrix.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "KSA Home Network Optimizer",
    badge: "ACTIVE · 65M SAR Problem",
    problem: "Landmark's KSA home delivery network spanning all warehouses, stores, cross-docks, and feeder routes had 65M SAR in unoptimized logistics costs with no visibility tool.",
    solution: "Assigned by senior leadership to lead this initiative. Mapped all KSA routes and network nodes, then built an interactive HTML visualization of the complete network. Currently analyzing cost structure by cluster and zone to inform optimization decisions.",
    impact: "In progress — targeting significant cost reduction on a 65M SAR annual expense. Directly sponsored by country-level senior leadership.",
    tech: ["HTML", "JavaScript", "Data Visualization", "Network Analysis", "Python"],
    image: "/projects/network.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "AI-Assisted Delivery Tracker",
    badge: "8,000+ Deliveries · OpenAI API",
    problem: "Zero visibility on 5,000–8,000 monthly deliveries across 5 clusters. No ERP API access. Delivery data locked inside PDF trip sheets.",
    solution: "Creatively solved the data access problem by connecting OpenAI API to parse PDF trip sheets — extracting invoice numbers, customer details, driver info, and cluster assignments automatically. Built a driver-facing interface (drivers update delivery status via DO number) and a live operations dashboard.",
    impact: "Tracked 8,000+ deliveries across 5 clusters. Pilot validated by operations leadership. Paused when central team confirmed identical solution in development — validating the problem.",
    tech: ["React", "OpenAI API", "Python", "Firebase", "PDF Parsing"],
    image: "/projects/delivery.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "Pallet Tracking System",
    badge: "20,000+ Pallets · Barcode Scanning",
    problem: "No tracking for 20,000+ warehouse pallets — no visibility into damage, missing pallets, or team accountability.",
    solution: "Designed full system architecture independently. Built web-based tracking including pallet in/out, damage reporting, missing pallet alerts, and accountability tracking. Supported both Excel upload and barcode scanning via device hosted on firewall backend. During investigation, discovered a gap in Landmark's central PDT system and escalated to central team.",
    impact: "Presented to all stakeholders. Discovered and flagged a critical gap in Landmark's own central system. Validated by operations leadership.",
    tech: ["React", "Firebase", "Python", "Barcode Scanning", "Tailwind"],
    image: "/projects/pallet.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "Container Tracking Platform",
    badge: "VP Presentation · All KSA DCs",
    problem: "Container tracking across 5 different sources was entirely manual — all siloed, all email-based. No central visibility, no SLA tracking, no scheduling tool across KSA distribution centers.",
    solution: "Identified the chaos independently through operational observation. Built a centralized container tracking system where each warehouse can track containers, update arrival status, plan scheduling, monitor SLA, and report damage. Presented the solution independently to Vice President level.",
    impact: "VP-validated solution. Paused due to IT constraints — central team later confirmed they were building an identical solution, confirming the problem was real and significant.",
    tech: ["React", "Firebase", "Python", "SLA Tracking", "Dashboard"],
    image: "/projects/container.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "Mulk AI",
    badge: "BUILDING IN PUBLIC · Founder Project",
    problem: "Dubai property investors make seven-figure decisions on broker WhatsApp forwards, with no independent advisor combining government eligibility rules with real financing constraints.",
    solution: "Building an AI advisory agent — starting with a zero-LLM rules engine for tenure eligibility (freehold/leasehold/nationals-only) and CBUAE financing rules, so the AI layer can only explain decisions, never invent them. RAG over DLD transaction data and the conversational advisory layer come next.",
    impact: "Rules engine shipped with 16 passing tests against real Dubai regulation. Building and sharing progress in public, using investor and agent conversations to drive the roadmap.",
    tech: ["Python", "Rules Engine", "RAG (planned)", "CBUAE Compliance Logic"],
    image: "/projects/mulk-ai.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "AI Skin-Care Recommendation Platform",
    badge: "Full Stack · ML Models",
    problem: "Difficulty finding accurate and personalized skincare suggestions online.",
    solution: "Developed a full-stack AI skincare recommendation web app using React, Express, and ML models that suggests personalized skincare routines based on gender, age, and skin type.",
    impact: "Provides accurate, personalized skincare recommendations, demonstrating end-to-end product development from user research to ML model deployment.",
    tech: ["React", "Node.js", "Express", "ML Classification Models", "Firebase"],
    image: "/projects/skincare.jpg",
    github: "https://github.com/vk2420",
    demo: "#",
  },
  {
    title: "Options Trading Assistant",
    badge: "ML · >85% Success Rate",
    problem: "Manual analysis required extensive research to identify profitable options trading opportunities.",
    solution: "Designed a backend ML-based trading tool that identifies optimal options pairs with >85% success probability and >3.5 profit ratio, automating signal discovery.",
    impact: "Reduced manual analysis time significantly while maintaining high success rates — demonstrates ML model deployment for real financial decision-making.",
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
    name: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    status: "Completed",
    year: "2026",
    description: "Problem solving, effective communication, and resilience for the future of work — McKinsey's methodology applied to real operational challenges.",
  },
  {
    name: "IBM AI Product Management Professional Certificate",
    issuer: "IBM / Coursera",
    status: "Completed",
    year: "2025",
    description: "AI product lifecycle, model evaluation, ethical AI, and building AI-powered product roadmaps.",
  },
  {
    name: "IBM AI Engineering Professional Certificate",
    issuer: "IBM / Coursera",
    status: "13/13 Completed",
    year: "2025",
    description: "Deep learning, neural networks, TensorFlow, Keras, PyTorch — end-to-end AI engineering from model building to deployment.",
  },
  {
    name: "Claude Certified Architect",
    issuer: "Anthropic",
    status: "In Progress",
    year: "2026",
    description: "Advanced LLM architecture, Claude API, multi-agent systems, and production AI deployment patterns.",
  },
  {
    name: "AWS Cloud Solutions Architect",
    issuer: "Coursera",
    status: "In Progress",
    year: "2026",
    description: "Cloud architecture design, AWS services, scalable infrastructure for AI and data-intensive products.",
  },
];

