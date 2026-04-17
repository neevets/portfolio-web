import { memo, useState, useMemo, useCallback } from 'react';
import { ContactIcons } from '@/components/ContactIcons';

const ContactCard = memo<{ link: { label: string; value: string; href: string; icon: () => JSX.Element } }>(({ link }) => {
  const IconComponent = link.icon;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden bg-background/80 border border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center text-background group-hover:bg-foreground/90 transition-colors duration-300">
              <IconComponent />
            </div>
            <div className="text-left">
              <div className="font-dev text-sm text-muted-foreground">{link.label}</div>
              <div className="font-dev font-medium text-base text-foreground">{link.value}</div>
            </div>
          </div>
          <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
});

ContactCard.displayName = 'ContactCard';

const ContactSection = memo(() => {
  const [paperFlying, setPaperFlying] = useState(false);

  const contactLinks = useMemo(
    () => [
      {
        label: 'LinkedIn',
        value: '/in/steeven-r-68921833a',
        href: 'https://www.linkedin.com/in/steeven-r-68921833a',
        icon: ContactIcons.LinkedIn,
      },
      {
        label: 'Discord',
        value: '@goroutines',
        href: 'https://discord.com/users/goroutines',
        icon: ContactIcons.Discord,
      },
    ],
    []
  );

  const handleSendMessage = useCallback(() => {
    setPaperFlying(true);
    setTimeout(() => {
      window.open('mailto:contact@neevets.website', '_blank');
      setPaperFlying(false);
    }, 600);
  }, []);

  return (
    <section id="getintouch" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden z-10" style={{ scrollMarginTop: '5rem' }}>
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-6 sm:mb-8">Let's Talk</h2>

        <p className="text-base sm:text-lg md:text-xl font-dev text-muted-foreground mb-12 sm:mb-14 md:mb-16">
          Ready to collaborate? Let's build something amazing together.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-14 md:mb-16">
          {contactLinks.map(link => (
            <ContactCard key={link.label} link={link} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button
            onClick={handleSendMessage}
            className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-xl font-dev font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <svg
                className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-all duration-500 ${paperFlying ? '-translate-y-2 translate-x-2 scale-110 opacity-0' : 'group-hover:-translate-y-2 group-hover:scale-110'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="text-sm sm:text-base">Send me a message</span>
            </span>
          </button>

          <a
            href="/cv.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-border text-foreground rounded-xl font-dev font-medium hover:bg-muted hover:border-foreground/40 transition-all duration-300 group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm sm:text-base">Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = 'ContactSection';

export { ContactSection };
