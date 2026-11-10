import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { SEOHead } from "@/components/ui/seo-head";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const NotFound = () => {
  const location = useLocation();

  return (
    <>
      <SEOHead
        title="Neevets: Page Not Found"
        description="The requested page could not be found on Neevets."
        path={location.pathname}
        robots="noindex, follow"
        canonical={false}
      />
      <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16 text-foreground sm:px-6">
        <div className="flex w-full max-w-3xl flex-col items-center text-center">
          <motion.h1
            {...fadeUp(0)}
            className="palette-gradient select-none bg-clip-text font-display text-transparent"
            style={{ fontSize: "clamp(6.5rem, 30vw, 17rem)", lineHeight: 0.95, letterSpacing: "-0.04em" }}
          >
            404
          </motion.h1>

          <motion.p
            {...fadeUp(0.15)}
            className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            The page you are looking for does not exist
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 font-dev text-sm font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
