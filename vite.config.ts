import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("react-router-dom")
          ) {
            return "vendor";
          }

          if (
            id.includes("@vercel/analytics") ||
            id.includes("@vercel/speed-insights")
          ) {
            return "analytics";
          }
        },
      },
    },
    sourcemap: false,
    target: "esnext",
    cssMinify: true,
    assetsInlineLimit: 4096,
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
}));
