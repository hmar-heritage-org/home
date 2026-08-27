import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Users, ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
  title: `Get Involved & Self-Guided Contribution | ${siteConfig.fullName}`,
  description: "Self-guided participation framework, quality standards, and contributor guidelines for the Hmar Heritage Foundation.",
};

export default function GetInvolvedPage() {
  return (
    <div className="py-12 space-y-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Header & Lead Section */}
      <section className="space-y-4">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <Users className="w-4 h-4 text-[#9E1B24]" />
          <span>Self-Guided Contributor Framework</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Get Involved & Participation Guide
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans pt-1">
          If you have visited this page, you are likely interested in participating in language preservation. Whether you are a native speaker, an open-source developer, a student, or a language enthusiast who does not speak Hmar, there are many ways you can contribute to these projects immediately without having to contact anyone or wait for administrative approval. Below is our general participation framework outlining how you can get started.
        </p>
      </section>

      {/* 2. Pure Typographic Body (Heading and prose form continuous thoughts) */}
      <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8 text-base font-sans border-b border-slate-200 pb-12">
        
        {/* Section 1 */}
        <section className="space-y-2 pt-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            We Don&apos;t Know What We Are Doing
          </h2>
          <p className="text-base text-slate-700">
            Truthfully, we don&apos;t know what we are doing either. You do not need to be a professional linguist, a published author, or a senior software engineer to contribute. None of us have all the answers, and nobody expects flawless contributions on day one. If you feel unsure or worry about making mistakes, do not be intimidated. We are figuring these tools out as we go, and every small effort helps us learn together.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            But Please Read the Guidelines First
          </h2>
          <p className="text-base text-slate-700">
            Before making submissions, contributors must read the specific contribution guidelines and familiarize themselves with the workflow tools on each project&apos;s portal. While we maintain a low-barrier open policy, it is essential that all submissions adhere to project standards so contributions can be integrated cleanly without creating additional cleanup work for our small team.
          </p>
        </section>

        {/* Section 3: Non-repeating prose */}
        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            And If You Don&apos;t Speak Hmar
          </h2>
          <p className="text-base text-slate-700">
            You can still contribute to language preservation. Open-source developers, software maintainers, and data scientists can contribute directly by building open web micro-apps, improving PDF rendering tools for digitized books, or building open REST APIs for dictionary lookup. You can also help test our Hugging Face dataset mirrors via load_dataset hmar-heritage, format raw text corpora for machine learning pipelines, or audit software localization files in standard i18n JSON, PO, and XLIFF formats for mobile and desktop applications.
          </p>
        </section>

        {/* Section 4: Non-repeating prose */}
        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            Or If You Do Speak Hmar
          </h2>
          <p className="text-base text-slate-700">
            You can contribute asynchronously across several live projects at your own pace. You can draft or edit lead-section articles on history, geography, and science on{" "}
            <a href="https://incubator.wikimedia.org/wiki/Wp/hmr" target="_blank" rel="noreferrer" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>wikimedia incubator wp/hmr</span>
              <ExternalLink className="w-3.5 h-3.5 inline shrink-0" />
            </a>, review technical terminology, phonetics, and definitions on the{" "}
            <Link href="/projects/termbank" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar open lexicon</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>, or share public domain books and songbooks for high-resolution PDF scanning via the{" "}
            <Link href="/projects/literature-library" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar digital library</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-2">
          <h2 className="text-xl font-serif font-bold text-slate-900">
            You Can Always Reach Out to Us
          </h2>
          <p className="text-base text-slate-700">
            Because the active contributor count for each project is currently low, team members may be focused on a completely different priority, such as overhead book scanning or backend dataset pipelines.
          </p>
          <p className="text-base text-slate-700">
            While reaching out is not required to begin contributing, please feel free to send questions or suggestions to our team at <a href={`mailto:${siteConfig.contactEmail}`} className="font-bold text-slate-900 hover:text-blue-700 transition-colors">{siteConfig.contactEmail}</a> or <a href={`mailto:${siteConfig.secondaryEmail}`} className="font-bold text-slate-900 hover:text-blue-700 transition-colors">{siteConfig.secondaryEmail}</a> whenever you need guidance.
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
