"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { languageConfig, type Locale } from "@/data";
import { useLanguage } from "@/components/language/LanguageProvider";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, content } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const active = languageConfig.options.find((item) => item.id === locale) || languageConfig.options[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={content.portfolio.ui.changeLanguageLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`language-trigger ${compact ? "language-trigger-compact" : ""}`}
      >
        <Image src={active.flagPath} alt="" width={24} height={16} className="language-flag" aria-hidden="true" />
        <span className={compact ? "text-[10px]" : ""}>{active.shortLabel}</span>
      </button>

      {open ? (
        <div role="menu" className="language-menu absolute right-0 top-[calc(100%+.65rem)] z-[75] w-[min(15rem,calc(100vw-2rem))] p-2">
          <div className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
            {content.portfolio.ui.languageMenuTitle}
          </div>
          {languageConfig.options.map((option) => {
            const selected = option.id === locale;
            return (
              <button
                key={option.id}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => {
                  setLocale(option.id as Locale);
                  setOpen(false);
                }}
                className={`language-option ${selected ? "language-option-active" : ""}`}
              >
                <Image src={option.flagPath} alt="" width={30} height={20} className="language-flag-large" aria-hidden="true" />
                <span className="min-w-0 text-left">
                  <span className="block text-sm font-semibold text-main">{option.label}</span>
                  <span className="mt-0.5 block text-xs text-muted">{option.shortLabel}</span>
                </span>
                {selected ? <span className="ml-auto text-accent" aria-hidden="true">✓</span> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
