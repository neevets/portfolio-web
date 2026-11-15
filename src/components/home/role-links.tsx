import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { disciplines } from "@/data/profiles";

export const RoleLinks = () => (
  <motion.nav
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.1 }}
    aria-label="Disciplines"
    className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10"
  >
    {disciplines.map((item) => (
      <Link
        key={item.to}
        to={item.to}
        className="rounded-full border border-border/70 bg-background/60 px-4 py-2 font-dev text-xs text-muted-foreground backdrop-blur-sm transition-colors duration-300 hover:border-foreground/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
      >
        {item.eyebrow}
      </Link>
    ))}
  </motion.nav>
);
