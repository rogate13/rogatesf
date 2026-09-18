import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { profile, siteContent } from "@/data";

export default function ContactPage() {
  const items = [
    { label: siteContent.contact.emailLabel, value: profile.email, href: `mailto:${profile.email}` },
    { label: siteContent.contact.phoneLabel, value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: siteContent.contact.locationLabel, value: profile.location, href: null },
    { label: siteContent.contact.resumeLabel, value: siteContent.common.downloadResume, href: profile.resumePath },
  ];
  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={siteContent.contact.eyebrow} title={siteContent.contact.title} description={siteContent.contact.body} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <article key={item.label} className="site-card interactive-card rounded-[1.5rem] p-6 sm:p-7">
              <p className="text-sm font-medium text-subtle">{item.label}</p>
              {item.href ? <a href={item.href} className="mt-2 block break-words text-lg font-semibold text-main hover:text-[var(--accent)]">{item.value}</a> : <p className="mt-2 text-lg font-semibold text-main">{item.value}</p>}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
