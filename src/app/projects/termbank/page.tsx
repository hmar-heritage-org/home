import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2, BookOpen } from "lucide-react";

export const metadata = {
  title: `Hmar Open Lexicon Brief | ${siteConfig.fullName}`,
  description: "Proposed architecture, lexicography standards, dual web interfaces, and open REST API brief for the Hmar Open Lexicon.",
};

export default function OpenLexiconBriefPage() {
  const project = siteConfig.projects.find((p) => p.id === "termbank") || {
    projectCode: "LEXICON-04",
    category: "Lexicography",
    status: "In Planning",
  };

  return (
    <div className="py-12 space-y-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Header & Lead Section */}
      <section className="space-y-4">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#9E1B24]" />
          <span>Institutional Project Brief · {project.projectCode}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Hmar Open Lexicon
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans pt-1">
          The Hmar Open Lexicon is a lexicography and termbank initiative currently in planning. Below is an outline of the proposed terminology standardization model, dual web interfaces, open REST API architecture, and dictionary export pipeline for when active development begins.
        </p>
      </section>

      {/* Project Specifications Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-serif font-bold text-slate-900">
          Proposed Technical Specifications
        </h2>

        <div className="bg-[#F4F1EA] p-4 sm:p-6 rounded-2xl border border-slate-300 shadow-xs overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs font-sans">
            <thead>
              <tr className="border-b-2 border-slate-800 font-serif font-bold text-sm text-slate-900">
                <th className="py-2.5 pr-4 w-1/3">Specification</th>
                <th className="py-2.5 pl-4">Intended Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-300 text-slate-800 font-mono">
              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Lexicon Portal
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans font-semibold">
                  Project Not Initialized
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Source Code Repository
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans font-semibold">
                  Project Not Initialized
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Interface Architecture
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  Dual Web Interfaces · General Dictionary Lookup & Technical Termbank
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Developer Integration
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  Open REST API · Bulk JSON & CSV Storefront Export Bundles
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pure Textual Proposed Architecture Narrative */}
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8 text-base font-sans border-b border-slate-200 pb-12">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Open Lexicography & Terminology Standardization
          </h2>
          <p>
            The intended design vision for the Hmar Open Lexicon is to establish an open, collaborative lexical database for the Hmar language. When writers, translators, and students encounter modern, scientific, or technical concepts without direct translations, the lexicon serves as the open platform for standardized definitions, etymology, and phonetics.
          </p>
        </section>

        {/* Section 2: Dual Web Interfaces */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Dual Web Interface Architecture
          </h2>
          <p>
            The proposed platform incorporates two specialized web user interfaces. The first is a general dictionary lookup interface designed for everyday community members, students, and readers looking up definitions, word origins, and Hmar-English-Mizo translations. The second is a technical termbank interface tailored for language scholars, translators, and developers working on technical, scientific, and software terminology standards.
          </p>
        </section>

        {/* Section 3: Open REST API & Storefront Ingestion */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Open REST API & Storefront Export Pipeline
          </h2>
          <p>
            Language data should be machine-accessible. The project incorporates open REST APIs enabling third-party app developers, computational linguists, and browser extension creators to integrate Hmar dictionary lookups directly into mobile apps and web tools. Furthermore, automated export pipelines generate bulk JSON and CSV term dumps that are synced to the{" "}
            <Link href="/projects/literature-library" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar digital library</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>{" "}
            storefront for 1-click public downloading.
          </p>
        </section>

        {/* Section 4: Cross-Project Reference Anchor */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Linguistic Foundation Across All Projects
          </h2>
          <p>
            The Hmar Open Lexicon serves as the authoritative spelling and definition benchmark for all other Foundation initiatives. Article editors on the{" "}
            <Link href="/projects/wikipedia-incubator" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar wikipedia incubator initiative</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>{" "}
            verify orthography against this lexicon, software maintainers on the{" "}
            <Link href="/projects/locale-standardization" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>open locale project</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>{" "}
            derive UI key terms from its technical termbank, and OCR pipelines on the{" "}
            <Link href="/projects/raw-datasets" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar heritage archival project</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>{" "}
            use its vocabulary lists for text recognition validation.
          </p>
        </section>

        {/* Proposed Deliverables List */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Planned Technical Deliverables
          </h2>
          <ul className="space-y-2 text-sm text-slate-700 font-sans">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Dual web application interfaces for general dictionary lookup and technical termbank standardization</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Multilingual Hmar-English and Hmar-Mizo lexical lookup databases</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Open REST API enabling third-party mobile apps and web tools to query word definitions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Automated bulk JSON and CSV export pipelines linked to the digital library storefront</span>
            </li>
          </ul>
        </section>
      </div>

      {/* Backlink */}
      <div className="pt-2">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 font-bold text-xs text-slate-900 hover:text-blue-700 transition-colors"
        >
          <span>back to resources index</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
