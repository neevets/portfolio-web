import { Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-border bg-background relative overflow-hidden transition-all duration-300">
      <div className="relative z-10 space-y-3">
        <p className="inline-flex items-center gap-1 text-xs text-muted-foreground font-dev">
          <Copyright className="h-3 w-3" aria-hidden="true" />
          <span>Neevets {new Date().getFullYear()} - All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};
