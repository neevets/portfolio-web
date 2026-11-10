import { memo } from 'react';
import { skillsData } from '@/data/skills';
import { motion } from 'framer-motion';
import { Icon } from '@/components/ui/icon';
import type { Skill } from '@/types/portfolio';
import { getReadableTextColor, getRelativeLuminance } from '@/lib/utils';

const SkillCard = memo<{ skill: Skill }>(({ skill }) => {
  const luminance = getRelativeLuminance(skill.color);
  const invertPillOnDark = luminance !== null && luminance < 0.03;

  return (
    <div
      className="skill-card-optimized group"
      data-invert-pill-on-dark={invertPillOnDark ? "true" : undefined}
      style={{
        '--skill-color': skill.color,
      } as React.CSSProperties & { '--skill-color': string }}
    >
      <div className="relative">
        <div
          className={`w-8 h-8 mb-2 sm:w-10 sm:h-10 sm:mb-3 lg:w-12 lg:h-12 mx-auto flex items-center justify-center text-muted-foreground transition-all duration-300 sm:group-hover:scale-110 relative z-10 ${
            skill.name === "GitHub" ? "skill-icon-theme" : ""
          }`}
          style={{
            color: skill.name === "GitHub" ? "var(--skills-text-color)" : skill.color,
          }}
        >
          <Icon name={skill.icon} />
        </div>
      </div>

      <div className="text-center">
        <h4
          className="text-xs sm:text-sm font-dev font-medium text-foreground sm:group-hover:text-foreground transition-colors duration-300 mb-1 sm:mb-2 flex items-center justify-center min-h-[1.5rem] z-10 relative"
        >
          {skill.name}
        </h4>
        <div className="opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out">
          <span
            className="skill-level-pill inline-flex items-center justify-center min-w-[70px] sm:min-w-[88px] px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border transition-colors duration-200"
            style={{
              borderColor: skill.color,
              backgroundColor: skill.color,
              color: getReadableTextColor(skill.color),
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
  const allSkills = Object.entries(skillsData);

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-6 relative overflow-hidden z-10"
      style={{ scrollMarginTop: '5rem' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20" aria-hidden="true">
        <div className="dot-pattern absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "250px 0px" }}
          transition={{ duration: 0.6 }}
          className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-8 sm:mb-12 lg:mb-16 text-center"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "250px 0px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-10 lg:space-y-14"
        >
          {allSkills.map(([category, skills]) => (
            <div key={category} className="skills-category-advanced">
              <div className="category-header">
                <h3 className="text-[0.95rem] min-[390px]:text-base sm:text-xl md:text-2xl lg:text-3xl font-dev font-light text-foreground mr-2 min-[390px]:mr-3 sm:mr-6 leading-tight break-words">
                  {category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-foreground/50 to-transparent" />
              </div>

              <div className="skills-grid">
                {skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
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
