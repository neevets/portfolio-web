import { useEffect, useState } from "react";
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

const MIN_LOADING_TIME_MS = 4500;
const FADE_OUT_DURATION_MS = 450;
const MAX_LOADING_TIME_MS = 8000;

const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },
  { path: "/services/:serviceSlug", element: <ServicePage /> },
  { path: "/projects/drew", element: <DrewProjectPage /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const startedAt = Date.now();
    let fadeTimer: number | undefined;
    let hideTimer: number | undefined;
    let hasStartedExit = false;

    const startFadeOut = () => {
      if (hasStartedExit) return;
      hasStartedExit = true;

      setIsFadingOut(true);
      hideTimer = window.setTimeout(() => {
        setIsLoading(false);
      }, FADE_OUT_DURATION_MS);
    };

    const finishLoading = () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("load", finishLoading);

      const elapsed = Date.now() - startedAt;
      const remaining = Math.max(0, MIN_LOADING_TIME_MS - elapsed - FADE_OUT_DURATION_MS);

      fadeTimer = window.setTimeout(startFadeOut, remaining);
    };

    const fallbackTimer = window.setTimeout(() => {
      window.removeEventListener("load", finishLoading);

      if (fadeTimer !== undefined) {
        window.clearTimeout(fadeTimer);
      }

      startFadeOut();
    }, MAX_LOADING_TIME_MS - FADE_OUT_DURATION_MS);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(fallbackTimer);

      if (fadeTimer !== undefined) {
        window.clearTimeout(fadeTimer);
      }

      if (hideTimer !== undefined) {
        window.clearTimeout(hideTimer);
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <RouterProvider router={router} />
        <Analytics />
        <SpeedInsights />
        {isLoading && <InitialLoader isExiting={isFadingOut} />}
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
