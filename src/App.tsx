import { useCallback, useEffect, useRef, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";
import { InitialLoader } from "@/components/ui/initial-loader";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/NotFound";
import { DrewProjectPage, ServicePage } from "./pages/seo-pages";
import "./styles/solid-dark-theme.css";

const MIN_LOADING_CYCLES = 3;
const FADE_OUT_DURATION_MS = 450;
const LOAD_EVENT_FALLBACK_MS = 8000;

const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },
  { path: "/services/:serviceSlug", element: <ServicePage /> },
  { path: "/projects/drew", element: <DrewProjectPage /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const completedCyclesRef = useRef(0);
  const pageReadyRef = useRef(false);
  const exitStartedRef = useRef(false);
  const hideTimerRef = useRef<number | undefined>(undefined);

  const tryStartFadeOut = useCallback(() => {
    if (
      !pageReadyRef.current ||
      completedCyclesRef.current < MIN_LOADING_CYCLES ||
      exitStartedRef.current
    ) {
      return;
    }

    exitStartedRef.current = true;
    setIsFadingOut(true);
    hideTimerRef.current = window.setTimeout(() => {
      setIsLoading(false);
    }, FADE_OUT_DURATION_MS);
  }, []);

  const handleAnimationCycleComplete = useCallback(() => {
    completedCyclesRef.current += 1;
    tryStartFadeOut();
  }, [tryStartFadeOut]);

  useEffect(() => {
    const finishLoading = () => {
      window.clearTimeout(fallbackTimer);

      window.removeEventListener("load", finishLoading);
      pageReadyRef.current = true;
    };

    const fallbackTimer = window.setTimeout(() => {
      window.removeEventListener("load", finishLoading);
      pageReadyRef.current = true;
    }, LOAD_EVENT_FALLBACK_MS);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);

      if (fallbackTimer !== undefined) {
        window.clearTimeout(fallbackTimer);
      }

      if (hideTimerRef.current !== undefined) {
        window.clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <RouterProvider router={router} />
        <Analytics />
        <SpeedInsights />
        {isLoading && (
          <InitialLoader
            isExiting={isFadingOut}
            onCycleComplete={handleAnimationCycleComplete}
          />
        )}
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
