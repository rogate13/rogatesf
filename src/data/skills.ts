import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    name: "Backend Development",
    description: "Server-side application development and business logic.",
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
