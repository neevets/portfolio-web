import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Missing root element: expected an element with id "root".');
}

// index.html ships static SEO tags for crawlers that don't run JavaScript.
// Once React takes over, SEOHead renders the per-page versions, so drop the
// static copies to avoid duplicate <title>, canonical and description tags.
document.head
  .querySelectorAll("[data-static-seo]")
  .forEach((element) => element.remove());

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
