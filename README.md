# Neevets Portfolio

Personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## Requirements

- Node.js 24.x
- npm

## Getting started

```bash
npm ci
npm run dev
```

Vite serves the development site at `http://localhost:8080`.

## Quality checks

Run the same checks used by the CI workflow:

```bash
npm run lint
npm run typecheck
npm run build
```

Or run the complete release check:

```bash
npm run release:check
```

Preview a production build locally with:

```bash
npm run preview
```

## Project structure

- `src/components/sections`: portfolio page sections
- `src/components/ui`: reusable UI primitives
- `src/components/icons`: icon components and icon registry
- `src/data`: portfolio content
- `src/pages`: route-level pages
- `src/styles`: theme-specific overrides

## Deployment

The project is configured for Vercel. The Vercel configuration includes an SPA fallback so client-side routes resolve through `index.html`.
