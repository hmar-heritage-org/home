import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowRight, Quote } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16 text-slate-800">
      {/* 1. Compact Full-Width Cultural Hero Banner */}
      <section className="relative w-full bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-35">
          <Image
            src="/images/hmar_cultural_hero.jpg"
            alt="Hmar Cultural Textile Heritage"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-20 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight tracking-tight max-w-3xl">
            Building for Builders. Preserving for Tomorrow.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
            Providing open software translation keys, AI datasets, and raw PDF archives so developers, researchers, and community stewards can build freely.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <Link
              href="/join"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-md bg-[#9E1B24] text-white font-bold hover:bg-[#781219] transition-colors shadow-md"
            >
              <span>Support the Foundation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Container Part 1: Founder Statement */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="space-y-6 border-b border-slate-200 pb-12">
          <div className="text-xs font-mono tracking-widest text-[#9E1B24] uppercase font-bold flex items-center gap-2">
            <Quote className="w-4 h-4 text-[#9E1B24]" />
            <span>Founder Statement</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
            What This Foundation Is About
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-5 text-base font-sans">
            <p>
              I started this project of collecting books and creating datasets, working on it on and off since 2024 because I realized the Hmar community has almost zero digital footprint. Anything that exists is fragmented uploads by the occasional academic that you can only find buried in the Internet Archive or Wayback Machine, and most remaining material exists as raw deposits in separate repositories. Building this open foundation lets us connect these scattered resources into a structured community owned dataset, while opening doors to partner with international institutions to access essential resources.
            </p>

            <p>
              Language is not just a tool for communication, it is also how we preserve our history, traditions, and culture. As we transitioned to preserving our cultural knowledge with books, the world moved on to the digital realm and transformed how information is distributed. The sudden rise of artificial intelligence over the past five years has once again transformed how we consume information and interact with screens. But this initiative is not just about AI and technology. It is about active participation so we do not get left behind and are ready to change on our own terms, rather than surrendering control to governments and corporations who control these systems.
            </p>

            <p>
              This foundation is not about grand claims or controlling external platforms, but about self-determination: providing open tools, primary PDF archives, and software datasets so our community can write its own history and shape its digital presence. What began as a solo effort is now an open door for anyone who wants to help.
            </p>
          </div>
        </section>
      </div>

      {/* 2.5 ULTRA-COMPACT CULTURAL BANNER: Foundational Philosophy Feature */}
      <section className="relative w-full bg-slate-950 text-white border-y border-slate-800 py-6 sm:py-8 overflow-hidden">
        {/* Reused Cultural Hero Image Background */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hmar_cultural_hero.jpg"
            alt="Hmar Cultural Textile Heritage"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/80 z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <blockquote className="italic border-l-2 border-[#9E1B24] pl-4 text-slate-200 font-serif text-sm sm:text-base leading-snug">
              "A society grows great when old men plant trees in whose shade they shall never sit."
              <span className="block text-[11px] font-mono not-italic text-slate-400 mt-1 font-normal">— Ancient Proverb</span>
            </blockquote>

            <Link
              href="/philosophy"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#9E1B24] text-white font-bold text-xs hover:bg-[#781219] transition-all shadow-md font-sans border border-red-800/50 shrink-0"
            >
              <span>read philosophy essay</span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>
      </section>

      {/* Container Part 2: Rest of Page */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 3. SUPPORTING JUSTIFICATION: Corporate Budgets & Economic Reality */}
        <section className="space-y-5 border-b border-slate-200 pb-12">
          <div className="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">
            Economic Justification · Where Corporate Budgets Do Not Reach
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
            Building Open Language Infrastructure
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base font-sans">
            <p>
              Major technology corporations allocate commercial translation budgets primarily to dominant global languages. Because tech giants operate strictly on commercial Return on Investment, dedicated corporate localization budgets for regional minority languages like Hmar will never come. If we wait for commercial agencies, our language risks digital domain loss, where speakers use Hmar at home, but are forced to switch to dominant languages for smartphones, software, and AI models.
            </p>

            <p>
              Attempting this through an open foundation and volunteer community is indeed a hopeful, monumental undertaking. But history has shown through projects like Wikipedia, Linux, and Mozilla Common Voice that when an open community lays down the open data schemas, primary archives, and translation keys, it opens the door to achievements that corporate budgets refused to fund.
            </p>

            <p>
              By organizing as an open foundation, we lay down open contributor tools, software translation keys, and Hugging Face dataset mirrors so open-source maintainers, researchers, and developers can integrate Hmar for free on their own terms.
            </p>
          </div>
        </section>

        {/* 4. Three Pragmatic Action Pillars (Horizontal Row Cards) */}
        <section className="space-y-6 border-b border-slate-200 pb-12">
          <div className="text-xs font-mono tracking-widest text-slate-500 uppercase font-bold">
            Our Three Open Action Pillars
          </div>

          <div className="space-y-4">
            {/* Pillar 1 */}
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-slate-300 transition-colors">
              <div className="space-y-1 max-w-xl">
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Low-Friction Raw Archival
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Prioritizing raw PDF scans of original literature and songbooks to create immediate digital backups without volunteer burnout or manual retyping.
                </p>
              </div>
              <Link href="/projects/literature-library" className="text-xs font-bold text-[#9E1B24] hover:underline font-mono inline-flex items-center gap-1 shrink-0">
                <span>explore library brief →</span>
              </Link>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-slate-300 transition-colors">
              <div className="space-y-1 max-w-xl">
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Targeted UI/UX Locales
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Creating standardized Hmar translation keys focused on critical system notices, security alerts, and confirmation modals, preventing UI culture shock.
                </p>
              </div>
              <Link href="/projects/locale-standardization" className="text-xs font-bold text-[#9E1B24] hover:underline font-mono inline-flex items-center gap-1 shrink-0">
                <span>explore locale brief →</span>
              </Link>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#FAF9F6] p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-slate-300 transition-colors">
              <div className="space-y-1 max-w-xl">
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Open AI Datasets
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Providing open-access dictionary term banks and bulk raw datasets on Hugging Face so Hmar is represented in modern computational language models.
                </p>
              </div>
              <Link href="/projects/raw-datasets" className="text-xs font-bold text-[#9E1B24] hover:underline font-mono inline-flex items-center gap-1 shrink-0">
                <span>explore datasets hub →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Proactive Stewardship Section */}
        <section className="space-y-5 border-b border-slate-200 pb-12">
          <div className="text-xs font-mono tracking-widest text-[#9E1B24] uppercase font-bold">
            Proactive Stewardship · Beyond Static Repositories
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 leading-tight">
            Connecting Research & Community to Action
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-base font-sans">
            <p>
              Traditional academic archiving preserves field recordings and manuscript deposits, which is essential for long-term preservation. However, that data often sits isolated inside institutional vaults because raw field deposits require significant restructuring. For a regional language without corporate funding, unstructured deposits risk remaining unused in the practical ways that researchers envision. This creates a reactive cycle where digital language presence deteriorates, making archival preservation even more urgent without ever empowering active daily use.
            </p>

            <p>
              To break away from this cycle, our open foundation bridges the gap directly. By connecting researchers, native speakers, and developers, we transform raw academic research and community contributions into active open tools: powering open AI datasets, software locale keys, and encyclopedia articles so our language thrives in modern digital spaces.
            </p>
          </div>
        </section>

        {/* 5. Community Rationale */}
        <section className="bg-[#F6F4F0] p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-4">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Community Rationale · Ei Hnam Ta Dinga A Ṭulna
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Why This Matters to Every Hmar Speaker
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            By scanning classic literature to PDF and creating open software translation tools today, we ensure our rare books are never lost to physical decay, our elders can comfortably understand critical phone alerts in their mother tongue, and open-source developers worldwide have the resources to support Hmar.
          </p>
        </section>

        {/* 6. Call to Action */}
        <section className="text-center space-y-5 pt-2">
          <h2 className="text-3xl font-serif font-bold text-slate-900">
            Help Build the Foundation
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Whether you are a writer, student, developer, or community elder, join us in building the open tools for Hmar digital preservation.
          </p>
          <div>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#9E1B24] text-white font-bold text-sm hover:bg-[#781219] transition-colors shadow-md"
            >
              <span>Become a Contributor</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-6 max-w-4xl mx-auto border-t border-slate-200 mt-6 text-center">
            <blockquote className="text-xs sm:text-base md:text-xl font-serif italic font-bold text-slate-900 tracking-tight sm:whitespace-nowrap">
              <span>"Unless someone like you cares a whole awful lot, nothing is going to get better. It's not."</span>
              <span className="not-italic ml-2 font-serif font-bold text-slate-900">- Lorax</span>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  );
}
