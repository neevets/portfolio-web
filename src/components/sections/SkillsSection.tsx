import { memo, useMemo, useState, useCallback, useEffect } from 'react';
import { skillsData } from '@/data/skills';
import { motion } from 'framer-motion';
import { PreloadedSkillIcon } from '@/components/ui/preloaded-skill-icon';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Skill } from '@/types/portfolio';

const SkillCard = memo<{
  skill: Skill;
  isVisible: boolean;
}>(({ skill, isVisible }) => {
  const styleProps = useMemo(() => {
    const skillColor = skill.color;
    return {
      skillColor,
      iconColor: skillColor,
    };
  }, [skill.color]);

  if (!isVisible) {
    return <div className="skill-card-placeholder" style={{ minHeight: '90px' }} />;
  }

  return (
    <div
      className={`skill-card-optimized group opacity-0 animate-skill-fade-in ${skill.name === 'Vercel' ? 'vercel-skill-card' : ''}`}
      style={{ 
        '--skill-color': styleProps.skillColor,
      } as React.CSSProperties & { '--skill-color': string }}
    >
      <div className="relative">
        <div 
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center text-muted-foreground transition-all duration-300 sm:group-hover:scale-110 relative z-10"
          style={{ color: styleProps.iconColor }}
        >
          <PreloadedSkillIcon name={skill.icon} />
        </div>
      </div>

      <div className="text-center">
        <h4 className="text-xs sm:text-sm font-dev font-medium text-foreground sm:group-hover:text-foreground transition-colors duration-300 mb-1 sm:mb-2 flex items-center justify-center min-h-[1.5rem] z-10 relative">
          {skill.name}
        </h4>
        <div className="opacity-0 transform translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out">
          <span 
            className={`inline-flex items-center justify-center min-w-[70px] sm:min-w-[88px] px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border backdrop-blur-sm ${skill.name === 'Vercel' ? 'vercel-level-pill' : ''}`}
            style={{ 
              color: styleProps.skillColor,
              borderColor: `${styleProps.skillColor}50`,
              backgroundColor: `${styleProps.skillColor}15`,
            }}
          >
            {skill.level}
          </span>
        </div>
      </div>
    </div>
  );
});

SkillCard.displayName = 'SkillCard';

const SkillsSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px 0px'
  });

  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const allSkills = useMemo(() => Object.entries(skillsData), []);

  const handleCategoryVisible = useCallback((categoryIndex: number) => {
    setVisibleCategories(prev => {
      if (prev.has(categoryIndex)) return prev;
      return new Set([...prev, categoryIndex]);
    });
  }, []);

  const toggleCategory = useCallback((category: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(category)) {
        next.delete(category);
      } else {
        next.add(category);
      }
      return next;
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
              <div className="category-header flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center flex-1">
                  <h3 className="text-[0.95rem] min-[390px]:text-base sm:text-xl md:text-2xl lg:text-3xl font-dev font-light text-foreground mr-2 min-[390px]:mr-3 sm:mr-6 leading-tight break-words">
                    {category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-foreground/50 to-transparent" />
                </div>
                {skills.length > 5 && (
                  <button
                    onClick={() => toggleCategory(category)}
                    className="ml-4 px-3 py-1 text-[10px] sm:text-xs font-dev font-medium bg-foreground/5 hover:bg-foreground/10 text-foreground/60 hover:text-foreground transition-all duration-300 rounded-full border border-foreground/10 flex items-center gap-1.5"
                  >
                    <span>{expandedCategories.has(category) ? 'See less' : `See more (${skills.length - 5})`}</span>
                    <motion.span
                      animate={{ rotate: expandedCategories.has(category) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[8px] sm:text-[10px]"
                    >
                      ▼
                    </motion.span>
                  </button>
                )}
              </div>

              <motion.div
                layout
                className="grid grid-cols-2 min-[520px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 min-[390px]:gap-2.5 sm:gap-3 md:gap-4"
              >
                {(expandedCategories.has(category) ? skills : skills.slice(0, 5)).map((skill) => (
                  <motion.div layout key={skill.name}>
                    <SkillCard
                      skill={skill as Skill}
                      isVisible={visibleCategories.has(categoryIndex)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { SkillsSection };
export default SkillsSection;
