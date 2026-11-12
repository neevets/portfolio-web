import { memo } from 'react';
import { motion } from 'framer-motion';

const gridBackground = (
  <div className="absolute inset-0 opacity-40 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80 pointer-events-none z-10" />
    <div className="absolute inset-0 w-[300%] h-[300%] -left-[100%] -top-[100%]">
      <svg className="absolute inset-0 w-full h-full animate-grid-seamless-1 motion-reduce:animate-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-main" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="40" cy="40" r="1" fill="hsl(var(--foreground))" fillOpacity="0.6" className="animate-subtle-glow motion-reduce:animate-none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-main)" />
      </svg>
      <svg className="absolute inset-0 w-full h-full animate-grid-seamless-2 motion-reduce:animate-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-secondary" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" strokeOpacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-secondary)" />
      </svg>
    </div>
  </div>
);

const HeroSection = memo(() => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-6 relative overflow-hidden z-10">
      {gridBackground}
      <div className="absolute top-0 left-0 w-full h-96 opacity-60" style={{ background: 'var(--gradient-hero)' }} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-7xl mx-auto relative z-10 px-0 sm:px-6 py-16 sm:py-20"
      >
        <div className="mb-6 sm:mb-8 md:mb-12">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ fontSize: "clamp(3rem, 17vw, 14rem)", width: "100%", marginLeft: 0 }}
            className="section-title font-dev font-light mb-12 sm:mb-16 md:mb-20 tracking-tight relative leading-none whitespace-nowrap"
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
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border/30 bg-background/30 backdrop-blur-sm shadow-lg">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.8)]" />
              <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping motion-reduce:animate-none" />
            </div>
            <p className="text-base sm:text-lg font-dev text-muted-foreground font-medium animate-fade-in-up motion-reduce:animate-none" style={{ animationDelay: '1s' }}>
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
