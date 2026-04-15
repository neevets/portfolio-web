import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { InitialLoader } from "@/components/ui/initial-loader";
import { HelmetProvider } from "react-helmet-async";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  const [shouldRenderLoader, setShouldRenderLoader] = useState(true);

  useEffect(() => {
    const INITIAL_LOADER_DURATION_MS = 3000;
    const LOADER_FADE_OUT_DURATION_MS = 450;

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
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <div
          className={`transition-opacity duration-500 ${isLoaderVisible ? "opacity-0" : "opacity-100"}`}
          aria-hidden={isLoaderVisible}
        >
          <RouterProvider router={router} />
          <Analytics />
          <SpeedInsights />
        </div>

        {shouldRenderLoader ? (
          <div
            className={`transition-opacity duration-500 ${isLoaderVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <InitialLoader />
          </div>
        ) : null}
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
