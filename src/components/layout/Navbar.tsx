"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/shared/Container";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { navigation, profile, siteContent } from "@/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav-shell sticky top-0 z-50">
      <Container className="flex min-h-16 items-center justify-between gap-3 py-2">
        <Link href="/" className="min-w-0 truncate font-semibold tracking-tight text-main" aria-label={`${profile.name} home`}>
          {profile.name}
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <nav className="flex items-center gap-1" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link rounded-full px-3 py-2 text-sm font-semibold ${isActive(item.href) ? "nav-link-active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeSwitcher compact />
          <a href={profile.resumePath} className="button-primary ml-1" download>
            {siteContent.common.downloadResume}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher compact />
          <button
            type="button"
            className="theme-trigger theme-trigger-compact"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-navigation" className="mobile-menu md:hidden">
          <Container className="py-4">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link rounded-2xl px-4 py-3 text-base font-semibold ${isActive(item.href) ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              ))}
              <a href={profile.resumePath} className="button-primary mt-3 w-full" download>
                {siteContent.common.downloadResume}
              </a>
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
