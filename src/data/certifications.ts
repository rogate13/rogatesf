import type { Certification } from "@/types/content";

export const certifications: Certification[] = [
  {
    name: "Junior Web Developer",
    issuer: "BNSP",
    year: "2023",
    featured: true,
    image: {
      src: "/images/certificates/bnsp-junior-web-developer.webp",
      alt: "BNSP Junior Web Developer certificate",
    },
  },
  {
    name: "Back-End Developer - Fresh Graduate Academy",
    issuer: "Digital Talent Scholarship",
    year: "2022",
    featured: true,
    image: {
      src: "/images/certificates/dts-backend-developer.webp",
      alt: "Digital Talent Scholarship Back-End Developer certificates",
    },
  },
  {
    name: "IT Support",
    issuer: "Google / Digital Talent Scholarship",
    year: "2022",
    featured: true,
    image: {
      src: "/images/certificates/google-it-support.webp",
      alt: "Google IT Support professional certificate",
    },
  },
  {
    name: "Database Design and Programming with SQL",
    issuer: "Digital Talent Scholarship - KOMINFO",
    featured: true,
  },
];
