# Rogate Sola Fide — One Page Portfolio

A one-page portfolio built with Next.js, TypeScript, Tailwind CSS, and an interactive Three.js hero.

## What changed

- One-page portfolio only (`/`)
- No navigation menu and no project detail routes
- Only primary controls: **Download CV** and **Theme switcher**
- Interactive Three.js hero with pointer/tap response
- Animated introduction dialogue
- RSF SVG brand mark + favicon
- All editable portfolio content is centralized in **one file**

## Edit content here

```text
src/data/portfolio.ts
```

That file contains:

- Profile
- Hero dialogue
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
