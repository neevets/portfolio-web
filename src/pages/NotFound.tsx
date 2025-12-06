import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="dot-pattern absolute inset-0"></div>
      </div>
      
      <div className="relative z-10 text-center elevated-card p-8 sm:p-12 max-w-md mx-4 animate-fade-in-up hover:transform-none">
        <div className="mb-6">
          <h1 className="text-8xl sm:text-9xl font-light mb-4 text-foreground">
            404
          </h1>
        </div>
      </div>
      
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black/30 rounded-full animate-gentle-float pointer-events-none"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-black/30 rounded-full animate-deep-float pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-black/30 rounded-full animate-enhanced-float pointer-events-none" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default NotFound;
