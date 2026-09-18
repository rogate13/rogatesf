import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SkillGrid } from "@/components/home/SkillGrid";
import { ExperienceList } from "@/components/home/ExperienceList";
import { additionalExperiences, certifications, education, experiences, languages, profile, siteContent, skillGroups } from "@/data";

export default function AboutPage() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={siteContent.about.eyebrow} title={siteContent.about.title} />

        <div className="mt-10 grid gap-5 lg:grid-cols-[.7fr_1.3fr] lg:gap-10">
          <h2 className="text-xl font-semibold text-main">{siteContent.about.summaryTitle}</h2>
          <p className="text-base leading-8 text-muted sm:text-lg">{profile.professionalSummary}</p>
        </div>

        <div className="mt-14 sm:mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-main">{siteContent.about.experienceTitle}</h2>
          <ExperienceList items={experiences} />
        </div>

        <div className="mt-14 sm:mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-main">{siteContent.about.additionalExperienceTitle}</h2>
          <ExperienceList items={additionalExperiences} />
        </div>

        <div className="mt-14 sm:mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-main">{siteContent.about.skillsTitle}</h2>
          <SkillGrid groups={skillGroups} />
        </div>

        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2">
          <div className="site-card rounded-[1.5rem] p-6 sm:p-7">
            <h2 className="text-2xl font-semibold text-main">{siteContent.about.educationTitle}</h2>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <article key={item.institution}>
                  <h3 className="font-semibold text-main">{item.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-muted">{item.institution} · {item.period}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>

          <div className="site-card rounded-[1.5rem] p-6 sm:p-7">
            <h2 className="text-2xl font-semibold text-main">{siteContent.about.languagesTitle}</h2>
            <dl className="mt-6 space-y-4">{languages.map((item) => <div key={item.language} className="flex items-center justify-between gap-6 border-b border-[var(--border)] pb-4 last:border-0 last:pb-0"><dt className="font-medium text-main">{item.language}</dt><dd className="text-sm text-muted">{item.proficiency}</dd></div>)}</dl>
          </div>
        </div>

        <div className="mt-14 sm:mt-16">
          <h2 className="mb-6 text-2xl font-semibold text-main">{siteContent.about.certificationsTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {certifications.map((certification) => (
              <article key={certification.name} className="site-card interactive-card overflow-hidden rounded-[1.5rem]">
                {certification.image ? <div className="project-media relative aspect-[4/3]"><Image src={certification.image.src} alt={certification.image.alt} fill className="object-cover object-top" sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 25vw" /></div> : null}
                <div className="p-5">
                  <h3 className="font-semibold leading-6 text-main">{certification.name}</h3>
                  <p className="mt-2 text-sm text-muted">{certification.issuer}{certification.year ? ` · ${certification.year}` : ""}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
