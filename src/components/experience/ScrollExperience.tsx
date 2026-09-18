"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data";

type StoryKey = keyof typeof portfolio.scrollNarrative.messages;

export function ScrollExperience() {
  const [active, setActive] = useState<StoryKey | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-story-section]"));
    if (!sections.length) return;

    let frame = 0;
    let lastActive: StoryKey | null = null;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight || 1;
      const revealTop = viewportHeight * 0.84;
      const revealBottom = viewportHeight * 0.08;
      let closest: { key: StoryKey; distance: number } | null = null;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visible = rect.top < revealTop && rect.bottom > revealBottom;
        section.classList.toggle("is-visible", visible);

        if (visible) {
          const key = section.dataset.storySection as StoryKey | undefined;
          if (key && key in portfolio.scrollNarrative.messages) {
            const center = rect.top + rect.height / 2;
            const distance = Math.abs(center - viewportHeight * 0.48);
            if (!closest || distance < closest.distance) closest = { key, distance };
          }
        }
      }

      const documentHeight = Math.max(document.documentElement.scrollHeight - viewportHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / documentHeight, 0), 1);
      document.documentElement.style.setProperty("--scroll-progress", String(progress));

      const nextActive = closest?.key ?? null;
      if (nextActive !== lastActive) {
        lastActive = nextActive;
        setActive(nextActive);
      }
      setShowMessage(window.scrollY > viewportHeight * 0.42 && Boolean(nextActive));
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const message = active ? portfolio.scrollNarrative.messages[active] : "";

  return (
    <>
      <div className="scroll-progress-track" aria-hidden="true">
        <div className="scroll-progress-bar" />
      </div>

      <aside className={`story-whisper ${showMessage ? "story-whisper-visible" : ""}`} aria-live="polite">
        <div className="story-whisper-mark" aria-hidden="true">RSF</div>
        <div className="min-w-0">
          <div className="story-whisper-label">
            <span className="story-whisper-dot" aria-hidden="true" />
            {portfolio.scrollNarrative.label}
          </div>
          <p key={active ?? "idle"} className="story-whisper-message">{message}</p>
        </div>
      </aside>
    </>
  );
}
