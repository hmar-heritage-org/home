import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";

export const metadata = {
  title: `Open Locale Project Brief | ${siteConfig.fullName}`,
  description: "Proposed architecture, UI/UX translation standards, web technology locales, and Unicode CLDR integration brief for the Open Locale Project.",
};

export default function LocaleStandardizationBriefPage() {
  const project = siteConfig.projects.find((p) => p.id === "locale") || {
    projectCode: "LOCALE-01",
    category: "Software Locale",
    status: "In Planning",
  };

  return (
    <div className="py-12 space-y-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Header & Lead Section */}
      <section className="space-y-4">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#9E1B24]" />
          <span>Institutional Project Brief · {project.projectCode}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Open Locale Project
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans pt-1">
          The Open Locale Project is an open, language-agnostic software internationalization framework stewarded by the Hmar Heritage Foundation. Designed to provide machine-readable UI translation schemas, Supabase staging workflows, and multi-platform exporters for Northeast Indian regional and minority languages, its inaugural reference implementation is the Hmar (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">hmr-IN</code>) software locale.
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
                  Flagship Locale
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans font-semibold">
                  Hmar (hmr-IN) · Open to All Regional Languages
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Staging Engine
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans font-semibold">
                  Supabase Realtime Database · Status: Unverified → Verified
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Phase 1 Focus Points
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  Confirmation Modals · System Alerts · Error Dialogs · Action Buttons
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Moderation Pipeline
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  Designated Language Verifiers · Zero Git Experience Required
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
            Open Regional Software Terminology Standardization
          </h2>
          <p>
            The intended design vision for the Open Locale Project is establishing standardized translation keys for web browsers, web application frameworks, desktop operating systems, and mobile platforms across regional languages of Northeast India that lack native locale support. Providing open, machine-readable locale files enables software developers, browser extension creators, and open-source maintainers to add native language support across any digital interface.
          </p>
        </section>

        {/* Section 2: Two-Tier Staging & Language Verifier Pipeline */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Supabase Staging & Language Verifier Pipeline
          </h2>
          <p>
            The platform architecture features a clean, two-tier moderation workflow. Live web edits and community contributions land in a Supabase staging database marked as unverified. Designated Language Verifiers (community scholars, educators, and language stewards) review and approve translations on a simplified web interface without ever needing Git or terminal experience. Once approved, background GitHub Actions automatically compile and push verified master releases to GitHub repositories and Hugging Face mirrors for 1-click platform exports.
          </p>
        </section>

        {/* Section 3: Gradual Roadmap & Focus Points */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Gradual Translation Roadmap & Descriptive Short Phrases
          </h2>
          <p>
            Language evolution cannot be forced overnight by decree. The project establishes a gradual translation roadmap focusing initially on critical, transient user interface elements: deletion confirmation modals, network error dialogs, system alerts, and primary action buttons. Expressing actions through natural, descriptive short phrases is vastly more clear than forcing artificial single-word neologisms, ensuring native speakers adopt terms naturally without software culture shock.
          </p>
        </section>

        {/* Section 4: Unicode CLDR Integration */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Unicode CLDR & Web Standards Integration
          </h2>
          <p>
            Long-term preservation requires incorporating verified locale specifications into international web and software standards. The project aims to prepare core locale data for submission to the Unicode Common Locale Data Repository. Establishing open, verified locale data serves as the mandatory technical prerequisite for future adoption by major technology entities.
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
              <span>Language-agnostic locale platform stewarded by the Hmar Heritage Foundation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Hmar (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">hmr-IN</code>) as the flagship reference implementation</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Supabase real-time database staging with designated non-technical Language Verifier roles</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Automated 1-click exporters for Android (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">strings.xml</code>), Web (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">JSON</code>), iOS (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">strings</code>), and Linux (<code className="font-mono text-xs bg-slate-100 px-1 py-0.5 rounded">.po</code>)</span>
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
