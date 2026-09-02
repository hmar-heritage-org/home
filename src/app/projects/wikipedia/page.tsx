import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2, Globe, ExternalLink } from "lucide-react";

export const metadata = {
  title: `Hmar Wikipedia Incubator Initiative Brief | ${siteConfig.fullName}`,
  description: "Institutional stewardship brief, weekly drafting quotas, and LangCom review preparation for the Hmar Wikipedia Incubator Initiative.",
};

export default function WikipediaIncubatorBriefPage() {
  const project = siteConfig.projects.find((p) => p.id === "wikipedia") || {
    projectCode: "WIKI-05",
    category: "Community Knowledge",
    status: "Active",
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
          Hmar Wikipedia Incubator Initiative
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans pt-1">
          The Hmar Wikipedia Incubator Initiative is an active community knowledge project. It provides institutional stewardship, editor guidelines, and structural support for the Hmar language encyclopedia project on Wikimedia Incubator Wp/hmr.
        </p>
      </section>

      {/* Project Specifications Table */}
      <section className="space-y-3">
        <h2 className="text-xl font-serif font-bold text-slate-900">
          Project Specifications
        </h2>

        <div className="bg-[#F4F1EA] p-4 sm:p-6 rounded-2xl border border-slate-300 shadow-xs overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs font-sans">
            <thead>
              <tr className="border-b-2 border-slate-800 font-serif font-bold text-sm text-slate-900">
                <th className="py-2.5 pr-4 w-1/3">Specification</th>
                <th className="py-2.5 pl-4">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-300 text-slate-800 font-mono">
              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Live Wikimedia Incubator Workspace
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  <a
                    href="https://incubator.wikimedia.org/wiki/Wp/hmr"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  >
                    <span>incubator.wikimedia.org/wiki/Wp/hmr</span>
                    <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
                  </a>
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Source Code / Platform
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans font-semibold">
                  Official Third-Party MediaWiki Platform · Wikimedia Foundation
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Initiative Scope
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  Institutional Stewardship · Weekly Lead-Section Drafting · LangCom Review Preparation
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Initiative Status
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans font-semibold text-emerald-800">
                  Active Initiative
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Pure Textual Narrative */}
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8 text-base font-sans border-b border-slate-200 pb-12">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Institutional Stewardship for Wikimedia Incubator Wp/hmr
          </h2>
          <p>
            The Hmar Wikipedia Incubator Initiative serves as the formal institutional anchor for the Hmar encyclopedia project hosted on Wikimedia Incubator under code Wp/hmr. While drafting and article edits take place directly on third-party Wikimedia servers, the Foundation provides institutional backing, non-profit stewardship, and orthographic verification required by the Wikimedia Language Committee.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Weekly Lead-Section Drafting Strategy
          </h2>
          <p>
            Rather than requiring massive full-length encyclopedic articles from day one, the drafting strategy focuses on completing high-quality lead sections for core topics. Initial editorial quotas prioritize ten lead sections per week covering regional history, geography, notable figures, scientific concepts, and traditional literature. This approach builds a sustainable digital footprint while providing accessible writing practice for students and community members.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Orthographic Verification & Dictionary Alignment
          </h2>
          <p>
            Maintaining orthographic consistency across community edits is essential for encyclopedic quality. Editor guidelines align spelling standards and technical vocabulary with standardized glossaries defined under the{" "}
            <Link href="/projects/lexicon" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar open lexicon</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>. This ensures new articles maintain reliable linguistic standards while contributing structured text data to open language corpora.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Preparation for Full Domain Launch
          </h2>
          <p>
            The ultimate objective of the initiative is qualifying the Hmar language project for full domain launch under hmr.wikipedia.org. Meeting Wikimedia Language Committee verification criteria requires demonstrating continuous editor activity, consistent orthographic standards, and institutional stability. This brief serves as the official stewardship reference for Language Committee reviewers auditing non-profit backing.
          </p>
        </section>

        {/* Deliverables List */}
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Key Institutional Deliverables
          </h2>
          <ul className="space-y-2 text-sm text-slate-700 font-sans">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Official institutional backing and stewardship for Wikimedia Incubator Wp/hmr</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Weekly lead-section article drafting quotas focused on core encyclopedic topics</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Orthographic verification aligned with the Hmar Open Lexicon glossaries</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Institutional documentation supporting Wikimedia Language Committee review towards hmr.wikipedia.org</span>
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
