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

const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },
  { path: "/services/:serviceSlug", element: <ServicePage /> },
  { path: "/projects/drew", element: <DrewProjectPage /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let hideTimer: number | undefined;
    let fallbackTimer: number | undefined;

    const finishLoading = () => {
      if (fallbackTimer !== undefined) {
        window.clearTimeout(fallbackTimer);
      }

      hideTimer = window.setTimeout(() => {
        setIsLoading(false);
      }, 450);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    fallbackTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => {
      window.removeEventListener("load", finishLoading);

      if (hideTimer !== undefined) {
        window.clearTimeout(hideTimer);
      }

      if (fallbackTimer !== undefined) {
        window.clearTimeout(fallbackTimer);
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <RouterProvider router={router} />
        <Analytics />
        <SpeedInsights />
        {isLoading && <InitialLoader />}
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
