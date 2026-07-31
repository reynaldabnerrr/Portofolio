# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Reynald Abner Tananda — Full-Stack Software Engineer & Cyber Security Specialist. Features a cyberpunk/hacker aesthetic with interactive elements including an e-commerce checkout simulator, WhatsApp chatbot, developer terminal, and GitHub activity calendar.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run astro    # Run Astro CLI commands
```

## Architecture

### Framework Stack
- **Astro 5** — Static site framework with React integration
- **React 19** — Interactive UI components (Portfolio.tsx)
- **Tailwind CSS 3** — Styling with CSS custom properties for theming
- **TypeScript** — Type safety across the codebase

### Directory Structure
```
src/
├── components/
│   └── Portfolio.tsx    # Main single-file React component (~2365 lines)
├── layouts/
│   └── Layout.astro     # Base HTML layout with SEO, JSON-LD structured data
├── pages/
│   └── index.astro      # Entry page importing Layout + Portfolio
└── styles/
    └── globals.css      # Global styles, CSS variables, animations, light mode overrides
```

### Key Implementation Details

**Portfolio.tsx** is the monolithic React component containing:
- Loading screen with animated progress
- Hero section with Typewriter effect (react-simple-typewriter)
- About, Services, Skills, Projects, Achievements sections
- Interactive E-Commerce Simulator (cart → checkout → QRIS payment → WhatsApp notification)
- GitHub Activity calendar (react-github-calendar)
- Developer terminal console modal
- WhatsApp chatbot widget
- Light/dark theme toggle (CSS class `light` on `<html>`)

**Layout.astro** handles:
- SEO meta tags and Open Graph
- JSON-LD structured data (Person + WebSite schema)
- Google Fonts (Outfit, Plus Jakarta Sans)
- FontAwesome CDN

**CSS Theming** uses CSS custom properties defined in `:root` and `.light` classes in globals.css. The cyber aesthetic includes glassmorphism cards, gradient text animations, and particle canvas effects.

### Deployment
- **Vercel** via `@astrojs/vercel` adapter
- Web analytics enabled
- Site URL: https://www.abner.my.id
