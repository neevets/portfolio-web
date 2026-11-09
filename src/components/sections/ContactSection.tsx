import { memo, useMemo } from "react";
import type { ComponentType } from "react";
import { ContactIcons } from "@/components/ContactIcons";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: ComponentType;
}

const ContactCard = memo<{ link: ContactLink }>(({ link }) => {
  const IconComponent = link.icon;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden bg-background/80 border border-border/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="p-4 sm:p-6 relative z-10">
        <div className="flex items-center justify-between gap-3 min-w-0">
          <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
            <div className="w-12 h-12 bg-foreground rounded-2xl flex items-center justify-center text-background group-hover:bg-foreground/90 transition-colors duration-300">
              <IconComponent />
            </div>
            <div className="text-left">
              <div className="font-dev text-sm text-muted-foreground">{link.label}</div>
              <div className="font-dev font-medium text-sm sm:text-base text-foreground break-all">{link.value}</div>
            </div>
          </div>
          <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
});

ContactCard.displayName = "ContactCard";

const ContactSection = memo(() => {
  const contactLinks = useMemo<ContactLink[]>(
    () => [
      {
        label: "LinkedIn",
        value: "/in/neevets",
        href: "https://www.linkedin.com/in/neevets",
        icon: ContactIcons.LinkedIn,
      },
      {
        label: "Discord",
        value: "@neevtsio",
        href: "https://discord.com/users/neevtsio",
        icon: ContactIcons.Discord,
      },
    ],
    []
  );

  return (
    <section id="getintouch" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden z-10" style={{ scrollMarginTop: "5rem" }}>
      <div className="absolute inset-0 dot-pattern opacity-20" aria-hidden="true" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-dev font-light mb-6 sm:mb-8">Let's Talk</h2>

        <p className="text-base sm:text-lg md:text-xl font-dev text-muted-foreground mb-12 sm:mb-14 md:mb-16">
          Have a project in mind? Get in touch and let's discuss how to build it.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-14 md:mb-16">
          {contactLinks.map((link) => (
            <ContactCard key={link.label} link={link} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="mailto:contact@neevets.com"
            className="contact-email-button w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-xl font-dev font-medium"
            aria-label="Send an email to contact@neevets.com"
          >
            <span className="contact-email-button__content">
              <svg
                className="contact-email-button__icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4 20-7Z" />
              </svg>
              <span className="text-sm sm:text-base">Send me an email</span>
            </span>
          </a>

          <a
            href="/cv.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-border text-foreground rounded-xl font-dev font-medium hover:bg-muted hover:border-foreground/40 transition-all duration-300 group"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-sm sm:text-base">Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export { ContactSection };
