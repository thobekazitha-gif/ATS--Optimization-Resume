export interface ContactInfo {
  location: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  link: {
    url: string;
    text: string;
  };
  details: string[];
}

export interface Skill {
  category: string;
  items: string;
}

export interface Education {
  degree: string;
  period: string;
  link?: string;
}

export interface ResumeData {
  name: string;
  tagline: string;
  contact: ContactInfo;
  summary: string;
  skills: Skill[];
  projects: Project[];
  education: Education[];
  objective: string;
  additionalInfo: {
    interests: string;
    portfolio?: {
      url: string;
      text: string;
    };
    availability: string;
  };
}
