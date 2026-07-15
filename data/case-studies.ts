// Case Studies / Product Ideas Data

export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  category: "Product Idea" | "Case Study" | "Research";
  date: string;
  readTime: string;
  image: string;
  content: {
    overview: string;
    problem: string;
    solution: string;
    impact?: string;
    keyFeatures?: string[];
    techStack?: string[];
    challenges?: string[];
    learnings?: string[];
    nextSteps?: string;
  };
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "skill-matrix-system",
    title: "Skill Matrix System: From 40 Supervisor Interviews to a CEO Presentation",
    excerpt:
      "How I turned an invisible staffing problem into a system that saved 82,000 SAR in month one — and what the discovery process looked like from the inside.",
    category: "Case Study",
    date: "2025-04-01",
    readTime: "7 min read",
    image: "/case-studies/skill-matrix.jpg",
    content: {
      overview:
        "Managers running delivery and furniture installation teams at Landmark Group had no structured way to see who could do what. Team formation for jobs was based on memory and gut feel, not data. Nobody had asked for a tool — the gap only became visible once I spent time on the floor watching how teams actually got assigned.",
      problem:
        "No visibility into delivery and installation team skill sets. Managers couldn't form optimal teams for jobs requiring specific certifications or capabilities, and there was no way to track capability gaps across 40+ staff. This showed up as mis-assigned jobs, redone work, and supervisors relying on informal knowledge that left the moment they did.",
      solution:
        "I treated this like a product problem, not an IT ticket. First, discovery: 40+ structured interviews with supervisors to identify the actual skill parameters that mattered for job assignment — not the ones I assumed mattered. Second, validation: I built a lightweight Excel version first and got it approved by leadership before writing any application code, so I wasn't betting engineering time on an unvalidated hypothesis. Only after that did I build the full system implementation and present it directly to the CEO.",
      impact:
        "82,000 SAR saved in the first month of use. Projected 1M SAR in annual savings. The system is live and actively used by operations leadership for team formation decisions — not a pilot that stalled after the demo.",
      keyFeatures: [
        "Structured skill taxonomy built from real supervisor input, not assumptions",
        "Excel-first validation layer before any engineering investment",
        "Full system implementation with team-formation view for managers",
        "Direct CEO presentation with first-month savings data attached",
      ],
      techStack: ["React", "Firebase", "Python", "Excel", "Data Analysis"],
      challenges: [
        "No existing data on staff capabilities — everything had to be sourced through interviews",
        "Getting 40+ supervisors to give consistent, comparable answers about skill levels",
        "Earning leadership trust for a self-initiated project with no formal mandate",
      ],
      learnings: [
        "Validating with a spreadsheet before building software saved weeks of wasted engineering time",
        "The people closest to the problem (supervisors) knew the real skill parameters — my job was extraction, not invention",
        "A dollar figure in the first month does more to earn trust than any roadmap slide",
      ],
      nextSteps:
        "Extending the skill taxonomy to other operational functions beyond delivery and installation, and exploring whether the same interview-first discovery method can shortcut validation on the network optimization initiative.",
    },
    tags: ["Product Discovery", "Supply Chain", "Stakeholder Management", "Data Analysis"],
  },
  {
    slug: "ksa-home-network-optimizer",
    title: "Mapping a 65M SAR Logistics Network Nobody Could See Whole",
    excerpt:
      "Assigned directly by senior leadership to untangle KSA's entire home-delivery network — warehouses, stores, cross-docks, and feeder routes — starting with a visualization nobody had built before.",
    category: "Case Study",
    date: "2025-07-15",
    readTime: "6 min read",
    image: "/case-studies/network-optimizer.jpg",
    content: {
      overview:
        "Landmark's KSA home delivery network — every warehouse, store, cross-dock, and feeder route — had roughly 65M SAR in logistics cost with no single view of how the pieces connected. Senior leadership assigned me to lead this initiative directly, which meant the first job wasn't optimization, it was making the network visible at all.",
      problem:
        "65M SAR in annual logistics cost spread across a network with no unified visibility tool. Decisions about routing and cost allocation were being made cluster by cluster, without anyone able to see how a change in one node would ripple through the rest of the network.",
      solution:
        "I mapped every KSA route and network node manually before building anything, because an optimization tool built on an incomplete map would just produce confidently wrong answers. Then I built an interactive HTML visualization of the complete network so leadership could, for the first time, see the whole system in one place. I'm now analyzing cost structure by cluster and zone to identify where the real savings are, rather than guessing.",
      impact:
        "In progress, directly sponsored by country-level senior leadership. Targeting significant, measurable cost reduction against the 65M SAR annual baseline — the first phase (full network visibility) is complete and already changing how leadership discusses routing decisions.",
      keyFeatures: [
        "Complete node-and-route map of KSA's home delivery network",
        "Interactive HTML visualization built for non-technical leadership review",
        "Cluster- and zone-level cost breakdown to prioritize optimization targets",
      ],
      techStack: ["HTML", "JavaScript", "Data Visualization", "Network Analysis", "Python"],
      challenges: [
        "No existing single source of truth for the network — cost and route data lived in disconnected systems",
        "Balancing a fast, useful first version against the risk of oversimplifying a genuinely complex network",
        "Communicating cost-structure findings to leadership in a form that drives decisions, not just a dashboard to admire",
      ],
      learnings: [
        "You can't optimize what you can't see — visibility had to come before analysis, not alongside it",
        "Leadership sponsorship accelerates access to data, but doesn't replace the legwork of mapping ground truth",
      ],
      nextSteps:
        "Moving from visibility to recommendation: turning the cluster/zone cost analysis into a prioritized set of routing changes with projected savings attached to each one.",
    },
    tags: ["Product Strategy", "Data Visualization", "Network Analysis", "Executive Stakeholders"],
  },
  {
    slug: "ai-assisted-delivery-tracker",
    title: "No ERP Access, No API, 8,000 Deliveries a Month — So I Read the PDFs",
    excerpt:
      "When the official system wouldn't give me the data I needed, I used the OpenAI API to extract it from the PDF trip sheets that already existed. A case study in shipping around a constraint instead of waiting for it to be removed.",
    category: "Case Study",
    date: "2025-06-10",
    readTime: "6 min read",
    image: "/case-studies/delivery-tracker.jpg",
    content: {
      overview:
        "Landmark had zero real-time visibility into 5,000–8,000 monthly home deliveries across 5 clusters. The data existed — it just lived inside PDF trip sheets with no API access to the ERP system that generated them.",
      problem:
        "No ERP API access meant no conventional integration path. Delivery status, driver assignment, and customer information were locked inside unstructured PDF documents, so operations leadership had no live view of what was actually happening on the road.",
      solution:
        "Rather than wait on an IT project to open ERP access, I connected the OpenAI API to parse the PDF trip sheets directly — extracting invoice numbers, customer details, driver information, and cluster assignments automatically. I built a driver-facing interface where drivers update delivery status using the DO number they already had, and a live operations dashboard on top of that extracted data.",
      impact:
        "8,000+ deliveries tracked across 5 clusters. The pilot was validated by operations leadership, then paused when the central product team confirmed they were building an identical solution — which independently validated that the problem was real and worth solving.",
      keyFeatures: [
        "AI-based PDF parsing that turned an unstructured document into structured, usable data",
        "Driver-facing status-update interface requiring no new training beyond an existing document number",
        "Live operations dashboard for cluster-level delivery visibility",
      ],
      techStack: ["React", "OpenAI API", "Python", "Firebase", "PDF Parsing"],
      challenges: [
        "Trip sheet formatting was inconsistent across drivers and clusters, which made extraction reliability a real engineering problem",
        "No ERP access meant every workaround had to be built and validated without official system support",
        "Driving adoption from drivers who had never used a digital status-update tool before",
      ],
      learnings: [
        "A hard data-access constraint is often solvable by using AI on the unstructured output the system already produces, instead of waiting for the access itself",
        "When central teams independently build the same solution, that's a signal the problem-finding was correct — not a wasted effort",
      ],
      nextSteps:
        "Would extend to automated exception flagging — surfacing deliveries that are late or off-route without anyone needing to check the dashboard manually.",
    },
    tags: ["AI", "Product Engineering", "OpenAI API", "Operations"],
  },
];

// Helper function to get case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

// Helper function to get all case studies
export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

