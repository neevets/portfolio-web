import { memo, useMemo, useState, useCallback, useEffect } from 'react';
import { skillsData } from '@/data/skills';
import { motion } from 'framer-motion';
import { SkillCard } from '@/components/ui/skill-card';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Skill } from '@/types/portfolio';

const SkillsSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px 0px'
  });

  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());

  const allSkills = useMemo(() => Object.entries(skillsData), []);

  const handleCategoryVisible = useCallback((categoryIndex: number) => {
    setVisibleCategories(prev => {
      if (prev.has(categoryIndex)) return prev;
      return new Set([...prev, categoryIndex]);
    });
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    allSkills.forEach((_, index) => {
      const timeout = setTimeout(() => {
        handleCategoryVisible(index);
      }, index * 300);
      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isIntersecting, allSkills, handleCategoryVisible]);

  return (
    <section 
      ref={ref}
      id="skills" 
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 relative overflow-hidden z-10" 
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="dot-pattern absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          Skills
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-10 lg:space-y-14"
        >
          {allSkills.map(([category, skills], categoryIndex) => (
            <div key={category} className="skills-category-advanced">
              <div className="category-header">
                <h3 className="text-[0.95rem] min-[390px]:text-base sm:text-xl md:text-2xl lg:text-3xl font-dev font-light text-foreground mr-2 min-[390px]:mr-3 sm:mr-6 leading-tight break-words">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-foreground/50 to-transparent" />
              </div>

              <div className="grid grid-cols-2 min-[520px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 min-[390px]:gap-2.5 sm:gap-3 md:gap-4">
                {skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill as Skill}
                    isVisible={visibleCategories.has(categoryIndex)}
                  />
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { SkillsSection };
export default SkillsSection;
