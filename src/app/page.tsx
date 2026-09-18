import { Hero } from "@/components/home/Hero";
import { SkillGrid } from "@/components/home/SkillGrid";
import { ExperienceList } from "@/components/home/ExperienceList";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionDialogue } from "@/components/shared/SectionDialogue";
import { achievements, certifications, education, experiences, portfolio, projects, skillGroups } from "@/data";

export default function HomePage() {
  const selectedProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />

      <section id="about" data-story-section="about" className="scroll-section section-divider py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={portfolio.sections.about.eyebrow}
            title={portfolio.sections.about.title}
            description={portfolio.sections.about.body}
          />
          <SectionDialogue label={portfolio.scrollNarrative.label} message={portfolio.scrollNarrative.messages.about} />
          <div className="site-card reveal-card mt-8 max-w-5xl rounded-[1.75rem] p-6 sm:p-9">
            <p className="max-w-4xl text-base leading-8 text-muted sm:text-lg">{portfolio.profile.professionalSummary}</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-[var(--border)] pt-6 text-sm">
              <span className="text-muted">{portfolio.profile.location}</span>
              <span className="text-muted">{portfolio.profile.email}</span>
              <span className="text-muted">{portfolio.profile.phone}</span>
            </div>
          </div>
        </Container>
      </section>

      <section data-story-section="services" className="scroll-section py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow={portfolio.sections.services.eyebrow} title={portfolio.sections.services.title} />
          <SectionDialogue label={portfolio.scrollNarrative.label} message={portfolio.scrollNarrative.messages.services} />
          <div className="reveal-grid mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {portfolio.services.map((service, index) => (
              <article key={service.title} className="site-card interactive-card reveal-card rounded-[1.5rem] p-5 sm:p-6">
                <p className="text-xs font-extrabold tracking-[0.16em] text-accent">0{index + 1}</p>
                <h3 className="mt-4 font-semibold text-main">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section data-story-section="projects" className="scroll-section section-divider py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={portfolio.sections.projects.eyebrow}
            title={portfolio.sections.projects.title}
            description={portfolio.sections.projects.description}
          />
          <SectionDialogue label={portfolio.scrollNarrative.label} message={portfolio.scrollNarrative.messages.projects} />
          <div className="reveal-grid mt-8 grid gap-5 md:grid-cols-2 xl:gap-6">
            {selectedProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </Container>
      </section>

      <section data-story-section="skills" className="scroll-section py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow={portfolio.sections.skills.eyebrow} title={portfolio.sections.skills.title} />
          <SectionDialogue label={portfolio.scrollNarrative.label} message={portfolio.scrollNarrative.messages.skills} />
          <div className="mt-8"><SkillGrid groups={skillGroups} /></div>
        </Container>
      </section>

      <section data-story-section="experience" className="scroll-section section-divider py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow={portfolio.sections.experience.eyebrow} title={portfolio.sections.experience.title} />
          <SectionDialogue label={portfolio.scrollNarrative.label} message={portfolio.scrollNarrative.messages.experience} />
          <div className="mt-8"><ExperienceList items={experiences} /></div>
        </Container>
      </section>

      <section data-story-section="credentials" className="scroll-section py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow={portfolio.sections.credentials.eyebrow} title={portfolio.sections.credentials.title} />
          <SectionDialogue label={portfolio.scrollNarrative.label} message={portfolio.scrollNarrative.messages.credentials} />
          <div className="reveal-grid mt-8 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <div className="site-card reveal-card rounded-[1.75rem] p-6 sm:p-8">
              <p className="eyebrow">Education</p>
              {education.map((item) => (
                <div key={item.institution} className="mt-5">
                  <h3 className="text-xl font-semibold text-main">{item.degree}</h3>
                  <p className="mt-2 text-sm font-semibold text-muted">{item.institution} · {item.period}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.details.map((detail) => <span key={detail} className="tag-chip">{detail}</span>)}
                  </div>
                </div>
              ))}

              <div className="mt-8 border-t border-[var(--border)] pt-7">
                <p className="eyebrow">Selected certifications</p>
                <div className="mt-4 grid gap-3">
                  {certifications.map((item) => (
                    <div key={item.name} className="credential-row">
                      <span className="font-semibold text-main">{item.name}</span>
                      <span className="text-sm text-muted">{item.issuer}{item.year ? ` · ${item.year}` : ""}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="site-card reveal-card rounded-[1.75rem] p-6 sm:p-8">
              <p className="eyebrow">Programming achievements</p>
              <div className="mt-5 grid gap-4">
                {achievements.map((achievement) => (
                  <article key={achievement.title} className="achievement-row">
                    <p className="text-sm font-bold text-accent">{achievement.year}</p>
                    <h3 className="mt-1 text-base font-semibold leading-6 text-main">{achievement.title}</h3>
                    <p className="mt-1 text-sm text-muted">{achievement.organization}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section data-story-section="contact" className="scroll-section pb-16 pt-6 sm:pb-24 sm:pt-10">
        <Container>
          <div className="cta-panel reveal-card rounded-[2rem] p-7 sm:p-10 lg:p-12">
            <p className="eyebrow">{portfolio.sections.contact.eyebrow}</p>
            <SectionDialogue label={portfolio.scrollNarrative.label} message={portfolio.scrollNarrative.messages.contact} />
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.035em] text-main sm:text-4xl lg:text-5xl">
              {portfolio.sections.contact.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{portfolio.sections.contact.body}</p>
            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-subtle">Email</p>
              <p className="mt-2 break-all text-xl font-semibold text-main sm:text-2xl">{portfolio.profile.email}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
