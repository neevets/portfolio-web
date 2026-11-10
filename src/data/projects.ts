import type { Project } from '@/types/portfolio';

export const projectsData: Project[] = [
  {
    title: "Portfolio Web",
    description: "Personal developer portfolio built with React and TypeScript. The project uses Vite for its build tooling and is deployed on Vercel, with Cloudflare providing edge and DNS services.",
    repo: "https://github.com/neevets/portfolio-web",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Vercel", "Cloudflare"],
    status: "Production"
  },
  {
    title: "Drew Bot",
    description: "Discord bot written in Go, built with Fiber for HTTP services, PostgreSQL for persistent data, and Redis for caching and fast access to frequently used state.",
    productionUrl: "https://drewbot.xyz",
    tech: ["Go", "Fiber", "Redis", "PostgreSQL"],
    status: "Production"
  },
  {
    title: "Guroi Bot",
    description: "Discord bot project written in Rust, using Twilight for Discord connectivity, Moka for in-memory caching, and Fluent for localization. The project focuses on modular command handling and multilingual support.",
    tech: ["Rust", "Twilight", "Moka", "Fluent"],
    status: "In Development"
  }
];
