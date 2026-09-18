"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/content";
import { ProjectCard } from "./ProjectCard";

export function ProjectExplorer({
  projects,
  allLabel,
  emptyState,
}: {
  projects: Project[];
  allLabel: string;
  emptyState: string;
}) {
  const categories = useMemo(() => Array.from(new Set(projects.map((project) => project.category))).sort(), [projects]);
  const [activeCategory, setActiveCategory] = useState(allLabel);
  const visibleProjects = activeCategory === allLabel ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" role="group" aria-label="Project categories">
        {[allLabel, ...categories].map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`filter-button shrink-0 ${active ? "filter-button-active" : ""}`}
            >
              {category}
            </button>
          );
        })}
      </div>
      {visibleProjects.length ? (
        <div className="grid gap-5 md:grid-cols-2 xl:gap-6">{visibleProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      ) : (
        <p className="site-card rounded-2xl border-dashed p-8 text-muted">{emptyState}</p>
      )}
    </div>
  );
}
