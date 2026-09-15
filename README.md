# JD — Little Corner of the Internet (Next.js Portfolio)

Modern, interactive glassmorphism portfolio built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Tone.js**, and **TypeScript**, configured for static export (`output: 'export'`) and GitHub Pages deployment.

---

## ✨ Features

- **Next.js App Router Architecture**: Clean component modularization into `components/sections`, `components/modals`, `components/ui`, and custom hooks.
- **Tailwind CSS Glassmorphism**: Tailored glass tokens (`glass-shell`, `glass-pill`, `tilt-card`, `sticky-note`, `explore-glow-btn`) and smooth animations.
- **3D Interactive Card Tilt**: Smooth mouse-tracking parallax calculation on the sunset portrait card.
- **Customizable Sticky Note**: Interactive click-to-edit modal for the yellow desk note ("Better Days Ahead...") with live updates.
- **Tone.js Sound Effects**: Tactile audio chimes on tab switching, button clicks, secret easter egg chords, and mute/unmute toggle.
- **Dark / Light Glass Theme Switcher**: Instant switching between Twilight Dusk and Frosted Daylight themes.
- **Modals & Overviews**: Creative Showreel video modal, Football Passion popup, and toast notification capsule.
- **Static Export Ready**: Configured with `output: 'export'`, `trailingSlash: true`, and unoptimized images for direct deployment to GitHub Pages, Netlify, Vercel, or AWS S3.

---

## 🛠️ Project Structure

```
├── app/
│   ├── globals.css          # Glassmorphism tokens & Tailwind CSS
│   ├── layout.tsx           # Google Fonts (Inter, Caveat, Plus Jakarta Sans) & SEO metadata
│   └── page.tsx             # Main client entrypoint with tab routing & state
├── components/
│   ├── BackgroundLayer.tsx  # Dynamic atmospheric background & glowing orbs
│   ├── Header.tsx           # Navigation capsule, audio toggle, and theme switch
│   ├── Footer.tsx           # Scroll down indicator
│   ├── MobileMenu.tsx       # Collapsible mobile drawer
│   ├── NavigationDots.tsx   # Vertical desktop navigation dots
│   ├── sections/
│   │   ├── HomeSection.tsx      # Hero, 3D tilt card & sticky note
│   │   ├── AboutSection.tsx     # Student, Creator, Football Lover cards
│   │   ├── ProjectsSection.tsx  # 4 featured project cards
│   │   ├── YouTubeSection.tsx   # Channel showcase & reel CTA
│   │   ├── GallerySection.tsx   # Fujifilm photo moments
│   │   ├── ResumeSection.tsx    # Experience timeline & download button
│   │   └── ContactSection.tsx   # Glass form with validation & toast
│   ├── modals/
│   │   ├── VideoModal.tsx       # 2026 Creative Showreel
│   │   ├── StickyNoteModal.tsx  # Sticky note editor
│   │   └── FootballModal.tsx    # Football tactics philosophy
│   └── ui/
│       └── Toast.tsx            # Animated notification capsule
├── hooks/
│   ├── useSoundEffects.ts   # Tone.js client-side synthesizer engine
│   └── useTilt.ts           # Parallax 3D tilt calculation hook
├── types/
│   └── portfolio.ts         # TypeScript definitions
├── next.config.mjs          # Static export configuration
└── tailwind.config.ts       # Extended theme colors, fonts, and keyframes
```

---

## 🚀 Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Static Export
```bash
npm run build
```
The static export will be generated in the `out/` directory, ready to be hosted on any static web host or GitHub Pages.

---

## 🚢 Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In your repository settings, navigate to **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Use the standard Next.js static export GitHub Pages workflow.
