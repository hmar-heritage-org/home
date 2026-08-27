import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ExternalLink, ArrowLeft, Globe, Database, CheckCircle2, Ban } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return siteConfig.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = siteConfig.projects.find((p) => p.id === resolvedParams.id);
  if (!project) return { title: "Project Brief Not Found" };

  return {
    title: `${project.title} | ${siteConfig.fullName}`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const project = siteConfig.projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const isLivePortal = (project.id === "wikipedia-incubator" || project.id === "raw-datasets") && project.targetUrl !== "#";
  const portalLabel = project.id === "raw-datasets" ? "Hugging Face Hub:" : "Official Workspace Portal:";

  return (
    <div className="py-12 space-y-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* Back Link */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>back to projects directory</span>
        </Link>
      </div>

      {/* Pure Textual Header */}
      <section className="space-y-6 border-b border-slate-200 pb-10">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold">
          <div className="flex items-center gap-2">
            <span className="text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              {project.projectCode}
            </span>
            <span className="text-[#9E1B24] uppercase">
              {project.category}
            </span>
          </div>
          <span className="text-[10px] px-2.5 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-800">
            {project.status}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          {project.title}
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans">
          {project.fullDescription}
        </p>
      </section>

      {/* Column Boxes for Technical & Institutional Metadata */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Box 1: Portals & External Resources */}
        <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-200 space-y-3 font-sans text-xs">
          <div className="font-mono font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#9E1B24]" />
            <span>Portals & External Links</span>
          </div>

          <div className="space-y-3 pt-1 font-mono">
            <div>
              <span className="text-slate-500 block text-[10px]">{portalLabel}</span>
              {isLivePortal ? (
                <a
                  href={project.targetUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1 text-xs"
                >
                  <span>{project.targetUrl.replace("https://", "")}</span>
                  <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
                </a>
              ) : (
                <span className="text-slate-400 cursor-not-allowed inline-flex items-center gap-1 font-normal select-none text-xs">
                  <Ban className="w-3 h-3 text-slate-400" />
                  <span>portal offline</span>
                </span>
              )}
            </div>

            <div>
              <span className="text-slate-500 block text-[10px]">GitHub Organization:</span>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1 text-xs"
              >
                <span>{siteConfig.githubUrl.replace("https://", "")}</span>
                <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Box 2: Institutional Stewardship & Scope */}
        <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-200 space-y-3 font-sans text-xs">
          <div className="font-mono font-bold text-slate-900 uppercase tracking-wider text-[11px] flex items-center gap-2">
            <Database className="w-4 h-4 text-[#9E1B24]" />
            <span>Institutional Scope & Status</span>
          </div>

          <div className="space-y-2 pt-1">
            <div>
              <span className="text-slate-500 block text-[10px] font-mono">Stewardship Note:</span>
              <span className="font-bold text-slate-900">{project.notes}</span>
            </div>

            <div>
              <span className="text-slate-500 block text-[10px] font-mono">Grant Category:</span>
              <span className="text-slate-700">{project.grantScope}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Official Dataset Repositories Table for raw-datasets Brief */}
      {project.id === "raw-datasets" && (
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Official Dataset Repositories & Hub Handles
          </h2>
          <p className="text-sm text-slate-700">
            Access raw corpora, PDF image archives, and dataset mirrors via direct links or Python (<code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">load_dataset(&quot;hmar-heritage&quot;)</code>):
          </p>

          <div className="bg-[#F4F1EA] p-4 sm:p-6 rounded-2xl border border-slate-300 shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="border-b-2 border-slate-800 font-serif font-bold text-sm text-slate-900">
                  <th className="py-2.5 pr-4">Repository / Hub Name</th>
                  <th className="py-2.5 px-4">Platform</th>
                  <th className="py-2.5 pl-4">Direct Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300 text-slate-800 font-mono font-bold">
                <tr className="hover:bg-white/60 transition-colors">
                  <td className="py-3.5 pr-4 font-serif font-bold text-slate-900 text-sm">
                    <a
                      href={siteConfig.huggingFaceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>hmar heritage datasets hub</span>
                    </a>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-slate-700 font-semibold">
                    Hugging Face
                  </td>
                  <td className="py-3.5 pl-4">
                    <a
                      href={siteConfig.huggingFaceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{siteConfig.huggingFaceUrl.replace("https://", "")}</span>
                      <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-white/60 transition-colors">
                  <td className="py-3.5 pr-4 font-serif font-bold text-slate-900 text-sm">
                    <a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>hmar heritage github organization</span>
                    </a>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-slate-700 font-semibold">
                    GitHub Org
                  </td>
                  <td className="py-3.5 pl-4">
                    <a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                    >
                      <span>{siteConfig.githubUrl.replace("https://", "")}</span>
                      <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Deliverables Section */}
      <section className="space-y-4 border-b border-slate-200 pb-10">
        <h2 className="text-2xl font-serif font-bold text-slate-900">
          Key Project Deliverables & Institutional Specifications
        </h2>
        <ul className="space-y-2 text-sm text-slate-700 font-sans">
          {project.deliverables.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E1B24] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer Pointers */}
      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-sans">
        {isLivePortal ? (
          <a
            href={project.targetUrl}
            target="_blank"
            rel="noreferrer"
            className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
          >
            <span>visit official portal ↗</span>
          </a>
        ) : (
          <span className="text-slate-400 cursor-not-allowed inline-flex items-center gap-1 font-mono text-xs select-none">
            <Ban className="w-3.5 h-3.5 text-slate-400" />
            <span>portal offline</span>
          </span>
        )}

        <Link
          href="/resources"
          className="font-semibold text-slate-600 hover:text-slate-900 transition-colors"
        >
          <span>back to resources index →</span>
        </Link>
      </div>
    </div>
  );
}
