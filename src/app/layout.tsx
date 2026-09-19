import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeBootScript } from "@/components/theme/ThemeBootScript";
import { defaultContent } from "@/data";
import { ScrollExperience } from "@/components/experience/ScrollExperience";
import { AmbientScene } from "@/components/visual/AmbientScene";
import { LanguageProvider } from "@/components/language/LanguageProvider";

export const metadata: Metadata = {
  title: defaultContent.portfolio.metadata.title,
  description: defaultContent.portfolio.metadata.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07111f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <ThemeBootScript />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <ScrollExperience />
          <AmbientScene />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
