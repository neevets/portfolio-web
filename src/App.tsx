import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HelmetProvider } from "react-helmet-async";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/NotFound";
import "./styles/solid-dark-theme.css";

const router = createBrowserRouter([
  { path: "/", element: <Portfolio /> },
  { path: "*", element: <NotFound /> },
]);

const App = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
