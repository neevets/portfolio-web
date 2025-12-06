import { lazy, Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/ui/seo-head';
import { Footer } from '@/components/layout/footer';

const HeroSection = lazy(() => import('@/components/sections/HeroSection').then(module => ({ default: module.HeroSection })));
const AboutSection = lazy(() => import('@/components/sections/AboutSection').then(module => ({ default: module.AboutSection })));
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection').then(module => ({ default: module.ProjectsSection })));
const EducationSection = lazy(() => import('@/components/sections/EducationSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection').then(module => ({ default: module.ContactSection })));

const Portfolio = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        
        <main role="main">
          <Suspense fallback={<div className="min-h-screen" />}>
            <HeroSection />
          </Suspense>
          
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <AboutSection />
          </Suspense>
          
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <SkillsSection />
          </Suspense>
          
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <ProjectsSection />
          </Suspense>
          
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <EducationSection />
          </Suspense>
          
          <Suspense fallback={<div className="min-h-[400px]" />}>
            <ContactSection />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
