import { memo } from "react";
import { motion } from "framer-motion";

interface FeatureCardData {
  title: string;
  description: string;
}

const featureCards: FeatureCardData[] = [
  {
    title: "How I work",
    description:
      "I tend to dig into things properly before shipping them. I care about writing code that the next person can actually read and maintain, and I get frustrated by unnecessary complexity just as much as by sloppy shortcuts.",
  },
  {
    title: "Outside of code",
    description:
      "I am from Honduras, currently living in Spain. When I am not in front of a terminal I am usually reading, playing games, or breaking something on purpose just to figure out how it works.",
  },
];

const FeatureCard = memo<{ card: FeatureCardData }>(({ card }) => (
  <div className="flex h-full flex-col rounded-md border border-border/80 bg-card/85 p-5 text-left shadow-sm backdrop-blur-sm sm:p-8">
    <h4 className="mb-3 text-xl font-dev font-light text-foreground/90">
      {card.title}
    </h4>
    <p className="flex-grow font-dev text-sm leading-relaxed text-muted-foreground/90">
      {card.description}
    </p>
  </div>
));

FeatureCard.displayName = "FeatureCard";

const AboutSection = memo(() => (
  <section
    id="about"
    style={{ scrollMarginTop: "5rem" }}
    className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32"
  >
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-10"
      aria-hidden="true"
    >
      <div className="dot-pattern absolute inset-0" />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "250px 0px" }}
        transition={{ duration: 0.8 }}
        className="section-title mb-12 text-center text-4xl font-dev font-light sm:mb-16 sm:text-5xl md:text-6xl lg:mb-20 lg:text-7xl xl:text-8xl"
      >
        About Me
      </motion.h2>

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "250px 0px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="space-y-8">
            <div className="relative rounded-md border border-border/80 bg-card/85 p-5 backdrop-blur-sm sm:p-8 lg:p-12">
              <div className="relative z-10 space-y-6 text-center">
                <h3 className="text-3xl font-dev font-light text-foreground/90 md:text-4xl">
                  Who am I?
                </h3>
                <p className="mx-auto max-w-4xl font-dev text-lg leading-relaxed text-muted-foreground md:text-xl">
                  I focus on backend development and systems programming, with most of my work centred on Go and Python. I enjoy understanding how systems fit together, building practical APIs, and keeping software readable and maintainable. My projects also involve databases, containerisation, and the tools used to build and operate applications.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
              {featureCards.map((card) => (
                <FeatureCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
));

AboutSection.displayName = "AboutSection";

export { AboutSection };
export default AboutSection;
