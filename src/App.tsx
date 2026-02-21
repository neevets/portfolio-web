import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { InitialLoader } from "@/components/ui/initial-loader";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const INITIAL_LOADER_DURATION_MS = 3000;
const LOADER_FADE_OUT_DURATION_MS = 1200;

const App = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [shouldRenderLoader, setShouldRenderLoader] = useState(true);

  useEffect(() => {
    const hideLoaderTimer = window.setTimeout(() => {
      setIsLoaderVisible(false);
    }, INITIAL_LOADER_DURATION_MS);

    const unmountLoaderTimer = window.setTimeout(() => {
      setShouldRenderLoader(false);
    }, INITIAL_LOADER_DURATION_MS + LOADER_FADE_OUT_DURATION_MS);

    return () => {
      window.clearTimeout(hideLoaderTimer);
      window.clearTimeout(unmountLoaderTimer);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system">
        <TooltipProvider>
          <div
            className={`transition-opacity ease-in-out ${isLoaderVisible ? "opacity-0" : "opacity-100"}`}
            style={{ transitionDuration: "1400ms" }}
            aria-hidden={isLoaderVisible}
          >
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
            <Analytics />
            <SpeedInsights />
          </div>

          {shouldRenderLoader ? (
            <div
              className={`transition-opacity ease-in-out ${isLoaderVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
              style={{ transitionDuration: "1200ms" }}
            >
              <InitialLoader />
            </div>
          ) : null}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
