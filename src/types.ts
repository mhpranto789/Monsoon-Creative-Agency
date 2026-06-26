export interface ProjectMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Creative' | 'Experiential';
  type: string;
  year: string;
  description: string;
  imageUrl: string;
  stats?: { label: string; value: string };
  campaignGoals?: string[];
  // Rich interactive Spotlight fields
  tagline?: string;
  galleryImages?: string[];
  metricsDetail?: ProjectMetric[];
  clientQuote?: { text: string; author: string; role: string };
  timeline?: string;
  channelsUsed?: string[];
  youtubeId?: string;
}

export interface Client {
  id: string;
  name: string;
  logoText: string;
  industry: string;
  bgImage?: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  highlightWords: string[]; // for custom styling or animations
}

export interface ContactInquiry {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  message: string;
}

export interface Leader {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
  tag?: string;
  location?: string;
}

