import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2, BookOpen } from "lucide-react";

export const metadata = {
  title: `Hmar Digital Library Brief | ${siteConfig.fullName}`,
  description: "Proposed architecture, intended technical design philosophy, and institutional brief for the Hmar Digital Library.",
};

export default function DigitalLibraryBriefPage() {
  const project = siteConfig.projects.find((p) => p.id === "literature-library") || {
    projectCode: "VAULT-02",
    category: "Digital Archive",
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
          Hmar Digital Library
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans pt-1">
          The Hmar Digital Library is an archival initiative currently in planning. Below is an outline of the intended usage model, proposed technical design philosophy, and planned storefront architecture for when active development begins.
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
                  Storefront Portal
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
                  Intended Architecture
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  Accountless Static Site Build · One-Stop Public Download Storefront
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Management Scope
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  Zero Management Features · Curation Managed via Project Repositories
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
            Intended One-Stop Storefront Vision for All Open Data
          </h2>
          <p>
            The intended design vision for the Hmar Digital Library is to serve as a one-stop public storefront for downloading all Hmar open data. Rather than scattering digitizations across isolated drives or requiring developers to navigate complex code repositories, the portal aims to provide 1-click downloads for PDF books, rare 20th-century manuscripts, folk songbooks Hla-thlang, audio recordings, compiled dictionary term exports from the{" "}
            <Link href="/projects/termbank" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar open lexicon</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>, and ready-to-use software translation key bundles from the{" "}
            <Link href="/projects/locale-standardization" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar locale project</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Proposed Accountless & Read-Only Design Philosophy
          </h2>
          <p>
            The proposed architecture prioritizes frictionless public access. Under this design philosophy, the storefront contains zero administrative forms, management dashboards, or login portals, fully justifying an accountless static site build. Visitors will not need to register or provide personal tracking data to browse or download materials. Every public asset is intended to be accessible with a single click.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Separation of Management & Visual Staging Layers
          </h2>
          <p>
            All data curation, pull request reviews, moderation, and asset ingestion management will reside purely within their respective projects, primarily inside the repositories and dataset pipelines of the{" "}
            <Link href="/projects/raw-datasets" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar corpus archival project</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>. While dedicated project portals cater to active contributors and translators, this storefront acts strictly as the visual reading and downloading layer. When volunteers submit new texts or transcriptions to the underlying repositories, an automated staging build renders their pending submissions live under an in-review status. This separation ensures contributors receive instant visual feedback while keeping the storefront 100% static and secure without backend management complexity.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Planned Cross-Repository Data Pipeline
          </h2>
          <p>
            Executing a static storefront successfully requires establishing a disciplined cross-repository pipeline before launching public builds. Asset manifests, OCR layers, audio files, compiled lexicon databases, and standardized software locale files (in i18n JSON, PO, and XLIFF formats) will originate from specialized repositories. Establishing standardized JSON schemas and automated static site generators serves as a structural prerequisite for synchronizing data across repositories into this central storefront.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Intended Archiving & Copyright Principles
          </h2>
          <p>
            Archival priorities focus primarily on public domain literature and historical manuscripts. For out-of-print contemporary publications, policy dictates securing written archiving consent from authors, families, or copyright holders prior to scanning or public distribution.
          </p>
        </section>

        {/* Proposed Deliverables List */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Planned Architectural Deliverables
          </h2>
          <ul className="space-y-2 text-sm text-slate-700 font-sans">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>One-stop public download storefront for PDF books, folk songbooks, and audio recordings</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Direct 1-click downloads of compiled software locale bundles (i18n JSON, PO, XLIFF)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Accountless static web application with zero management complexity or tracking requirements</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Separation of concerns routing all curation and moderation to underlying project repositories</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>In-review staging layer enabling contributors to see pending submissions rendered visually</span>
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
