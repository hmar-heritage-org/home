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
          <span>Foundational Philosophy & Scope</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          On Realism, Unattributed Groundwork, and Generational Preservation
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
            Unattributed Groundwork & The Absence of Credit
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

        {/* Section 3: Setting Realistic Community Expectations */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#9E1B24]" />
            <span>Section III · Setting Community Expectations</span>
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

        {/* Section 4: Planting Trees for Future Generations */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section IV
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
