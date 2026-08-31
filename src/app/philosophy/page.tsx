import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Compass, ArrowRight, ShieldAlert } from "lucide-react";

export const metadata = {
  title: `Foundational Philosophy | ${siteConfig.fullName}`,
  description: "On scope, realism, unattributed groundwork, and the generational nature of open language stewardship.",
};

export default function PhilosophyPage() {
  return (
    <div className="py-12 space-y-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Left-Aligned Editorial Header */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#9E1B24]" />
          <span>Foundational Philosophy</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Foundational Philosophy
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans">
          An honest reflection on the true nature of open digital stewardship: why we lay down infrastructure without expecting immediate commercial results, guaranteed corporate adoption, or personal credit.
        </p>
      </section>

      {/* 2. Pure Typographic Essay Body */}
      <div className="space-y-12 text-slate-800 leading-relaxed text-base font-sans">
        
        {/* Section 1: The Illusion of Instant Results */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section I
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            The Illusion of Instant Results
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              When people hear about digitizing books, standardizing software locales, or creating AI datasets, it is natural to imagine a quick outcome: a smartphone update that magically turns every screen into Hmar overnight, or a major tech giant launching a full translation engine next month.
            </p>
            <p>
              We must be completely honest with ourselves and our community: <strong>this is not how open language infrastructure works.</strong>
            </p>
            <p>
              Building digital tools for a regional minority language is not a 6-month product launch. It is a slow, methodical, and continuous endeavor. We may digitize hundreds of physical manuscripts, compile thousands of terminology keys, and host open datasets for years without seeing immediate visible adoption by commercial entities. Recognizing this reality is not pessimism; it is the vital foundation of institutional maturity.
            </p>
          </div>
        </section>

        {/* Section 2: The Duty of Unattributed Groundwork */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section II
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Unattributed Groundwork &amp; The Absence of Credit
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              True digital infrastructure is quiet, invisible, and often thankless. When a developer five years from now uses our open Hugging Face dataset to train a translation model, or when an open-source project imports our locale JSON keys to add Hmar support to a web application, they may never know our names or cite this foundation.
            </p>
            <p>
              <strong>That is not a failure. That is the exact purpose of open stewardship.</strong>
            </p>
            <p>
              If we undertake this work seeking personal credit, commercial payouts, or institutional recognition, we will inevitably become discouraged. We lay down open data schemas, primary PDF archives, and standardized glossaries so that anyone can build upon them freely, without asking for permission or owing us attribution.
            </p>
          </div>
        </section>

        {/* Section III: Language Evolution & Modern Mediums */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section III · Language Evolution
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Language Evolution &amp; Cultural Survival
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              Languages do not get left behind simply because there were not enough native speakers or because nobody researched them. Languages fade when they fail to adapt and evolve into the dominant mediums of their era.
            </p>
            <p>
              In past generations, evolution meant transitioning from oral traditions into written corpora. In the modern digital age, evolution means bridging the gap between static research papers and functional software tools, which, in simple words, means <strong>data</strong>.
            </p>
            <p>
              The reason Hebrew, Aramaic, and Ancient Greek are still spoken or studied today is because they were meticulously documented. Languages evolve regardless of how a community feels about linguistic purity. English has transformed continuously across centuries, from the history of Oxford University to modern internet culture absorbing Gen Z slang and AAVE, and it became the dominant global language specifically because it adapted to every new era. The language changed, but the culture survived. No Englishman denies the history of their heritage simply because they cannot fluently read 10th-century Old English. Adaptation is not the destruction of culture, it is the only mechanism that allows culture to survive.
            </p>
            <p>
              Debates over diacritics and orthographic purity come from a deep, genuine love for our language. But we must acknowledge historical reality: expressing Hmar in Latin script was already an act of adaptation. Arguing for rigid purity contradicts its own roots. The only purity to argue for is adaptation. The shoe is not the foot, it can never be the foot.
            </p>
            <p>
              The argument that diacritics are strictly necessary to identify how words sound is fundamentally flawed. English does not lack diacritics because it doesn&apos;t technically need them, but because we&apos;ve come to agree on how a word should sound based on the context. For instance: <em>&quot;I live in the city&quot;</em> versus <em>&quot;The event is broadcast live.&quot;</em> Why don&apos;t we need diacritics here? Because context naturally carries the sound. If a reader cannot identify how a word is pronounced from its surrounding sentence, it simply indicates a lack of familiarity with the living language.
            </p>
            <p>
              Grammar books exist to describe the grammar rules of a language, not to dictate the grammar rules of a language. Just because a textbook uses diacritics to express a sound or pronunciation, it does not become a rule.
            </p>
            <p>
              Language is a tool; it is not us. We are the history, the memory, and the living culture. A tool exists to serve its people, and when the era changes, the tool must adapt so the culture survives.
            </p>
          </div>
        </section>

        {/* Section IV: Bridging Academic Research and Community Realities */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section IV · The Practical Bridge
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Bridging Academic Research and Community Realities
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              We want to be completely transparent about who we are: <strong>we do not conduct original academic research, we do not publish scholarly papers, and none of us are formal university linguists. We are also not training complex AI models ourselves.</strong>
            </p>
            <p>
              Our role is much simpler and far more practical: <strong>we synthesize information, generate structured open datasets, and build low-barrier platforms that enable non-technical community members to create data.</strong>
            </p>
            <p>
              Right now, a major bottleneck in language preservation is that academic research sits idle. Brilliant papers written by university scholars and native linguists exist in isolated PDFs, university repositories, and obscure websites. But beyond corporate motives, there is no practical medium for that research to be used. The theoretical foundation to build voice synthesis, dictionaries, or translation tools exists, but because there are no open, structured datasets, there is no probability for the open-source community to take notice, and as we&apos;ve all come to realize, modern technology and the internet at large rest on the shoulders of this open-source community.
            </p>
            <p>
              Furthermore, academic papers alone cannot build working language tools, much like you can&apos;t cook a meal with just a recipe book. It is straightforward to generate audio programmatically even without artificial intelligence, but without an open, standardized map of how written words actually sound out loud, making a computer pronounce a language correctly is essentially trying to paint in the dark. To build functional software, voice assistants, or translation tools, you need the actual ingredients: standardized phonetic sound maps, real-world language usage data, authentic speech audio, raw document scans, and clean transcriptions. Collecting and packaging these real-world ingredients at scale is something even well-funded academic institutions struggle to do alone without open, community-driven platforms. We exist to bridge that exact gap.
            </p>
            <p>
              While the core task itself is simple, <em>create datasets</em>, it still requires thoughtful engineering to structure data so it is clean, usable, and standardized. It does not require a PhD in computer science, but it does require a basic understanding of modern data structures and experience in data manipulation. If you are a developer, data wrangler, or hobbyist with free time and want to help, do not hesitate to reach out and join us.
            </p>
          </div>
        </section>

        {/* Section V: Setting Realistic Community Expectations */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#9E1B24]" />
            <span>Section V · Setting Community Expectations</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            A Note to Volunteers, Contributors, and Elders
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              To every writer, student, linguist, and elder who joins this initiative: we ask that you enter this work with clear eyes and deep patience.
            </p>
            <p>
              Scanning a rare folk songbook to PDF today will not change the world tomorrow. Translating twenty smartphone confirmation popups this weekend will not force operating systems to update on Monday. But doing this quiet work ensures that our rare literature is never lost to physical decay, and that when future generations of Hmar engineers, scholars, and creators arrive, the open door and the foundational tools are already waiting for them.
            </p>
          </div>
        </section>

        {/* Section VI: Operational Cadence & Burnout Prevention */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VI · Sustainable Pace
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Preventing Burnout &amp; Working in Focused Sprints
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              While it would technically be ideal for the foundation to run non-stop 365 days a year, it is completely unrealistic to expect volunteers, contributors, or anybody, really, not to get burnt out.
            </p>
            <p>
              Instead of forcing artificial year-round daily output, we operate in focused, seasonal project sprints. When we have the time, energy, and resources, we run active data sprints for physical book scanning, dictionary extraction, and dataset cleanups. When we need to recharge, plan, or focus on our personal lives, we step back.
            </p>
            <p>
              This approach prevents burnout and keeps our work sustainable for the long haul, while keeping our open repositories, GitHub, and contribution portals accessible to everyone 365 days a year.
            </p>
          </div>
        </section>

        {/* Section VII: Financial Transparency, Grants, and Independence */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VII · Funding &amp; Independence
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Financial Transparency, Grants, and Self-Reliance
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              For any foundation to exist meaningfully, it must remain independent, transparent, and grounded in self-reliance. This initiative is bootstrapped using personal resources, volunteer time, and internal passion rather than corporate sponsorships or institutional payrolls.
            </p>
            <p>
              This financial independence ensures that our priorities are dictated solely by cultural stewardship and community need, free from commercial motives or external agendas.
            </p>
            <p>
              As our work scales, acquiring out-of-print books, purchasing high-resolution scanning hardware, hosting large audio archives, and funding field collection, we will seek non-encumbering academic research grants, cultural preservation grants, and community support.
            </p>
            <p>
              Our financial policy is simple and unyielding: <strong>we will never paywall, sell, or commercialize raw datasets or cultural scans.</strong> Every grant, donation, or resource received goes directly into acquiring physical archival materials, maintaining infrastructure, and building open tools for future generations.
            </p>
          </div>
        </section>

        {/* Section VIII: Planting Trees for Future Generations */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VIII
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Planting Trees Whose Shade We May Never Sit Under
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <blockquote className="italic border-l-2 border-[#9E1B24] pl-4 my-2 text-slate-800 font-serif">
              "A society grows great when old men plant trees in whose shade they shall never sit."
              <span className="block text-xs font-mono not-italic text-slate-500 mt-1 font-normal">Ancient Proverb</span>
            </blockquote>
            <p>
              Cultural preservation follows this same timeless principle. If we do nothing because we cannot guarantee commercial results or personal recognition, our language risks gradual digital domain loss.
            </p>
            <p>
              The Hmar Heritage Foundation exists to open the door, lay down the permanent groundwork, and safeguard our primary archives. Whether commercial tech giants adopt these resources next year or twenty years from now, the foundation will remain open, free, and unencumbered for all.
            </p>
          </div>
        </section>

        {/* Navigation Pointers */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-semibold border-t border-slate-200">
          <Link
            href="/manifesto"
            className="hover:text-slate-900 transition-colors inline-flex items-center gap-1"
          >
            <span>read charter & constitution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-slate-900 text-white font-bold hover:bg-[#9E1B24] transition-colors"
          >
            <span>join as a contributor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
