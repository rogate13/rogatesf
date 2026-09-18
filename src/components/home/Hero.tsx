import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { InteractiveScene } from "@/components/visual/InteractiveScene";
import { profile, siteContent } from "@/data";

export function Hero() {
  return (
    <section className="hero-shell py-16 sm:py-20 lg:py-24">
      <InteractiveScene />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.22fr_.78fr] lg:items-end">
          <div className="relative z-10">
            <p className="eyebrow mb-5">{siteContent.home.heroEyebrow}</p>
            <h1 className="hero-title">{profile.headline}</h1>
            <p className="mt-5 max-w-2xl text-lg font-semibold text-muted sm:text-xl">{profile.subheadline}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{profile.introduction}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/projects" className="button-primary">
                {siteContent.home.heroPrimaryCta}
              </Link>
              <Link href="/about" className="button-secondary">
                {siteContent.home.heroSecondaryCta}
              </Link>
            </div>
            <p className="hero-explore-note mt-10">{siteContent.home.heroExploreHint}</p>
          </div>

          <div className="hero-panel relative z-10 rounded-[2rem] p-6 sm:p-8 lg:mb-2">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{siteContent.home.heroPanelEyebrow}</p>
                <p className="mt-2 text-lg font-semibold text-main">{profile.name}</p>
              </div>
              <span className="h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_24px_var(--accent)]" aria-hidden="true" />
            </div>
            <dl className="mt-8 grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div>
                <dt className="text-subtle">{siteContent.contact.locationLabel}</dt>
                <dd className="mt-1 font-semibold text-main">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-subtle">{siteContent.home.heroFocusLabel}</dt>
                <dd className="mt-1 font-semibold text-main">{siteContent.home.heroFocusValue}</dd>
              </div>
              <div className="min-w-0 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <dt className="text-subtle">{siteContent.contact.emailLabel}</dt>
                <dd className="mt-1 break-all font-semibold text-main">{profile.email}</dd>
              </div>
            </dl>
            <div className="mt-8 border-t border-[var(--border)] pt-5">
              <a href={profile.resumePath} download className="text-sm font-bold text-accent hover:underline">
                {siteContent.common.downloadResume} →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
