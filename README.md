# Onboard

Employee onboarding, reimagined. Onboard automates access provisioning, task checklists, and integrations so new hires are ready on day one.

This repository contains the marketing landing page for the Onboard product.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion (available), CSS keyframes
- **Icons:** Lucide React (available), inline SVGs
- **React:** 19

## Getting Started

### Prerequisites

- Node.js 22+ (managed via nvm)
- npm

### Install and Run

```bash
npm install
npm run dev
```

The dev server starts at `http://127.0.0.1:3000`.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
app/
  layout.tsx        # Root layout with metadata
  page.tsx          # Single page composing all sections
  globals.css       # Base styles, fonts, custom utilities
components/
  Navbar.tsx        # Fixed header with scroll-aware transparency
  Hero.tsx          # Headline, CTAs, and animated card fan
  LogoStrip.tsx     # Auto-scrolling integration logos
  HowItWorks.tsx    # Four-step process with timeline bar
  AISection.tsx     # AI assistant demo with interactive chat UI
  Features.tsx      # Six feature cards in a grid
  Testimonials.tsx  # Customer quote cards
  Pricing.tsx       # Three-tier pricing with monthly/annual toggle
  Footer.tsx        # CTA banner, link columns, and legal links
```

## Design

- **Background:** `#f0efed` (warm off-white)
- **Primary accent:** `#4F6EF7` (blue)
- **Body font:** Inter
- **Display font:** Instrument Serif (italic headings)
- Responsive layout with mobile-first breakpoints via Tailwind (`md`, `lg`)
