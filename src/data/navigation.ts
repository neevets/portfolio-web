import { Home, User, Code, FolderOpen, GraduationCap, Mail, BriefcaseBusiness } from 'lucide-react';
import { NavItem } from '@/types/portfolio';

export const navItems: NavItem[] = [
  { label: 'Home', id: 'hero', icon: Home },
  { label: 'About Me', id: 'about', icon: User },
  { label: 'Skills', id: 'skills', icon: Code },
  { label: 'Services', id: 'services', icon: BriefcaseBusiness },
  { label: 'Projects', id: 'projects', icon: FolderOpen },
  { label: 'Certificates', id: 'courses', icon: GraduationCap },
  { label: 'Get in Touch', id: 'getintouch', icon: Mail }
];
