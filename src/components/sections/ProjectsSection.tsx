import { memo, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { projectsData } from '@/data/projects';
import { Project } from '@/types/portfolio';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard = memo(({ project, index, isVisible }: ProjectCardProps) => {
    if (!isVisible) {
      return <div className="h-64 bg-muted-foreground/5 rounded-lg animate-pulse" />;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <span
            className={`px-3 py-1 rounded-full text-xs font-dev font-medium border ${
              project.status === 'In Development'
                ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                : 'bg-green-500/10 text-green-600 border-green-500/20'
            }`}
          >
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
            rel="noopener noreferrer"
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
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg font-dev font-medium hover:scale-105 transition-all duration-300 group"
            >
              Explore Project
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';

const ProjectsSection = memo(() => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-6"
          >
            Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground font-dev text-base sm:text-lg max-w-2xl mx-auto mb-8"
          >
            Production-ready solutions built with modern technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <a
              href="https://status.neevets.website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-border bg-background text-foreground rounded-xl font-dev font-medium hover:scale-105 hover:bg-muted/50 transition-all duration-300 group shadow-md"
            >
              <Activity className="w-4 h-4 mr-2 text-green-500" />
              Status
            </a>

            <a
              href="https://github.com/neevets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-xl font-dev font-medium hover:scale-105 transition-all duration-300 group shadow-md"
            >
              View All Projects
            </a>

            <a
              href="https://fiverr.com/neevetsio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-xl font-dev font-medium hover:scale-105 transition-all duration-300 group shadow-xl shadow-green-500/20"
            >
              Hire me on Fiverr
            </a>
          </motion.div>
        </div>

        <div className="space-y-12 md:space-y-16 mb-20">
          {projectsData.map((project, index) => (
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
