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
    title: "Kent Engine",
    description: "Free and open-source game engine for high-performance 2D and 3D development. Built in Rust for zero-cost abstractions and memory safety. Uses Wgpu for cross-platform GPU rendering, Winit for window and input handling, GLAM for SIMD math, and an ECS architecture to keep game logic cache-friendly",
    repo: "https://github.com/neevets/kent-engine",
    tech: ["Rust", "Wgpu", "Winit", "Glam", "ECS"],
    category: "Engine",
    status: "In Development"
  },
  {
    title: "Drew Bot",
    description: "Anti-raid Discord bot for community safety at scale. Redis handles rate-limit state in-memory, PostgreSQL stores audit logs and ban records long-term, and Sentry provides real-time visibility into unhandled exceptions.",
    repo: "https://github.com/neevets/drew-bot",
    productionUrl: "https://drewbot.site",
    tech: ["Python", "PostgreSQL", "Redis", "Sentry", "discord.py"],
    category: "Security",
    status: "Production"
  },
  {
    title: "Guroi Bot",
    description: "Opsec bot written in Rust for heavy raid traffic. Tokio handles concurrent gateway events without thread overhead, and Serenity's event model keeps each handler isolated",
    repo: "https://github.com/neevets/guroi-bot",
    tech: ["Rust", "Tokio", "Serenity"],
    category: "Security",
    status: "Production"
  }
];
