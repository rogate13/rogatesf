import { Container } from "@/components/shared/Container";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projects, siteContent } from "@/data";

export default function ProjectsPage() {
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={siteContent.projects.eyebrow} title={siteContent.projects.title} description={siteContent.projects.intro} />
        <div className="mt-9 sm:mt-10">
          <ProjectExplorer projects={projects} allLabel={siteContent.projects.filterAllLabel} emptyState={siteContent.projects.emptyState} />
        </div>
      </Container>
    </section>
  );
}
