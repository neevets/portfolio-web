import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SEOHead } from "@/components/ui/seo-head";
import { Footer } from "@/components/layout/footer";
import { ComeBack } from "@/components/layout/come-back";
import type { Profile } from "@/data/profiles";
import { fadeUp, revealOnScroll } from "@/lib/motion";

const ProfilePage = ({ profile }: { profile: Profile }) => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [profile.slug]);

  return (
    <>
      <SEOHead
        title={`Neevets: ${profile.title}`}
        description={profile.seoDescription}
        path={`/${profile.slug}`}
      />
      <div className="min-h-screen bg-background text-foreground">
        <main className="relative overflow-hidden px-4 sm:px-6">
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
            <div className="dot-pattern absolute inset-0" />
          </div>

          <section className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center py-24 sm:py-32">
            <motion.p
              {...fadeUp(0)}
              className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground sm:text-sm"
            >
              {profile.eyebrow}
            </motion.p>
            <motion.h1
              {...fadeUp(0.1)}
              className="font-display text-foreground"
              style={{ fontSize: "clamp(3.5rem, 15vw, 11rem)", lineHeight: 0.95, letterSpacing: "-0.04em" }}
            >
              {profile.title}
            </motion.h1>
            <motion.h2 {...fadeUp(0.2)} className="mt-8 max-w-3xl font-dev text-2xl font-light sm:text-4xl">
              {profile.headline}
            </motion.h2>
            <motion.p
              {...fadeUp(0.3)}
              className="mt-6 max-w-2xl font-dev text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {profile.description}
            </motion.p>
          </section>

          <section className="relative z-10 mx-auto max-w-5xl pb-20 sm:pb-28">
            <div className="grid gap-4 sm:grid-cols-2">
              {profile.highlights.map((highlight, index) => (
                <motion.article
                  key={highlight.title}
                  {...revealOnScroll()}
                  className="rounded-xl border border-border/70 bg-card/60 p-6 backdrop-blur-xs sm:p-8"
                >
                  <p className="mb-4 font-mono text-xs text-muted-foreground">0{index + 1}</p>
                  <h3 className="mb-2 font-dev text-xl font-medium sm:text-2xl">{highlight.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{highlight.text}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="relative z-10 mx-auto max-w-3xl pb-8 text-center">
            <motion.div {...revealOnScroll()} className="rounded-xl border border-border/70 bg-card/60 p-8 sm:p-12">
              <h2 className="mb-4 font-dev text-2xl font-light sm:text-4xl">Interested?</h2>
              <p className="mx-auto mb-8 max-w-md font-dev text-sm leading-relaxed text-muted-foreground sm:text-base">
                Send me a message and tell me what you have in mind.
              </p>
              <a
                href="mailto:contact@neevets.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 font-dev text-sm font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Send an email to contact@neevets.com"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Get in touch
              </a>
            </motion.div>
          </section>

          <ComeBack />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;
