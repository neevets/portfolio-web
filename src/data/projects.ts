import { Project } from '@/types/portfolio';

export const projectsData: Project[] = [
  {
    title: "Portfolio Web",
    description: "Personal site built with React and TypeScript, deployed on Vercel with Cloudflare handling edge caching and DDoS protection",
    repo: "https://github.com/neevets/portfolio-web",
    tech: ["React", "TypeScript", "Tailwind", "Vercel", "Cloudflare"],
    category: "Frontend",
    status: "Production"
  },
  {
    title: "Drew Bot",
    description: "An open-source, high-performance multipurpose bot. Go provides memory safety and high concurrency, Fiber ensures low-latency execution, while PostgreSQL and Redis enable scalable state management and ACID-compliant logging",
    repo: "https://github.com/neevets/drew-bot",
    productionUrl: "https://drewbot.site",
    tech: ["Go", "Fiber", "Redis", "PostgreSQL"],
    category: "Security",
    status: "Production"
  },
  {
    title: "Guroi Bot",
    description: "An opsec bot written in Rust, designed for scalability, multilingual support, and robust command handling. Twilight powers the gateway layer, Moka provides in-memory caching, and Fluent enable internationalization",
    repo: "https://github.com/neevets/guroi-bot",
    tech: ["Rust", "Twilight", "Moka", "Fluent"],
    category: "Security",
    status: "In Development"
  }
];
