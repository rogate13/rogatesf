"use client";

import { useEffect, useRef, useState } from "react";
import { themeConfig, themes, type ThemePreset } from "@/data";
import { useLanguage } from "@/components/language/LanguageProvider";

function applyTheme(theme: ThemePreset) {
  const root = document.documentElement;
  root.dataset.theme = theme.id;
  root.style.colorScheme = theme.scheme;
  Object.entries(theme.variables).forEach(([key, value]) => root.style.setProperty(`--${key}`, value));
  localStorage.setItem(themeConfig.storageKey, theme.id);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme.variables.background);
  window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: theme.id }));
}

export function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { content } = useLanguage();
  const { portfolio } = content;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(themeConfig.defaultTheme);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = document.documentElement.dataset.theme || themeConfig.defaultTheme;
    setActive(current);

    const sync = (event: Event) => {
      const custom = event as CustomEvent<string>;
      setActive(custom.detail || document.documentElement.dataset.theme || themeConfig.defaultTheme);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("portfolio-theme-change", sync);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("portfolio-theme-change", sync);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const activeTheme = themes.find((item) => item.id === active) || themes[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={portfolio.ui.changeThemeLabel}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`theme-trigger ${compact ? "theme-trigger-compact" : ""}`}
      >
        <span aria-hidden="true" className="h-4 w-4 rounded-full ring-1 ring-white/20" style={{ background: `linear-gradient(135deg, ${activeTheme.preview[1]}, ${activeTheme.preview[2]})` }} />
        {!compact ? <span>{portfolio.ui.themeButtonLabel}</span> : null}
      </button>

      {open ? (
        <div role="menu" className="theme-menu absolute right-0 top-[calc(100%+.65rem)] z-[70] w-[min(20rem,calc(100vw-2rem))] p-2">
          <div className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-[0.18em] text-subtle">{portfolio.ui.themeMenuTitle}</div>
          {themes.map((theme) => {
            const selected = theme.id === active;
            const copy = portfolio.ui.themeOptions[theme.id] || { label: theme.id, description: "" };
            return (
              <button
                key={theme.id}
                type="button"
                role="menuitemradio"
                aria-checked={selected}
                onClick={() => {
                  applyTheme(theme);
                  setActive(theme.id);
                  setOpen(false);
                }}
                className={`theme-option ${selected ? "theme-option-active" : ""}`}
              >
                <span className="h-9 w-9 shrink-0 rounded-full border border-white/10" style={{ background: `linear-gradient(135deg, ${theme.preview[0]} 20%, ${theme.preview[1]} 55%, ${theme.preview[2]})` }} aria-hidden="true" />
                <span className="min-w-0 text-left">
                  <span className="block text-sm font-semibold text-main">{copy.label}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-muted">{copy.description}</span>
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
