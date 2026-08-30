"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Code2, ExternalLink } from "lucide-react";

export function Footer() {
  const { lang, setLang } = useLanguage();

  return (
    <footer className="bg-[#0B132B] text-slate-300 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Column 1: Brand & Institutional Statement (Pure Typography, No Icon) */}
          <div className="sm:col-span-2 md:col-span-1 space-y-4">
            <div>
              <span className="font-serif font-bold text-lg text-white tracking-tight leading-tight block">
                {siteConfig.brandName}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Non-profit foundation for Hmar digital preservation, software locales, and open cultural archives.
            </p>

            <div className="pt-1 text-xs text-slate-400 space-y-1 font-mono">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9E1B24]" />
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#9E1B24]" />
                <a href={`mailto:${siteConfig.secondaryEmail}`} className="hover:text-white transition-colors">
                  {siteConfig.secondaryEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Core Directory */}
          <div>
            <h3 className="text-xs font-serif font-bold uppercase tracking-widest text-slate-100 mb-4 border-b border-slate-800 pb-2">
              Main Directory
            </h3>
            <ul className="space-y-2.5 text-xs font-sans">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white text-slate-300 transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Auxiliary Guides & Legal */}
          <div>
            <h3 className="text-xs font-serif font-bold uppercase tracking-widest text-slate-100 mb-4 border-b border-slate-800 pb-2">
              Resources & Legal
            </h3>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <Link
                  href="/philosophy"
                  className="hover:text-white text-slate-300 font-semibold transition-colors"
                >
                  Foundational Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-white text-slate-300 font-semibold transition-colors"
                >
                  Resources & Auxiliary Index
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="hover:text-white text-slate-400 transition-colors"
                >
                  Get Involved & Contributor Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/datasets"
                  className="hover:text-white text-slate-400 transition-colors"
                >
                  Open AI Datasets & Corpora
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white text-slate-400 transition-colors"
                >
                  Terms & Open Data License
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Internal Project Briefs */}
          <div>
            <h3 className="text-xs font-serif font-bold uppercase tracking-widest text-slate-100 mb-4 border-b border-slate-800 pb-2">
              Project Briefs
            </h3>
            <ul className="space-y-2.5 text-xs font-sans text-slate-300">
              <li>
                <Link href="/projects/literature-library" className="hover:text-white transition-colors">
                  Hmar Digital Library
                </Link>
              </li>
              <li>
                <Link href="/projects/raw-datasets" className="hover:text-white transition-colors">
                  Hmar Heritage Archival Project
                </Link>
              </li>
              <li>
                <Link href="/projects/locale-standardization" className="hover:text-white transition-colors">
                  Open Locale Project
                </Link>
              </li>
              <li>
                <Link href="/projects/wikipedia-incubator" className="hover:text-white transition-colors">
                  Hmar Wikipedia Incubator
                </Link>
              </li>
              <li>
                <Link href="/projects/termbank" className="hover:text-white transition-colors">
                  Hmar Open Lexicon
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Official External Hubs */}
          <div className="space-y-4">
            <h3 className="text-xs font-serif font-bold uppercase tracking-widest text-slate-100 border-b border-slate-800 pb-2">
              Official Repos
            </h3>
            
            <ul className="space-y-2.5 text-xs font-sans text-slate-400">
              <li>
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>GitHub Organization</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.huggingFaceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Hugging Face Hub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://incubator.wikimedia.org/wiki/Wp/hmr"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>Wikimedia Wp/hmr</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Integrated Disabled Language Switcher */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4 font-sans">
          <div className="flex flex-wrap items-center gap-4">
            <p>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms & Open License
            </Link>
          </div>

          {/* Lower Section Language Version Switcher (HMR Disabled) */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
              Language Version:
            </span>
            <div className="inline-flex items-center rounded-full bg-slate-900 p-0.5 border border-slate-800 text-[10px] font-mono font-bold select-none">
              <button
                type="button"
                onClick={() => setLang("en")}
                className="px-3 py-1 rounded-full bg-white text-slate-900 shadow-xs cursor-pointer"
              >
                ENG
              </button>
              <button
                type="button"
                disabled
                title="Hmar Translation in Progress"
                className="px-3 py-1 rounded-full text-slate-600 cursor-not-allowed opacity-50 select-none"
              >
                HMR
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
