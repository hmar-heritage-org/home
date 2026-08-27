import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Database, ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
  title: `Open AI Datasets & Corpora | ${siteConfig.fullName}`,
  description: "Raw text corpora, scanned page image archives, and honest expectations for researchers.",
};

export default function DatasetsPage() {
  return (
    <div className="py-12 space-y-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Header & Lead */}
      <section className="space-y-4">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <Database className="w-4 h-4 text-[#9E1B24]" />
          <span>Raw Corpora & AI Model Data</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Open AI Datasets & Corpora
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans pt-1">
          This page provides technical documentation and dataset specifications for computer vision engineers, computational linguists, and machine learning researchers accessing our Hugging Face repositories.
        </p>
      </section>

      {/* 2. Pure Typographic Body */}
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8 text-base font-sans border-b border-slate-200 pb-12">
        
        {/* Section 1 */}
        <section className="space-y-2 pt-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Raw PDF Images and Multimodal Dataset Utility
          </h2>
          <p className="text-base text-slate-700">
            Although our archives consist primarily of raw PDF page images, high-resolution document scans, and uncurated audio, they are fully usable as primary datasets. Modern multimodal vision-language models, document parsing algorithms, and OCR computer vision encoders rely directly on high-resolution page images. Raw PDF scans preserve 100% of authentic orthography, historical fonts, and page structures without OCR transcription error.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Simple Structure and No Formal Dataset Cleaning Plans
          </h2>
          <p className="text-base text-slate-700">
            We intentionally keep the archive structure simple so our small team can focus on collection and public domain scanning. The Foundation has no plans to structure, annotate, or clean these archives into polished benchmark datasets. Any data cleaning, tokenization, filtering, or instruction formatting must be performed by the developers and researchers who download them.
          </p>
        </section>

        {/* Section 3: Official Repositories Table */}
        <section className="space-y-4 pt-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Official Dataset Repositories & Hub Handles
          </h2>
          <p className="text-base text-slate-700">
            You can inspect or download raw text corpora directly via Python using the Hugging Face datasets library via <code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded">load_dataset(&quot;hmar-heritage&quot;)</code> or by accessing our official repositories below:
          </p>

          <div className="bg-[#F4F1EA] p-4 sm:p-6 rounded-2xl border border-slate-300 shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-sans">
              <thead>
                <tr className="border-b-2 border-slate-800 font-serif font-bold text-sm text-slate-900">
                  <th className="py-2.5 pr-4">Repository / Hub</th>
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

          <p className="text-xs text-slate-500 font-mono pt-1">
            Read more about this archival initiative under our{" "}
            <Link href="/projects/raw-datasets" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar corpus archival project brief</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Open Licensing and Commercial Derivative Works
          </h2>
          <p className="text-base text-slate-700">
            Using our raw archives to train language models, computer vision algorithms, or software applications is 100% free. Reselling or paywalling our raw uncleaned archives as standalone products is prohibited. However, if a developer or company performs significant engineering work—such as cleaning, restructuring, annotating, alignment, or instruction-tuning the raw data into a refined dataset product—they are fully permitted to license or sell their restructured derivative work.
          </p>
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
