import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Terms & Open Data License | ${siteConfig.fullName}`,
  description: "Official Open Data Usage License, Copyright Safeguards, and Terms of Service of the Hmar Heritage Foundation.",
};

export default function TermsPage() {
  return (
    <div className="py-12 space-y-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Left-Aligned Editorial Header */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#9E1B24]" />
          <span>Statutory Data Policy & Legal License</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Terms & Open Data License
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans">
          The Hmar Heritage Foundation maintains an open data licensing framework designed to maximize software adoption and educational equity while protecting community archives from commercial exploitation.
        </p>
      </section>

      {/* 2. Pure Typographic Legal Body */}
      <div className="space-y-12 text-slate-800 leading-relaxed text-base font-sans">
        
        {/* SECTION 1 */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section 1
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Open Data Usage License and Commercial Derivative Works
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              <strong>1.1 Permitted Application Integration:</strong> All translation keys, UI and UX glossaries, dictionary databases, and raw text/speech datasets provided by the Foundation are open infrastructure. Open-source maintainers, software developers, commercial corporations, and AI researchers are granted 100% free permission to use, integrate, and build applications upon these resources.
            </p>
            <p>
              <strong>1.2 Prohibited Raw Reselling:</strong> Selling, paywalling, licensing, or commercializing raw uncleaned PDF archival scans, dictionary term banks, or raw datasets as standalone paid products or subscription services is strictly prohibited.
            </p>
            <p>
              <strong>1.3 Restructured Derivative Works:</strong> If a developer, startup, or researcher performs significant data engineering work—such as cleaning, annotating, structuring, aligning, or instruction-tuning our raw archives into a refined dataset product—they are fully permitted to license or commercialize their restructured derivative work.
            </p>

            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-200 space-y-3 font-sans text-xs">
              <div className="font-bold text-slate-900 uppercase font-mono tracking-wider">
                Summary Distinction
              </div>
              <ul className="space-y-2 text-slate-700">
                <li>
                  <strong className="text-emerald-700">Permitted:</strong> Using raw datasets to train commercial AI models or software applications.
                </li>
                <li>
                  <strong className="text-emerald-700">Permitted:</strong> Licensing or selling refined derivative datasets where significant data cleaning, alignment, or annotation work has been added.
                </li>
                <li>
                  <strong className="text-[#9E1B24]">Prohibited:</strong> Selling or paywalling raw, uncleaned PDF scans or raw datasets directly without adding value.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section 2
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Copyright Safeguards & Public Domain Archiving
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              <strong>2.1 Public Domain Priority:</strong> The Foundation prioritizes digitizing books, manuscripts, and written content that are in the public domain or free of copyright encumbrance.
            </p>
            <p>
              <strong>2.2 Copyright Permissions:</strong> For copyrighted works, physical books are collected and cataloged, but high-resolution scanning and public digital archiving proceed only after securing formal written permissions from original authors, publishers, or estate heirs.
            </p>
            <p>
              <strong>2.3 Takedown Protocol:</strong> Rights holders who believe a work has been cataloged or archived in error may contact the Foundation directly at <a href={`mailto:${siteConfig.contactEmail}`} className="font-bold text-slate-900 hover:text-blue-700 transition-colors">{siteConfig.contactEmail}</a> for prompt review.
            </p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section 3
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Software Locales & Terminology Standards
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              <strong>3.1 Living Recommendations:</strong> Technical UI and UX software translation keys and dictionary glossaries provided by the Foundation represent living recommendations. The Foundation acknowledges that language is ever-evolving and no single entity can enforce vocabulary by decree.
            </p>
            <p>
              <strong>3.2 Permissive Licensing:</strong> All software translation repositories (in i18n JSON, PO, and XLIFF formats) are distributed under permissive open licenses (Apache 2.0 / Creative Commons CC-BY 4.0).
            </p>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="space-y-4 pb-4">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section 4
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Limitation of Liability & Public Trust
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              <strong>4.1 As-Is Service Provision:</strong> All archives, lookup databases, and dataset repositories are provided on an as-is basis for public educational benefit without commercial warranty.
            </p>
            <p>
              <strong>4.2 Permanent Public Access:</strong> All public domain scans and open datasets generated by the Foundation remain permanently accessible to community members, scholars, and future generations.
            </p>
          </div>
        </section>

        {/* Backlink */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <span>Questions about data usage or permissions?</span>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-700 transition-colors"
          >
            <span>contact the foundation desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
