import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Layers, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Projects Directory | ${siteConfig.fullName}`,
  description: "Official portfolio of digital preservation project briefs and open infrastructure stewarded by the Hmar Heritage Foundation.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 space-y-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* Pure Textual Editorial Header */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#9E1B24]" />
          <span>Projects & Initiatives</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Projects & Initiatives
        </h1>

        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6 text-base font-sans">
          <p>
            The Hmar Heritage Foundation stewards five specialized project briefs to lay the open digital infrastructure, data schemas, and technical groundwork for the Hmar language. The Foundation's statutory role is opening the door for community participation, public archiving, and open research rather than guaranteeing third-party commercial integration or predicting community output. For a deeper look into our stewardship principles, realistic timelines, and sustainable project sprint cadence, read our{" "}
            <Link href="/philosophy" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>foundational philosophy essay</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>.
          </p>

          <p>
            Our initial operational focus is the collection and digitization of text literature because written data is the simplest and cleanest form of information to collect, structure, and programmatically process into open datasets. However, we recognize that audio and video recordings best capture the natural rhythm, oral traditions, and living expression of our cultural history. Our work prioritizes public-domain books and physical literature while building the groundwork for multimodal audio and video corpora. You can read more about these archival initiatives under the{" "}
            <Link href="/projects/literature-library" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar digital library</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>{" "}
            and{" "}
            <Link href="/projects/raw-datasets" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar heritage archival project</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>, or you may visit our digital archive at huggingface :{" "}
            <a
              href="https://huggingface.co/hmar-lang-org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
            >
              <span>hmar-lang-org</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </a>.
          </p>

          <p>
            Another core initiative is creating standardized datasets for UI and UX software terminology, enabling technology interaction in Hmar. While we recognize this is an ambitious endeavor, not only because we do not influence the major institutions and corporations capable of integrating the language into their operating systems, but also because it requires meticulous terminology design so the language does not create culture shock for native speakers who have used these interfaces in English, Assamese, or Hindi for decades. It remains at the sole discretion of AOSP, the Linux Foundation, Meta, Google, Microsoft, and other technology entities to integrate these open datasets. This initiative is currently in planning, and you can read more about our approach under the{" "}
            <Link href="/projects/locale-standardization" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>open locale project</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>.
          </p>

          <p>
            While we hope the Hmar Heritage Foundation can inspire natives to write more content in Hmar, be it a simple social media post, an entry in a personal blog, or a news article, we have no way of ensuring this happens. The only way we can guarantee a digital footprint is through the{" "}
            <Link href="/projects/wikipedia-incubator" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar wikipedia incubator initiative</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>. This benefits the community in multiple ways and we hope it could become the cornerstone for an active digital Hmar community. It makes knowledge more accessible and relatable, gives students and learners a space to practice their writing and comprehension of the language, and at the same time creates valuable text datasets for machine learning models.
          </p>

          <p>
            When translating technical, scientific, and modern concepts, writers and translators often encounter missing words or phrases that are nearly impossible to translate directly. Expressing these ideas frequently requires using unusual words, adapting terminology, or rewriting entire sections. This highlights the vital need for the{" "}
            <Link href="/projects/termbank" className="font-bold text-slate-900 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
              <span>hmar open lexicon</span>
              <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
            </Link>. While we hope established institutions like the Hmar Literature Society will guide formal standards, language is ever-evolving and no single entity can permanently enforce vocabulary by decree. Standards can only ever serve as living recommendations. The Hmar Open Lexicon aims to be the open platform that provides standardization resources, term lookup databases, and a collaborative space where the community can build consensus on the evolution and use of words.
          </p>
        </div>
      </section>

      {/* Clean Bottom Resource Pointer */}
      <div className="pt-2 text-sm font-sans text-slate-700">
        <span>To see an index and list of the projects and related resources visit : </span>
        <Link
          href="/resources"
          className="font-bold text-slate-900 hover:text-blue-700 underline transition-colors inline-flex items-center gap-1"
        >
          <span>resources</span>
          <ArrowRight className="w-3.5 h-3.5 inline shrink-0" />
        </Link>
      </div>
    </div>
  );
}
