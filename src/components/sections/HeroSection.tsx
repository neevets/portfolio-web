import { memo, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const HeroSection = memo(() => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const GridBackground = useMemo(
    () => (
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80 pointer-events-none z-10" />
        <div className="absolute inset-0 w-[300%] h-[300%] -left-[100%] -top-[100%]">
          <svg className="absolute inset-0 w-full h-full animate-grid-seamless-1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-main" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" strokeOpacity="0.4" />
                <circle cx="40" cy="40" r="1" fill="hsl(var(--foreground))" fillOpacity="0.6" className="animate-subtle-glow" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-main)" />
          </svg>
          <svg className="absolute inset-0 w-full h-full animate-grid-seamless-2" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-secondary" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeOpacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-secondary)" />
          </svg>
        </div>
      </div>
    ),
    []
  );

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-6 relative overflow-hidden z-10">
      {isIntersecting && GridBackground}
      <div className="absolute top-0 left-0 w-full h-96 opacity-60" style={{ background: 'var(--gradient-hero)' }} />
      <div className="text-center max-w-7xl mx-auto fade-in-up relative z-10 px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <h1 className="section-title text-8xl sm:text-9xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-dev font-light mb-4 sm:mb-6 md:mb-8 tracking-tight relative animated-underline leading-none cursor-pointer">
            <span className="text-foreground">Neevets</span>
          </h1>
        </div>
        <div className="h-12 sm:h-16 md:h-20 mb-12 sm:mb-16 md:mb-20 flex items-center justify-center">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-dev font-light text-foreground leading-relaxed">
            Fullstack Developer
          </p>
        </div>
        <div className="relative">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border/30 bg-background/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
              <div className="absolute -inset-1 w-5 h-5 bg-green-500/30 rounded-full animate-pulse" />
            </div>
            <p className="text-base sm:text-lg font-dev text-foreground font-medium animate-fade-in-up transition-all duration-700 ease-out" style={{ animationDelay: '1s' }}>
              Ubicated in Spain
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export { HeroSection };
export default HeroSection;
