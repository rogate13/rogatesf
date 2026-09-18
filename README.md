# Rogate Sola Fide - Next.js Portfolio

A data-driven portfolio built with **Next.js + TypeScript + Tailwind CSS**.

The important design decision is that **portfolio content is not hardcoded inside page components**. Project titles, descriptions, experience, skills, labels, links, and image paths are stored inside `src/data/`.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## The files you will edit most often

| What you want to edit | File |
| --- | --- |
| Name, headline, email, phone, summary, CV path | `src/data/profile.ts` |
| Menu | `src/data/navigation.ts` |
| All page headings/buttons/static wording | `src/data/site.ts` |
| Projects + project image paths | `src/data/projects.ts` |
| Work experience | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Education & languages | `src/data/education.ts` |
| Certifications | `src/data/certifications.ts` |
| Awards | `src/data/achievements.ts` |
| LinkedIn/GitHub | `src/data/socials.ts` |
| Color theme presets | `src/data/themes.ts` |
| Three.js / interaction settings | `src/data/visual.ts` |

## Add a new project

1. Put the project images in:

```text
public/images/projects/your-project/
```

2. Open:

```text
src/data/projects.ts
```

3. Copy one project object and change the content.

The important fields are:

```ts
{
  slug: "your-project",
  title: "Project title",
  organization: "Company / client",
  category: "Business System",
  role: "Your role",
  period: "2026",
  featured: true,
  summary: "Short description",
  overview: ["Paragraph 1"],
  problem: ["Problem"],
  solution: ["Solution"],
  responsibilities: ["What you did"],
  features: ["Feature"],
  technologies: ["PHP", "MySQL"],
  impact: ["Result"],
  cover: {
    src: "/images/projects/your-project/cover.webp",
    alt: "Description of the image"
  },
  gallery: [],
  links: {
    live: null,
    repository: null
  },
  seo: {
    title: "Project | Rogate Sola Fide",
    description: "SEO description"
  }
}
```

You do **not** create another page. Next.js generates the project detail URL from the `slug` automatically:

```text
/projects/your-project
```

## Change which projects appear on the homepage

In `src/data/projects.ts`:

```ts
featured: true
```

means the project appears on Home.

```ts
featured: false
```

means it remains on the Projects page, but is hidden from Home.

## Change project images

All image paths are stored in project data, not inside the UI components.

Example:

```ts
cover: {
  src: "/images/projects/asam-jawa/01.webp",
  alt: "Asam Jawa website"
}
```

Replace the image in `public/images/...` or change the `src` value.

## Add LinkedIn / GitHub

Open `src/data/socials.ts` and add the correct URL, then set:

```ts
enabled: true
```

The URLs were intentionally left disabled because the source CV did not contain exact profile URLs.

## Add technologies to a project

Some older portfolio screenshots do not state the exact technology used. Those arrays are intentionally blank instead of guessing.

When you know the stack, edit:

```ts
technologies: ["PHP", "CodeIgniter", "JavaScript", "MySQL"]
```

## Replace CV

Replace:

```text
public/documents/rogate-sola-fide-cv.pdf
```

Keep the same file name, or edit `resumePath` in `src/data/profile.ts`.

## Structure

```text
src/
├── app/                  # Pages / routing only
├── components/           # Reusable UI
├── data/                 # EDIT CONTENT HERE
└── types/                # Data type definitions

public/
├── images/               # Images referenced from data
└── documents/            # CV / downloadable files
```

## Why this structure

- Content and UI are separated.
- New projects use one shared dynamic project page.
- Project cards, detail pages, filtering, and featured items all use the same project array.
- Images are managed through data objects.
- The site can grow without turning page components into long hardcoded files.

## Responsive + interactive visual system

This version is designed mobile-first and includes:

- responsive navigation with a mobile menu
- layouts for phone, tablet, laptop, and large desktop widths
- responsive image sizing
- touch-friendly controls
- reduced-motion support
- mobile-reduced WebGL workload

The hero uses **Three.js** directly (without React Three Fiber) for a lightweight interactive wireframe/particle scene. The scene reacts to pointer movement on desktop and automatically uses fewer particles on smaller devices.

## Editable color themes

Theme presets are data-driven too. Edit:

```text
src/data/themes.ts
```

The visitor can switch between the included theme presets, and the choice is persisted in `localStorage`.

## Editable 3D settings

Edit:

```text
src/data/visual.ts
```

You can disable the 3D scene, reduce particle counts, or change interaction/rotation strength without editing the Three.js component.

## Additional dependency

The interactive hero uses:

```text
three
@types/three
```

After extracting the project, run `npm install` before `npm run dev`.
