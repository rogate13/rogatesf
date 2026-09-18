import type { Achievement, Certification, Experience, Project, SkillGroup } from "@/types/content";

export type ThemePreset = {
  id: string;
  label: string;
  description: string;
  scheme: "light" | "dark";
  preview: [string, string, string];
  variables: Record<string, string>;
};

export const portfolio = {
  metadata: {
    title: "Rogate Sola Fide | Web Application Developer",
    description:
      "Portfolio of Rogate Sola Fide, a web application developer focused on business web systems, application development, databases, and IT support.",
  },

  profile: {
    name: "Rogate Sola Fide",
    shortName: "RSF",
    role: "Web Application Developer",
    stackLine: "PHP · CodeIgniter · MySQL · JavaScript",
    location: "Jakarta, Indonesia",
    email: "gate20.kent@gmail.com",
    phone: "+62 812-1243-5026",
    resumePath: "/documents/rogate-sola-fide-cv.pdf",
    logoPath: "/brand/rsf-logo.svg",
    introduction:
      "I build web applications and internal business systems that turn operational requirements into structured digital workflows.",
    professionalSummary:
      "My work sits between application development, database design, system support, and workflow improvement. I focus on understanding how a business actually works, then translating that process into a usable digital system.",
  },

  hero: {
    eyebrow: "Web Application Developer · Jakarta, Indonesia",
    dialogue: {
      greeting: "Hi, I'm Rogate.",
      role: "Web application developer.",
      question: "What can I build for you today?",
      prompts: [
        "An internal business system?",
        "A workflow automation tool?",
        "A data-driven web application?",
        "A dashboard for your operations?",
        "A website that supports real business goals?",
      ],
      interactionHint: "Move your cursor. Tap the visual. Keep exploring.",
    },
    scrollCue: {
      label: "Explore now",
      text: "Scroll into the work — I’ll walk you through how I think, build, and solve.",
    },
    focusLabel: "Current focus",
    focusValue: "Business systems · Web apps · Application support",
  },

  sections: {
    about: {
      eyebrow: "Profile",
      title: "I develop around real operational needs.",
      body:
        "From requirements and data structures to implementation, troubleshooting, and user support, I work across the full path of a business application.",
    },
    services: {
      eyebrow: "What I do",
      title: "Turning business requirements into working digital systems.",
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects that show how I think, build, and solve.",
      description:
        "A compact selection of business systems, corporate websites, education platforms, and operational web projects. No extra pages — everything is available here.",
    },
    skills: {
      eyebrow: "Technical toolkit",
      title: "Technologies and capabilities used across development and support work.",
    },
    experience: {
      eyebrow: "Experience",
      title: "Development, application support, and day-to-day IT operations.",
    },
    credentials: {
      eyebrow: "Credentials",
      title: "Education, certifications, and selected programming achievements.",
    },
    contact: {
      eyebrow: "Let's work together",
      title: "Have a system, workflow, or web application you want to develop?",
      body:
        "I am open to conversations around web application development, business systems, backend development, database-driven applications, and application support.",
    },
  },

  scrollNarrative: {
    label: "Rogate here",
    messages: {
      about: "Nice to meet you. Here’s the way I approach real operational problems — from understanding the workflow to making it usable.",
      services: "If a process still feels manual, repetitive, or hard to track, this is usually where I start turning it into a system.",
      projects: "Want to see the work itself? These projects show how I translate business needs into interfaces, data flows, and working applications.",
      skills: "Under the hood, these are the tools and capabilities I use to keep the product practical, maintainable, and useful.",
      experience: "Good systems come from understanding day-to-day operations. These roles shaped how I build and support technology in the real world.",
      credentials: "A little background before we talk about your next idea — education, certifications, and programming achievements that support the journey.",
      contact: "You’ve seen how I work. Now I’m curious about your side: what should we build, simplify, or improve next?",
    },
  },

  services: [
    {
      title: "Web Application Development",
      description: "Build and maintain web-based applications around business and system requirements.",
    },
    {
      title: "Database & Data Workflow",
      description: "Design data structures, mappings, queries, and reporting views for operational systems.",
    },
    {
      title: "Application & IT Support",
      description: "Troubleshoot applications, software, hardware, and user issues while improving support workflows.",
    },
    {
      title: "Workflow Improvement",
      description: "Translate manual operational processes into more structured digital workflows.",
    },
  ],

  footer: {
    text: "Made with love by Rogate Sola Fide.",
  },

  ui: {
    downloadResume: "Download CV",
    changeThemeLabel: "Change color theme",
    themeMenuTitle: "Choose an atmosphere",
    themeButtonLabel: "Theme",
  },
} as const;

export const projects: Project[] = [
  {
    slug: "collection-data-management-monitoring-system",
    title: "Collection Data Management & Monitoring System",
    organization: "Mega Auto Central Finance",
    category: "Business System",
    role: "IT Support / Application Development",
    period: "Feb 2026 - Apr 2026",
    featured: true,
    summary:
      "Internal data management application for collection monitoring, consumer tracking, collector assignment, hierarchy, payment status, and operational reporting.",
    overview: [
      "Designed and developed an internal application to centralize operational collection data.",
    ],
    problem: [
      "Operational data checking needed a more structured workflow for understanding collector responsibilities, consumer accounts, hierarchy, and payment condition.",
    ],
    solution: [
      "Created structured relationships between collectors, consumers, direct supervisors, and area leaders, then added payment monitoring and reporting views.",
    ],
    responsibilities: [
      "Application development",
      "Database structuring",
      "Collector-to-consumer mapping",
      "Payment monitoring",
      "Reporting",
      "Data validation",
      "Troubleshooting and user guidance",
    ],
    features: [
      "Collector and consumer data",
      "Collector-to-consumer mapping",
      "Supervisor hierarchy",
      "Area leadership mapping",
      "Installment categorization",
      "Payment status monitoring",
      "Collection reporting",
    ],
    technologies: [],
    impact: [
      "Supported the transformation of manual data checking into a more structured digital workflow.",
      "Improved operational visibility of collector assignments and consumer payment status.",
    ],
    cover: null,
    gallery: [],
    links: { live: null, repository: null },
    seo: {
      title: "Collection Data Management & Monitoring System | Rogate Sola Fide",
      description: "Internal collection monitoring and data management application.",
    },
  },
  {
    slug: "asam-jawa-cap-gunung",
    title: "Asam Jawa Cap Gunung",
    organization: "Bintang Jaya Production",
    category: "Business Website",
    role: "Web Developer",
    period: "2025 - Present",
    featured: true,
    summary:
      "Business and product website for Asam Jawa Cap Gunung, including industry-focused presentation, product content, and editorial sections.",
    overview: ["Business website development and ongoing maintenance."],
    responsibilities: ["Website development", "Maintenance", "Content and interface updates", "Technical troubleshooting"],
    features: ["Business presentation", "Product content", "Blog", "Contact access"],
    technologies: [],
    impact: [],
    cover: {
      src: "/images/projects/asam-jawa/01.webp",
      alt: "Asam Jawa Cap Gunung website portfolio screenshot",
      title: "Business website",
    },
    gallery: [
      { src: "/images/projects/asam-jawa/01.webp", alt: "Asam Jawa Cap Gunung website main and blog views" },
      { src: "/images/projects/asam-jawa/02.webp", alt: "Asam Jawa Cap Gunung industry and product website view" },
    ],
    links: { live: null, repository: null },
    seo: { title: "Asam Jawa Cap Gunung | Rogate Sola Fide", description: "Business website project." },
  },
  {
    slug: "pusat-kerupuk-indonesia",
    title: "Pusat Kerupuk Indonesia",
    organization: "Bintang Jaya Production",
    category: "Business Website",
    role: "Web Developer",
    period: "2025 - Present",
    featured: true,
    summary:
      "Product-oriented business website with catalog content, editorial sections, customer information, and company contact presentation.",
    overview: ["Multi-section website supporting product discovery and business information."],
    responsibilities: ["Website development", "Maintenance", "Content structure", "Technical updates"],
    features: ["Product catalog", "Product menu", "Blog", "Customer comments", "About", "Contact"],
    technologies: [],
    impact: [],
    cover: {
      src: "/images/projects/pusat-kerupuk/01.webp",
      alt: "Pusat Kerupuk Indonesia product catalog screenshot",
      title: "Product catalog",
    },
    gallery: [
      { src: "/images/projects/pusat-kerupuk/01.webp", alt: "Pusat Kerupuk Indonesia homepage and products" },
      { src: "/images/projects/pusat-kerupuk/02.webp", alt: "Pusat Kerupuk Indonesia menu and company information" },
      { src: "/images/projects/pusat-kerupuk/03.webp", alt: "Pusat Kerupuk Indonesia blog and contact page" },
    ],
    links: { live: null, repository: null },
    seo: { title: "Pusat Kerupuk Indonesia | Rogate Sola Fide", description: "Business website project." },
  },
  {
    slug: "korpora-consulting",
    title: "Korpora Consulting",
    organization: "Korpora Trainindo Consultant",
    category: "Corporate Website",
    role: "IT Staff",
    period: "Jul 2024 - Mar 2025",
    featured: true,
    summary:
      "Corporate consulting website with training programs, mission, testimonials, client trust, and lead-generation content.",
    overview: ["Corporate web application maintenance and support as part of the IT role."],
    responsibilities: ["Application maintenance", "Troubleshooting", "Stability support", "Internal application development"],
    features: ["Program presentation", "Testimonials", "Client logos", "Lead-generation content"],
    technologies: [],
    impact: [],
    cover: {
      src: "/images/projects/korpora-consulting/01.webp",
      alt: "Korpora Consulting corporate website screenshot",
      title: "Corporate website",
    },
    gallery: [
      { src: "/images/projects/korpora-consulting/01.webp", alt: "Korpora Consulting homepage" },
      { src: "/images/projects/korpora-consulting/02.webp", alt: "Korpora Consulting client and contact section" },
    ],
    links: { live: null, repository: null },
    seo: { title: "Korpora Consulting | Rogate Sola Fide", description: "Corporate website project." },
  },
  {
    slug: "onlearnid",
    title: "OnLearnID",
    organization: "Portfolio Application Project",
    category: "Education Platform",
    role: "Web / Application Developer",
    period: "Portfolio project",
    featured: true,
    summary:
      "Education platform interface with authentication, dashboard navigation, schedules, course content, and grade visualization.",
    overview: ["Application interface showcased across login, dashboard, schedule, subject, and grade-related views."],
    responsibilities: ["Application interface development", "System presentation"],
    features: ["Login", "Dashboard", "Schedule", "Course content", "Grade visualization", "Navigation"],
    technologies: [],
    impact: [],
    cover: {
      src: "/images/projects/onlearnid/01.webp",
      alt: "OnLearnID education platform screenshot",
      title: "Education platform",
    },
    gallery: [
      { src: "/images/projects/onlearnid/01.webp", alt: "OnLearnID dashboard and login views" },
      { src: "/images/projects/onlearnid/02.webp", alt: "OnLearnID schedule and grade interface" },
      { src: "/images/projects/onlearnid/03.webp", alt: "OnLearnID additional interface" },
    ],
    links: { live: null, repository: null },
    seo: { title: "OnLearnID | Rogate Sola Fide", description: "Education platform project." },
  },
  {
    slug: "tamarind-indonesia",
    title: "Tamarind Indonesia",
    organization: "Portfolio Website Project",
    category: "Product Website",
    role: "Web Developer",
    period: "Portfolio project",
    featured: true,
    summary:
      "Product listing website with category navigation, product cards, pricing presentation, and business information.",
    overview: ["Product-focused web presentation."],
    responsibilities: ["Web development", "Website presentation"],
    features: ["Product listing", "Category navigation", "Product cards", "Business information"],
    technologies: [],
    impact: [],
    cover: {
      src: "/images/projects/tamarind-indonesia/01.webp",
      alt: "Tamarind Indonesia product website screenshot",
      title: "Product website",
    },
    gallery: [{ src: "/images/projects/tamarind-indonesia/01.webp", alt: "Tamarind Indonesia product cards" }],
    links: { live: null, repository: null },
    seo: { title: "Tamarind Indonesia | Rogate Sola Fide", description: "Product website project." },
  },
  {
    slug: "hkbp-slipi",
    title: "HKBP Slipi",
    organization: "HKBP Slipi",
    category: "Community Website",
    role: "Web Developer",
    period: "Portfolio project",
    featured: false,
    summary: "Church community website with worship information, livestream content, schedules, and contact details.",
    overview: ["Community website project."],
    responsibilities: ["Website development", "Website presentation"],
    features: ["Worship information", "Livestream", "Schedules", "Contact"],
    technologies: [],
    impact: [],
    cover: { src: "/images/projects/hkbp-slipi/01.webp", alt: "HKBP Slipi website homepage screenshot" },
    gallery: [
      { src: "/images/projects/hkbp-slipi/01.webp", alt: "HKBP Slipi homepage" },
      { src: "/images/projects/hkbp-slipi/02.webp", alt: "HKBP Slipi footer and contact area" },
    ],
    links: { live: null, repository: null },
    seo: { title: "HKBP Slipi | Rogate Sola Fide", description: "Community website project." },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "Backend Development",
    description: "Server-side applications and business logic.",
    skills: ["PHP", "CodeIgniter", "SQL", "MySQL"],
  },
  {
    name: "Frontend Development",
    description: "Responsive web interfaces and interaction.",
    skills: ["JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    name: "Database",
    description: "Data structure, mapping, and query performance.",
    skills: ["MySQL", "MongoDB", "Database Design", "SQL Query Optimization", "Data Mapping"],
  },
  {
    name: "Tools & Platforms",
    description: "Development, hosting, and collaboration tools.",
    skills: ["GitHub", "Microsoft Office 365", "Excel", "cPanel", "XAMPP"],
  },
  {
    name: "IT & Systems",
    description: "Operational support for applications, users, and systems.",
    skills: [
      "Hardware/Software Troubleshooting",
      "User Support",
      "Application Support",
      "System Maintenance",
      "System Documentation",
      "Workflow Improvement",
      "Data Processing",
      "Reporting",
      "Basic Networking",
    ],
  },
  {
    name: "Additional",
    description: "Additional technologies currently used or studied.",
    skills: ["Python", "Laravel (basic knowledge)"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Bintang Jaya Production",
    role: "Web Developer",
    period: "Apr 2025 - Present",
    summary:
      "Develop and maintain web applications while supporting business requirements, database performance, website maintenance, and technical needs.",
    responsibilities: [
      "Web application development",
      "Business and system requirement analysis",
      "Database design and optimization",
      "Testing, debugging, and maintenance",
      "Technical troubleshooting",
    ],
    technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "GitHub"],
  },
  {
    company: "Korpora Trainindo Consultant",
    role: "IT Staff",
    period: "Jul 2024 - Mar 2025",
    summary:
      "Supported web applications and daily IT operations while developing internal applications for workflow improvement and automation.",
    responsibilities: ["Application maintenance", "System troubleshooting", "IT support", "Internal application development"],
  },
  {
    company: "PT BYTEDEVICE",
    role: "System Support",
    period: "Jan 2024 - Jul 2024",
    summary:
      "Handled internal technical support across software, hardware, user assistance, application issues, and support documentation.",
    responsibilities: ["Technical support", "Software configuration", "User support", "Bug reporting", "Documentation"],
  },
  {
    company: "Forum Human Capital Indonesia / FHCI BUMN",
    role: "IT Staff Intern",
    period: "Feb 2023 - Aug 2023",
    summary:
      "Supported information systems used for professional certification administration, salary data, invoice planning, cash flow, attendance, and related processes.",
    responsibilities: ["Information system maintenance", "Administrative system support", "User support"],
  },
];

export const education = [
  {
    institution: "Universitas Sumatera Utara",
    degree: "Bachelor of Information Technology",
    period: "Graduated Nov 2021",
    details: ["GPA 3.86 / 4.00", "Cum Laude", "Laboratory Assistant · Oct 2019 - Aug 2023"],
  },
] as const;

export const certifications: Certification[] = [
  { name: "Junior Web Developer", issuer: "BNSP", year: "2023", featured: true },
  { name: "Back-End Developer - Fresh Graduate Academy", issuer: "Digital Talent Scholarship", year: "2022", featured: true },
  { name: "IT Support", issuer: "Google / Digital Talent Scholarship", year: "2022", featured: true },
  { name: "Database Design and Programming with SQL", issuer: "Digital Talent Scholarship - KOMINFO", featured: true },
];

export const achievements: Achievement[] = [
  { title: "2nd Winner, PHP Computer Language Competition", organization: "EKRUT Contest", year: "2020" },
  { title: "3rd Winner, Mobile Engineer Android Competition", organization: "EKRUT Contest", year: "2020" },
  { title: "2nd Runner Up, Backend Database Management Competition", organization: "EKRUT Contest", year: "2021" },
];

export const themeConfig = {
  defaultTheme: "aurora",
  storageKey: "rogate-portfolio-theme",
} as const;

export const themes: ThemePreset[] = [
  {
    id: "aurora",
    label: "Aurora",
    description: "Deep navy with mint and electric-blue highlights.",
    scheme: "dark",
    preview: ["#07111f", "#4ce6b3", "#7aa7ff"],
    variables: {
      background: "#07111f",
      "background-secondary": "#0a1626",
      surface: "rgba(12, 27, 45, 0.72)",
      "surface-solid": "#0c1b2d",
      "surface-elevated": "rgba(17, 36, 58, 0.88)",
      text: "#f4f8ff",
      muted: "#a7b8ca",
      subtle: "#71869d",
      border: "rgba(173, 196, 220, 0.16)",
      accent: "#4ce6b3",
      "accent-2": "#7aa7ff",
      "accent-contrast": "#04130e",
      strong: "#f4f8ff",
      "strong-text": "#07111f",
      nav: "rgba(7, 17, 31, 0.78)",
      "glow-one": "rgba(76, 230, 179, 0.18)",
      "glow-two": "rgba(122, 167, 255, 0.17)",
      shadow: "0 26px 90px rgba(0, 0, 0, 0.30)",
    },
  },
  {
    id: "violet",
    label: "Nebula",
    description: "Near-black violet with purple and cyan energy.",
    scheme: "dark",
    preview: ["#0d0920", "#b781ff", "#50d9ff"],
    variables: {
      background: "#0d0920",
      "background-secondary": "#15102c",
      surface: "rgba(29, 20, 57, 0.72)",
      "surface-solid": "#1b1436",
      "surface-elevated": "rgba(39, 27, 73, 0.88)",
      text: "#faf7ff",
      muted: "#c1b5d4",
      subtle: "#87799f",
      border: "rgba(205, 184, 255, 0.17)",
      accent: "#b781ff",
      "accent-2": "#50d9ff",
      "accent-contrast": "#140823",
      strong: "#faf7ff",
      "strong-text": "#0d0920",
      nav: "rgba(13, 9, 32, 0.80)",
      "glow-one": "rgba(183, 129, 255, 0.20)",
      "glow-two": "rgba(80, 217, 255, 0.15)",
      shadow: "0 26px 90px rgba(0, 0, 0, 0.34)",
    },
  },
  {
    id: "ember",
    label: "Ember",
    description: "Graphite with amber and coral energy.",
    scheme: "dark",
    preview: ["#16100e", "#ffb45c", "#ff6b6b"],
    variables: {
      background: "#16100e",
      "background-secondary": "#201612",
      surface: "rgba(47, 31, 24, 0.72)",
      "surface-solid": "#2b1d17",
      "surface-elevated": "rgba(59, 38, 28, 0.90)",
      text: "#fff8f1",
      muted: "#d5bca9",
      subtle: "#997c6b",
      border: "rgba(255, 205, 166, 0.16)",
      accent: "#ffb45c",
      "accent-2": "#ff6b6b",
      "accent-contrast": "#211006",
      strong: "#fff8f1",
      "strong-text": "#16100e",
      nav: "rgba(22, 16, 14, 0.80)",
      "glow-one": "rgba(255, 180, 92, 0.18)",
      "glow-two": "rgba(255, 107, 107, 0.14)",
      shadow: "0 26px 90px rgba(0, 0, 0, 0.34)",
    },
  },
  {
    id: "paper",
    label: "Paper",
    description: "Clean light mode with emerald and blue accents.",
    scheme: "light",
    preview: ["#f7f9fc", "#0f9f74", "#4878e8"],
    variables: {
      background: "#f7f9fc",
      "background-secondary": "#eef3f8",
      surface: "rgba(255, 255, 255, 0.82)",
      "surface-solid": "#ffffff",
      "surface-elevated": "rgba(255, 255, 255, 0.95)",
      text: "#102034",
      muted: "#52657a",
      subtle: "#7b8b9c",
      border: "rgba(44, 65, 89, 0.14)",
      accent: "#0f9f74",
      "accent-2": "#4878e8",
      "accent-contrast": "#ffffff",
      strong: "#102034",
      "strong-text": "#ffffff",
      nav: "rgba(247, 249, 252, 0.82)",
      "glow-one": "rgba(15, 159, 116, 0.13)",
      "glow-two": "rgba(72, 120, 232, 0.12)",
      shadow: "0 22px 70px rgba(31, 50, 72, 0.10)",
    },
  },
];

export const visualConfig = {
  hero3D: {
    enabled: true,
    particleCountDesktop: 1100,
    particleCountMobile: 360,
    maxPixelRatio: 1.6,
    rotationSpeed: 0.0016,
    pointerStrength: 0.38,
    geometryDetail: 2,
    orbOpacity: 0.42,
    ringOpacity: 0.32,
    particlesOpacity: 0.62,
    satelliteCount: 7,
    clickPulse: 0.22,
  },
} as const;
