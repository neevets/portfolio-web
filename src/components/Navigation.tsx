import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/providers/theme-provider';
import { navItems } from '@/data/navigation';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const isDarkMode = resolvedTheme === 'dark';
  const toggleTheme = () => setTheme(isDarkMode ? 'light' : 'dark');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const isMobile = window.innerWidth < 768;
      const headerHeight = isMobile ? 60 : 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: Math.max(0, elementPosition - headerHeight - 20), behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-3 sm:py-4 shadow-subtle border-b border-border/30"
          : "bg-transparent py-4 sm:py-6"
      )}>
        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-6 lg:space-x-8">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm font-dev hover:text-foreground text-muted-foreground transition-all duration-300 relative nav-dot-hover px-2 py-1 touch-manipulation"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="hidden md:inline-flex items-center justify-center p-2 rounded-xl mr-2 transition-all duration-300 ease-out hover:bg-muted/50 active:scale-95"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ml-auto p-3 z-50 relative touch-manipulation rounded-xl hover:bg-muted/50 active:scale-95 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={cn(
                  "block h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center",
                  isOpen ? "rotate-45 translate-y-[7px]" : ""
                )} />
                <span className={cn(
                  "block h-0.5 bg-foreground rounded-full transition-all duration-300",
                  isOpen ? "opacity-0 scale-x-0" : ""
                )} />
                <span className={cn(
                  "block h-0.5 bg-foreground rounded-full transition-all duration-300 origin-center",
                  isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                )} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div className={cn(
        "fixed inset-0 z-40 md:hidden flex flex-col transition-opacity duration-300 ease-out h-[100dvh] overscroll-none touch-none",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-background/100 backdrop-blur-xl" onClick={() => setIsOpen(false)} />

        <div className="relative flex flex-col h-[100dvh] px-8 pt-28 pb-12 overflow-hidden">
          <nav className="flex-1 flex flex-col justify-center gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "group flex items-center gap-4 py-4 text-left w-full",
                  "border-b border-border/20 last:border-none",
                  "transition-all duration-300 ease-out",
                  isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: isOpen ? `${index * 60 + 80}ms` : '0ms' }}
              >
                <span className="text-3xl font-display font-medium text-foreground group-hover:translate-x-2 transition-transform duration-300">
                  {item.label}
                </span>
                <span className="ml-auto text-muted-foreground/40 text-sm font-display group-hover:text-muted-foreground transition-colors duration-300">
                  0{index + 1}
                </span>
              </button>
            ))}
          </nav>

          <div className={cn(
            "flex items-center justify-between pt-6 border-t border-border/20",
            "transition-all duration-300 ease-out",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
          style={{ transitionDelay: isOpen ? `${navItems.length * 60 + 150}ms` : '0ms' }}>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 text-sm font-dev text-muted-foreground hover:text-foreground hover:border-border transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
