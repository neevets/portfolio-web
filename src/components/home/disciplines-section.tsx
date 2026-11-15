import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { disciplines } from "@/data/profiles";
import { revealOnScroll } from "@/lib/motion";

const DisciplinesSection = memo(() => (
  <section id="disciplines" className="relative z-10 px-4 py-20 sm:px-6 sm:py-28" style={{ scrollMarginTop: "5rem" }}>
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <motion.h2
          {...revealOnScroll()}
          className="section-title mb-6 text-center text-4xl font-dev font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          What I Do
        </motion.h2>
        <motion.p
          {...revealOnScroll(0.1)}
          className="mx-auto max-w-2xl font-dev text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Every discipline lives on its own page. Pick one to see the full picture.
        </motion.p>
      </div>

      <motion.div {...revealOnScroll(0.15)} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {disciplines.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="service-card group rounded-xl border border-border/70 bg-card/60 p-6 sm:p-8"
          >
            <p className="mb-3 font-dev text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              {item.eyebrow}
            </p>
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="service-card__title font-dev text-xl font-medium sm:text-2xl">{item.title}</h3>
              <ArrowUpRight className="service-card__arrow shrink-0 text-muted-foreground" size={20} aria-hidden="true" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item.description}</p>
          </Link>
        ))}
      </motion.div>
    </div>
  </section>
));

DisciplinesSection.displayName = "DisciplinesSection";

export { DisciplinesSection };
