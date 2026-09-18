import type { SkillGroup } from "@/types/content";
import { TagList } from "@/components/shared/TagList";

export function SkillGrid({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="reveal-grid grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {groups.map((group) => (
        <article key={group.name} className="site-card interactive-card reveal-card rounded-[1.5rem] p-5 sm:p-6">
          <h3 className="text-lg font-semibold text-main">{group.name}</h3>
          {group.description ? <p className="mt-2 text-sm leading-6 text-muted">{group.description}</p> : null}
          <div className="mt-5"><TagList items={group.skills} /></div>
        </article>
      ))}
    </div>
  );
}
