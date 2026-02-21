import { memo, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const AboutSection = memo(() => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const featureCards = useMemo(
    () => [
      {
        title: 'Mindset',
        description:
          'I am always excited to learn new technologies, build projects, and explore innovative ideas that challenge me to grow.',
      },
      {
        title: 'Summary',
        description:
          'I consider myself principled, friendly, disciplined, and responsible. I enjoy creating a positive work environment, adapting quickly to new situations, and consistently giving my best in every project.',
      },
    ],
    []
  );

  const FeatureCard = memo<{ card: (typeof featureCards)[0] }>(({ card }) => (
    <div className="border border-border/80 bg-card/85 backdrop-blur-sm p-8 text-left h-full flex flex-col rounded-md shadow-sm">
      <h4 className="text-xl font-dev font-light mb-3 text-foreground/90">{card.title}</h4>
      <p className="text-muted-foreground/90 font-dev leading-relaxed text-sm flex-grow">{card.description}</p>
    </div>
  ));

  FeatureCard.displayName = 'FeatureCard';

  return (
    <section
      ref={ref}
      id="about"
      style={{ scrollMarginTop: '5rem' }}
      className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="dot-pattern absolute inset-0"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-20 sm:mb-24 text-center fade-in-up">
          About Me
        </h2>

        {isIntersecting && (
          <div className="max-w-5xl mx-auto">
            <div className="fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="space-y-8">
                <div className="relative border border-border/80 bg-card/85 backdrop-blur-sm p-10 lg:p-12 rounded-md">
                  <div className="relative z-10 space-y-6 text-center">
                    <h3 className="text-3xl md:text-4xl font-dev font-light text-foreground/90"> Who am I?</h3>
                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-dev">
                      I am a Honduran student living in Spain, passionate about programming. I enjoy learning new technologies,
                      creating projects, and exploring innovative ideas. I am proactive, curious, and always
                      looking to improve my skills while staying up to date with current tech trends.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {featureCards.map((card) => (
                    <FeatureCard key={card.title} card={card} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';

export { AboutSection };
