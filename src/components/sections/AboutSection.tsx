import { memo, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const OptimizedAboutSection = memo(() => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const featureCards = useMemo(
    () => [
      {
        icon: (
          <svg
            className="w-7 h-7 text-foreground/70 transition-colors duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        ),
        title: 'Full-Stack Development',
        description:
          'Design and implementation of robust web products using modern frameworks, reusable architecture, and clean coding standards.',
      },
      {
        icon: (
          <svg
            className="w-7 h-7 text-foreground/70 transition-colors duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        ),
        title: 'Software Engineering',
        description:
          'Focus on maintainability, performance, and quality through scalable APIs, structured systems, and delivery best practices.',
      },
    ],
    []
  );

  const professionalHighlights = useMemo(
    () => [
      'Experience building end-to-end solutions from idea to deployment.',
      'Strong attention to detail in UI/UX, accessibility, and product consistency.',
      'Continuous learning mindset with practical experimentation and project shipping.',
    ],
    []
  );

  const FeatureCard = memo<{ card: (typeof featureCards)[0] }>(({ card }) => (
    <div className="border border-border bg-card p-8 text-left h-full flex flex-col rounded-md shadow-sm">
      <div className="w-12 h-12 mb-5 bg-muted flex items-center justify-center flex-shrink-0 rounded-sm">
        {card.icon}
      </div>
      <h4 className="text-xl font-dev font-light mb-3">{card.title}</h4>
      <p className="text-muted-foreground font-dev leading-relaxed text-sm flex-grow">{card.description}</p>
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
                <div className="relative border border-border bg-card p-10 lg:p-12 rounded-md">
                  <div className="relative z-10 space-y-6 text-center">
                    <p className="text-sm tracking-[0.18em] uppercase text-muted-foreground font-dev">
                      Professional Profile
                    </p>
                    <h3 className="text-3xl md:text-4xl font-dev font-light">Passionate Full-Stack Developer</h3>
                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-dev">
                      Honduran developer specialized in delivering reliable software products and polished web experiences.
                      I build maintainable solutions with a balance of technical quality, clear communication, and product focus.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {featureCards.map((card) => (
                    <FeatureCard key={card.title} card={card} />
                  ))}
                </div>

                <div className="border border-border bg-card p-8 md:p-10 rounded-md max-w-5xl mx-auto">
                  <h3 className="text-2xl font-dev font-light mb-5 text-center">Core Professional Highlights</h3>
                  <ul className="space-y-3 max-w-3xl mx-auto">
                    {professionalHighlights.map((highlight) => (
                      <li key={highlight} className="text-base md:text-lg text-muted-foreground font-dev leading-relaxed flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70 flex-shrink-0" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

OptimizedAboutSection.displayName = 'OptimizedAboutSection';

export { OptimizedAboutSection as AboutSection };
