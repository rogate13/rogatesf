export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  enabled?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

export type Project = {
  slug: string;
  title: string;
  organization: string;
  category: string;
  role: string;
  period: string;
  featured: boolean;
  summary: string;
  overview: string[];
  problem?: string[];
  solution?: string[];
  responsibilities: string[];
  features: string[];
  technologies: string[];
  impact: string[];
  cover: ProjectImage | null;
  gallery: ProjectImage[];
  links: {
    live?: string | null;
    repository?: string | null;
  };
  seo: {
    title: string;
    description: string;
  };
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  employmentType?: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  technologies?: string[];
};

export type SkillGroup = {
  name: string;
  description?: string;
  skills: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  image?: ProjectImage;
  featured?: boolean;
};

export type Achievement = {
  title: string;
  organization: string;
  year: string;
  image?: ProjectImage;
};
