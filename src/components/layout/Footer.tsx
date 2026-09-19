"use client";

import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { useLanguage } from "@/components/language/LanguageProvider";

export function Footer() {
  const { content } = useLanguage();
  const { portfolio } = content;

  return (
    <footer className="footer-shell border-t border-[var(--border)] py-9">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image src={portfolio.profile.logoPath} alt={portfolio.ui.logoAlt} width={34} height={34} className="h-8 w-8" />
          <p className="text-sm font-semibold text-main">{portfolio.footer.text}</p>
        </div>
        <p className="text-sm text-muted">{portfolio.profile.email}</p>
      </Container>
    </footer>
  );
}
