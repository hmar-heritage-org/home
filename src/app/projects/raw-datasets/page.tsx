import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2, Database, ExternalLink } from "lucide-react";

export const metadata = {
  title: `Hmar Heritage Archival Project Brief | ${siteConfig.fullName}`,
  description: "Proposed architecture, backend ingestion pipeline, progressive contributor onboarding, and dataset specifications for the Hmar Heritage Archival Project.",
};

export default function RawDatasetsBriefPage() {
  const project = siteConfig.projects.find((p) => p.id === "raw-datasets") || {
    projectCode: "CORPUS-03",
    category: "Raw AI Datasets",
    status: "Active",
  };

  return (
    <div className="py-12 space-y-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Header & Lead Section */}
      <section className="space-y-4">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <Database className="w-4 h-4 text-[#9E1B24]" />
          <span>Institutional Project Brief · {project.projectCode}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Hmar Heritage Archival Project
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans pt-1">
          The Hmar Heritage Archival Project is the primary backend data engine of the Foundation. It operates as the raw ingestion pipeline, dataset schema authority, and educational training ground for text corpora, speech audio archives, and OCR scanned page datasets mirrored on Hugging Face.
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
                  Archival Portal
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans font-semibold">
                  Project Not Initialized
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Staging & PR Workspace
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  <a
                    href={siteConfig.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1 font-mono text-xs"
                  >
                    <span>{siteConfig.githubUrl.replace("https://", "")}</span>
                    <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
                  </a>
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Master Storage Hub
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans font-semibold">
                  <a
                    href={siteConfig.huggingFaceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1 font-mono text-xs"
                  >
                    <span>{siteConfig.huggingFaceUrl.replace("https://", "")}</span>
                    <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
                  </a>
                </td>
              </tr>

              <tr className="hover:bg-white/60 transition-colors">
                <td className="py-3 pr-4 font-bold text-slate-900 font-sans">
                  Contribution Model
                </td>
                <td className="py-3 pl-4 text-slate-700 font-sans">
                  Anonymous Simple Upload · Optional Accounts for History Storage
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
            Backend Data Engine & Ingestion Pipeline
          </h2>
          <p>
            Unlike the read-only public storefront of the{" "}
            <Link href="/projects/literature-library" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar digital library</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>, the Hmar Heritage Archival Project functions as the backend data management hub. It provides the core data ingestion, storage, and processing pipelines required to handle raw text dumps, high-resolution document scans, and uncurated speech audio recordings.
          </p>
        </section>

        {/* Active Sprint Targets */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Active Operational Sprint Targets
          </h2>
          <p>
            During our current active operational sprint, the primary focus of the Hmar Heritage Foundation is advancing the Hmar Heritage Archival Project. Our active target is physical literature acquisition and high-resolution PDF scanning of 100 out-of-print books, bootstrapped locally through internal resources.
          </p>
          <p>
            In addition to physical text scanning, the project aims to build rich oral history audio and video corpora. While text digitization is already underway through internal resources, expanding field audio and video recording across regional villages is explicitly dependent on securing grant funding for dedicated field audio recorders, archival cameras, and storage hardware.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            GitHub Staging Pipeline & Hugging Face Master Storage
          </h2>
          <p>
            The project architecture enforces a clear division between staging workflows and master storage. GitHub is used for all pull requests, code reviews, and in-review staging branches because of its intuitive interface, file diff tools, and issue tracking. Automated GitHub Actions run verification checks and render pending submissions live on the storefront under an in-review status. Once a pull request is merged, automated CI and CD workflows sync and push the verified master release to the Hugging Face Datasets hub for bulk hosting.
          </p>
        </section>

        {/* Section 3: Dual Contribution & History-Only Accounts */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Low-Friction Uploads & History Storage Accounts
          </h2>
          <p>
            The portal main page is designed for ultra-simple community participation. Anonymous users can upload scans, audio files, or text transcriptions instantly through a basic web upload interface without creating an account. Optional contributor accounts serve exclusively to store personal submission history and attribution records, containing zero administrative or management features to avoid unnecessary website overhead.
          </p>
        </section>

        {/* Section 4: Training Ground for Technical Onboarding */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Training Ground for Technical Repository Management
          </h2>
          <p>
            Beyond simple web uploads, the portal serves as an educational training ground for less tech-savvy volunteers. Through step-by-step guides, contributors graduate from basic drag-and-drop web uploads to terminal commands, Git version control, and working directly on the Hugging Face platform. This builds long-term technical capacity within the community.
          </p>
        </section>

        {/* Section 5: Data Schema Specifications for Organizations */}
        <section className="space-y-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Data Schema Specifications and Organizational Guides
          </h2>
          <p>
            The project serves as the formal authority for dataset structure. It defines standardized JSON schemas, metadata fields, and scanning resolution benchmarks for text, image, and audio archives. Detailed how-to guides instruct partner organizations, such as churches, schools, and literature societies, on preparing institutional records for archival ingestion.
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
              <span>GitHub pull request and staging branch workflow for in-review contribution rendering</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Automated CI and CD pipelines syncing merged GitHub PRs to Hugging Face master datasets</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Low-friction anonymous upload interface paired with attribution history accounts</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Educational onboarding guides transitioning volunteers from simple web uploads to terminal & Git workflows</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>Standardized dataset JSON schemas and digitizing guides for partner institutions</span>
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
