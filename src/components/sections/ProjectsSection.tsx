import { memo, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Project {
  title: string;
  description: string;
  repo: string;
  productionUrl?: string;
  tech: string[];
  category: string;
  status: string;
}

const ProjectCard = memo<{ project: Project; index: number; isVisible: boolean }>(
  ({ project, index, isVisible }) => {
    if (!isVisible) {
      return <div className="h-64 bg-muted-foreground/5 rounded-lg animate-pulse" />;
    }

    return (
      <div className="fade-in-up text-center" style={{ animationDelay: `${index * 300}ms` }}>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="px-3 py-1 bg-green-500/10 rounded-full text-xs font-dev font-medium text-green-600 border border-green-500/20">
            {project.status}
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-dev font-medium mb-4 text-foreground">
          {project.title}
        </h3>

        <p className="text-muted-foreground font-dev text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-dev font-medium text-foreground border border-border/50 hover:border-foreground/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={project.repo}
            target="_blank"
            className="inline-flex items-center px-6 py-3 border border-border bg-background text-foreground rounded-lg font-dev font-medium hover:scale-105 hover:bg-muted/50 transition-all duration-300 group"
          >
            View source
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {project.productionUrl && (
            <a
              href={project.productionUrl}
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg font-dev font-medium hover:scale-105 transition-all duration-300 group"
            >
              Explore Project
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

const ProjectsSection = memo(() => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const featuredProjects = useMemo<Project[]>(() => [
    {
      title: "Portfolio Web",
      description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations and optimized performance.",
      repo: "https://github.com/neevets/portfolio-web",
      tech: ["React", "TypeScript", "Tailwind", "Vercel", "Cloudflare"],
      category: "Frontend",
      status: "Production"
    },
    {
      title: "Drew Bot",
      description: "Advanced anti-raid Discord bot with automated moderation, real-time threat detection, and comprehensive server protection systems.",
      repo: "https://github.com/neevets/drew-bot",
      productionUrl: "https://drewbot.site",
      tech: ["Python", "PostgreSQL", "Redis", "Sentry", "discord.py"],
      category: "Security",
      status: "Production"
    },
    {
      title: "Guroi Bot",
      description: "Security-focused bot built in Rust, designed for automated threat detection, moderation hardening, and resilient incident response workflows.",
      repo: "https://github.com/neevets/guroi-bot",
      productionUrl: "https://github.com/neevets/guroi-bot",
      tech: ["Rust", "Tokio", "Serenity"],
      category: "Security",
      status: "Production"
    }
  ], []);

  return (
    <section 
      ref={ref}
      id="projects" 
      className="py-20 md:py-32 px-4 sm:px-6 relative overflow-hidden z-10"
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="dot-pattern absolute inset-0"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-6 fade-in-up">
            Projects
          </h2>

          <p className="text-muted-foreground font-dev text-base sm:text-lg max-w-2xl mx-auto fade-in-up mb-8" style={{animationDelay: '200ms'}}>
            Production-ready solutions built with modern technologies
          </p>
          
          {/* ESTE BOTÓN NO SE TOCA */}
          <div className="fade-in-up flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center" style={{animationDelay: '400ms'}}>
            <a
              href="https://status.neevets.website"
              target="_blank"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-border bg-background text-foreground rounded-xl font-dev font-medium hover:scale-105 hover:bg-muted/50 transition-all duration-300 group shadow-md"
            >
              Status
            </a>

            <a
              href="https://github.com/neevets"
              target="_blank"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-xl font-dev font-medium hover:scale-105 transition-all duration-300 group shadow-md"
            >
              View All Projects
            </a>

            <a
              href="https://fiverr.com/neevetsio"
              target="_blank"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-xl font-dev font-medium hover:scale-105 transition-all duration-300 group shadow-xl shadow-green-500/20"
            >
              Hire me on Fiverr
            </a>
          </div>
        </div>

        <div className="space-y-12 md:space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export { ProjectsSection };
