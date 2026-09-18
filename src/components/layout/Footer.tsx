import { Container } from "@/components/shared/Container";
import { profile, siteContent, socials } from "@/data";

export function Footer() {
  const enabledSocials = socials.filter((item) => item.enabled);
  return (
    <footer className="footer-shell border-t border-[var(--border)] py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-main">{profile.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">{siteContent.footer.note}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted">
          <a href={`mailto:${profile.email}`} className="break-all hover:text-[var(--accent)]">{profile.email}</a>
          {enabledSocials.map((item) => (
            <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined} className="hover:text-[var(--accent)]">
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
