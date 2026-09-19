"use client";

import Image from "next/image";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { LanguageSwitcher } from "@/components/language/LanguageSwitcher";
import { useLanguage } from "@/components/language/LanguageProvider";
import { Container } from "@/components/shared/Container";

export function Header() {
  const { content } = useLanguage();
  const { portfolio } = content;

  return (
    <header className="nav-shell sticky top-0 z-50">
      <Container className="flex min-h-16 items-center justify-between gap-3 py-2">
        <div className="flex min-w-0 items-center gap-3" aria-label={portfolio.profile.name}>
          <Image src={portfolio.profile.logoPath} alt={portfolio.ui.logoAlt} width={38} height={38} priority className="h-9 w-9 shrink-0" />
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-semibold tracking-tight text-main">{portfolio.profile.name}</p>
            <p className="truncate text-[11px] uppercase tracking-[0.14em] text-subtle">{portfolio.profile.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <ThemeSwitcher compact />
          <a href={portfolio.profile.resumePath} className="button-primary" download>
            <span className="hidden sm:inline">{portfolio.ui.downloadResume}</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
