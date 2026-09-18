import Image from "next/image";
import type { Project } from "@/types/content";
import { TagList } from "@/components/shared/TagList";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const detailItems = project.features.slice(0, 4);

  return (
    <article className="site-card interactive-card reveal-card group overflow-hidden rounded-[1.75rem]">
      <div className="project-media relative aspect-[16/10] overflow-hidden">
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 620px"
          />
        ) : (
          <div className="project-fallback flex h-full flex-col justify-between p-6 text-main sm:p-7">
            <span className="eyebrow">{project.category}</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">System / 0{index + 1}</p>
              <span className="mt-3 block max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</span>
            </div>
          </div>
        )}
        <div className="project-overlay pointer-events-none absolute inset-0" />
        <div className="project-index pointer-events-none absolute right-4 top-4">0{index + 1}</div>
      </div>

      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-accent sm:text-xs">
          <span>{project.category}</span>
          <span aria-hidden="true" className="text-subtle">·</span>
          <span>{project.period}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-main sm:text-2xl">{project.title}</h3>
        <p className="mt-2 text-sm font-medium text-muted">{project.organization} · {project.role}</p>
        <p className="mt-4 text-sm leading-6 text-muted">{project.summary}</p>

        {detailItems.length ? (
          <ul className="mt-5 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {detailItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[.62rem] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {project.technologies.length ? <div className="mt-5"><TagList items={project.technologies.slice(0, 6)} /></div> : null}
      </div>
    </article>
  );
}
