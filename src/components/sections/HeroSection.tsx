import { memo, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
import { PrismRefraction } from '@/components/ui/prism-refraction';

const HeroSection = memo(() => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-6 relative overflow-hidden z-10">
      <PrismRefraction />
      <div className="absolute top-0 left-0 w-full h-96 opacity-30" style={{ background: 'var(--gradient-hero)' }} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-7xl mx-auto relative z-10 px-4 sm:px-6 py-16 sm:py-20"
      >
        <div className="mb-6 sm:mb-8 md:mb-12">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="section-title font-dev font-light mb-12 sm:mb-16 md:mb-20 tracking-tight relative leading-none cursor-pointer"
            style={{ fontSize: 'clamp(3rem, 14vw, 14rem)' }}
          >
            <span className="text-foreground">Neevets</span>
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border/30 bg-background/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping" />
              <div className="absolute -inset-1 w-5 h-5 bg-green-500/30 rounded-full animate-pulse" />
            </div>
            <p className="text-base sm:text-lg font-dev text-muted-foreground font-medium animate-fade-in-up transition-all duration-700 ease-out" style={{ animationDelay: '1s' }}>
              Based in Spain
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export { HeroSection };
export default HeroSection;
