# CONTENT EDIT GUIDE

If you only want to change portfolio content, you normally **do not need to edit `src/app/` or `src/components/`**.

## 1. Main identity
Edit `src/data/profile.ts`.

Change:
- name
- professional headline
- tech subtitle
- location
- email
- phone
- introduction
- professional summary
- CV file path

## 2. Project portfolio
Edit `src/data/projects.ts`.

This is the main file for your portfolio.

Every project controls:
- title
- organization
- category
- role
- period
- homepage visibility (`featured`)
- summary
- overview
- problem
- solution
- contribution
- features
- technology
- impact
- cover image
- gallery images
- live URL
- repository URL
- SEO title and description

### Images are also controlled here
Example:

```ts
cover: {
  src: "/images/projects/onlearnid/01.webp",
  alt: "OnLearnID dashboard"
}
```

The web component only reads this value.

## 3. Work experience
Edit `src/data/experience.ts`.

There are two arrays:
- `experiences`: main professional experience
- `additionalExperiences`: project / earlier experience

## 4. Skills
Edit `src/data/skills.ts`.

Add/remove a category or skill without changing the Skills component.

## 5. Page wording
Edit `src/data/site.ts`.

This includes:
- home section titles
- page titles
- button labels
- project-detail section labels
- contact wording
- footer wording

This keeps public-facing copy outside the UI components.

## 6. Certificates
Edit `src/data/certifications.ts` and place images in:

```text
public/images/certificates/
```

## 7. Awards
Edit `src/data/achievements.ts`.

## 8. Social links
Edit `src/data/socials.ts`.

Exact LinkedIn/GitHub URLs are disabled by default because they were not available in the supplied CV.

## 9. Navigation
Edit `src/data/navigation.ts`.

## 10. When should you edit components?
Only edit `src/components/` if you want to change **how something looks or behaves**, not the content.

Examples:
- card layout
- spacing
- image ratio
- mobile navigation
- filter behavior

## 11. When should you edit pages?
Normally only if you want to change the **site structure** itself.

Examples:
- adding a Blog page
- removing About page
- changing home section order

Content changes should stay in `src/data/`.

## 12. Change the color theme
Edit:

```text
src/data/themes.ts
```

The portfolio includes multiple presets (Aurora, Nebula, Ember, Paper). Each preset contains all colors as data, for example:

```ts
{
  id: "aurora",
  label: "Aurora",
  preview: ["#07111f", "#4ce6b3", "#7aa7ff"],
  variables: {
    background: "#07111f",
    surface: "rgba(12, 27, 45, 0.72)",
    text: "#f4f8ff",
    accent: "#4ce6b3",
    "accent-2": "#7aa7ff"
  }
}
```

You can edit the values or copy an existing object to add another preset. Change the default theme in the same file:

```ts
defaultTheme: "aurora"
```

The visitor's selected theme is saved in the browser automatically.

## 13. Change / disable the interactive 3D atmosphere
Edit:

```text
src/data/visual.ts
```

Important settings include:

```ts
hero3D: {
  enabled: true,
  particleCountDesktop: 900,
  particleCountMobile: 320,
  rotationSpeed: 0.0017,
  pointerStrength: 0.32
}
```

Set `enabled: false` if you want to remove the Three.js hero scene without editing the component.

For slower devices, reduce `particleCountDesktop` and `particleCountMobile`.

## 14. Responsive behavior
The UI is mobile-first. Main responsive behavior includes:
- hamburger navigation on phones/tablets
- horizontally scrollable project filters on narrow screens
- stacked project and experience layouts on phones
- responsive typography using `clamp()` in the hero
- responsive Next.js images
- reduced Three.js particle count on mobile
- capped device pixel ratio for WebGL performance
- support for `prefers-reduced-motion`
- touch-sized navigation and action buttons

Layout code still lives in `src/components/` and `src/app/`; ordinary content changes stay in `src/data/`.
