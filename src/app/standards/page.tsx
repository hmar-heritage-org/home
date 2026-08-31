import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Compass, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata = {
  title: `Language Standards & Classifications | ${siteConfig.fullName}`,
  description: "Official stance of the Hmar Heritage Foundation on language classification, colonial exonyms, the Zo autonym, and international registry standards.",
};

export default function StandardsPage() {
  return (
    <div className="py-12 space-y-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Left-Aligned Editorial Header */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#9E1B24]" />
          <span>Policy &amp; Standards</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Language Standards &amp; Classification Policy
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans font-medium">
          The Hmar Heritage Foundation formally rejects legacy colonial classifications, including Kuki-Chin-Naga, Kuki-Chin, and their administrative variants, advocating for the Zo autonym classification, modern comparative phonology, and updated international registry standards.
        </p>
      </section>

      {/* 2. Typographic Essay Body */}
      <div className="space-y-12 text-slate-800 leading-relaxed text-base font-sans">
        
        {/* Section I: The Foundation's Position & Autonym Candidate */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section I · The Foundation&apos;s Position
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Rejection of Colonial Labels and the Zo Autonym Candidate
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              The Hmar Heritage Foundation formally rejects legacy colonial umbrella terms—including &quot;Kuki-Chin-Naga&quot;, &quot;Kuki-Chin&quot;, and their administrative variants—as outdated exonyms that distort genetic language relationships.
            </p>
            <p>
              In place of these colonial labels, the Foundation advocates for adopting <strong>Zo</strong> (Zo languages) as the primary autonymic classification. This reflects the shared endonym and self-identity of the closely related speech varieties across the region, including Hmar, Mizo, Paite, Thadou, Vaiphei, Tedim, Mara, and related dialects.
            </p>
            <p>
              To maintain full digital compatibility, the Foundation advocates preserving existing individual ISO 639-3 language codes (such as <code>hmr</code>, <code>lus</code>, <code>pck</code>, <code>ted</code>) while updating the overarching family classification from legacy exonyms (KCN / KC) to <strong>Zo</strong> across all software metadata, dataset tags, and international registries.
            </p>
            <p>
              Furthermore, we advocate for the complete separation of Meitei and Naga languages out of the Zo classification into their distinct, accurate genetic branches.
            </p>
          </div>
        </section>

        {/* Section II: Grierson’s Contradiction & Historical Method */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section II · Historical Method
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Grierson&apos;s Stated Criteria vs. His Own Contradiction
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              The historical flaw began in the <em>Linguistic Survey of India</em> (LSI Vol. III, Part III), where G.A. Grierson defined &quot;Kuki&quot; and &quot;Chin&quot; as external exonyms used by outsiders specifically for hill tribes expelled from the Lushai and Chin hills.
            </p>
            <p>
              However, Grierson broke his own stated criteria by placing Meitei (Manipuri), a historically valley-dwelling population, under the same umbrella. He did this despite explicitly acknowledging that Meitei possesses structural and lexical ties closer to Classical Tibetan and Burmese than to the surrounding hill languages.
            </p>
            <p>
              There was never any genealogical basis for lumping Meitei, Naga, Karbi, and Zo languages together under a single &quot;Kuki-Chin-Naga&quot; node. If a classification system claims to be genealogical, placing such distinct linguistic families under one compound umbrella violates the foundational principles of comparative sound laws.
            </p>
          </div>
        </section>

        {/* Section III: Replacing the Parent Exonym Node */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section III · Cladistic Restructuring
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Replacing the Parent Exonym Node with Zo
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              To replace colonial administrative shortcuts with scientific integrity, the Foundation advocates for replacing the top-level exonym node (Kuki-Chin-Naga / Kuki-Chin) with the authentic autonym <strong>Zo</strong> (55 speech varieties).
            </p>
            <p>
              For immediate structural clarity, we illustrate how the <strong>Zo</strong> autonym maps onto existing subgroupings below. While sub-descriptors like &quot;Central&quot;, &quot;Northwestern&quot;, or &quot;Peripheral&quot; remain largely geographical, retaining them in this illustrative diagram ensures the tree remains immediately recognizable to researchers while demonstrating how the <strong>Zo</strong> autonym seamlessly replaces the colonial parent node.
            </p>

            {/* Tree Comparison Block */}
            <div className="my-6 p-5 rounded-lg border border-slate-200 bg-slate-50/70 font-mono text-xs text-slate-800 space-y-3">
              <div className="font-bold text-[#9E1B24] uppercase tracking-wider">Proposed Node Replacement (Parent Node Renaming):</div>
              <pre className="overflow-x-auto leading-relaxed text-slate-700">
{`Sino-Tibetan (sino1245)
├── Meitei / Naga / Karbi Branches (Independent / External Nodes)
└── Zo Languages (zo1245 - 55 Speech Varieties)
     ├── Central Zo (17)       [Hmaric, Mizoic, Maraic, Lai]
     ├── Northwestern Zo (16)  [Old Kuki, Analic, etc.]
     └── Peripheral Zo (22)    [Khomic, Northeastern, etc.]`}
              </pre>
            </div>
          </div>
        </section>

        {/* Section IV: Restoring Dignity & Respecting Indigenous Self-Determination */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section IV · Indigenous Autonomy
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Restoring Dignity and Respecting Indigenous Self-Determination
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              Crucially, advocating for the eviction of Naga, Karbi, and Meitei languages out of the Zo umbrella is an intentional act of restoring cultural dignity and linguistic autonomy.
            </p>
            <p>
              Lumping these ancient, distinct groups under a colonial exonym was just as disrespectful to Naga, Karbi, and Meitei heritage as it was to Zo communities. However, the Foundation maintains clear institutional boundaries: while we strongly support evicting these groups from the colonial umbrella, where Naga, Karbi, or Meitei languages are ultimately classified within Sino-Tibetan is purely up to those respective communities, their scholars, and field linguists.
            </p>
            <p>
              We do not presume to dictate the internal node structures of neighboring indigenous groups. Our objective is simply to remove colonial clutter so every community across the region has the freedom to define its own linguistic heritage.
            </p>
          </div>
        </section>

        {/* Section V: Field Research vs. Legacy Labels */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section V · Field Research
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            The Disconnect Between Field Research and Legacy Labels
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              There is a persistent claim by institutional registries that legacy classifications are maintained to reflect &quot;academic consensus.&quot; In reality, the primary comparative linguists actively conducting field research explicitly reject these colonial labels.
            </p>
            <p>
              Renowned Tibeto-Burman scholars—most notably Kenneth Van Bik, Robbins Burling, Mark Post, Scott DeLancey, and many other field linguists—have explicitly demonstrated the flaws in compound exonym labels like &quot;Kuki-Chin-Naga&quot; and abandoned them in modern comparative literature.
            </p>
            <p>
              Citing &quot;academic consensus&quot; to justify 100-year-old administrative shortcuts while ignoring the explicit findings of modern field researchers misrepresents the state of contemporary linguistics.
            </p>
          </div>
        </section>

        {/* Section VI: Registry Contradictions & The Indexing Trap */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VI · Registry Infrastructure
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Methodological Contradictions and the Indexing Trap
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              This institutional resistance to change relies on two structural flaws: a fundamental methodological contradiction and a circular indexing trap.
            </p>
            <p>
              First, Glottolog explicitly claims that its tree nodes are strictly genealogical, based on shared phonological innovations. Yet it continues to perpetuate top-level labels dating back to Grierson and Shafer—despite Grierson and Shafer themselves explicitly stating that terms like &quot;Kuki-Chin-Naga&quot; were merely geographical conveniences. Naming genealogical nodes with geographical labels is an unresolved methodological contradiction.
            </p>
            <p>
              Second, registries create a self-reinforcing loop. Researchers are forced to include legacy exonyms in paper abstracts simply so their work remains discoverable within registry databases. Registries then cite those abstract keywords as proof that academics &quot;prefer&quot; the old terms, ignoring the fact that the papers themselves explicitly reject them.
            </p>
            <p>
              Ultimately, maintaining this obsolete structure is nothing more than a sign of institutional neglect. Anyone who has actually studied these languages in the field recognizes these flaws immediately. That international registries have allowed a 100-year-old administrative shortcut to linger uncorrected demonstrates decades of neglect toward the region&apos;s linguistic heritage.
            </p>
            <p>
              As foundational infrastructure, it is the duty of institutions like ISO 639-3, Glottolog, and SIL Ethnologue to correct structural errors rather than hide behind circular database mechanics. If field researchers were forced to bypass institutional registries to establish accurate standards, the registries themselves would become obsolete.
            </p>
          </div>
        </section>

        {/* Section VII: Governance & Policy Impacts */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VII · Governance &amp; Policy Impacts
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            The Cost of Misclassification and the Denial of Institutional Responsibility
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              Inaccurate language classification is not a sterile technical exercise; it has real-world consequences for governance, education, and cultural identity.
            </p>
            <p>
              For decades, official government registries and census frameworks have lumped distinct speech communities together under broad colonial exonyms such as &quot;Kuki&quot;, a label that Grierson himself acknowledged was an external exonym. While partial administrative updates have been made over time, the overarching official label still lingers in state policy.
            </p>
            <p>
              This administrative lumping severely distorts history. For communities that transitioned from oral traditions into written literacy only within the last century, official state lumping corrupts how history is documented and passed down. When young generations read government documents that force a foreign administrative label onto their heritage, it rewrites their ancestral origin stories by bureaucratic fiat.
            </p>
            <p>
              Furthermore, modern digital governance depends on precise language tags. When state educational boards, central institutions, and international registries rely on outdated exonyms, minority speech communities face bureaucratic erasure, missing out on mother-tongue textbook printing, preservation grants, and localized digital software interfaces.
            </p>
            <p>
              Pretending that these legacy labels are &quot;just linguistic classifications&quot;, while ignoring their real-world impact on civil rights, policy, and human dignity, is a complete denial of institutional responsibility. Language is the vessel of cultural identity, and standards bodies must be held accountable for the administrative legacy they maintain.
            </p>
          </div>
        </section>

        {/* Section VIII: Digital Implementation & Open Standards */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VIII · Digital Implementation
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Operationalizing the Zo Standard Across Open Datasets
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              To lead by example, the Hmar Heritage Foundation operationalizes this policy across all its open digital repositories and public datasets:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Terminological Reform with Code Stability:</strong> We maintain individual ISO 639-3 codes (e.g., <code>hmr</code> for Hmar) for seamless software compatibility, while replacing overarching exonym labels (KCN / KC) with <strong>Zo</strong> across all dataset metadata and documentation.
              </li>
              <li>
                <strong>Open Datasets on Hugging Face:</strong> All raw text corpora, audio archives, and language models published by the Foundation are cataloged under the Zo autonym classification.
              </li>
              <li>
                <strong>Registry Petitions:</strong> The Foundation actively prepares formal change proposals for ISO 639-3, Glottolog, and SIL Ethnologue maintainers to align official node labels with modern comparative phonology.
              </li>
            </ul>
          </div>
        </section>

        {/* Navigation Pointers */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-semibold border-t border-slate-200">
          <Link
            href="/philosophy"
            className="hover:text-slate-900 transition-colors inline-flex items-center gap-1"
          >
            <span>read foundational philosophy</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/manifesto"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-slate-900 text-white font-bold hover:bg-[#9E1B24] transition-colors"
          >
            <span>view charter &amp; constitution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
