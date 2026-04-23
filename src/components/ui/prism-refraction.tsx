import { memo } from 'react';
import { motion } from 'framer-motion';

const PrismRefraction = memo(() => {
  const rays = Array.from({ length: 40 }, (_, i) => i);
  const colors = [
    'rgba(255, 0, 0, 0.4)',
    'rgba(255, 165, 0, 0.4)',
    'rgba(255, 255, 0, 0.4)',
    'rgba(0, 128, 0, 0.4)',
    'rgba(0, 0, 255, 0.4)',
    'rgba(75, 0, 130, 0.4)',
    'rgba(238, 130, 238, 0.4)',
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {}
      <div className="absolute w-[800px] h-[800px] bg-radial-gradient from-foreground/5 to-transparent opacity-20 blur-3xl" />

      <div className="relative w-full h-full flex items-center justify-center">
        {}
        {rays.map((i) => {
          const angle = (i / rays.length) * 360;
          const color = colors[i % colors.length];
          const delay = i * 0.05;
          const duration = 3 + Math.random() * 2;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                rotate: angle,
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
              className="absolute w-[2px] h-[1000px] origin-center"
              style={{
                background: `linear-gradient(to top, transparent, ${color}, transparent)`,
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}

        {}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <svg
            width="320"
            height="280"
            viewBox="0 0 320 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            <path
              d="M160 20L300 260H20L160 20Z"
              fill="url(#prism-gradient)"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
            <defs>
              <linearGradient id="prism-gradient" x1="160" y1="20" x2="160" y2="260" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.05" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[80%] h-[80%] border-t border-foreground/10 rotate-45 transform -translate-y-4" />
          </div>
        </motion.div>
      </div>
    </div>
  );
});

PrismRefraction.displayName = 'PrismRefraction';

export { PrismRefraction };
