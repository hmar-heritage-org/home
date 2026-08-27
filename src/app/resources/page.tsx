import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FolderGit2, ArrowRight, Ban } from "lucide-react";

export const metadata = {
  title: `Resources & Index | ${siteConfig.fullName}`,
  description: "Official index of auxiliary guides, internal project briefs, legal licenses, and external portals for the Hmar Heritage Foundation.",
};

export default function ResourcesPage() {
  return (
    <div className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* Header */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <FolderGit2 className="w-4 h-4 text-[#9E1B24]" />
          <span>Statutory Index & Resources</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Resources & Auxiliary Index
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans">
          Central index of auxiliary guides, legal policies, open datasets, internal project briefs, and direct external project portals.
        </p>
      </section>

      {/* Pure Textual Index Body */}
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8 text-base font-sans border-b border-slate-200 pb-12">
        
        {/* Get Involved Pointer */}
        <div className="space-y-2">
          <p>
            If you want high-level guidelines on how to contribute physical books for scanning, draft weekly Wikipedia Incubator articles, or build open software tools, visit{" "}
            <Link href="/get-involved" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>get involved & contributor guide</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>.
          </p>
          <p className="text-xs text-slate-500 font-mono">
            Outlines contributor workflows for book lenders, grammar reviewers, and software maintainers.
          </p>
        </div>

        {/* Datasets Pointer */}
        <div className="space-y-2">
          <p>
            If you want technical specifications and Hugging Face handles for downloading bulk raw text corpora, OCR image sets, or speech audio datasets, visit{" "}
            <Link href="/datasets" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>open ai datasets & corpora</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>.
          </p>
          <p className="text-xs text-slate-500 font-mono">
            Provides dataset documentation for computational linguists and machine learning researchers.
          </p>
        </div>

        {/* Terms Pointer */}
        <div className="space-y-2">
          <p>
            If you want to review our open data usage policy, commercial integration rights, and anti-paywall safeguards, visit{" "}
            <Link href="/terms" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>terms & open data license</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>.
          </p>
          <p className="text-xs text-slate-500 font-mono">
            Explains that commercial software integration is 100% free while paywalling raw scans is prohibited.
          </p>
        </div>

        {/* Project Directory Table */}
        <div className="pt-6 border-t border-slate-200 space-y-4">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Project Directory Table
          </h2>
          <p className="text-sm">
            Technical index table linking to standalone internal briefs and live external web portals:
          </p>

          <div className="bg-[#F4F1EA] p-4 sm:p-6 rounded-2xl border border-slate-300 shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="border-b-2 border-slate-800 font-serif font-bold text-sm text-slate-900">
                  <th className="py-2.5 pr-4">Project Name</th>
                  <th className="py-2.5 px-4">Status</th>
                  <th className="py-2.5 px-4">Internal Brief</th>
                  <th className="py-2.5 pl-4">Live Portal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300 text-slate-800 font-mono font-bold">
                {siteConfig.projects.map((proj, idx) => {
                  const isLivePortal = (proj.id === "wikipedia-incubator" || proj.id === "raw-datasets") && proj.targetUrl !== "#";

                  return (
                    <tr key={proj.id} className="hover:bg-white/60 transition-colors">
                      <td className="py-3.5 pr-4 font-serif font-bold text-slate-900 text-sm">
                        <Link
                          href={`/projects/${proj.id}`}
                          className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          <span>0{idx + 1}. {proj.title.toLowerCase()}</span>
                        </Link>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-xs text-slate-700 font-semibold">
                        {proj.status}
                      </td>
                      <td className="py-3.5 px-4">
                        <Link
                          href={`/projects/${proj.id}`}
                          className="text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                        >
                          <span>read brief →</span>
                        </Link>
                      </td>
                      <td className="py-3.5 pl-4">
                        {isLivePortal ? (
                          <a
                            href={proj.targetUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                          >
                            <span>visit hub ↗</span>
                          </a>
                        ) : (
                          <span className="text-slate-400 cursor-not-allowed inline-flex items-center gap-1 font-normal select-none">
                            <Ban className="w-3 h-3 text-slate-400" />
                            <span>portal offline</span>
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Concluding Section & Inquiries Pointer */}
        <div className="pt-8 border-t border-slate-200 space-y-4">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Permanent Stewardship Commitment
          </h2>
          <p className="text-base text-slate-700 leading-relaxed font-sans">
            All project portals, internal briefs, raw datasets, and software locale files cataloged above are permanently maintained under open-access principles. If you have questions about referencing these resources, integrating open datasets into your research, or submitting material for preservation, feel free to connect with our team.
          </p>
          <div className="pt-2">
            <Link
              href="/join"
              className="inline-flex items-center gap-2 font-bold text-sm text-slate-900 hover:text-blue-700 transition-colors"
            >
              <span>contact the foundation desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
