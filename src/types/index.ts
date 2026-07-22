export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
    icon: string;
    color?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  image: string;
  badge?: string;
  highlights: string[];
  isInteractiveDemo?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  type: 'education' | 'experience' | 'hackathon';
  bullets: string[];
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  badge: string;
  icon: string;
  stat?: string;
  statLabel?: string;
}

export interface PersonalData {
  name: string;
  title: string;
  college: string;
  department: string;
  experience: string;
  careerObjective: string;
  typingTitles: string[];
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  leetcode?: string;
  profileImage?: string;
  cgpa?: string;
}
