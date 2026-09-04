import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
  Unlock,
  Users,
  ShieldCheck,
  BookOpen,
  Heart,
  Clock,
  Compass,
  Cpu,
  Coins,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const summaryPrinciples = [
  {
    icon: Unlock,
    title: 'Radical Openness',
    description:
      'Everything we build is published open-access under free licenses. Zero paywalls, zero commercial locks.',
  },
  {
    icon: Users,
    title: 'Community Stewardship',
    description:
      'Built by the community, for the community. We synthesize data and build low-barrier tools for native speakers.',
  },
  {
    icon: Compass,
    title: 'Evolution Over Purity',
    description:
      'Languages survive by adapting to modern mediums. We prioritize digital utility over rigid academic purity.',
  },
  {
    icon: Heart,
    title: 'Real-World Grammar',
    description:
      'Linguistics is descriptive, not prescriptive. Natural, informal human speech builds resilient digital tools.',
  },
  {
    icon: Clock,
    title: 'Seasonal Sprints',
    description:
      'We work in focused project sprints to prevent volunteer burnout, ensuring long-term sustainability.',
  },
  {
    icon: Leaf,
    title: 'Generational Vision',
    description:
      'Quiet, invisible groundwork today ensures future generations find open tools waiting for them.',
  },
];

export default function Philosophy() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <PageHeader
        label="Foundational Philosophy"
        title="Planting Trees Whose Shade We May Never Sit Under"
        subtitle="On scope, realism, unattributed groundwork, and the generational nature of open language preservation."
      />

      {/* Top Executive Principles Grid */}
      <section className="container-page py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="section-label">Core Pillars</span>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mt-2">
            The Principles Behind Our Work
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            A quick overview of the ethics, technical standards, and community commitments that guide every foundation initiative.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {summaryPrinciples.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 text-[#064e3b]">
                <item.icon size={22} />
              </div>
              <h3 className="font-bold text-base text-stone-900 mb-2">
                {item.title}
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Quote Divider */}
      <section className="bg-emerald-950 text-emerald-50 py-12 border-y border-emerald-900">
        <div className="container-page max-w-3xl text-center space-y-4">
          <blockquote className="text-xl md:text-2xl font-serif italic text-emerald-100 leading-relaxed max-w-2xl mx-auto">
            "A society grows great when old men plant trees in whose shade they shall never sit."
          </blockquote>
          <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">— Ancient Proverb</p>
        </div>
      </section>

      {/* Full Textual Manifesto */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="border-b border-stone-200 pb-6 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-bold">
              Full Unabridged Essay
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2 font-serif">
              The Hmar Heritage Manifesto
            </h2>
          </div>

          {/* Section I */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION I
              </span>
              <h3 className="text-2xl font-bold text-stone-900">The Illusion of Instant Results</h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              When people hear about digitizing books, standardizing software locales, or creating AI datasets, it is natural to imagine a quick outcome: a smartphone update that magically turns every screen into Hmar overnight, or a major tech giant launching a full translation engine next month.
            </p>
            <p className="text-stone-900 text-base border-l-4 border-emerald-800 pl-4 py-1 bg-emerald-50/50 rounded-r-md">
              <span className="italic">We must be completely honest with ourselves and our community: </span>
              <span className="italic font-bold">this is not how open language infrastructure works.</span>
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Building digital tools for a regional language is not a 6-month product launch. It is a slow and steady process. We may digitize hundreds of physical manuscripts, compile thousands of terminology keys, and host open datasets for years before tech companies take notice. Recognizing this reality is not pessimism. It is the practical foundation for long-term work.
            </p>
          </article>

          {/* Section II */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION II
              </span>
              <h3 className="text-2xl font-bold text-stone-900">Unattributed Groundwork & The Absence of Credit</h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Building infrastructure is often invisible and thankless. When a developer five years from now uses our datasets on Hugging Face or imports our translation keys to add Hmar support to an app, they probably won't even know our names and definitely won't cite this foundation.
            </p>
            <p className="text-stone-900 text-base border-l-4 border-emerald-800 pl-4 py-2 bg-emerald-50/60 rounded-r-md">
              <span className="italic font-bold">That is not a failure. That is the point of open stewardship.</span>
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              If we do this work seeking personal credit or commercial payouts, we will quickly get discouraged. We create open schemas, digital archives, and glossaries so anyone can build upon them freely, without asking for permission.
            </p>
          </article>

          {/* Section III */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION III
              </span>
              <h3 className="text-2xl font-bold text-stone-900">Language Evolution & Cultural Survival</h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Languages do not get left behind simply because there were not enough native speakers or because nobody researched them. Languages fade when they fail to adapt and evolve into the dominant mediums of their era.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              In the past, evolution meant transitioning from oral traditions into written corpora. Today, evolution just means bridging the gap between static research papers and functional software tools — which, in simple words, means <strong>data</strong>.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              The reason Hebrew, Aramaic, and Ancient Greek are still spoken or studied today is because they were meticulously documented. English transformed continuously across centuries, from medieval dialects to modern digital slang. It became a global language specifically because it adapted to every new era. The language changed, but the culture survived. Adaptation does not destroy culture; it is how culture survives.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Expressing Hmar in Latin script was already an act of historical adaptation. Arguing for rigid purity contradicts its own roots. Language is a tool; it is not us. We are the history, the memory, and the living culture. A tool exists to serve its people, and when the era changes, the tool must adapt so the culture survives.
            </p>
          </article>

          {/* Section IV */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION IV
              </span>
              <h3 className="text-2xl font-bold text-stone-900">Global Standards for Latin Scripts</h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Diacritics are not just visual marks; they are technical dependencies. For a diacritic-heavy language to function digitally, it requires a complete, unbroken ecosystem: native OS support, system fonts that don't render blank boxes, and easily accessible virtual keyboards.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Major global languages with over ten centuries of traceable history, like French, German, and Spanish, do not use diacritics in their ISO software tags because plain ASCII is the universal software standard.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Forcing diacritics creates an asymmetric search problem. Under the hood, computers perform exact binary matches. If a database rigidly stores data with diacritics (like <em>"ṭang"</em>) and a user searches using a standard keyboard (<em>"tang"</em>), the computer sees a total mismatch and returns zero results. Omitting diacritics in software locale keys represents the path of least resistance for universal software compatibility.
            </p>
          </article>

          {/* Section V */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION V
              </span>
              <h3 className="text-2xl font-bold text-stone-900">Using "Incorrect" Grammar is OK</h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              One of the biggest reasons people hesitate to contribute to archives is the fear of making grammatical mistakes. Many native speakers hesitate to submit stories, record audio, or write text because they worry their grammar isn't "pure" or formal enough.
            </p>
            <p className="text-stone-900 text-base border-l-4 border-emerald-800 pl-4 py-2 bg-emerald-50/60 rounded-r-md">
              <span className="italic">We want to state that using non-standard or "incorrect" grammar is completely okay: </span>
              <span className="italic font-bold">linguistics is descriptive, not prescriptive.</span>
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Our mission is to capture how Hmar is actually spoken and written by real people today, not to enforce a rigid textbook ideal. Informal letters, oral folklore, youth slang, internet shorthand, and dialectal variations are precious records of a living culture. If AI translation models and speech recognition tools are trained exclusively on artificially flawless grammar, they become brittle. Natural human communication ensures our open datasets build resilient tools.
            </p>
          </article>

          {/* Section VI */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION VI
              </span>
              <h3 className="text-2xl font-bold text-stone-900">Bridging Academic Research and Community Realities</h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              To be clear about who we are: <strong>we do not conduct original academic research, we do not publish scholarly papers, and none of us are formal university linguists. We are also not training complex AI models ourselves.</strong>
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Our role is much simpler and practical: <strong>we synthesize information, generate structured open datasets, and build low-barrier platforms that enable non-technical community members to create data.</strong>
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Right now, a major bottleneck in language preservation is that academic research sits idle in isolated PDFs and obscure websites. Theoretical foundations exist, but without open, structured datasets, open-source communities cannot build functional tools. We exist to bridge that exact gap.
            </p>
          </article>

          {/* Section VII */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION VII
              </span>
              <h3 className="text-2xl font-bold text-stone-900">Setting Community Expectations</h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              To every writer, student, linguist, and elder who joins this initiative: we ask that you enter this work with clear eyes and deep patience.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Scanning a rare folk songbook to PDF today will not change the world tomorrow. Translating twenty smartphone popups this weekend will not force operating systems to update on Monday. But doing this quiet work ensures that our rare literature is never lost to physical decay, and that when future generations of Hmar engineers, scholars, and creators arrive, the open door and the foundational tools are already waiting for them.
            </p>
          </article>

          {/* Section VIII */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION VIII
              </span>
              <h3 className="text-2xl font-bold text-stone-900">Sustainable Pace & Burnout Prevention</h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              While it would technically be ideal for the foundation to run non-stop 365 days a year, it is completely unrealistic to expect volunteers not to get burnt out.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Instead of forcing artificial year-round daily output, we operate in focused, seasonal project sprints. When we have time, energy, and resources, we run active data sprints for book scanning, dictionary extraction, and dataset cleanups. When we need to recharge, we step back. This keeps our work sustainable for the long haul while keeping repositories accessible 365 days a year.
            </p>
          </article>

          {/* Section IX */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION IX
              </span>
              <h3 className="text-2xl font-bold text-stone-900">Funding & Financial Independence</h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              For any foundation to exist meaningfully, it must remain independent, transparent, and grounded in self-reliance. This initiative is bootstrapped using personal resources, volunteer time, and internal passion rather than corporate sponsorships or institutional payrolls.
            </p>
            <p className="text-stone-900 text-base border-l-4 border-emerald-800 pl-4 py-2 bg-emerald-50/60 rounded-r-md">
              <span className="italic">Our financial policy is simple and unyielding: </span>
              <span className="italic font-bold">we will never paywall, sell, or commercialize raw datasets or cultural scans.</span>
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Every grant, donation, or resource received goes directly into acquiring physical archival materials, maintaining infrastructure, and building open tools for future generations.
            </p>
          </article>

          {/* Section X */}
          <article className="space-y-4 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION X
              </span>
              <h3 className="text-2xl font-bold text-stone-900">Planting Trees Whose Shade We May Never Sit Under</h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Cultural preservation follows a timeless principle. If we do nothing because we cannot guarantee commercial results or personal recognition, our language risks gradual digital domain loss.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              The Hmar Heritage Foundation exists to open the door, lay down the permanent groundwork, and safeguard our primary archives. Whether commercial tech giants adopt these resources next year or twenty years from now, the foundation will remain open, free, and unencumbered for all.
            </p>
          </article>

          {/* Bottom CTA */}
          <div className="bg-stone-900 text-white rounded-2xl p-8 text-center space-y-4 mt-12">
            <h3 className="text-2xl font-bold">Share Our Vision?</h3>
            <p className="text-stone-300 max-w-lg mx-auto text-sm leading-relaxed">
              Join us as a volunteer, contributor, or partner. Every hand helps preserve our language for generations to come.
            </p>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 bg-[#064e3b] text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-900 transition-colors"
            >
              Get Involved <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
