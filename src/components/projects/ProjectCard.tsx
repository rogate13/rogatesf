import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/content";
import { siteContent } from "@/data";
import { TagList } from "@/components/shared/TagList";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="site-card interactive-card group overflow-hidden rounded-[1.75rem]">
      <Link href={`/projects/${project.slug}`} className="block h-full">
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
              <span className="max-w-sm text-2xl font-semibold tracking-tight sm:text-3xl">{project.title}</span>
            </div>
          )}
          <div className="project-overlay pointer-events-none absolute inset-0" />
        </div>
        <div className="p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-accent sm:text-xs">
            <span>{project.category}</span>
            <span aria-hidden="true" className="text-subtle">·</span>
            <span>{project.period}</span>
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-main sm:text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm font-medium text-muted">{project.organization}</p>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted">{project.summary}</p>
          <div className="mt-5"><TagList items={project.technologies.slice(0, 5)} /></div>
          <p className="mt-6 text-sm font-bold text-main">{siteContent.common.viewProject} <span className="text-accent">→</span></p>
        </div>
      </Link>
    </article>
  );
}
