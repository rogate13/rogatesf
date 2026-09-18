# CONTENT EDIT GUIDE

The portfolio is intentionally simple: **one page + one main data file**.

## 1. Edit almost everything here

```text
src/data/portfolio.ts
```

### Profile
Search for:

```ts
profile: {
```

Edit name, role, email, phone, location, CV path, and profile copy.

### Hero dialogue
Search for:

```ts
dialogue: {
```

Edit:

```ts
greeting
role
question
prompts
interactionHint
```

### Hero explore popup
Search for:

```ts
explorePopup: {
```

You can edit:

```ts
kicker
title
text
buttonLabel
targetId
```

The popup appears inside the hero area. Pressing **Explore now** smoothly scrolls to the section whose ID matches `targetId` (default: `about`). It is not a sticky popup that follows the visitor down the page.

### Conversational messages inside each section
Search for:

```ts
scrollNarrative: {
```

Each message is connected to a section:

```text
about
services
projects
skills
experience
credentials
contact
```

These messages appear as small inline conversation bubbles inside their own sections, so they move naturally with the page instead of sticking to the bottom of the screen.

### Projects
Search for:

```ts
export const projects
```

Set:

```ts
featured: true
```

to show a project on the single-page portfolio.

### Theme colors
Search for:

```ts
export const themes
```

Duplicate a theme object or change its color variables.

### Three.js visual
Search for:

```ts
export const visualConfig
```

Reduce particle counts if you want lighter mobile performance.

## 2. Project images

Put images in:

```text
public/images/projects/<project-name>/
```

Then reference them in `src/data/portfolio.ts` like:

```ts
src: "/images/projects/project-name/cover.webp"
```

Do not include `/public` in the URL.

## 3. CV

Replace:

```text
public/documents/rogate-sola-fide-cv.pdf
```

Keep the same filename if you do not want to change the data file.

## 4. Logo

Main logo:

```text
public/brand/rsf-logo.svg
```

Wide wordmark:

```text
public/brand/rsf-wordmark.svg
```

Browser icon / favicon:

```text
src/app/icon.svg
```

## 5. Layout / visual code

Only edit these if you want to change the website design itself:

```text
src/app/page.tsx
src/app/globals.css
src/components/
```

For normal content updates, you should not need to touch them.

## V7 visual refinements

### RSF logo
The main logo and browser icon are now the same clear `RSF` lettermark.

Files:
- `public/brand/rsf-logo.svg`
- `src/app/icon.svg`

The three letters are intentionally separated and readable at small sizes.

### Hero position
The first hero content is positioned closer to the top on desktop so the introduction appears sooner without leaving a large empty area above it.

Layout file:
- `src/components/home/Hero.tsx`

### Ambient Three.js background
Sections below the hero now share one lightweight Three.js ambient scene. It uses subtle wireframe objects, orbit rings, and particles around the edges so the content remains easy to read.

Component:
- `src/components/visual/AmbientScene.tsx`

Settings remain editable from the single content/config file:
- `src/data/portfolio.ts`

Look for:

```ts
ambient3D: {
  enabled: true,
  particleCountDesktop: 460,
  particleCountMobile: 170,
  maxPixelRatio: 1.35,
  maxOpacity: 0.34,
  rotationSpeed: 0.00115,
  orbOpacity: 0.24,
  ringOpacity: 0.18,
  particlesOpacity: 0.32,
}
```

To make the background quieter, reduce `maxOpacity`, `orbOpacity`, `ringOpacity`, and `particlesOpacity`.
To disable it completely, set `enabled: false`.
