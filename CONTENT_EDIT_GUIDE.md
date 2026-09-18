# CONTENT EDIT GUIDE

The portfolio is now intentionally simple: **one page + one main data file**.

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

### Explore / scroll-down message
Search for:

```ts
scrollCue: {
```

Edit `label` and `text`. This controls the animated **Explore now** cue below the hero.

### Conversational messages while scrolling
Search for:

```ts
scrollNarrative: {
```

Each message is connected to a section (`about`, `services`, `projects`, `skills`, `experience`, `credentials`, `contact`). Edit the copy there to change what Rogate says as a visitor explores the page.

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
