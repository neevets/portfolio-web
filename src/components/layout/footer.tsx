export const Footer = () => {
  return (
    <footer className="py-12 text-center border-t border-border bg-background relative overflow-hidden transition-all duration-300">
      <div className="relative z-10 space-y-3">
        <p className="text-xs text-muted-foreground font-dev">
          © Neevets {new Date().getFullYear()} - All rights reserved.
        </p>
      </div>
    </footer>
  );
};