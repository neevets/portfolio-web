import { memo, useLayoutEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/ui/seo-head';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';

const PORTFOLIO_SCROLL_KEY = 'portfolio:scrollY';

const PortfolioPage = memo(() => {
  useLayoutEffect(() => {
    const savedScrollY = sessionStorage.getItem(PORTFOLIO_SCROLL_KEY);

    if (savedScrollY !== null) {
      sessionStorage.removeItem(PORTFOLIO_SCROLL_KEY);

      const scrollY = Number(savedScrollY);
      if (Number.isFinite(scrollY) && scrollY >= 0) {
        window.scrollTo({ top: scrollY, left: 0, behavior: 'auto' });
      }
    }
  }, []);

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main role="main">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ServicesSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
});

PortfolioPage.displayName = 'PortfolioPage';
export default PortfolioPage;
