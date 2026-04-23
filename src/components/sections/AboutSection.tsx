import { memo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { motion } from 'framer-motion';

interface FeatureCardData {
  title: string;
  description: string;
}

const featureCards: FeatureCardData[] = [
  {
    title: 'How I work',
    description:
      'I tend to dig into things properly before shipping them. I care about writing code that the next person can actually read and maintain, and I get frustrated by unnecessary complexity just as much as by sloppy shortcuts.',
  },
  {
    title: 'Outside of code',
    description:
      'I am from Honduras, currently living in Spain. When I am not in front of a terminal I am usually reading, playing games, or breaking something on purpose just to figure out how it works.',
  },
];

const FeatureCard = memo<{ card: FeatureCardData }>(({ card }) => (
  <div className="border border-border/80 bg-card/85 backdrop-blur-sm p-8 text-left h-full flex flex-col rounded-md shadow-sm">
    <h4 className="text-xl font-dev font-light mb-3 text-foreground/90">{card.title}</h4>
    <p className="text-muted-foreground/90 font-dev leading-relaxed text-sm flex-grow">{card.description}</p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

const AboutSection = memo(() => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  return (
    <section
      ref={ref}
      id="about"
      style={{ scrollMarginTop: '5rem' }}
      className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="dot-pattern absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-20 sm:mb-24 text-center"
        >
          About Me
        </motion.h2>

        {isIntersecting && (
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="space-y-8">
                <div className="relative border border-border/80 bg-card/85 backdrop-blur-sm p-10 lg:p-12 rounded-md">
                  <div className="relative z-10 space-y-6 text-center">
                    <h3 className="text-3xl md:text-4xl font-dev font-light text-foreground/90">Who am I?</h3>
                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto font-dev">
                      I am a backend developer with a focus on systems programming. I pick up new things fast and tend to go further than what&apos;s strictly required, mostly out of curiosity. Comfortable working across the stack but most at home in Golang and Python.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {featureCards.map((card) => (
                    <FeatureCard key={card.title} card={card} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export { AboutSection };
export default AboutSection;

