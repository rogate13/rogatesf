"use client";

import { useEffect } from "react";

export function ScrollExperience() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-story-section]"));
    if (!sections.length) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight || 1;
      const revealTop = viewportHeight * 0.84;
      const revealBottom = viewportHeight * 0.08;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const visible = rect.top < revealTop && rect.bottom > revealBottom;
        section.classList.toggle("is-visible", visible);
      }

      const documentHeight = Math.max(document.documentElement.scrollHeight - viewportHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / documentHeight, 0), 1);
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
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

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div className="scroll-progress-bar" />
    </div>
  );
}
