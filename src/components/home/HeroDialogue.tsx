"use client";

import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/components/language/LanguageProvider";

export function HeroDialogue() {
  const { content, locale } = useLanguage();
  const { portfolio } = content;
  const prompts = useMemo(() => [...portfolio.hero.dialogue.prompts], [portfolio.hero.dialogue.prompts]);
  const [promptIndex, setPromptIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setPromptIndex(0);
    setTyped("");
  }, [locale]);

  useEffect(() => {
    const full = prompts[promptIndex] ?? "";
    let position = 0;
    setTyped("");

    const typing = window.setInterval(() => {
      position += 1;
      setTyped(full.slice(0, position));
      if (position >= full.length) window.clearInterval(typing);
    }, 34);

    const next = window.setTimeout(() => {
      setPromptIndex((value) => (value + 1) % prompts.length);
    }, 3900);

    return () => {
      window.clearInterval(typing);
      window.clearTimeout(next);
    };
  }, [promptIndex, prompts]);

  useEffect(() => {
    const onSceneInteraction = () => setPromptIndex((value) => (value + 1) % prompts.length);
    window.addEventListener("rogate-scene-interaction", onSceneInteraction);
    return () => window.removeEventListener("rogate-scene-interaction", onSceneInteraction);
  }, [prompts.length]);

  return (
    <div className="hero-dialogue" aria-live="polite">
      <div className="hero-dialogue-status">
        <span className="hero-dialogue-dot" aria-hidden="true" />
        <span>{portfolio.hero.dialogue.availabilityLabel}</span>
      </div>
      <p className="hero-dialogue-greeting">{portfolio.hero.dialogue.greeting}</p>
      <p className="hero-dialogue-role">{portfolio.hero.dialogue.role}</p>
      <p className="hero-dialogue-question">{portfolio.hero.dialogue.question}</p>
      <p className="hero-dialogue-prompt">
        <span>{typed}</span>
        <span className="typing-caret" aria-hidden="true" />
      </p>
      <p className="hero-dialogue-hint">{portfolio.hero.dialogue.interactionHint}</p>
    </div>
  );
}
