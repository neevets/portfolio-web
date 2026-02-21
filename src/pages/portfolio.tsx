import { memo } from 'react';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/ui/seo-head';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import { ContactSection } from '@/components/sections/ContactSection';

const PortfolioPage = memo(() => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main role="main">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
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
