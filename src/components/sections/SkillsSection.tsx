import { memo, useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { skillsData } from '@/data/skills';
import { PreloadedSkillIcon } from '@/components/ui/preloaded-skill-icon';

const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isIntersecting };
};

const SkillCard = memo<{
  skill: any;
  categoryIndex: number;
  skillIndex: number;
  isVisible: boolean;
}>(({ skill, isVisible }) => {
  const styleProps = useMemo(() => {
    const skillColor = skill.color;
    return {
      skillColor,
      iconColor: skillColor,
    };
  }, [skill.color, skill.name]);

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
        <div className="opacity-100 sm:opacity-0 transform translate-y-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out">
          <span 
            className={`inline-flex items-center justify-center min-w-[88px] px-2 py-1 rounded-full text-xs font-medium text-foreground/90 dark:text-foreground/90 border backdrop-blur-sm ${skill.name === 'Vercel' ? 'vercel-level-pill' : ''}`}
            style={{ 
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
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden z-10" 
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="dot-pattern absolute inset-0" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-8 sm:mb-12 lg:mb-16 text-center fade-in-up">
          Skills
        </h2>
        
        <div className="space-y-10 lg:space-y-14 fade-in-up" style={{ animationDelay: '300ms' }}>
          {allSkills.map(([category, skills], categoryIndex) => (
            <div key={category} className="skills-category-advanced">
              <div className="category-header">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-dev font-light text-foreground mr-4 sm:mr-6">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-foreground/50 to-transparent" />
              </div>
              
              <div className="grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3 md:gap-4">
                {skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    categoryIndex={categoryIndex}
                    skillIndex={index}
                    isVisible={visibleCategories.has(categoryIndex)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SkillsSection };
export default SkillsSection;
