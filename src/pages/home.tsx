import { memo, useLayoutEffect } from "react";
import { SiteNav } from "@/components/layout/site-nav";
import { Footer } from "@/components/layout/footer";
import { SEOHead } from "@/components/ui/seo-head";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { RoleLinks } from "@/components/home/role-links";
import { StorySection } from "@/components/home/story-section";
import { DisciplinesSection } from "@/components/home/disciplines-section";

const HomePage = memo(() => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav />
        <main>
          <HeroSection>
            <RoleLinks />
          </HeroSection>
          <StorySection />
          <DisciplinesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
