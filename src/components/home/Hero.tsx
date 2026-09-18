import { Container } from "@/components/shared/Container";
import { InteractiveScene } from "@/components/visual/InteractiveScene";
import { HeroDialogue } from "@/components/home/HeroDialogue";
import { portfolio } from "@/data";

export function Hero() {
  return (
    <section className="hero-shell py-14 sm:py-20 lg:py-24">
      <InteractiveScene />
      <Container className="relative z-10">
        <div className="grid min-h-[72svh] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-8">
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow mb-5">{portfolio.hero.eyebrow}</p>
            <HeroDialogue />
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {portfolio.profile.introduction}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
              <span>{portfolio.profile.location}</span>
              <span aria-hidden="true" className="text-subtle">•</span>
              <span>{portfolio.profile.stackLine}</span>
            </div>
          </div>

          <div className="hero-visual-space" aria-hidden="true">
            <div className="hero-orbit-label hero-orbit-label-one">Web Apps</div>
            <div className="hero-orbit-label hero-orbit-label-two">Business Systems</div>
            <div className="hero-orbit-label hero-orbit-label-three">Data Workflows</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
