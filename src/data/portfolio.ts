import type { Achievement, Certification, Experience, Project, SkillGroup } from "@/types/content";

export type Locale = "id" | "en";

export type ThemePreset = {
  id: string;
  scheme: "light" | "dark";
  preview: [string, string, string];
  variables: Record<string, string>;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  details: string[];
};

export const languageConfig = {
  defaultLocale: "id" as Locale,
  storageKey: "rogate-portfolio-language",
  options: [
    {
      id: "id" as Locale,
      shortLabel: "ID",
      label: "Bahasa Indonesia",
      flagPath: "/brand/flags/flag-id.svg",
      htmlLang: "id",
    },
    {
      id: "en" as Locale,
      shortLabel: "EN",
      label: "English",
      flagPath: "/brand/flags/flag-en.svg",
      htmlLang: "en",
    },
  ],
} as const;

const idPortfolio = {
  metadata: {
    title: "Rogate Sola Fide | Web Application Developer",
    description:
      "Portofolio Rogate Sola Fide, web application developer yang berfokus pada sistem web bisnis, pengembangan aplikasi, database, dan dukungan IT.",
  },
  profile: {
    name: "Rogate Sola Fide",
    shortName: "RSF",
    role: "Pengembang Aplikasi Web",
    stackLine: "PHP · Python · SQL · JavaScript",
    location: "Jakarta, Indonesia",
    email: "gate20.kent@gmail.com",
    phone: "+62 812-1243-5026",
    resumePath: "/documents/rogate-sola-fide-cv.pdf",
    logoPath: "/brand/rsf-logo.svg",
    introduction:
      "Saya membangun aplikasi web dan sistem bisnis internal yang mengubah kebutuhan operasional menjadi alur kerja digital yang lebih terstruktur.",
    professionalSummary:
      "Pekerjaan saya berada di antara pengembangan aplikasi, desain database, dukungan sistem, dan perbaikan alur kerja. Saya fokus memahami bagaimana bisnis benar-benar berjalan, lalu menerjemahkan proses tersebut menjadi sistem digital yang mudah digunakan.",
  },
  hero: {
    eyebrow: "Pengembang Aplikasi Web · Jakarta, Indonesia",
    dialogue: {
      availabilityLabel: "Siap untuk membangun",
      greeting: "Hai, saya Rogate.",
      role: "Pengembang aplikasi web.",
      question: "Apa yang bisa saya kembangkan untuk Anda hari ini?",
      prompts: [
        "Sistem bisnis internal?",
        "Otomasi alur kerja?",
        "Aplikasi web berbasis data?",
        "Dashboard untuk operasional Anda?",
        "Website yang mendukung tujuan bisnis nyata?",
      ],
      interactionHint: "Gerakkan kursor. Sentuh visualnya. Lanjutkan eksplorasi.",
    },
    explorePopup: {
      kicker: "Siap saat Anda siap",
      title: "Ingin melihat bagaimana saya mengubah ide menjadi sistem yang bekerja?",
      text: "Mari saya ajak melihat cara saya berpikir, membangun, memecahkan masalah, dan mendukung produk digital di dunia nyata.",
      buttonLabel: "Mulai eksplorasi",
      targetId: "about",
    },
    orbitLabels: ["APLIKASI WEB", "SISTEM BISNIS", "ALUR DATA"],
    focusLabel: "Fokus saat ini",
    focusValue: "Sistem bisnis · Aplikasi web · Dukungan aplikasi",
  },
  sections: {
    about: {
      eyebrow: "Profil",
      title: "Saya mengembangkan solusi berdasarkan kebutuhan operasional nyata.",
      body:
        "Mulai dari kebutuhan dan struktur data sampai implementasi, troubleshooting, dan dukungan pengguna, saya bekerja di sepanjang proses sebuah aplikasi bisnis.",
    },
    services: {
      eyebrow: "Yang saya kerjakan",
      title: "Mengubah kebutuhan bisnis menjadi sistem digital yang benar-benar dapat digunakan.",
    },
    projects: {
      eyebrow: "Karya pilihan",
      title: "Project yang menunjukkan cara saya berpikir, membangun, dan menyelesaikan masalah.",
      description:
        "Pilihan ringkas dari sistem bisnis, website korporat, platform edukasi, dan project web operasional. Tanpa halaman tambahan — semuanya dapat dieksplorasi di sini.",
    },
    skills: {
      eyebrow: "Perangkat teknis",
      title: "Teknologi dan kemampuan yang saya gunakan dalam development dan support.",
    },
    experience: {
      eyebrow: "Pengalaman",
      title: "Development, application support, mengajar IT, pengolahan data, dan operasional IT sehari-hari.",
    },
    credentials: {
      eyebrow: "Kredensial",
      title: "Pendidikan, sertifikasi, dan pencapaian programming pilihan.",
    },
    contact: {
      eyebrow: "Mari bekerja bersama",
      title: "Punya sistem, alur kerja, atau aplikasi web yang ingin dikembangkan?",
      body:
        "Saya terbuka untuk berdiskusi mengenai web application development, sistem bisnis, backend development, aplikasi berbasis database, dan application support.",
    },
  },
  scrollNarrative: {
    label: "Rogate di sini",
    messages: {
      about: "Senang berkenalan. Di sini Anda bisa melihat cara saya memahami masalah operasional nyata — mulai dari alur kerja sampai menjadi sistem yang mudah digunakan.",
      services: "Jika sebuah proses masih manual, berulang, atau sulit dipantau, biasanya dari sinilah saya mulai mengubahnya menjadi sistem yang lebih terstruktur.",
      projects: "Ingin melihat hasil kerjanya? Project berikut menunjukkan cara saya menerjemahkan kebutuhan bisnis menjadi interface, alur data, dan aplikasi yang bekerja.",
      skills: "Di balik tampilannya, inilah teknologi dan kemampuan yang saya gunakan agar produk tetap praktis, terawat, dan berguna.",
      experience: "Sistem yang baik lahir dari pemahaman operasional sehari-hari. Pengalaman-pengalaman ini membentuk cara saya membangun dan mendukung teknologi.",
      credentials: "Sedikit latar belakang sebelum kita membicarakan ide Anda berikutnya — pendidikan, sertifikasi, dan pencapaian programming yang mendukung perjalanan saya.",
      contact: "Anda sudah melihat cara saya bekerja. Sekarang saya ingin tahu dari sisi Anda: apa yang perlu kita bangun, sederhanakan, atau tingkatkan berikutnya?",
    },
  },
  services: [
    {
      title: "Pengembangan Aplikasi Web",
      description: "Membangun dan memelihara aplikasi berbasis web sesuai kebutuhan bisnis dan sistem.",
    },
    {
      title: "Database & Alur Data",
      description: "Merancang struktur data, mapping, query, dan tampilan laporan untuk kebutuhan operasional.",
    },
    {
      title: "Application & IT Support",
      description: "Menangani troubleshooting aplikasi, software, hardware, dan masalah pengguna sambil memperbaiki alur support.",
    },
    {
      title: "Perbaikan Workflow",
      description: "Mengubah proses operasional manual menjadi alur kerja digital yang lebih terstruktur.",
    },
  ],
  footer: { text: "Dibuat dengan cinta oleh Rogate Sola Fide." },
  ui: {
    downloadResume: "Unduh CV",
    changeThemeLabel: "Ganti tema warna",
    themeMenuTitle: "Pilih suasana",
    themeButtonLabel: "Tema",
    changeLanguageLabel: "Ganti bahasa",
    languageMenuTitle: "Pilih bahasa",
    languageButtonLabel: "Bahasa",
    logoAlt: "Logo RSF",
    noteFrom: "Catatan dari",
    projectSystemLabel: "Sistem",
    educationLabel: "Pendidikan",
    certificationsLabel: "Sertifikasi pilihan",
    achievementsLabel: "Pencapaian programming",
    emailLabel: "Email",
    themeOptions: {
      aurora: { label: "Aurora", description: "Navy gelap dengan aksen mint dan biru elektrik." },
      violet: { label: "Nebula", description: "Violet hampir hitam dengan energi ungu dan cyan." },
      ember: { label: "Ember", description: "Grafit dengan energi amber dan coral." },
      paper: { label: "Paper", description: "Mode terang bersih dengan aksen emerald dan biru." },
    } as Record<string, { label: string; description: string }>,
  },
};

const enPortfolio = {
  metadata: {
    title: "Rogate Sola Fide | Web Application Developer",
    description:
      "Portfolio of Rogate Sola Fide, a web application developer focused on business web systems, application development, databases, and IT support.",
  },
  profile: {
    name: "Rogate Sola Fide",
    shortName: "RSF",
    role: "Web Application Developer",
    stackLine: "PHP · Python · SQL · JavaScript",
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
      availabilityLabel: "Available to build",
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
    explorePopup: {
      kicker: "Ready when you are",
      title: "Want to see how I turn ideas into working systems?",
      text: "Let me walk you through the way I think, build, solve, and support real-world digital products.",
      buttonLabel: "Explore now",
      targetId: "about",
    },
    orbitLabels: ["WEB APPS", "BUSINESS SYSTEMS", "DATA WORKFLOWS"],
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
      title: "Development, application support, IT teaching, data work, and day-to-day IT operations.",
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
  footer: { text: "Made with love by Rogate Sola Fide." },
  ui: {
    downloadResume: "Download CV",
    changeThemeLabel: "Change color theme",
    themeMenuTitle: "Choose an atmosphere",
    themeButtonLabel: "Theme",
    changeLanguageLabel: "Change language",
    languageMenuTitle: "Choose language",
    languageButtonLabel: "Language",
    logoAlt: "RSF logo",
    noteFrom: "A note from",
    projectSystemLabel: "System",
    educationLabel: "Education",
    certificationsLabel: "Selected certifications",
    achievementsLabel: "Programming achievements",
    emailLabel: "Email",
    themeOptions: {
      aurora: { label: "Aurora", description: "Deep navy with mint and electric-blue highlights." },
      violet: { label: "Nebula", description: "Near-black violet with purple and cyan energy." },
      ember: { label: "Ember", description: "Graphite with amber and coral energy." },
      paper: { label: "Paper", description: "Clean light mode with emerald and blue accents." },
    } as Record<string, { label: string; description: string }>,
  },
};

const idProjects: Project[] = [
  {
    slug: "mcd-support-data-reporting",
    title: "MCD Support, Data Collection & Pelaporan",
    organization: "Mega Central Finance",
    category: "Data & Application Support",
    role: "MCD Support",
    period: "Feb 2026 - Apr 2026",
    featured: true,
    summary:
      "Mendukung operasional collector, pengguna SiMobile, pengolahan data, validasi visit, pelaporan, monitoring kehadiran, dan persiapan akhir bulan.",
    overview: [
      "Menangani data operasional dan dukungan aplikasi untuk aktivitas collection dengan menggabungkan user support, reporting, validasi, dan persiapan data.",
    ],
    problem: [
      "Operasional collection membutuhkan data RAW dan Masking yang akurat, user support yang cepat, monitoring validasi visit, dan laporan yang terstruktur untuk tim terkait.",
    ],
    solution: [
      "Mengolah data operasional, menyiapkan analisis performa collector dan visit, memantau status validasi dan approval, serta menyiapkan laporan DB SiMobile dan kehadiran.",
    ],
    responsibilities: [
      "Monitoring check-in dan kehadiran collector",
      "User support MCD / SiMobile",
      "Pengolahan data RAW dan Masking",
      "Analisis performa collector dan visit",
      "Monitoring validasi visit dan approval koordinator",
      "Pelaporan DB SiMobile",
      "Persiapan data closing akhir bulan dan meeting",
    ],
    features: [
      "Monitoring kehadiran collector",
      "Pengolahan data RAW dan Masking",
      "Analisis performa visit",
      "Tracking validasi dan approval",
      "Pelaporan DB SiMobile",
      "Dukungan laporan akhir bulan",
    ],
    technologies: ["Excel", "SQL", "Python", "PHP"],
    impact: [
      "Mendukung pelaporan operasional dan persiapan data yang lebih terstruktur untuk tim terkait collection.",
      "Membantu menjaga visibilitas atas kehadiran collector, validasi visit, dan status pelaporan operasional.",
    ],
    cover: null,
    gallery: [],
    links: { live: null, repository: null },
    seo: {
      title: "MCD Support, Data Collection & Pelaporan | Rogate Sola Fide",
      description: "Pengolahan data collection, reporting, dan dukungan aplikasi SiMobile di Mega Central Finance.",
    },
  },
  {
    slug: "asam-jawa-cap-gunung",
    title: "Asam Jawa Cap Gunung",
    organization: "Bintang Jaya Production",
    category: "Website Bisnis",
    role: "Web Developer",
    period: "Apr 2025 - Des 2025",
    featured: true,
    summary:
      "Website bisnis dan produk Asam Jawa Cap Gunung dengan presentasi berorientasi industri, konten produk, dan bagian editorial.",
    overview: ["Pengembangan dan pemeliharaan website bisnis."],
    responsibilities: ["Pengembangan website", "Maintenance", "Pembaruan konten dan interface", "Troubleshooting teknis"],
    features: ["Presentasi bisnis", "Konten produk", "Blog", "Akses kontak"],
    technologies: [],
    impact: [],
    cover: {
      src: "/images/projects/asam-jawa/01.webp",
      alt: "Tampilan portfolio website Asam Jawa Cap Gunung",
      title: "Website bisnis",
    },
    gallery: [
      { src: "/images/projects/asam-jawa/01.webp", alt: "Tampilan utama dan blog Asam Jawa Cap Gunung" },
      { src: "/images/projects/asam-jawa/02.webp", alt: "Tampilan website industri dan produk Asam Jawa Cap Gunung" },
    ],
    links: { live: null, repository: null },
    seo: { title: "Asam Jawa Cap Gunung | Rogate Sola Fide", description: "Project website bisnis." },
  },
  {
    slug: "pusat-kerupuk-indonesia",
    title: "Pusat Kerupuk Indonesia",
    organization: "Bintang Jaya Production",
    category: "Website Bisnis",
    role: "Web Developer",
    period: "Apr 2025 - Des 2025",
    featured: true,
    summary:
      "Website bisnis berorientasi produk dengan katalog, bagian editorial, informasi pelanggan, dan informasi kontak perusahaan.",
    overview: ["Website multi-section untuk mendukung penemuan produk dan informasi bisnis."],
    responsibilities: ["Pengembangan website", "Maintenance", "Struktur konten", "Pembaruan teknis"],
    features: ["Katalog produk", "Menu produk", "Blog", "Komentar pelanggan", "Tentang", "Kontak"],
    technologies: [],
    impact: [],
    cover: {
      src: "/images/projects/pusat-kerupuk/01.webp",
      alt: "Tampilan katalog produk Pusat Kerupuk Indonesia",
      title: "Katalog produk",
    },
    gallery: [
      { src: "/images/projects/pusat-kerupuk/01.webp", alt: "Homepage dan produk Pusat Kerupuk Indonesia" },
      { src: "/images/projects/pusat-kerupuk/02.webp", alt: "Menu dan informasi perusahaan Pusat Kerupuk Indonesia" },
      { src: "/images/projects/pusat-kerupuk/03.webp", alt: "Blog dan halaman kontak Pusat Kerupuk Indonesia" },
    ],
    links: { live: null, repository: null },
    seo: { title: "Pusat Kerupuk Indonesia | Rogate Sola Fide", description: "Project website bisnis." },
  },
  {
    slug: "korpora-consulting",
    title: "Korpora Consulting",
    organization: "Korpora Trainindo Consultant",
    category: "Website Korporat",
    role: "IT Staff",
    period: "Jul 2024 - Mar 2025",
    featured: true,
    summary:
      "Website consulting korporat dengan program training, misi, testimonial, kepercayaan klien, dan konten lead-generation.",
    overview: ["Pemeliharaan dan dukungan aplikasi web korporat sebagai bagian dari peran IT."],
    responsibilities: ["Pemeliharaan aplikasi", "Troubleshooting", "Dukungan stabilitas", "Pengembangan aplikasi internal"],
    features: ["Presentasi program", "Testimonial", "Logo klien", "Konten lead-generation"],
    technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "SQL", "IT Troubleshooting"],
    impact: [],
    cover: {
      src: "/images/projects/korpora-consulting/01.webp",
      alt: "Tampilan website korporat Korpora Consulting",
      title: "Website korporat",
    },
    gallery: [
      { src: "/images/projects/korpora-consulting/01.webp", alt: "Homepage Korpora Consulting" },
      { src: "/images/projects/korpora-consulting/02.webp", alt: "Bagian klien dan kontak Korpora Consulting" },
    ],
    links: { live: null, repository: null },
    seo: { title: "Korpora Consulting | Rogate Sola Fide", description: "Project website korporat." },
  },
  {
    slug: "onlearnid",
    title: "OnLearnID",
    organization: "Proyek Aplikasi Portofolio",
    category: "Platform Edukasi",
    role: "Web / Application Developer",
    period: "Proyek portofolio",
    featured: true,
    summary:
      "Interface platform edukasi dengan autentikasi, navigasi dashboard, jadwal, konten pembelajaran, dan visualisasi nilai.",
    overview: ["Interface aplikasi yang menampilkan login, dashboard, jadwal, mata pelajaran, dan visualisasi nilai."],
    responsibilities: ["Pengembangan interface aplikasi", "Presentasi sistem"],
    features: ["Login", "Dashboard", "Jadwal", "Konten pembelajaran", "Visualisasi nilai", "Navigasi"],
    technologies: [],
    impact: [],
    cover: {
      src: "/images/projects/onlearnid/01.webp",
      alt: "Tampilan platform edukasi OnLearnID",
      title: "Platform edukasi",
    },
    gallery: [
      { src: "/images/projects/onlearnid/01.webp", alt: "Dashboard dan login OnLearnID" },
      { src: "/images/projects/onlearnid/02.webp", alt: "Interface jadwal dan nilai OnLearnID" },
      { src: "/images/projects/onlearnid/03.webp", alt: "Interface tambahan OnLearnID" },
    ],
    links: { live: null, repository: null },
    seo: { title: "OnLearnID | Rogate Sola Fide", description: "Project platform edukasi." },
  },
  {
    slug: "tamarind-indonesia",
    title: "Tamarind Indonesia",
    organization: "Proyek Website Portofolio",
    category: "Website Produk",
    role: "Web Developer",
    period: "Proyek portofolio",
    featured: true,
    summary:
      "Website listing produk dengan navigasi kategori, kartu produk, presentasi harga, dan informasi bisnis.",
    overview: ["Presentasi web yang berfokus pada produk."],
    responsibilities: ["Pengembangan web", "Presentasi website"],
    features: ["Listing produk", "Navigasi kategori", "Kartu produk", "Informasi bisnis"],
    technologies: [],
    impact: [],
    cover: {
      src: "/images/projects/tamarind-indonesia/01.webp",
      alt: "Tampilan website produk Tamarind Indonesia",
      title: "Website produk",
    },
    gallery: [{ src: "/images/projects/tamarind-indonesia/01.webp", alt: "Kartu produk Tamarind Indonesia" }],
    links: { live: null, repository: null },
    seo: { title: "Tamarind Indonesia | Rogate Sola Fide", description: "Project website produk." },
  },
  {
    slug: "hkbp-slipi",
    title: "HKBP Slipi",
    organization: "HKBP Slipi",
    category: "Website Komunitas",
    role: "Web Developer",
    period: "Proyek portofolio",
    featured: false,
    summary: "Website komunitas gereja dengan informasi ibadah, livestream, jadwal, dan detail kontak.",
    overview: ["Project website komunitas."],
    responsibilities: ["Pengembangan website", "Presentasi website"],
    features: ["Informasi ibadah", "Livestream", "Jadwal", "Kontak"],
    technologies: [],
    impact: [],
    cover: { src: "/images/projects/hkbp-slipi/01.webp", alt: "Tampilan homepage website HKBP Slipi" },
    gallery: [
      { src: "/images/projects/hkbp-slipi/01.webp", alt: "Homepage HKBP Slipi" },
      { src: "/images/projects/hkbp-slipi/02.webp", alt: "Footer dan area kontak HKBP Slipi" },
    ],
    links: { live: null, repository: null },
    seo: { title: "HKBP Slipi | Rogate Sola Fide", description: "Project website komunitas." },
  },
];

const enProjects: Project[] = [
  {
    slug: "mcd-support-data-reporting",
    title: "MCD Support, Collection Data & Reporting",
    organization: "Mega Central Finance",
    category: "Data & Application Support",
    role: "MCD Support",
    period: "Feb 2026 - Apr 2026",
    featured: true,
    summary:
      "Supported collector operations, SiMobile users, data processing, visit validation, reporting, attendance monitoring, and month-end preparation.",
    overview: [
      "Handled operational data and application support for collection activities, combining user support, reporting, validation, and data preparation.",
    ],
    problem: [
      "Collection operations required accurate RAW and Masking data, timely user support, visit validation monitoring, and structured reports for related teams.",
    ],
    solution: [
      "Processed operational data, prepared collector performance and visit analysis, monitored validation and approval status, and produced DB SiMobile and attendance reports.",
    ],
    responsibilities: [
      "Collector check-in and attendance monitoring",
      "MCD / SiMobile user support",
      "RAW and Masking data processing",
      "Collector performance and visit analysis",
      "Visit validation and coordinator approval monitoring",
      "DB SiMobile reporting",
      "Month-end closing and meeting data preparation",
    ],
    features: [
      "Collector attendance monitoring",
      "RAW and Masking data processing",
      "Visit performance analysis",
      "Validation and approval tracking",
      "DB SiMobile reporting",
      "Month-end reporting support",
    ],
    technologies: ["Excel", "SQL", "Python", "PHP"],
    impact: [
      "Supported more structured operational reporting and data preparation for collection-related teams.",
      "Helped maintain visibility of collector attendance, visit validation, and operational reporting status.",
    ],
    cover: null,
    gallery: [],
    links: { live: null, repository: null },
    seo: {
      title: "MCD Support, Collection Data & Reporting | Rogate Sola Fide",
      description: "Operational collection data, reporting, and SiMobile application support at Mega Central Finance.",
    },
  },
  {
    slug: "asam-jawa-cap-gunung",
    title: "Asam Jawa Cap Gunung",
    organization: "Bintang Jaya Production",
    category: "Business Website",
    role: "Web Developer",
    period: "Apr 2025 - Dec 2025",
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
    period: "Apr 2025 - Dec 2025",
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
    technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "SQL", "IT Troubleshooting"],
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

const idSkillGroups: SkillGroup[] = [
  { name: "Pengembangan Backend", description: "Aplikasi server-side dan logika bisnis.", skills: ["PHP", "CodeIgniter", "SQL", "MySQL"] },
  { name: "Pengembangan Frontend", description: "Interface web responsif dan interaksi pengguna.", skills: ["JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
  { name: "Database", description: "Struktur data, mapping, dan performa query.", skills: ["MySQL", "MongoDB", "Database Design", "SQL Query Optimization", "Data Mapping"] },
  { name: "Tools & Platform", description: "Tools development, hosting, dan kolaborasi.", skills: ["GitHub", "Microsoft Office 365", "Excel", "cPanel", "XAMPP"] },
  {
    name: "IT & Sistem",
    description: "Dukungan operasional untuk aplikasi, pengguna, dan sistem.",
    skills: ["Hardware/Software Troubleshooting", "User Support", "Application Support", "System Maintenance", "System Documentation", "Workflow Improvement", "Data Processing", "Reporting", "Basic Networking"],
  },
  { name: "Tambahan", description: "Teknologi tambahan yang digunakan atau sedang dipelajari.", skills: ["Python", "Laravel (basic knowledge)"] },
];

const enSkillGroups: SkillGroup[] = [
  { name: "Backend Development", description: "Server-side applications and business logic.", skills: ["PHP", "CodeIgniter", "SQL", "MySQL"] },
  { name: "Frontend Development", description: "Responsive web interfaces and interaction.", skills: ["JavaScript", "HTML", "CSS", "Bootstrap", "Tailwind CSS"] },
  { name: "Database", description: "Data structure, mapping, and query performance.", skills: ["MySQL", "MongoDB", "Database Design", "SQL Query Optimization", "Data Mapping"] },
  { name: "Tools & Platforms", description: "Development, hosting, and collaboration tools.", skills: ["GitHub", "Microsoft Office 365", "Excel", "cPanel", "XAMPP"] },
  {
    name: "IT & Systems",
    description: "Operational support for applications, users, and systems.",
    skills: ["Hardware/Software Troubleshooting", "User Support", "Application Support", "System Maintenance", "System Documentation", "Workflow Improvement", "Data Processing", "Reporting", "Basic Networking"],
  },
  { name: "Additional", description: "Additional technologies currently used or studied.", skills: ["Python", "Laravel (basic knowledge)"] },
];

const idExperiences: Experience[] = [
  {
    company: "Timedoor Academy",
    role: "IT Teacher",
    period: "Jul 2026 - Sekarang",
    summary: "Mengajar programming dan computational thinking melalui sesi belajar interaktif, membimbing project siswa, dan menyesuaikan penjelasan teknis berdasarkan tingkat kemampuan mereka.",
    responsibilities: ["Pengajaran programming dan computational thinking", "Mentoring project dan latihan coding", "Penjelasan konsep teknis", "Monitoring perkembangan siswa", "Manajemen kelas", "Pemecahan masalah teknis"],
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    company: "Mega Central Finance",
    role: "MCD Support",
    period: "Feb 2026 - Apr 2026",
    summary: "Mendukung operasional collector dan pengguna SiMobile sambil mengolah data RAW dan Masking, menyiapkan laporan performa, memantau validasi visit, dan mendukung persiapan data akhir bulan.",
    responsibilities: ["Monitoring check-in dan kehadiran collector", "User support MCD / SiMobile", "Pengolahan data RAW dan Masking", "Analisis performa collector dan visit", "Pelaporan DB SiMobile dan kehadiran", "Persiapan data akhir bulan"],
    technologies: ["Excel", "SQL", "Python", "PHP", "Data Processing", "Reporting", "Application Support"],
  },
  {
    company: "Bintang Jaya Production",
    role: "Web Developer",
    period: "Apr 2025 - Des 2025",
    summary: "Mengembangkan dan memelihara aplikasi web sambil mendukung kebutuhan bisnis, performa database, maintenance website, peningkatan backend, dan kebutuhan teknis.",
    responsibilities: ["Pengembangan aplikasi web", "Analisis kebutuhan bisnis dan sistem", "Desain dan optimasi database", "Testing, debugging, dan maintenance", "Peningkatan performa backend", "Troubleshooting teknis"],
    technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "SQL", "HTML", "CSS", "GitHub"],
  },
  {
    company: "Korpora Trainindo Consultant",
    role: "IT Staff",
    period: "Jul 2024 - Mar 2025",
    summary: "Memelihara aplikasi web, menangani troubleshooting sistem, mendukung hardware dan software, mengembangkan aplikasi internal, serta membantu workflow automation dan operasional IT harian.",
    responsibilities: ["Maintenance aplikasi web", "Troubleshooting sistem dan IT", "Dukungan hardware dan software", "Pengembangan aplikasi internal", "Workflow automation", "User dan application support"],
    technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "SQL", "Python", "HTML", "CSS", "GitHub", "IT Troubleshooting", "Hardware/Software Support", "Application Support", "System Maintenance", "User Support", "Workflow Improvement"],
  },
  {
    company: "PT BYTEDEVICE",
    role: "System Support",
    period: "Jan 2024 - Jul 2024",
    summary: "Menangani dukungan teknis internal untuk software, hardware, konfigurasi sistem, bantuan pengguna, masalah aplikasi, bug reporting, dan dokumentasi support.",
    responsibilities: ["Dukungan teknis dan sistem", "Instalasi dan konfigurasi software", "User support dan pelatihan dasar", "Bug reporting dan application support", "Dokumentasi support"],
    technologies: ["SQL", "Python", "IT Troubleshooting", "Software Configuration", "Application Support", "User Support", "System Maintenance", "Documentation"],
  },
  {
    company: "Forum Human Capital Indonesia / FHCI BUMN",
    role: "IT Staff Intern - Professional Certification Institution Human Capital Management",
    period: "Feb 2023 - Agu 2023",
    summary: "Memelihara sistem informasi sertifikasi profesi dan mendukung data gaji, perencanaan invoice, cash flow, kehadiran, proses administrasi, perbaikan sistem internal, dan pengguna.",
    responsibilities: ["Pemeliharaan sistem informasi", "Dukungan sistem administrasi", "Dukungan data gaji, invoice, cash flow, dan kehadiran", "Perbaikan sistem internal", "User dan application support", "IT troubleshooting"],
    technologies: ["PHP", "JavaScript", "SQL", "MySQL", "Python", "HTML", "CSS", "Excel", "Microsoft Office 365", "IT Troubleshooting", "Application Support", "System Maintenance", "User Support", "Data Processing", "Reporting"],
  },
];

const enExperiences: Experience[] = [
  {
    company: "Timedoor Academy",
    role: "IT Teacher",
    period: "Jul 2026 - Present",
    summary: "Teach programming and computational thinking through interactive learning sessions, guide student projects, and adapt technical explanations to different skill levels.",
    responsibilities: ["Programming and computational thinking instruction", "Project mentoring and coding exercises", "Technical concept explanation", "Student progress monitoring", "Classroom management", "Technical problem solving"],
    technologies: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    company: "Mega Central Finance",
    role: "MCD Support",
    period: "Feb 2026 - Apr 2026",
    summary: "Supported collector operations and SiMobile users while processing RAW and Masking data, preparing performance reports, monitoring visit validation, and supporting month-end data preparation.",
    responsibilities: ["Collector check-in and attendance monitoring", "MCD / SiMobile user support", "RAW and Masking data processing", "Collector performance and visit analysis", "DB SiMobile and attendance reporting", "Month-end data preparation"],
    technologies: ["Excel", "SQL", "Python", "PHP", "Data Processing", "Reporting", "Application Support"],
  },
  {
    company: "Bintang Jaya Production",
    role: "Web Developer",
    period: "Apr 2025 - Dec 2025",
    summary: "Developed and maintained web applications while supporting business requirements, database performance, website maintenance, backend improvements, and technical needs.",
    responsibilities: ["Web application development", "Business and system requirement analysis", "Database design and optimization", "Testing, debugging, and maintenance", "Backend performance improvement", "Technical troubleshooting"],
    technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "SQL", "HTML", "CSS", "GitHub"],
  },
  {
    company: "Korpora Trainindo Consultant",
    role: "IT Staff",
    period: "Jul 2024 - Mar 2025",
    summary: "Maintained web applications, troubleshot system issues, supported hardware and software, developed internal applications, and helped improve workflow automation and daily IT operations.",
    responsibilities: ["Web application maintenance", "System and IT troubleshooting", "Hardware and software support", "Internal application development", "Workflow automation", "User and application support"],
    technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL", "SQL", "Python", "HTML", "CSS", "GitHub", "IT Troubleshooting", "Hardware/Software Support", "Application Support", "System Maintenance", "User Support", "Workflow Improvement"],
  },
  {
    company: "PT BYTEDEVICE",
    role: "System Support",
    period: "Jan 2024 - Jul 2024",
    summary: "Handled internal technical support across software, hardware, system configuration, user assistance, application issues, bug reporting, and support documentation.",
    responsibilities: ["Technical and system support", "Software installation and configuration", "User support and basic training", "Bug reporting and application support", "Support documentation"],
    technologies: ["SQL", "Python", "IT Troubleshooting", "Software Configuration", "Application Support", "User Support", "System Maintenance", "Documentation"],
  },
  {
    company: "Forum Human Capital Indonesia / FHCI BUMN",
    role: "IT Staff Intern - Professional Certification Institution Human Capital Management",
    period: "Feb 2023 - Aug 2023",
    summary: "Maintained professional-certification information systems and supported salary data, invoice planning, cash flow, attendance, administrative processes, internal system improvements, and users.",
    responsibilities: ["Information system maintenance", "Administrative system support", "Salary, invoice, cash-flow, and attendance data support", "Internal system improvement", "User and application support", "IT troubleshooting"],
    technologies: ["PHP", "JavaScript", "SQL", "MySQL", "Python", "HTML", "CSS", "Excel", "Microsoft Office 365", "IT Troubleshooting", "Application Support", "System Maintenance", "User Support", "Data Processing", "Reporting"],
  },
];

const idEducation: EducationItem[] = [
  {
    institution: "Universitas Sumatera Utara",
    degree: "Sarjana Teknologi Informasi",
    period: "Lulus Nov 2021",
    details: ["IPK 3,86 / 4,00", "Cum Laude", "Asisten Laboratorium · Okt 2019 - Agu 2023"],
  },
];

const enEducation: EducationItem[] = [
  {
    institution: "Universitas Sumatera Utara",
    degree: "Bachelor of Information Technology",
    period: "Graduated Nov 2021",
    details: ["GPA 3.86 / 4.00", "Cum Laude", "Laboratory Assistant · Oct 2019 - Aug 2023"],
  },
];

const idCertifications: Certification[] = [
  { name: "Junior Web Developer", issuer: "BNSP", year: "2023", featured: true },
  { name: "Back-End Developer - Fresh Graduate Academy", issuer: "Digital Talent Scholarship", year: "2022", featured: true },
  { name: "IT Support", issuer: "Google / Digital Talent Scholarship", year: "2022", featured: true },
  { name: "Database Design and Programming with SQL", issuer: "Digital Talent Scholarship - KOMINFO", featured: true },
];

const enCertifications: Certification[] = [...idCertifications];

const idAchievements: Achievement[] = [
  { title: "Juara 2, Kompetisi Bahasa Pemrograman PHP", organization: "EKRUT Contest", year: "2020" },
  { title: "Juara 3, Kompetisi Mobile Engineer Android", organization: "EKRUT Contest", year: "2020" },
  { title: "Juara 2 Runner Up, Kompetisi Backend Database Management", organization: "EKRUT Contest", year: "2021" },
];

const enAchievements: Achievement[] = [
  { title: "2nd Winner, PHP Computer Language Competition", organization: "EKRUT Contest", year: "2020" },
  { title: "3rd Winner, Mobile Engineer Android Competition", organization: "EKRUT Contest", year: "2020" },
  { title: "2nd Runner Up, Backend Database Management Competition", organization: "EKRUT Contest", year: "2021" },
];

export const contentByLocale = {
  id: {
    portfolio: idPortfolio,
    projects: idProjects,
    skillGroups: idSkillGroups,
    experiences: idExperiences,
    education: idEducation,
    certifications: idCertifications,
    achievements: idAchievements,
  },
  en: {
    portfolio: enPortfolio,
    projects: enProjects,
    skillGroups: enSkillGroups,
    experiences: enExperiences,
    education: enEducation,
    certifications: enCertifications,
    achievements: enAchievements,
  },
};

export type PortfolioContent = (typeof contentByLocale)[Locale];
export const defaultContent = contentByLocale[languageConfig.defaultLocale];

export const themeConfig = {
  defaultTheme: "aurora",
  storageKey: "rogate-portfolio-theme",
} as const;

export const themes: ThemePreset[] = [
  {
    id: "aurora",
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
  ambient3D: {
    enabled: true,
    particleCountDesktop: 460,
    particleCountMobile: 170,
    maxPixelRatio: 1.35,
    maxOpacity: 0.34,
    rotationSpeed: 0.00115,
    orbOpacity: 0.24,
    ringOpacity: 0.18,
    particlesOpacity: 0.32,
  },
} as const;
