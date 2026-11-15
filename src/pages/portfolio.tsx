import { memo, useLayoutEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/ui/seo-head';
import { Footer } from '@/components/layout/footer';
import { ComeBack } from '@/components/layout/come-back';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { PORTFOLIO_SCROLL_KEY } from '@/lib/utils';

const PortfolioPage = memo(() => {
  useLayoutEffect(() => {
    const savedScrollY = sessionStorage.getItem(PORTFOLIO_SCROLL_KEY);

    if (savedScrollY !== null) {
      sessionStorage.removeItem(PORTFOLIO_SCROLL_KEY);

      const scrollY = Number(savedScrollY);
      if (Number.isFinite(scrollY) && scrollY >= 0) {
        window.scrollTo({ top: scrollY, left: 0, behavior: 'auto' });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <SEOHead
        title="Neevets: Backend Developer, Go & Python"
        description="Neevets is a backend developer focused on Go, Python APIs, systems programming, and reliable software infrastructure. Explore projects and development services."
        path="/portfolio"
      />
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
        <ComeBack />
        <Footer />
      </div>
    </>
  );
});

PortfolioPage.displayName = 'PortfolioPage';
export default PortfolioPage;
