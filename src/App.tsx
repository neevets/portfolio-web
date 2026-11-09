import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/NotFound";
import { DrewProjectPage, ServicePage } from "./pages/seo-pages";
import "./styles/solid-dark-theme.css";

const LOADER_DELAY_MS = 650;
const LOADER_FADE_MS = 350;

const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },
  { path: "/services/:serviceSlug", element: <ServicePage /> },
  { path: "/projects/drew", element: <DrewProjectPage /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => {
  useEffect(() => {
    const loader = document.getElementById("initial-preloader");
    if (!loader) return;

    const fadeTimer = window.setTimeout(() => {
      loader.classList.add("is-hidden");
    }, LOADER_DELAY_MS);

    const removeTimer = window.setTimeout(() => {
      loader.remove();
    }, LOADER_DELAY_MS + LOADER_FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark">
        <RouterProvider router={router} />
        <Analytics />
        <SpeedInsights />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
