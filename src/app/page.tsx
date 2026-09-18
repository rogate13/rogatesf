import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { SkillGrid } from "@/components/home/SkillGrid";
import { ExperienceList } from "@/components/home/ExperienceList";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { achievements, experiences, profile, projects, services, siteContent, skillGroups } from "@/data";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <>
      <Hero />

      <section className="section-divider py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow={siteContent.home.aboutEyebrow} title={siteContent.home.aboutTitle} description={siteContent.home.aboutBody} />
          <div className="site-card mt-8 max-w-4xl rounded-[1.75rem] p-6 text-base leading-8 text-muted sm:p-9">
            {profile.professionalSummary}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow={siteContent.home.servicesEyebrow} title={siteContent.home.servicesTitle} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <article key={service.title} className="site-card interactive-card rounded-[1.5rem] p-5 sm:p-6">
                <p className="text-xs font-extrabold tracking-[0.16em] text-accent">0{index + 1}</p>
                <h3 className="mt-4 font-semibold text-main">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-divider py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow={siteContent.home.projectsEyebrow} title={siteContent.home.projectsTitle} />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:gap-6">{featuredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
          <div className="mt-8"><Link href="/projects" className="button-secondary">{siteContent.common.viewAllProjects}</Link></div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow={siteContent.home.skillsEyebrow} title={siteContent.home.skillsTitle} />
          <div className="mt-8"><SkillGrid groups={skillGroups} /></div>
        </Container>
      </section>

      <section className="section-divider py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow={siteContent.home.experienceEyebrow} title={siteContent.home.experienceTitle} />
          <div className="mt-8"><ExperienceList items={experiences} /></div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow={siteContent.home.achievementsEyebrow} title={siteContent.home.achievementsTitle} />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {achievements.map((achievement) => (
              <article key={achievement.title} className="site-card interactive-card rounded-[1.5rem] p-5 sm:p-6">
                <p className="text-sm font-bold text-accent">{achievement.year}</p>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-main">{achievement.title}</h3>
                <p className="mt-2 text-sm text-muted">{achievement.organization}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 pt-6 sm:pb-24 sm:pt-10">
        <Container>
          <div className="cta-panel rounded-[2rem] p-7 sm:p-10 lg:p-12">
            <p className="eyebrow">{siteContent.home.ctaEyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl">{siteContent.home.ctaTitle}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{siteContent.home.ctaBody}</p>
            <a href={`mailto:${profile.email}`} className="button-primary mt-8">{siteContent.common.contactMe}</a>
          </div>
        </Container>
      </section>
    </>
  );
}
