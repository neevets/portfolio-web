import { memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Home } from "lucide-react";
import { SEOHead } from "@/components/ui/seo-head";

const quickLinks = [
  { label: "Backend Development", to: "/services/backend-development" },
  { label: "Go Development", to: "/services/go-development" },
  { label: "Python APIs", to: "/services/python-apis" },
  { label: "DevOps & Deployment", to: "/services/devops" },
  { label: "Drew Bot", to: "/projects/drew" },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const OrbitRings = memo(() => (
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
    <motion.svg
      viewBox="0 0 600 600"
      className="h-[140vmin] max-h-[1100px] w-[140vmin] max-w-[1100px] text-foreground"
      animate={{ rotate: 360 }}
      transition={{ duration: 90, ease: "linear", repeat: Infinity }}
    >
      <circle cx="300" cy="300" r="290" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
      <circle cx="300" cy="300" r="220" fill="none" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="2 10" />
      <circle cx="300" cy="300" r="150" fill="none" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
      <circle cx="590" cy="300" r="4" fill="currentColor" fillOpacity="0.5" />
      <circle cx="80" cy="300" r="3" fill="currentColor" fillOpacity="0.35" />
      <circle cx="300" cy="150" r="2.5" fill="currentColor" fillOpacity="0.3" />
    </motion.svg>
  </div>
));

OrbitRings.displayName = "OrbitRings";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/");
  };

  return (
    <>
      <SEOHead
        title="Neevets: Page Not Found"
        description="The requested page could not be found on Neevets."
        path={location.pathname}
        robots="noindex, follow"
        canonical={false}
      />
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-16 text-foreground sm:px-6">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20" aria-hidden="true">
          <div className="dot-pattern absolute inset-0" />
        </div>
        <OrbitRings />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <motion.p
            {...fadeUp(0)}
            className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-border bg-background/60 px-4 py-2 font-mono text-xs text-muted-foreground backdrop-blur-sm sm:text-sm"
          >
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="shrink-0 text-foreground">GET</span>
            <span className="min-w-0 truncate">{location.pathname}</span>
            <span className="shrink-0 text-foreground">404</span>
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="select-none bg-gradient-to-b from-foreground via-foreground/80 to-foreground/5 bg-clip-text font-display text-transparent"
            style={{ fontSize: "clamp(6.5rem, 30vw, 17rem)", lineHeight: 0.95, letterSpacing: "-0.04em" }}
          >
            404
          </motion.h1>

          <motion.h2 {...fadeUp(0.2)} className="mt-2 text-2xl font-dev sm:text-4xl">
            This page took a wrong turn
          </motion.h2>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            The page you are looking for does not exist or has moved. Head back home or jump straight to one of these.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 font-dev text-sm font-medium text-background transition-all duration-300 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to Home
            </Link>
            <button
              type="button"
              onClick={goBack}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-transparent px-6 py-3 font-dev text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Go back
            </button>
          </motion.div>

          <motion.nav
            {...fadeUp(0.5)}
            aria-label="Suggested pages"
            className="mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-2"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-4 py-2 font-dev text-xs text-muted-foreground backdrop-blur-sm transition-colors duration-300 hover:border-foreground/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
              >
                {link.label}
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </motion.nav>
        </div>
      </main>
    </>
  );
};

export default NotFound;
