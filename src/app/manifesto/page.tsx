import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FileText, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Charter & Constitution | ${siteConfig.fullName}`,
  description: "Official Charter, Constitution, and Articles of Governance of the Hmar Heritage Foundation.",
};

export default function ManifestoPage() {
  return (
    <div className="py-12 space-y-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Left-Aligned Editorial Header */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#9E1B24]" />
          <span>Charter & Constitution</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Charter & Constitution
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans">
          The official governing charter, articles of operation, and statutory principles establishing the Foundation as a registered non-profit literary, linguistic, and digital stewardship society.
        </p>
      </section>

      {/* 2. Pure Typographic Articles Body */}
      <div className="space-y-12 text-slate-800 leading-relaxed text-base font-sans">
        
        {/* ARTICLE I */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Article I
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Name, Legal Status & Statutory Mandate
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              <strong>Section 1.1 Name & Organization:</strong> The society is promulgated officially as the <strong>Hmar Heritage Foundation</strong>, operating as a non-profit, non-sectarian, and non-political literary and digital preservation society.
            </p>
            <p>
              <strong>Section 1.2 Timeline & Evolutionary Mandate:</strong> Originating as a personal digital stewardship initiative in 2024, the society is formally constituted in 2026 as an open foundation framework to provide contributor tools, public open schemas, and project briefs. The Foundation's statutory duty is laying open infrastructure and data standards, establishing the open groundwork for future generations without guaranteeing third-party commercial integration outcomes.
            </p>
            <p>
              <strong>Section 1.3 Public Benefit Mandate:</strong> The Foundation is established strictly for community welfare, language preservation, education, and cultural upliftment.
            </p>
          </div>
        </section>

        {/* ARTICLE II */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Article II
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Statutory Project Units & Digital Infrastructure
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              To achieve its preservation mandate, the Foundation establishes five specialized project briefs:
            </p>

            <p>
              <strong>Section 2.1 Hmar Digital Library:</strong> Outlines the planned 1-stop public download storefront for classic literature, rare manuscripts, folk songbooks, and compiled software locale bundles under the{" "}
              <Link href="/projects/literature-library" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                <span>hmar digital library brief</span>
                <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
              </Link>.
            </p>

            <p>
              <strong>Section 2.2 Hmar Locale Project:</strong> Establishes standardized Hmar technical UI and UX terminology, descriptive phrase guidelines, and multi-platform i18n translation key formats under the{" "}
              <Link href="/projects/locale-standardization" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                <span>hmar locale project brief</span>
                <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
              </Link>.
            </p>

            <p>
              <strong>Section 2.3 Hmar Open Lexicon:</strong> Develops open Hmar-English and Hmar-Mizo lexical databases, definitions, etymology, and open lookup APIs across dual web applications under the{" "}
              <Link href="/projects/termbank" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                <span>hmar open lexicon brief</span>
                <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
              </Link>.
            </p>

            <p>
              <strong>Section 2.4 Hmar Wikipedia Incubator Initiative:</strong> Organizes institutional stewardship, article drafting (10 lead-section articles weekly), and encyclopedic development on Wikimedia Incubator Wp/hmr under the{" "}
              <Link href="/projects/wikipedia-incubator" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                <span>hmar wikipedia incubator brief</span>
                <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
              </Link>.
            </p>

            <p>
              <strong>Section 2.5 Hmar Corpus Archival Project:</strong> Operates the backend data ingestion engine, low-friction anonymous upload interface, GitHub staging pipeline, and Hugging Face dataset hub mirroring under the{" "}
              <Link href="/projects/raw-datasets" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                <span>hmar corpus archival project brief</span>
                <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
              </Link>.
            </p>
          </div>
        </section>

        {/* ARTICLE III */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Article III
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Linguistic Autonym Sovereignty & Cultural Identity
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              <strong>Section 3.1 Self-Designation under Zo Family:</strong> The Foundation formally promulgates Hmar as an independent first-class language entity belonging to the <strong>Zo</strong> language family.
            </p>
            <p>
              <strong>Section 3.2 Clarification of Academic Exonyms:</strong> The Foundation clarifies that external institutional designations, including Kuki-Chin-Naga, Kuki-Chin, Chin-Kuki, and their historical academic variants, represent external academic exonyms for the Zo language family.
            </p>
            <p>
              <strong>Section 3.3 Metadata Rights & Self-Determination:</strong> The Foundation asserts sole community authority over orthography, glossaries, and digital metadata representation across global software registries, ISO 639-3 standards, and Unicode CLDR.
            </p>
          </div>
        </section>

        {/* ARTICLE IV */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Article IV
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Open Stewardship & Anti-Paywall Protection
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              <strong>Section 4.1 Permitted Commercial Integration:</strong> All Foundation software translation keys, i18n glossaries, and dataset repositories remain 100% free for open-source maintainers and commercial software developers to build upon and integrate into applications.
            </p>
            <p>
              <strong>Section 4.2 Anti-Exploitation Clause:</strong> Selling, paywalling, or commercializing the raw PDF archival scans, dictionary databases, or raw datasets as standalone proprietary products is strictly prohibited.
            </p>
          </div>
        </section>

        {/* ARTICLE V */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Article V
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Public Stewardship & Financial Integrity
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              <strong>Section 5.1 Public Trust Governance:</strong> All assets, archives, software repositories, and domain infrastructure are maintained strictly in public trust for the benefit of the community and future generations.
            </p>
            <p>
              <strong>Section 5.2 Financial Auditing & Non-Profit Integrity:</strong> The society adheres to transparent financial auditing, non-profit fund allocation, and public accountability standards.
            </p>
          </div>
        </section>

        {/* ARTICLE VI */}
        <section className="space-y-4 pb-4">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Article VI
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Generational Scope & Unattributed Foundation Work
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              <strong>Section 6.1 Generational Timeline:</strong> The society acknowledges that language preservation and digital infrastructure are open, continuous, and generational endeavors. The Foundation does not condition its operations upon immediate commercial adoption or short-term results.
            </p>
            <p>
              <strong>Section 6.2 Acceptance of Unattributed Groundwork:</strong> The Foundation operates on the statutory principle of quiet groundwork. All open datasets, locale keys, and digital archives are released under open licenses so third parties can build upon them without requiring personal attribution to individual contributors or the society.
            </p>
            <p>
              <strong>Section 6.3 Dedicated Philosophical Reference:</strong> For a comprehensive exploration of institutional scope, volunteer expectations, and generational preservation, refer to the{" "}
              <Link href="/philosophy" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                <span>foundational philosophy essay</span>
                <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
              </Link>.
            </p>
          </div>
        </section>

        {/* Sign off */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <span>Promulgated & Adopted by the Hmar Heritage Foundation</span>
          <Link
            href="/join"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-blue-700 transition-colors"
          >
            <span>register as a member or contributor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
