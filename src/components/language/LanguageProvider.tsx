"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { contentByLocale, languageConfig, type Locale, type PortfolioContent } from "@/data";

type LanguageContextValue = {
  locale: Locale;
  content: PortfolioContent;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "id" || value === "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(languageConfig.defaultLocale);

  useEffect(() => {
    const saved = window.localStorage.getItem(languageConfig.storageKey);
    if (isLocale(saved) && saved !== languageConfig.defaultLocale) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(languageConfig.storageKey, nextLocale);
    document.documentElement.lang = nextLocale;
    window.dispatchEvent(new CustomEvent("portfolio-language-change", { detail: nextLocale }));
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = contentByLocale[locale].portfolio.metadata.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", contentByLocale[locale].portfolio.metadata.description);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, content: contentByLocale[locale], setLocale }),
    [locale, setLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
