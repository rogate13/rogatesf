import type { Experience } from "@/types/content";
import { TagList } from "@/components/shared/TagList";

export function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <div className="site-card reveal-card overflow-hidden rounded-[1.75rem]">
      {items.map((item, index) => (
        <article
          key={`${item.company}-${item.role}`}
          className={`grid gap-5 p-5 sm:p-7 lg:grid-cols-[.65fr_1.35fr] lg:gap-9 ${index ? "border-t border-[var(--border)]" : ""}`}
        >
          <div>
            <p className="text-sm font-bold text-accent">{item.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-main">{item.role}</h3>
            <p className="mt-1 text-sm font-medium text-muted">{item.company}</p>
          </div>
          <div>
            <p className="text-sm leading-7 text-muted sm:text-base">{item.summary}</p>
            {item.technologies?.length ? <div className="mt-4"><TagList items={item.technologies} /></div> : null}
          </div>
        </article>
      ))}
    </div>
  );
}
