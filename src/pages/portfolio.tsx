import { lazy, Suspense, useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/ui/seo-head';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';

const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection').then(module => ({ default: module.ProjectsSection })));
const EducationSection = lazy(() => import('@/components/sections/EducationSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection').then(module => ({ default: module.ContactSection })));

const preloadSecondarySections = () => {
  void import('@/components/sections/ProjectsSection');
  void import('@/components/sections/EducationSection');
  void import('@/components/sections/ContactSection');
};

const Portfolio = () => {
  const [isIntroLoading, setIsIntroLoading] = useState(true);

  useEffect(() => {
    const introTimeoutId = window.setTimeout(() => {
      setIsIntroLoading(false);
    }, 1600);

    return () => window.clearTimeout(introTimeoutId);
  }, []);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => preloadSecondarySections(), { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(preloadSecondarySections, 800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <SEOHead />

      {isIntroLoading && (
        <div className="intro-loader">
          <div className="intro-loader__visual">
            <div className="intro-loader__ring intro-loader__ring--outer" />
            <div className="intro-loader__ring intro-loader__ring--inner" />
            <div className="intro-loader__core" />
          </div>
          <div className="intro-loader__text">Loading portfolio experience...</div>
        </div>
      )}

      <div className="min-h-screen bg-background text-foreground">
        <Navigation />

        <main role="main">
          <HeroSection />
          <AboutSection />
          <SkillsSection />

          <Suspense fallback={<div className="min-h-[1200px]" />}>
            <ProjectsSection />
            <EducationSection />
            <ContactSection />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
