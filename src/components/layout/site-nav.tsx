import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/theme-context";

const leftLinks = [
  { label: "Trading", to: "/trading" },
  { label: "Barber", to: "/barber" },
  { label: "Nutrition", to: "/nutrition" },
];

const rightLinks = [
  { label: "Music", to: "/music" },
  { label: "Portfolio", to: "/portfolio" },
];

const CONTACT_SECTION_ID = "getintouch";

const linkClass =
  "font-dev text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground transition-colors duration-300 hover:text-foreground focus-visible:outline-none focus-visible:text-foreground";

export const SiteNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const isDarkMode = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDarkMode ? "light" : "dark");
  const themeLabel = isDarkMode ? "Switch to light mode" : "Switch to dark mode";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const scrollToContact = () => {
    const element = document.getElementById(CONTACT_SECTION_ID);

    if (element) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const top = element.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion ? "auto" : "smooth" });
    }

    setIsOpen(false);
  };

  const logo = (
    <Link
      to="/"
      aria-label="Neevets home"
      className="font-display text-xl font-medium tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-2xl"
    >
      Neevets
    </Link>
  );

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "border-b border-border/30 bg-background/95 py-3 backdrop-blur-md"
            : "bg-transparent py-5 sm:py-6"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
          <div className="hidden items-center justify-end gap-8 lg:flex xl:gap-12">
            {leftLinks.map((link) => (
              <Link key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </div>

          {logo}

          <div className="hidden items-center gap-8 lg:flex xl:gap-12">
            {rightLinks.map((link) => (
              <Link key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </Link>
            ))}
            <button type="button" onClick={scrollToContact} className={linkClass}>
              Contact
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="ml-auto inline-flex items-center justify-center rounded-xl p-2 transition-all duration-300 hover:bg-muted/50 active:scale-95"
              aria-label={themeLabel}
              aria-pressed={!isDarkMode}
            >
              {isDarkMode ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="relative z-50 rounded-xl p-3 transition-transform duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            aria-controls="site-mobile-navigation"
          >
            <div className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
              <span className={cn("block h-0.5 origin-center rounded-full bg-foreground transition-all duration-300", isOpen && "translate-y-[7px] rotate-45")} />
              <span className={cn("block h-0.5 rounded-full bg-foreground transition-all duration-300", isOpen && "scale-x-0 opacity-0")} />
              <span className={cn("block h-0.5 origin-center rounded-full bg-foreground transition-all duration-300", isOpen && "-translate-y-[9px] -rotate-45")} />
            </div>
          </button>
        </div>
      </nav>

      <div
        id="site-mobile-navigation"
        role="dialog"
        aria-modal={isOpen}
        aria-label="Mobile navigation"
        inert={!isOpen}
        className={cn(
          "fixed inset-0 z-40 flex h-dvh flex-col bg-background transition-opacity duration-300 ease-out lg:hidden",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col px-6 pt-24 pb-8">
          <nav aria-label="Mobile navigation links" className="flex flex-1 flex-col justify-center">
            {[...leftLinks, ...rightLinks].map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex items-center gap-4 border-b border-border/20 py-4 last:border-none"
              >
                <span className="font-display text-2xl font-medium text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {link.label}
                </span>
                <span className="ml-auto font-display text-sm text-muted-foreground/40">0{index + 1}</span>
              </Link>
            ))}
            <button
              type="button"
              onClick={scrollToContact}
              className="group flex items-center gap-4 py-4 text-left"
            >
              <span className="font-display text-2xl font-medium text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                Contact
              </span>
              <span className="ml-auto font-display text-sm text-muted-foreground/40">06</span>
            </button>
          </nav>

          <div className="flex items-center justify-between border-t border-border/20 pt-4">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center gap-2 rounded-full border border-border/50 px-4 py-2 font-dev text-sm text-muted-foreground transition-all duration-300 hover:border-border hover:text-foreground"
              aria-label={themeLabel}
              aria-pressed={!isDarkMode}
            >
              {isDarkMode ? <Sun className="h-3.5 w-3.5" aria-hidden="true" /> : <Moon className="h-3.5 w-3.5" aria-hidden="true" />}
              {isDarkMode ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
