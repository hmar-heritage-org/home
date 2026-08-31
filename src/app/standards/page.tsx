import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Compass, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";

export const metadata = {
  title: `Language Standards & Classifications | ${siteConfig.fullName}`,
  description: "Official policy of the Hmar Heritage Foundation on language classification, colonial exonyms, the Zo autonym, and international registry standards.",
};

export default function StandardsPage() {
  return (
    <div className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Left-Aligned Editorial Header */}
      <section className="space-y-6 border-b border-slate-200 pb-12">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#9E1B24]" />
            <span>Official Policy &amp; Standards Document</span>
          </div>
          <div className="text-xs font-mono text-slate-700 font-bold bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full">
            Doc Ref: HHF-POL-2026-01
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Language Standards &amp; Classification Policy
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans font-medium">
          The Hmar Heritage Foundation formally establishes this policy to articulate our position on linguistic taxonomy, genealogical classification, and digital metadata standards across international language registries.
        </p>
      </section>

      {/* 2. Typographic Essay Body (Prose Only - No Bullet Lists) */}
      <div className="space-y-12 text-slate-800 leading-relaxed text-base font-sans">
        
        {/* Section I: The Foundation's Position */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section I · The Foundation&apos;s Position
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Rejection of Colonial Exonyms and the Zo Autonym Candidate
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              The Hmar Heritage Foundation formally rejects legacy colonial umbrella terms, specifically the compound macro-labels &quot;Kuki-Chin-Naga&quot; (KCN), &quot;Kuki-Chin&quot; (KC), and their administrative derivatives, as obsolete exonyms that distort genetic language relationships and perpetuate colonial administrative conveniences.
            </p>
            <p>
              In place of these colonial labels, the Foundation advocates for adopting the indigenous autonym <strong>Zo</strong> (in descriptive academic literature, <em>South-Central Tibeto-Burman / South-Central Trans-Himalayan</em>) as the overarching phylogenetic clade for the ~55 closely related speech varieties across Northeast India, Western Myanmar, and the Chittagong Hill Tracts. This autonym unites closely related speech varieties, including Hmar, Mizo (Lushai), Paite, Thadou, Vaiphei, Tedim, Mara, Gangte, Simte, Zou, Biate, Hrangkhol, Lai/Hakha, Khumi, and Cho/Daai, which share demonstrable, regular sound correspondences descending from a common ancestor.
            </p>
            <p>
              To maintain full digital compatibility, the Foundation advocates preserving existing individual ISO 639-3 language codes (such as <code>hmr</code>, <code>lus</code>, <code>pck</code>, <code>ted</code>) while updating the overarching family classification from legacy exonyms to <strong>Zo</strong> across all software metadata, dataset tags, and international registries. Furthermore, we formally affirm the complete cladistic separation of Meitei (Manipuri), Naga, and Karbi branches out of the Zo node into their respective independent branches.
            </p>
          </div>
        </section>

        {/* Section II: Historical Critique */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section II · Historical Critique
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Grierson&apos;s Stated Criteria vs. His Own Contradiction
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              The historical flaw began in the <em>Linguistic Survey of India</em> (LSI Vol. III, Part III, 1904), where G.A. Grierson acknowledged the outsider origin of the terminology:
            </p>
            
            <blockquote className="my-4 border-l-4 border-[#9E1B24] pl-4 py-2.5 italic text-slate-700 bg-slate-50 rounded-r-md font-serif text-sm sm:text-base shadow-sm">
              &quot;The name Kuki is an Assamese or Bengali word, applied to various hill tribes... Chin is a Burmese word used to denote the various hill tribes living in the country between Burma and the provinces of Assam and Bengal.&quot;
              <span className="block not-italic text-xs font-mono text-slate-700 font-bold mt-1.5">G.A. Grierson, LSI Vol. III, Part III (1904, pp. 1–2)</span>
            </blockquote>

            <p>
              However, Grierson broke his own stated criteria by placing Meitei (Manipuri), a historically valley-dwelling population of the Imphal Valley, under the same umbrella. He did this despite explicitly acknowledging that Meitei possesses structural, morphological, and lexical ties that align it more closely with Written Burmese and Classical Tibetan than with the surrounding hill languages:
            </p>

            <blockquote className="my-4 border-l-4 border-[#9E1B24] pl-4 py-2.5 italic text-slate-700 bg-slate-50 rounded-r-md font-serif text-sm sm:text-base shadow-sm">
              &quot;It will also be seen that Meithei in some respects agrees with written Burmese, as against the other languages of the group... Connection with Tibetan.&quot;
              <span className="block not-italic text-xs font-mono text-slate-700 font-bold mt-1.5">G.A. Grierson, LSI Vol. III, Part III (1904, pp. 6, 20–24)</span>
            </blockquote>

            <p>
              In the mid-20th century, tentative structural surveys by Robert Shafer (<em>Kukish</em>) and Paul K. Benedict (<em>Kuki-Naga</em>) merged Kuki-Chin, various heterogeneous Naga languages, Meitei, and Karbi under macro-rubrics like &quot;Kuki-Chin-Naga&quot;. When Shafer published his classification in 1955, the undivided state of Assam had not yet been reorganized into modern states like Nagaland (1963) or Mizoram (1972/1987). Consequently, subsequent scholars easily confused legacy administrative hill groupings with true genetic language families, compounding colonial administrative shortcuts into permanent academic labels.
            </p>
          </div>
        </section>

        {/* Section III: Cladistic Restructuring & Table */}
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

            {/* Table Mapping */}
            <div className="my-6 overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm font-sans">
                <thead className="bg-slate-100 font-mono text-slate-800 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 text-left">Glottolog ID</th>
                    <th className="px-4 py-3 text-left">Legacy Glottolog Label</th>
                    <th className="px-4 py-3 text-left">Proposed Cladistic Label</th>
                    <th className="px-4 py-3 text-left">Scope &amp; Core Speech Varieties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white font-sans text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">sino1245</td>
                    <td className="px-4 py-3">Sino-Tibetan</td>
                    <td className="px-4 py-3 font-bold text-slate-900">Sino-Tibetan / Trans-Himalayan</td>
                    <td className="px-4 py-3">Top-level family root.</td>
                  </tr>
                  <tr className="bg-red-50/40 hover:bg-red-50/70 text-red-900">
                    <td className="px-4 py-3 font-mono font-semibold">kuki1245</td>
                    <td className="px-4 py-3 italic line-through">Kuki-Chin-Naga (Legacy)</td>
                    <td className="px-4 py-3 font-bold uppercase tracking-wider text-red-700">[Node Dissolution]</td>
                    <td className="px-4 py-3">Reject as a non-monophyletic wastebasket node.</td>
                  </tr>
                  <tr className="bg-emerald-50/40 hover:bg-emerald-50/70 font-medium">
                    <td className="px-4 py-3 font-mono font-semibold text-emerald-900">kuki1246</td>
                    <td className="px-4 py-3 text-slate-600">Kuki-Chin</td>
                    <td className="px-4 py-3 font-bold text-emerald-800">Zo Languages / South-Central</td>
                    <td className="px-4 py-3"><strong>55 Speech Varieties</strong> sharing Proto-Zo phonology.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono text-slate-500 pl-8">├── cent2005</td>
                    <td className="px-4 py-3 text-slate-600">Core Central Kuki-Chin</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">Central Zo (17 varieties)</td>
                    <td className="px-4 py-3">Hmar, Mizo (Lushai), Lai/Hakha, Maraic, Pangkhua.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono text-slate-500 pl-8">├── oldk1252</td>
                    <td className="px-4 py-3 text-slate-600">Northwestern Kuki-Chin</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">Northwestern Zo (16 varieties)</td>
                    <td className="px-4 py-3">Anal, Monsang, Moyon, Purum, Aimol, Lamkang, Tarao.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono text-slate-500 pl-8">└── peri1260</td>
                    <td className="px-4 py-3 text-slate-600">Peripheral Kuki-Chin</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">Peripheral Zo (22 varieties)</td>
                    <td className="px-4 py-3">Tedim, Paite, Thadou, Vaiphei, Simte, Khomic, Ashö.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">mani1292</td>
                    <td className="px-4 py-3">Manipuri / Meitei</td>
                    <td className="px-4 py-3 font-bold text-slate-900">Meitei Branch (Independent)</td>
                    <td className="px-4 py-3">Independent Sino-Tibetan node outside Zo.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">karb1240</td>
                    <td className="px-4 py-3">Karbi</td>
                    <td className="px-4 py-3 font-bold text-slate-900">Karbi Branch (Independent)</td>
                    <td className="px-4 py-3">Independent Sino-Tibetan node outside Zo.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">anga1312</td>
                    <td className="px-4 py-3">Angami-Ao / Naga</td>
                    <td className="px-4 py-3 font-bold text-slate-900">Naga Clades (Independent)</td>
                    <td className="px-4 py-3">Independent branches (Aoic, Angami-Pochuri, Zemeic, etc.).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section IV: Indigenous Autonomy */}
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

        {/* Section V: Field Research & Comparative Linguistics */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section V · Field Research
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            The Disconnect Between Comparative Linguistics and Legacy Registries
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              There is a persistent claim by institutional registries that legacy classifications are maintained to reflect &quot;academic consensus.&quot; In reality, the primary comparative linguists actively conducting field research explicitly reject these colonial labels.
            </p>
            <p>
              In his benchmark phonological reconstruction <em>Proto-Kuki-Chin</em> (STEDT Monograph 8, 2009), Dr. Kenneth Van Bik explicitly excludes all Naga languages (such as Ao, Tangkhul, Zeme) from the family, proving that Naga languages share no unique phonological innovations with Kuki-Chin.
            </p>
            <p>
              Similarly, in <em>&quot;The Tibeto-Burman Languages of Northeastern India&quot;</em> (2003) and <em>&quot;The Sino-Tibetan Languages of Northeast India&quot;</em> (2017), Prof. Robbins Burling and Dr. Mark W. Post explicitly demonstrate that &quot;Naga&quot; and &quot;Kuki-Chin-Naga&quot; are not valid genetic units. They emphasize that compound colonial labels are areal catch-alls lacking comparative evidence of shared sound innovations.
            </p>
            <p>
              Furthermore, Prof. Scott DeLancey (2013, 2015) treats the South-Central / Zo branch as a primary, distinct branch separate from surrounding Himalayan and Brahmaputran lineages, while Dr. Linda Konnerth (2018) explicitly recommends adopting <em>South-Central Trans-Himalayan</em> specifically because colonial exonyms carry negative connotations for native speakers. Citing &quot;academic consensus&quot; to justify 100-year-old administrative shortcuts while ignoring the explicit phonological reconstructions of modern field researchers misrepresents contemporary linguistics.
            </p>
          </div>
        </section>

        {/* Section VI: Circular Indexing Trap & Registry Infrastructure */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VI · Registry Infrastructure
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Methodological Contradictions, Indexing Traps, and Institutional Neglect
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              This institutional resistance to change relies on two structural flaws: a fundamental methodological contradiction and a circular indexing trap.
            </p>
            <p>
              First, Glottolog 5.3 (glottocode <code>kuki1245</code>) explicitly claims that its tree nodes are strictly genealogical, based on shared phonological innovations. Yet it continues to perpetuate top-level labels dating back to Grierson and Shafer, despite Grierson and Shafer themselves explicitly stating that terms like &quot;Kuki-Chin-Naga&quot; were merely geographical conveniences. Even SIL Ethnologue documentation admits that &quot;Kuki-Chin-Naga&quot; is a geographical clustering rather than a proven monophyletic node. Naming genealogical nodes with geographical labels is an unresolved methodological contradiction.
            </p>
            <p>
              Second, registries create a self-reinforcing loop. Researchers are forced to include legacy exonyms in paper abstracts simply so their work remains discoverable within registry databases. A real-world example is seen on open platform archives like Hugging Face, where community-built speech corpora are named <strong>Zomi ASR</strong> by native developers, yet platform automated metadata tags still force legacy <code>kuki-chin</code> tags to ensure search indexing. Registries then cite those abstract keywords as proof that academics &quot;prefer&quot; the old terms, ignoring the fact that the papers themselves explicitly reject them.
            </p>
            <p>
              Ultimately, maintaining this obsolete structure is nothing more than a sign of institutional neglect. Anyone who has actually studied these languages in the field recognizes these flaws immediately. That international registries have allowed a 100-year-old administrative shortcut to linger uncorrected demonstrates decades of neglect toward the region&apos;s linguistic heritage. As foundational infrastructure, it is the duty of institutions like ISO 639-3, Glottolog, and SIL Ethnologue to correct structural errors rather than hide behind circular database mechanics.
            </p>
          </div>
        </section>

        {/* Section VII: Governance & Socio-Technical Impacts */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VII · Governance &amp; Socio-Technical Impacts
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
              Furthermore, modern digital governance depends on precise language tags. Under educational mandates (such as India’s National Education Policy 2020), mother-tongue textbook development, curriculum funding, and teacher training depend on recognized language classifications. Flawed grouping leads to minority varieties being administratively subsumed, missing out on textbook printing, preservation grants, and localized digital software interfaces.
            </p>
            <p>
              Pretending that these legacy labels are &quot;just linguistic classifications&quot;, while ignoring their real-world impact on civil rights, policy, and human dignity, is a complete denial of institutional responsibility. Language is the vessel of cultural identity, and standards bodies must be held accountable for the administrative legacy they maintain.
            </p>
          </div>
        </section>

        {/* Section VIII: Digital Implementation */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VIII · Digital Implementation
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Operationalizing the Zo Standard Across Open Datasets
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              To lead by example, the Hmar Heritage Foundation operationalizes this policy across all its open digital repositories, text corpora, speech recordings, and public language datasets.
            </p>
            <p>
              We maintain individual ISO 639-3 codes (such as <code>hmr</code> for Hmar) for seamless POSIX locale, Unicode, and software compatibility, while replacing overarching exonym labels (KCN / KC) with <strong>Zo</strong> across all dataset metadata and documentation headers. All open-source text and audio datasets published by the Foundation on platforms like Hugging Face will pair stable ISO codes with updated taxonomic headers (e.g., <code>language_iso639_3: &quot;hmr&quot;</code>, <code>clade: &quot;Zo&quot;</code>, <code>subgroup: &quot;Central Zo (Hmaric)&quot;</code>, <code>academic_alternative: &quot;South-Central Tibeto-Burman&quot;</code>).
            </p>
            <p>
              Finally, the Foundation will submit formal change proposals to the Glottolog Editorial Board to dissolve the non-monophyletic macro-node <code>kuki1245</code> (&quot;Kuki-Chin-Naga&quot;), isolate Meitei (<code>mani1292</code>) and Naga branches, and rename <code>kuki1246</code> to <strong>Zo / South-Central</strong>, while petitioning SIL International and ISO 639-5 to update overarching family classifications.
            </p>
          </div>
        </section>

        {/* References & Bibliography Section */}
        <section className="space-y-4 pt-4">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#9E1B24]" />
            <span>References &amp; Selected Bibliography</span>
          </div>
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-sans space-y-3 text-slate-700 leading-relaxed">
            <p><strong>Benedict, Paul K.</strong> (1972). <em>Sino-Tibetan: A Conspectus</em>. Contributing editor James A. Matisoff. Cambridge: Cambridge University Press.</p>
            <p><strong>Burling, Robbins.</strong> (2003). &quot;The Tibeto-Burman Languages of Northeastern India.&quot; In Graham Thurgood and Randy J. LaPolla (eds.), <em>The Sino-Tibetan Languages</em>, pp. 169–191. London: Routledge.</p>
            <p><strong>DeLancey, Scott.</strong> (2013). &quot;The History of Postverbal Agreement in Kuki-Chin.&quot; <em>Journal of the Southeast Asian Linguistics Society (JSEALS)</em>, 6: 1–17.</p>
            <p><strong>DeLancey, Scott.</strong> (2015). &quot;Morphological Evidence for Tani Subgrouping.&quot; In Linda Konnerth et al. (eds.), <em>North East Indian Linguistics 7</em>. Canberra: Pacific Linguistics.</p>
            <p><strong>Grierson, George A.</strong> (1904). <em>Linguistic Survey of India: Vol. III, Part III, Tibeto-Burman Family: Specimens of the Kuki-Chin and Burma Groups</em>. Calcutta: Office of the Superintendent of Government Printing.</p>
            <p><strong>Hammarström, Harald, Robert Forkel, Martin Haspelmath, &amp; Sebastian Bank.</strong> (2024). <em>Glottolog 5.0 / 5.3: Kuki-Chin-Naga (kuki1245)</em>. Leipzig: Max Planck Institute for Evolutionary Anthropology.</p>
            <p><strong>Konnerth, Linda.</strong> (2018). &quot;The Historical Phonology of Monsang (Northwestern South-Central / &apos;Kuki-Chin&apos;).&quot; <em>Himalayan Linguistics</em>, 17(1): 111–144.</p>
            <p><strong>Matisoff, James A.</strong> (2003). <em>Handbook of Proto-Tibeto-Burman: System and Philosophy of Sino-Tibetan Reconstruction</em>. Berkeley: University of California Press.</p>
            <p><strong>Post, Mark W., &amp; Robbins Burling.</strong> (2017). &quot;The Sino-Tibetan Languages of Northeast India.&quot; In Graham Thurgood and Randy J. LaPolla (eds.), <em>The Sino-Tibetan Languages</em> (2nd ed.), pp. 213–242. London: Routledge.</p>
            <p><strong>Shafer, Robert.</strong> (1955). &quot;Classification of the Sino-Tibetan Languages.&quot; <em>Word</em>, 11(1): 94–111.</p>
            <p><strong>Van Bik, Kenneth.</strong> (2009). <em>Proto-Kuki-Chin: A Reconstructed Ancestor of the Kuki-Chin Languages</em>. STEDT Monograph Series No. 8. Berkeley: Center for Southeast Asia Studies, University of California.</p>
          </div>
        </section>

        {/* Navigation Pointers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-semibold border-t border-slate-200">
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
