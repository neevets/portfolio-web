import { LucideIcon } from 'lucide-react';
import { IconName } from '@/components/icons';

export interface Project {
  title: string;
  description: string;
  repo: string;
  productionUrl?: string;
  tech: string[];
  category: string;
  status: string;
}

export interface Skill {
  name: string;
  icon: IconName;
  color: string;
  level: string;
}

export interface Course {
  title: string;
  institution: string;
  date: string;
  skills: string[];
  certificateUrl: string;
}

export interface NavItem {
  label: string;
  id: string;
  icon: LucideIcon;
}
