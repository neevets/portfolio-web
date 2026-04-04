import { memo, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { projectsData } from '@/data/projects';
import { contactData } from '@/data/contact';
import { ProjectCard } from '@/components/ui/project-card';
import { motion } from 'framer-motion';

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
              href={contactData.status}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-border bg-background text-foreground rounded-xl font-dev font-medium hover:scale-105 hover:bg-muted/50 transition-all duration-300 group shadow-md"
            >
              Status
            </a>

            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-xl font-dev font-medium hover:scale-105 transition-all duration-300 group shadow-md"
            >
              View All Projects
            </a>

            <a
              href={contactData.fiverr}
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
