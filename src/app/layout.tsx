import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { siteConfig } from "@/config/site";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: [
    "Hmar Heritage",
    "Hmar Heritage Foundation",
    "Hmar Language",
    "Zo Languages",
    "Zohnahthlak",
    "Hmar Datasets",
    "Hmar Dictionary",
    "Hmar Wikipedia",
    "Digital Archive",
    "Open NLP",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#FAF8F5] text-slate-900 selection:bg-[#9E1B24] selection:text-white">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ScrollToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}
