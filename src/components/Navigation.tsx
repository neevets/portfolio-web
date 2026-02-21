import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, User, Code, FolderOpen, GraduationCap, Mail, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/providers/theme-provider';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  const minSwipeDistance = 50;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    
    if (isLeftSwipe && isOpen) {
      setIsOpen(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const titleElement = element.querySelector('h1, h2, .section-title');
      const targetElement = titleElement || element;
      
      const headerHeight = isMobile ? 60 : 80;
      const extraPadding = isMobile ? 10 : 20;
      
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - extraPadding;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      
      if (isMobile) {
        setTimeout(() => setIsOpen(false), 150);
      }
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero', icon: Home },
    { label: 'About Me', id: 'about', icon: User },
    { label: 'Skills', id: 'skills', icon: Code },
    { label: 'Projects', id: 'projects', icon: FolderOpen },
    { label: 'Education', id: 'courses', icon: GraduationCap },
    { label: 'Contact', id: 'contact', icon: Mail }
  ];

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
              className={cn(
                "hidden md:inline-flex items-center justify-center p-2 rounded-xl mr-2",
                "transition-all duration-300 ease-out hover:bg-muted/50 active:scale-95"
              )}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "md:hidden p-3 z-50 relative touch-manipulation ml-auto",
                "transition-all duration-300 ease-out",
                "hover:bg-muted/50 rounded-xl",
                "active:scale-95 active:bg-muted/70"
              )}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu className={cn(
                  "w-5 h-5 absolute transition-all duration-300 ease-out",
                  isOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                )} />
                <X className={cn(
                  "w-5 h-5 absolute transition-all duration-300 ease-out",
                  isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-75"
                )} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div 
        className={cn(
          "fixed inset-0 top-0 z-40 md:hidden transition-all duration-500 ease-out",
          isOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
      >
        <div 
          className={cn(
            "absolute inset-0 bg-background/95 backdrop-blur-lg transition-all duration-500 ease-out",
            isOpen ? "backdrop-blur-lg" : "backdrop-blur-none"
          )}
          onClick={() => setIsOpen(false)}
        />
        
        <div 
          ref={menuRef}
          className={cn(
            "fixed right-0 top-[45%] -translate-y-1/2 w-full max-w-sm bg-background/98 backdrop-blur-xl",
            "border-l border-border/30 shadow-2xl rounded-l-2xl",
            "transition-all duration-500 ease-out",
            "flex flex-col z-50",
            "max-h-[85vh] min-h-fit",
            isOpen 
              ? "translate-x-0" 
              : "translate-x-full"
          )}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="pt-6 pb-4 px-6 flex-1">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-3 text-left",
                    "hover:bg-muted/50 active:bg-muted/70 rounded-xl",
                    "transition-all duration-300 ease-out touch-manipulation",
                    "transform hover:translate-x-1 active:scale-[0.98]",
                    "group"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted/30 flex items-center justify-center group-hover:bg-muted/50 transition-colors duration-300">
                    <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                  </div>
                  <span className="font-dev text-sm group-hover:text-foreground transition-colors duration-300">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <div className="px-6 pb-3">
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-center gap-2 px-3 py-3 rounded-xl border border-border/40 hover:bg-muted/50 transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span className="font-dev text-sm">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>

          <div className="px-6 pb-3">
            <div className="h-1 w-12 bg-muted-foreground/30 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </>
  );
};
