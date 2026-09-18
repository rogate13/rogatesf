import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeBootScript } from "@/components/theme/ThemeBootScript";
import { portfolio } from "@/data";
import { ScrollExperience } from "@/components/experience/ScrollExperience";
import { AmbientScene } from "@/components/visual/AmbientScene";

export const metadata: Metadata = {
  title: portfolio.metadata.title,
  description: portfolio.metadata.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07111f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeBootScript />
      </head>
      <body>
        <Header />
        <ScrollExperience />
        <AmbientScene />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
