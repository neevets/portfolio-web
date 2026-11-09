import type { Skill } from "@/types/portfolio";

export const skillsData: Record<string, Skill[]> = {
  Languages: [
    { name: "Golang", icon: "Go", color: "hsl(199, 89%, 48%)", level: "Mid level" },
    { name: "Python", icon: "Python", color: "#FFD43B", level: "Mid level" },
    { name: "TypeScript", icon: "TypeScript", color: "hsl(211, 60%, 45%)", level: "Junior" },
    { name: "Rust", icon: "Rust", color: "#D34516", level: "Junior" },
  ],
  "Runtimes & Frameworks": [
    { name: "Node.js", icon: "Node", color: "#5FA04E", level: "Junior" },
    { name: "Fiber", icon: "Fiber", color: "hsl(193, 100%, 42%)", level: "Mid level" },
    { name: "FastAPI", icon: "FastAPI", color: "hsl(173, 80%, 40%)", level: "Mid level" },
    { name: "NestJS", icon: "NestJS", color: "#E0234E", level: "Junior" },
    { name: "Fastify", icon: "Fastify", color: "#202020", level: "Junior" },
    { name: "React", icon: "React", color: "hsl(193, 95%, 68%)", level: "Junior" },
    { name: "Tailwind CSS", icon: "Tailwind", color: "hsl(198, 93%, 60%)", level: "Trainee" },
  ],
  Databases: [
    { name: "PostgreSQL", icon: "PostgreSQL", color: "hsl(205, 81%, 33%)", level: "Mid level" },
    { name: "Redis", icon: "Redis", color: "#D82C20", level: "Junior" },
  ],
  "Cloud & Infrastructure": [
    { name: "Docker", icon: "Docker", color: "#2496ED", level: "Mid level" },
    { name: "Kubernetes", icon: "Kubernetes", color: "hsl(212, 100%, 50%)", level: "Junior" },
    { name: "Nginx", icon: "Nginx", color: "#009639", level: "Junior" },
    { name: "Apache", icon: "Apache", color: "#D22128", level: "Junior" },
    { name: "Cloudflare", icon: "Cloudflare", color: "hsl(31, 100%, 55%)", level: "Mid level" },
    { name: "AWS", icon: "AWS", color: "#FF9900", level: "Junior" },
    { name: "Oracle", icon: "Oracle", color: "#C74634", level: "Mid level" },
    { name: "Azure", icon: "Azure", color: "#0078D4", level: "Junior" },
  ],
  "DevOps, Testing & Observability": [
    { name: "Git", icon: "Git", color: "hsl(14, 100%, 53%)", level: "Mid level" },
    { name: "GitHub", icon: "GitHub", color: "#181616", level: "Mid level" },
    { name: "Jest", icon: "Jest", color: "#99425B", level: "Junior" },
    { name: "Bash", icon: "Bash", color: "#4EAA25", level: "Junior" },
    { name: "PowerShell", icon: "PowerShell", color: "#5391FE", level: "Junior" },
    { name: "Grafana", icon: "Grafana", color: "#F46800", level: "Junior" },
    { name: "Prometheus", icon: "Prometheus", color: "#E6522C", level: "Junior" },
    { name: "OpenTelemetry", icon: "OpenTelemetry", color: "#F5A800", level: "Junior" },
    { name: "Sentry", icon: "Sentry", color: "#6A5FC1", level: "Mid level" },
  ],
  "APIs, Security & Tooling": [
    { name: "Swagger", icon: "Swagger", color: "#85EA2D", level: "Junior" },
    { name: "Auth0", icon: "Auth0", color: "#EB5424", level: "Junior" },
    { name: "JWT", icon: "JWT", color: "#D63AFF", level: "Junior" },
    { name: "MCP", icon: "MCP", color: "#4B91F1", level: "Junior" },
    { name: "JSON", icon: "JSON", color: "#505050", level: "Mid level" },
    { name: "Vite", icon: "Vite", color: "#646CFF", level: "Junior" },

    { name: "ESLint", icon: "ESLint", color: "#4B32C3", level: "Junior" },
    { name: "Prettier", icon: "Prettier", color: "#F7B93E", level: "Junior" },
    { name: "Postman", icon: "Postman", color: "#FF6C37", level: "Junior" },
  ],
};
