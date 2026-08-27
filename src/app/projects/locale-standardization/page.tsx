import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";

export const metadata = {
  title: `Hmar Locale Project Brief | ${siteConfig.fullName}`,
  description: "Proposed architecture, UI/UX translation standards, web technology locales, and Unicode CLDR integration brief for the Hmar Locale Project.",
};

export default function LocaleStandardizationBriefPage() {
  const project = siteConfig.projects.find((p) => p.id === "locale-standardization") || {
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
          Hmar Locale Project
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans pt-1">
          The Hmar Locale Project is a software localization initiative currently in planning. Below is an outline of the proposed translation philosophy, initial roadmap focus points, accountless training ground model, and intended Unicode CLDR integration strategy for when active development begins.
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
                  Locale Portal
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
                  Phase 1 Focus Points
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  Popups · Confirmation Modals · System Alerts · Action Buttons
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Translation Philosophy
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  Gradual One Word at a Time Adaptation · Descriptive Short Phrases
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
            Multi-Platform Software Terminology Standardization
          </h2>
          <p>
            The intended design vision for the Hmar Locale Project is to establish standardized translation keys for web browsers, web application frameworks, desktop operating systems, and mobile platforms. Providing open, machine-readable locale files enables software developers, browser extension creators, and open-source maintainers to add native Hmar language support across any digital interface.
          </p>
        </section>

        {/* Section 2: Slow, Gradual, One Word at a Time & Short Phrases */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Gradual Translation Roadmap & Descriptive Short Phrases
          </h2>
          <p>
            Language evolution cannot be forced overnight by decree. The project establishes a slow, gradual translation roadmap that introduces technical vocabulary one word at a time. Initial dataset roadmaps focus purely on transient user interface elements: popups, modal headers, confirmation notices, system alerts, and primary action buttons. Because popups are brief and temporary, they provide a gentle introduction for users. Furthermore, expressing actions through natural, descriptive short phrases is vastly more clear in Hmar than forcing artificial single-word neologisms. Established technical English loanwords remain untranslated whenever a newly coined term does not convey the intended action with 100% certainty, ensuring native speakers adopt terms naturally without software culture shock.
          </p>
        </section>

        {/* Section 3: Accountless Training Ground & External Community Groups */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Accountless Training Ground & External Community Groups
          </h2>
          <p>
            Rather than building heavy institutional forums or complex user portals, the dedicated locale portal is planned as a lightweight, accountless training ground. The website instructs new contributors on localization structures, translation key formats, and repository tools. Active terminology discussions and community feedback take place directly within accessible channels like WhatsApp and Discord groups, keeping the website friction-free while meeting volunteers where they already communicate.
          </p>
        </section>

        {/* Section 4: Avoiding Interface Culture Shock across Devices */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Avoiding Interface Culture Shock
          </h2>
          <p>
            A core design challenge in software localization is creating terminology that feels natural to native speakers across all digital devices. Because community members have interacted with web browsers, operating systems, and computer software in English, Assamese, or Hindi for decades, forcing unnatural translations can create culture shock. The proposed terminology design balances modern technical clarity with authentic linguistic roots, ensuring browser menus, web UI components, and desktop elements remain intuitive.
          </p>
        </section>

        {/* Section 5: Unicode CLDR & Web Standards */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Unicode CLDR & Web Standards Integration
          </h2>
          <p>
            Long-term preservation requires incorporating verified locale specifications into international web and software standards. The project aims to prepare core locale data for submission to the Unicode Common Locale Data Repository. While integration into major commercial operating systems, web browsers, and platforms remains at the sole discretion of entities like Google, Apple, Mozilla, Microsoft, and the Linux Foundation, establishing open locale data serves as the mandatory technical prerequisite.
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
              <span>Slow, gradual translation roadmap focused on transient popups, confirmation modals, and system alerts</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Descriptive short phrase guidelines over forced single-word neologisms</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Accountless educational training ground for new contributors and translators</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Direct download links for compiled translation bundles and repository access</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Standardized Hmar translation keys for web browsers, web frameworks, mobile apps, and desktop environments</span>
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
