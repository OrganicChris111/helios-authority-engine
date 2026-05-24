# Helios Authority Engine

A premium, modern, AI-powered SaaS website built with React + Tailwind CSS + Framer Motion.

## Pages
- **Home** — Hero, How It Works, Features, Authority Visual, AI Visibility, PR Distribution, Testimonials, Pricing, CTA
- **Platform** — Interactive dashboard with 8 tabs: Overview, Publishers, Indexation, AI Writer, Anchors, Placement, AI Search, Reporting
- **Features** — Detailed feature breakdown with mock UI previews
- **Pricing** — 3 tiers + comparison table + enterprise option
- **About** — Mission, Vision, Values, Team
- **Contact** — Premium form + booking + FAQ accordion

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS (custom design system)
- Framer Motion (animations)
- React Router (routing)
- Recharts (charts & graphs)
- Lucide React (icons)

## Design Direction
- Dark mode by default with light mode toggle
- Deep charcoal backgrounds, gold/amber accents, electric blue highlights
- Glassmorphism, gradient borders, glow effects
- Linear-style minimalism + Ahrefs dashboard density + Stripe polish

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

### Vercel
1. Push to GitHub
2. Import to Vercel — auto-detects Vite
3. Deploy — `vercel.json` handles SPA routing

### Netlify
1. Push to GitHub
2. Import to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. `public/_redirects` handles SPA routing

### Manual
```bash
npm run build
# Serve the `dist/` folder
```
