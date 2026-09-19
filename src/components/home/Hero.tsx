"use client";

import { Container } from "@/components/shared/Container";
import { InteractiveScene } from "@/components/visual/InteractiveScene";
import { HeroDialogue } from "@/components/home/HeroDialogue";
import { HeroExplorePopup } from "@/components/home/HeroExplorePopup";
import { useLanguage } from "@/components/language/LanguageProvider";

export function Hero() {
  const { content } = useLanguage();
  const { portfolio } = content;

  return (
    <section className="hero-shell pb-12 pt-7 sm:pb-16 sm:pt-9 lg:pb-16 lg:pt-10">
      <InteractiveScene />
      <Container className="relative z-10">
        <div className="grid min-h-[68svh] items-start gap-10 lg:min-h-[70svh] lg:grid-cols-[.9fr_1.1fr] lg:gap-8">
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow mb-5">{portfolio.hero.eyebrow}</p>
            <HeroDialogue />
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted sm:text-lg">{portfolio.profile.introduction}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
              <span>{portfolio.profile.location}</span>
              <span aria-hidden="true" className="text-subtle">•</span>
              <span>{portfolio.profile.stackLine}</span>
            </div>
          </div>

          <div className="hero-visual-space" aria-hidden="true">
            <div className="hero-orbit-label hero-orbit-label-one">{portfolio.hero.orbitLabels[0]}</div>
            <div className="hero-orbit-label hero-orbit-label-two">{portfolio.hero.orbitLabels[1]}</div>
            <div className="hero-orbit-label hero-orbit-label-three">{portfolio.hero.orbitLabels[2]}</div>
          </div>
        </div>

        <HeroExplorePopup />
      </Container>
    </section>
  );
}
