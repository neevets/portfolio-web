import { memo } from "react";
import { motion } from "framer-motion";
import { story } from "@/data/profiles";
import { revealOnScroll } from "@/lib/motion";

const cardClass =
  "flex h-full flex-col rounded-md border border-border/80 bg-card/85 p-5 text-left backdrop-blur-xs sm:p-8";

const StorySection = memo(() => (
  <section
    id="story"
    style={{ scrollMarginTop: "5rem" }}
    className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32"
  >
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10" aria-hidden="true">
      <div className="dot-pattern absolute inset-0" />
    </div>

    <div className="relative z-10 mx-auto max-w-5xl">
      <motion.h2
        {...revealOnScroll()}
        className="section-title mb-12 text-center text-4xl font-dev font-light sm:mb-16 sm:text-5xl md:text-6xl lg:mb-20 lg:text-7xl xl:text-8xl"
      >
        About Me
      </motion.h2>

      <motion.div {...revealOnScroll(0.1)} className="space-y-6">
        <div className="rounded-md border border-border/80 bg-card/85 p-5 backdrop-blur-xs sm:p-8 lg:p-12">
          <div className="space-y-6 text-center">
            <h3 className="text-3xl font-dev font-light text-foreground/90 md:text-4xl">Who am I?</h3>
            {story.whoIAm.map((paragraph) => (
              <p
                key={paragraph}
                className="mx-auto max-w-4xl font-dev text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className={cardClass}>
            <h4 className="mb-3 text-xl font-dev font-light text-foreground/90">Who I was</h4>
            <div className="space-y-3">
              {story.whoIWas.map((paragraph) => (
                <p key={paragraph} className="font-dev text-sm leading-relaxed text-muted-foreground/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className={cardClass}>
            <h4 className="mb-3 text-xl font-dev font-light text-foreground/90">Things about me</h4>
            <ul className="space-y-3">
              {story.facts.map((fact) => (
                <li key={fact} className="flex items-start gap-3 font-dev text-sm leading-relaxed text-muted-foreground/90">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/60" aria-hidden="true" />
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
));

StorySection.displayName = "StorySection";

export { StorySection };
