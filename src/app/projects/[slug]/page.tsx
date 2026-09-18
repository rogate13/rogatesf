import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { BulletList } from "@/components/shared/BulletList";
import { TagList } from "@/components/shared/TagList";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { projects, siteContent } from "@/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.seo.title, description: project.seo.description };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const labels = siteContent.projects.detail;

  return (
    <>
      <section className="py-10 sm:py-14 lg:py-16">
        <Container>
          <Link href="/projects" className="text-sm font-bold text-accent hover:underline">← {siteContent.common.backToProjects}</Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-10">
            <div>
              <p className="eyebrow">{project.category}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-main sm:text-5xl lg:text-6xl">{project.title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">{project.summary}</p>
            </div>
            <dl className="site-card grid gap-x-5 gap-y-6 rounded-[1.5rem] p-5 text-sm sm:grid-cols-2 sm:p-6">
              <div><dt className="text-subtle">{labels.organization}</dt><dd className="mt-1 font-semibold text-main">{project.organization}</dd></div>
              <div><dt className="text-subtle">{labels.period}</dt><dd className="mt-1 font-semibold text-main">{project.period}</dd></div>
              <div><dt className="text-subtle">{labels.role}</dt><dd className="mt-1 font-semibold text-main">{project.role}</dd></div>
              <div><dt className="text-subtle">{labels.category}</dt><dd className="mt-1 font-semibold text-main">{project.category}</dd></div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="section-divider pb-16 pt-10 sm:pb-24 sm:pt-14">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
            <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
              {project.technologies.length ? (
                <div className="site-card rounded-[1.5rem] p-5 sm:p-6">
                  <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-subtle">{labels.technologies}</h2>
                  <div className="mt-4"><TagList items={project.technologies} /></div>
                </div>
              ) : null}
              {(project.links.live || project.links.repository) ? (
                <div className="flex flex-col gap-3">
                  {project.links.live ? <a href={project.links.live} target="_blank" rel="noreferrer" className="button-primary w-full">{siteContent.common.visitWebsite}</a> : null}
                  {project.links.repository ? <a href={project.links.repository} target="_blank" rel="noreferrer" className="button-secondary w-full">{siteContent.common.viewRepository}</a> : null}
                </div>
              ) : null}
            </aside>

            <div className="min-w-0 space-y-10 sm:space-y-12">
              <section><h2 className="text-2xl font-semibold text-main">{labels.overview}</h2><div className="prose-copy mt-5 text-base leading-8 text-muted">{project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
              {project.problem?.length ? <section><h2 className="text-2xl font-semibold text-main">{labels.problem}</h2><div className="prose-copy mt-5 text-base leading-8 text-muted">{project.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section> : null}
              {project.solution?.length ? <section><h2 className="text-2xl font-semibold text-main">{labels.solution}</h2><div className="prose-copy mt-5 text-base leading-8 text-muted">{project.solution.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section> : null}
              {project.responsibilities.length ? <section><h2 className="text-2xl font-semibold text-main">{labels.responsibilities}</h2><div className="mt-5"><BulletList items={project.responsibilities} /></div></section> : null}
              {project.features.length ? <section><h2 className="text-2xl font-semibold text-main">{labels.features}</h2><div className="mt-5"><BulletList items={project.features} /></div></section> : null}
              {project.impact.length ? <section><h2 className="text-2xl font-semibold text-main">{labels.impact}</h2><div className="mt-5"><BulletList items={project.impact} /></div></section> : null}
              {project.gallery.length ? <section><h2 className="mb-5 text-2xl font-semibold text-main">{labels.gallery}</h2><ProjectGallery images={project.gallery} /></section> : null}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
