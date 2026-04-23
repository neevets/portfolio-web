import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="dot-pattern absolute inset-0"></div>
      </div>

      <div className="relative z-10 text-center elevated-card p-8 sm:p-12 max-w-xl mx-4 animate-fade-in-up hover:transform-none">
        <h1 className="text-7xl sm:text-8xl font-light mb-4 text-foreground">404</h1>
        <p className="text-xl sm:text-2xl font-dev text-foreground mb-2">Page not found</p>
        <p className="text-sm sm:text-base text-muted-foreground mb-6">
          The route <code>{location.pathname}</code> does not exist.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-foreground text-background font-dev text-sm hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black/30 rounded-full animate-gentle-float pointer-events-none"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-black/30 rounded-full animate-deep-float pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-black/30 rounded-full animate-enhanced-float pointer-events-none" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default NotFound;
