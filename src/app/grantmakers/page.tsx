import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: `Briefing for Grant Officers & Program Evaluators | ${siteConfig.fullName}`,
  description: "Official institutional briefing for grant program officers, evaluators, and academic funding boards regarding HHF scope, language documentation, and clan diversity.",
};

export default function GrantmakersPage() {
  return (
    <div className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* Header Section */}
      <section className="space-y-6 border-b border-slate-200 pb-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#9E1B24]" />
            <span>Institutional &amp; Evaluator Briefing</span>
          </div>
          <div className="text-xs font-mono text-slate-700 font-bold bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full">
            Grant-Readiness Briefing
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Briefing for Grant Officers &amp; Program Evaluators
        </h1>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-medium max-w-3xl">
          An executive overview designed specifically for foundation program directors, grant review committees, archival boards, and academic evaluators clarifying our language documentation scope.
        </p>
      </section>

      {/* Main Briefing Body */}
      <div className="space-y-12 text-slate-800 leading-relaxed text-base font-sans">
        
        {/* Section I: Purpose of Grant Proposals & Scope Clarification */}
        <section className="space-y-5 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section I · Purpose of Grant Proposals &amp; Scope Clarification
          </div>
          
          <h2 className="text-2xl font-serif font-bold text-slate-900 leading-tight">
            Language Documentation &amp; Group vs. Lingua Franca Distinctions
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base font-sans leading-relaxed">
            <p>
              Our grant proposals are primarily focused on <strong>language documentation, digital archival preservation, and open text corpora development</strong>.
            </p>

            <p>
              However, because global databases and institutional registries often convey the impression that Hmar is not an endangered language, there can easily be ambiguity between what we mean by &quot;Hmar&quot; and how institutional bodies classify Hmar.
            </p>

            <p>
              We are of the opinion that Hmar as a language is endangered (even if not critically), and that official census data is inaccurate and likely bloats the actual number of active speakers. However, institutional boards and academic committees may not agree with linguistic approximations made by non-qualified volunteers like ourselves, so we will not dwell on that debate here.
            </p>

            <p>
              Nevertheless, essential clarification must still be made regarding the structural distinction between <strong>Hmar as an overarching Group</strong> and <strong>Hmar as a Lingua Franca</strong> (ISO 639-3: <code className="text-xs bg-slate-200 px-1 py-0.5 rounded font-mono">hmr</code>).
            </p>

            <p>
              There are 14 foundational ancestral clans within the Hmar group that possess their own distinct speech varieties, oral traditions, and customary habits, which are as linguistically distinct from standard Hmar as Faihriem (Saihriem) is to Hmar.
            </p>
          </div>
        </section>

        {/* Section II: Dialectal Uncertainty & Endangerment: Zote & Leiri */}
        <section className="space-y-5 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section II · Dialectal Uncertainty &amp; Endangerment
          </div>
          
          <h2 className="text-2xl font-serif font-bold text-slate-900 leading-tight">
            Field Investigation Priorities: Leiri &amp; Zote
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base font-sans leading-relaxed">
            <p>
              Chief among these obscure ancestral clan varieties are <strong>Leiri</strong> and <strong>Zote</strong>.
            </p>

            <p>
              Regarding <strong>Leiri</strong>, it might simply be a dialectal variation of standard Hmar, but the community maintains its own distinct customary traditions and oral heritage. We do not know definitively without formal linguistic field study. What we do know is that it is spoken primarily in Leiri Village, which comprises only a small cluster of households, making documentation urgent regardless of its exact taxonomic classification.
            </p>

            <p>
              <strong>Zote</strong>, however, is far more obscure and might even be extinct. (To prevent registry confusion, Zote is a distinct Hmar clan variety and is not to be confused with <strong>Zo</strong>, often spelled <em>Zou</em> or <em>Zomi</em>, which represents a separate recognized tribe in Manipur under ISO 639-3: <code className="text-xs bg-slate-200 px-1 py-0.5 rounded font-mono">zom</code>). There is virtually no trace of Zote in living digital usage or modern language databases, persisting only in century-old ethnographic surveys. Immediate field investigation is necessary to ascertain whether active speakers still exist or if the variety has been entirely subsumed.
            </p>

            <p>
              Crucially, neither of these varieties possesses a native script of their own, so they inherit the Latin orthography adapted for standard Hmar. According to our current knowledge, there is zero written corpora or digital text footprint in existence for either variety.
            </p>
          </div>
        </section>

        {/* Section III: Purpose of Assistance: Practical Documentation, Not Academic Research */}
        <section className="space-y-5 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section III · Scope of Grant Assistance
          </div>
          
          <h2 className="text-2xl font-serif font-bold text-slate-900 leading-tight">
            Practical Documentation, Not Academic Research
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base font-sans leading-relaxed">
            <p>
              We must also be completely transparent about what we are and are not requesting: <strong>we are not asking for financial assistance to conduct academic research</strong>, as we are not affiliated with any formal educational or academic institution.
            </p>

            <p>
              Our goal within the context of grant applications is strictly <strong>practical language documentation, archival scanning, and open text corpora development</strong>:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700">
              <li>Digitizing rare out-of-print books, historical church manuscripts, and oral traditional songbooks.</li>
              <li>Collecting clean, native-speaker text and speech recordings for open software locales and computational tools.</li>
              <li>Building open-access dictionary term banks for everyday community speakers, students, and software developers.</li>
            </ul>

            <p>
              We leave formal syntactic and phonological research to university linguists. Our focus is providing the open digital infrastructure so our language survives and thrives in the modern digital era.
            </p>
          </div>
        </section>

        {/* Section IV: Direct Financial Proposal & Capital Equipment Request */}
        <section className="space-y-5">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section IV · Direct Financial Proposal
          </div>
          
          <h2 className="text-2xl font-serif font-bold text-slate-900 leading-tight">
            Equipment Acquisition &amp; Honest Funding Structure
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base font-sans leading-relaxed">
            <p>
              To be completely direct about our financial proposal: <strong>we are seeking financial assistance to purchase archival equipment</strong> to support the long-term documentation of Hmar and its clan speech varieties.
            </p>

            <p>
              We can provide an exact itemized budget and equipment bill as downloadable attachments upon request. But our overarching goal is simple: we intend to establish the Hmar Heritage Foundation as a permanent, reliable source of open data for Hmar and its languages.
            </p>

            <p>
              We do not present a manufactured, one-off project here. Our mission as a foundation is broad, and creating an artificial project simply to fit the format of a grant application when our operational priorities lie elsewhere is not honest.
            </p>

            <p>
              We are entirely open to negotiating mutually agreed deliverables with granting bodies, and we will do our best to prioritize those targets. But even as a small team of three, we refuse to paint a false picture or compromise on our operational transparency.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
