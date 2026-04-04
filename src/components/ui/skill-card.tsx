import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PreloadedSkillIcon } from '@/components/ui/preloaded-skill-icon';
import { Skill } from '@/types/portfolio';

export interface SkillCardProps {
  skill: Skill;
  isVisible: boolean;
}

export const SkillCard = memo<SkillCardProps>(({ skill, isVisible }) => {
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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={`skill-card-optimized group ${skill.name === 'Vercel' ? 'vercel-skill-card' : ''}`}
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
        <h4 className="text-xs sm:text-sm font-dev font-medium text-foreground transition-colors duration-300 mb-1 sm:mb-2 flex items-center justify-center min-h-[1.5rem] z-10 relative">
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
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';
