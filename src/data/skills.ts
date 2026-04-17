import { Skill } from '@/types/portfolio';

export const skillsData: Record<string, Skill[]> = {
  'Languages': [
    { name: 'Golang', icon: 'Go', color: 'hsl(199, 89%, 48%)', level: 'Mid level' },
    { name: 'Python', icon: 'Python', color: 'hsl(45, 100%, 50%)', level: 'Mid level' },
    { name: 'TypeScript', icon: 'TypeScript', color: 'hsl(211, 60%, 45%)', level: 'Junior' },
  ],
  'Frameworks & Libraries': [
    { name: 'Fiber', icon: 'Fiber', color: 'hsl(193, 100%, 42%)', level: 'Mid level' },
    { name: 'FastAPI', icon: 'FastAPI', color: 'hsl(173, 80%, 40%)', level: 'Mid level' },
    { name: 'React', icon: 'React', color: 'hsl(193, 95%, 68%)', level: 'Junior' },
    { name: 'Tailwind', icon: 'Tailwind', color: 'hsl(198, 93%, 60%)', level: 'Trainee' },
  ],
  'Databases': [
    { name: 'PostgreSQL', icon: 'PostgreSQL', color: 'hsl(205, 81%, 33%)', level: 'Mid level' },
    { name: 'Redis', icon: 'Redis', color: 'hsl(12, 100%, 50%)', level: 'Junior' },
  ],
  'DevOps': [
    { name: 'Git', icon: 'Git', color: 'hsl(14, 100%, 53%)', level: 'Mid level' },
    { name: 'Docker', icon: 'Docker', color: 'hsl(210, 79%, 46%)', level: 'Mid level' },
    { name: 'Cloudflare', icon: 'Cloudflare', color: 'hsl(31, 100%, 55%)', level: 'Mid level' },
    { name: 'Kubernetes', icon: 'Kubernetes', color: 'hsl(212, 100%, 50%)', level: 'Junior' },
    { name: 'Sentry', icon: 'Sentry', color: 'hsl(257, 31%, 43%)', level: 'Mid level' },
  ],
};
