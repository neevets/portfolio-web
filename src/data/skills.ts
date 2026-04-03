import { Skill } from '@/types/portfolio';

export const skillsData: Record<string, Skill[]> = {
  Languages: [
    { name: 'Go', icon: 'Go', color: 'hsl(199, 89%, 48%)', level: 'Mid level' },
    { name: 'Rust', icon: 'Rust', color: 'hsl(14, 75%, 45%)', level: 'Junior' },
    { name: 'Python', icon: 'Python', color: 'hsl(45, 100%, 50%)', level: 'Mid level' },
    { name: 'TypeScript', icon: 'TypeScript', color: 'hsl(211, 60%, 45%)', level: 'Junior' },
  ],
  'Frameworks & Libraries': [
    { name: 'Django', icon: 'Django', color: 'hsl(120, 48%, 20%)', level: 'Mid level' },
    { name: 'FastAPI', icon: 'FastAPI', color: 'hsl(173, 80%, 40%)', level: 'Mid level' },
    { name: 'NestJS', icon: 'NestJS', color: 'hsl(347, 75%, 51%)', level: 'Mid level' },
    { name: 'React', icon: 'React', color: 'hsl(193, 95%, 68%)', level: 'Junior' },
    { name: 'Tailwind', icon: 'Tailwind', color: 'hsl(198, 93%, 60%)', level: 'Trainee' },
  ],
  Databases: [
    { name: 'PostgreSQL', icon: 'PostgreSQL', color: 'hsl(205, 81%, 33%)', level: 'Mid level' },
    { name: 'SQLite', icon: 'SQLite', color: 'hsl(214, 73%, 51%)', level: 'Mid level' },
    { name: 'MongoDB', icon: 'MongoDB', color: 'hsl(120, 48%, 20%)', level: 'Mid level' },
    { name: 'Cassandra', icon: 'Cassandra', color: 'hsl(198, 83%, 38%)', level: 'Junior' },
    { name: 'Redis', icon: 'Redis', color: 'hsl(12, 100%, 50%)', level: 'Junior' },
  ],
  'Tools & Utils': [
    { name: 'Git', icon: 'Git', color: 'hsl(14, 100%, 53%)', level: 'Senior' },
    { name: 'VS Code', icon: 'VSCode', color: 'hsl(213, 89%, 64%)', level: 'Senior' },
    { name: 'CMake', icon: 'CMake', color: 'hsl(0, 100%, 50%)', level: 'Mid level' },
    { name: 'Docker', icon: 'Docker', color: 'hsl(210, 79%, 46%)', level: 'Mid level' },
    { name: 'Vercel', icon: 'Vercel', color: 'hsl(0, 0%, 0%)', level: 'Mid level' },
    { name: 'Netlify', icon: 'Netlify', color: 'hsl(176, 100%, 32%)', level: 'Mid level' },
    { name: 'Cloudflare', icon: 'Cloudflare', color: 'hsl(31, 100%, 55%)', level: 'Mid level' },
    { name: 'Postman', icon: 'Postman', color: 'hsl(24, 100%, 56%)', level: 'Mid level' },
    { name: 'Sentry', icon: 'Sentry', color: 'hsl(257, 31%, 43%)', level: 'Mid level' },
    { name: 'PuTTY', icon: 'Putty', color: 'hsl(0, 0%, 50%)', level: 'Mid level' },
  ],
};
