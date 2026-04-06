# Catalyst

High-conviction landing experience for The Founding Sprint.

Catalyst turns a plain-English startup idea into an investor-ready Founder Pack simulation in about 60 seconds, with a premium animated UI built on Next.js, Tailwind CSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-16.2.2-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.4-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-111111)

## What this project includes

- Cinematic hero with animated runtime simulation and particle canvas
- Scroll-reactive parallax accents and section reveal choreography
- Founder narrative sections: social proof, process, outputs, demo strip, testimonials, pricing
- Interactive UI primitives including magnetic buttons and tilt cards
- Light and dark theme toggle with persisted preference
- Responsive layout tuned for both desktop and mobile

## Core sections

- Hero: Founding Sprint simulation and prompt-to-output flow
- Social Proof: credibility chips and performance stats
- How It Works: three-step conversion path
- Output Showcase: generated assets preview
- Live Demo Strip: terminal-style generation timeline
- Testimonials: founder outcomes and proof points
- Pricing: plan comparison with featured tier
- Final CTA + Footer: conversion close and navigation links

## Tech stack

| Layer | Tools |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS v4 + custom global CSS |
| Animation | Framer Motion |
| Fonts | Geist + Inter via next/font |
| Linting | ESLint 9 + eslint-config-next |

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open http://localhost:3000

### Production build

```bash
npm run build
npm run start
```

## Scripts

- npm run dev: start local development server
- npm run build: create production build
- npm run start: run built app
- npm run lint: run ESLint

## Project structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    landing/
      landing-page.tsx
      navbar.tsx
      hero.tsx
      hero-particle-canvas.tsx
      social-proof.tsx
      how-it-works.tsx
      output-showcase.tsx
      live-demo-strip.tsx
      testimonials.tsx
      pricing.tsx
      final-cta.tsx
      footer.tsx
      theme-toggle.tsx
      magnetic-button.tsx
      tilt-card.tsx
      motion-primitives.tsx
```

## Theming model

- Theme preference is stored in localStorage under catalyst-theme
- Initial theme is applied in src/app/layout.tsx before hydration
- Theme toggle updates both html data-theme and html dark class
- Global style tokens and light-mode overrides live in src/app/globals.css

## Design notes

- Component architecture is section-based for rapid iteration
- Motion is intentional and narrative-first, not decorative-only
- Card treatments and border language are kept consistent across sections

## Deployment

This app deploys cleanly to Vercel.

Typical flow:

1. Push main branch to GitHub
2. Import the repository in Vercel
3. Keep default Next.js build settings
4. Deploy

## Troubleshooting

If npm run dev fails:

1. Verify Node and npm versions
2. Reinstall dependencies with npm install
3. Remove build cache by deleting .next, then retry
4. Ensure port 3000 is not already in use

## Legacy assets

The legacy-static directory contains older static artifacts kept for reference.
