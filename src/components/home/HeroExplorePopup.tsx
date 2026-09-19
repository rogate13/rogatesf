"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language/LanguageProvider";

export function HeroExplorePopup() {
  const { content } = useLanguage();
  const { portfolio } = content;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 650);
    return () => window.clearTimeout(timer);
  }, []);

  const handleExplore = () => {
    const target = document.getElementById(portfolio.hero.explorePopup.targetId);
    setVisible(false);
    window.setTimeout(() => target?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
  };

  return (
    <div className={`hero-explore-popup ${visible ? "hero-explore-popup-visible" : ""}`}>
      <div className="hero-explore-popup-mark" aria-hidden="true">RSF</div>
      <div className="min-w-0 flex-1">
        <p className="hero-explore-popup-kicker">{portfolio.hero.explorePopup.kicker}</p>
        <h2 className="hero-explore-popup-title">{portfolio.hero.explorePopup.title}</h2>
        <p className="hero-explore-popup-text">{portfolio.hero.explorePopup.text}</p>
      </div>
      <button type="button" className="hero-explore-popup-button" onClick={handleExplore}>
        <span>{portfolio.hero.explorePopup.buttonLabel}</span>
        <span className="hero-explore-popup-arrow" aria-hidden="true">↓</span>
      </button>
    </div>
  );
}
