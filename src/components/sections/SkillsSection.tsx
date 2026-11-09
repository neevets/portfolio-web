import { memo, useMemo } from 'react';
import { skillsData } from '@/data/skills';
import { motion } from 'framer-motion';
import { PreloadedSkillIcon } from '@/components/ui/preloaded-skill-icon';
import { Skill } from '@/types/portfolio';

const SkillCard = memo<{ skill: Skill }>(({ skill }) => {
  const styleProps = useMemo(() => {
    const skillColor = skill.color;
    return {
      skillColor,
      iconColor: skillColor,
    };
  }, [skill.color]);

  return (
    <div
      className="skill-card-optimized group"
      data-skill={skill.name}
      style={{
        '--skill-color': styleProps.skillColor,
      } as React.CSSProperties & { '--skill-color': string }}
    >
      <div className="relative">
        <div
          className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 flex items-center justify-center text-muted-foreground transition-all duration-300 sm:group-hover:scale-110 relative z-10 ${
            skill.name === "GitHub" ? "skill-icon-theme" : skill.name === "Rust" ? "skill-icon-theme rust-icon-theme" : ""
          }`}
          style={{
            color:
              skill.name === "GitHub" || skill.name === "Rust"
                ? "var(--skills-text-color)"
                : styleProps.iconColor,
          }}
        >
          <PreloadedSkillIcon name={skill.icon} />
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
            className="skill-level-pill inline-flex items-center justify-center min-w-[70px] sm:min-w-[88px] px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border backdrop-blur-sm transition-colors duration-200"
            style={{
              borderColor: styleProps.skillColor,
              backgroundColor: styleProps.skillColor,
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
  const allSkills = useMemo(() => Object.entries(skillsData), []);


  return (
    <section
      id="skills"
      className="skills-section py-12 sm:py-16 lg:py-20 px-3 sm:px-6 relative overflow-hidden z-10"
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
                    skill={skill as Skill}
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
