# Rogate Sola Fide — One Page Interactive Portfolio

A one-page developer portfolio using Next.js, TypeScript, Tailwind CSS, and an interactive Three.js hero.

## Current experience

- One-page portfolio only (`/`)
- Minimal header controls: **Download CV** and **Theme switcher**
- Interactive Three.js hero with pointer/tap response
- Animated introduction dialogue
- Floating **Explore now** popup inside the hero
- Explore button smoothly scrolls to the next portfolio section
- Popup disappears with the hero; it does not stay attached to the bottom of the screen
- Elegant reveal / blur / motion transitions for each section
- Inline “Rogate here” conversation notes inside each section
- Subtle scroll-reactive Three.js motion
- Minimal top scroll-progress line
- RSF SVG brand mark + favicon
- Editable portfolio content centralized in **one file**

## Edit content here

```text
src/data/portfolio.ts
```

That file contains:

- Profile
- Hero dialogue
- Hero Explore popup copy + target section
- Section conversation messages
- Section titles and copy
- Services
- Projects
- Skills
- Experience
- Education
- Certifications
- Achievements
- Theme colors
- Three.js visual settings
- Footer text

## Replace images

```text
public/images/projects/
```

Then update the image path in `src/data/portfolio.ts`.

## Logo

```text
public/brand/rsf-logo.svg
public/brand/rsf-wordmark.svg
src/app/icon.svg
```

## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production test

```bash
npm run build
npm start
```
