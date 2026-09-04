import { Compass, BookOpen, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

export default function Standards() {
  return (
    <div className="bg-stone-50 min-h-screen">
      <PageHeader
        label="Official Policy Specification • Status: Standards Policy Draft"
        title="Language Standards & Classification Policy"
        subtitle="Official policies, data quality specifications, orthographic guidelines, and registry standards of the Hmar Heritage Foundation."
      />

      {/* Quick Metadata Summary Cards */}
      <section className="container-page py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-xs">
            <div className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider mb-1">
              Primary Language Code
            </div>
            <div className="text-2xl font-mono font-bold text-stone-900">
              hmr
            </div>
            <p className="text-xs text-stone-500 mt-1 font-mono">
              ISO 639-3 (Valid) • Deprecated: <span className="line-through text-stone-400">zom</span>
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-xs">
            <div className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider mb-1">
              Phylogenetic Autonym
            </div>
            <div className="text-2xl font-serif font-bold text-emerald-950">
              Zo
            </div>
            <p className="text-xs text-stone-500 mt-1 font-mono">
              South-Central Trans-Himalayan (55 varieties)
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-xs">
            <div className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider mb-1">
              Glottolog Identifier
            </div>
            <div className="text-2xl font-mono font-bold text-stone-900">
              hmar1241
            </div>
            <p className="text-xs text-stone-500 mt-1 font-mono">
              Written Standard Hmar (Glottocode)
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-xs">
            <div className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider mb-1">
              Primary Script Tag
            </div>
            <div className="text-2xl font-mono font-bold text-stone-900">
              Latn
            </div>
            <p className="text-xs text-stone-500 mt-1 font-mono">
              Latin Script (ISO 15924)
            </p>
          </div>
        </div>
      </section>

      {/* Main Policy Body */}
      <section className="container-page pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="border-b border-stone-200 pb-6">
            <div className="flex items-center justify-between text-xs font-mono text-stone-500 mb-2">
              <span className="font-bold text-emerald-800 uppercase tracking-widest flex items-center gap-1.5">
                <Compass size={14} className="text-emerald-800" />
                Operational Policy Specification
              </span>
              <span className="bg-stone-200 text-stone-700 px-2.5 py-0.5 rounded-full font-semibold">
                Status: Policy Draft
              </span>
            </div>
            <h2 className="text-3xl font-bold text-stone-900 font-serif">
              Language Standards & Classification Policy
            </h2>
          </div>

          {/* Section I */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION I
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Policy Scope & Purpose
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              This policy specification is written primarily for upstream institutional database maintainers, standards registration authorities, comparative linguists, and software engineers. Specifically, it provides technical guidance for maintainers at <strong>Glottolog</strong> (Max Planck Institute for Evolutionary Anthropology), <strong>SIL International / Ethnologue</strong>, <strong>ISO 639 Registration Authorities</strong>, and open NLP corpus maintainers on platforms like <strong>Hugging Face</strong>.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              This page is an operational policy statement of the Hmar Heritage Foundation rather than a casual general-audience overview or a formal academic research paper; it should not be cited as a peer-reviewed academic source. The citations and references included throughout are provided to demonstrate that our metadata standards are grounded in existing comparative linguistics and ethnographic research rather than un-supported assertions.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              The Foundation does not claim scientific authority over global language registries or neighboring speech communities. Our purpose is to establish clear, transparent standards for our own open datasets, software metadata, and community digital archives, while providing a clean open-access benchmark for developers and researchers. We explicitly recognize that Glottolog did not invent these historical colonial exonyms, but simply recorded what existing published literature contained. However, as Glottolog has become the primary programmatic taxonomy root powering modern language technology and AI pipelines worldwide, it has become responsible for how these legacy labels are perpetuated into the digital future.
            </p>
            <p className="text-stone-900 font-semibold text-base border-l-4 border-emerald-800 pl-4 py-2 bg-emerald-50/60 rounded-r-md">
              While our policy sets clear standards for our datasets, our goal is constructive and collaborative. We recognize that linguistic taxonomy is an evolving field, and our intention is to share transparent metadata conventions that safeguard the living identity of our language.
            </p>
          </article>

          {/* Section II */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION II
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Clan Diversity & Speech Varieties
              </h3>
            </div>
            
            <h4 className="text-lg font-bold text-stone-900 mt-4">2.1 The Ancestral Bedrock and Literary Standard</h4>
            <p className="text-stone-700 leading-relaxed text-base">
              Ethnographic research documents 14 foundational ancestral clans, historically known as <em>Hnam 14</em> (Dr. H. Rochunga Pudaite, 1960): <strong>Lawitlang, Zote, Ngurte, Khawbung, Ṭhiek, Lungṭau, Leiri, Darngawn, Pakhuong, Hrangkhawl, Biate, Changsan, Khawlhring</strong>, and <strong>Faihriem (Saihriem)</strong>. Over centuries, these clans expanded into sub-clans (<em>pahnam</em>) and family lineages across Manipur, Mizoram, Assam, Meghalaya, and Tripura.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Written Standard Hmar (ISO 639-3: <code className="font-mono text-emerald-800">hmr</code>, Glottocode: <code className="font-mono text-emerald-800">hmar1241</code>) developed primarily from the <em>Khawsak / Ṭhiek</em> speech variety, which served as the early literary standard for Bible translation, hymnbooks, and school textbooks. Major clans such as <strong>Zote, Leiri, Lungṭau, Darngawn, Khawbung, Rawite</strong>, and <strong>Vangsie</strong> speak closely intertwined varieties that are subsumed under standard <code className="font-mono">hmr</code> without separate ISO codes.
            </p>

            <h4 className="text-lg font-bold text-stone-900 mt-6">2.2 Community Agency and ISO/Ethnologue Inconsistencies</h4>
            <p className="text-stone-700 leading-relaxed text-base">
              Native speech communities must have a direct voice in how their speech varieties are represented in global registries. Currently, international standards bodies display arbitrary inconsistencies when cataloging Hmar clan speech varieties. For instance, <strong>Faihriem (Saihriem / Syriem)</strong> has no dedicated ISO 639-3 code and remains un-coded in Ethnologue, despite Glottolog maintaining a distinct entry (<code className="font-mono text-emerald-800">syri1242</code>). Similarly, speech varieties such as <strong>Leiri</strong> and <strong>Zote</strong> possess distinct linguistic identities spoken by native communities, yet they do not have dedicated ISO 639-3 language codes in global registries. They are either administratively subsumed under standard <code className="font-mono">hmr</code> or omitted from international listings entirely.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              We emphasize that these registry discrepancies stem from historical institutional neglect and minimal community participation in international standards bodies rather than malice. To be clear, the Foundation has no major dispute with ISO 639-3 or Ethnologue regarding the standard Hmar literary code (<code className="font-mono">hmr</code>). Our primary focus is opening dialogue on recognizing unlisted ancestral speech varieties as digital documentation expands. Asserting that these varieties must immediately receive separate language codes would be premature without thorough field study; our aim is simply ensuring that global registries remain open to native community representation as documentation progresses.
            </p>

            <h4 className="text-lg font-bold text-stone-900 mt-6">2.3 Table II.A · Comparative Academic & Customary Clan Frameworks</h4>
            <div className="my-6 overflow-x-auto rounded-xl border border-stone-200 shadow-xs bg-white text-xs sm:text-sm font-sans">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-100 font-mono text-stone-800 font-bold border-b border-stone-200 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 border-r border-stone-200">Clan Name (Hnam)</th>
                    <th className="px-4 py-3 border-r border-stone-200 text-center">Pudaite (1960)</th>
                    <th className="px-4 py-3 border-r border-stone-200 text-center">Shakespear (1912)</th>
                    <th className="px-4 py-3 border-r border-stone-200 text-center">Hmar Inpui (21)</th>
                    <th className="px-4 py-3">Registry / ISO Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ṭhiek</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 font-mono text-emerald-800">hmr / hmar1241 (Literary Standard)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Lungṭau</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-amber-900 border-r border-stone-200">Leiri</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 font-semibold text-amber-900">Distinct Variety (Unlisted in ISO)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-amber-900 border-r border-stone-200">Zote</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 font-semibold text-amber-900">Distinct Variety (Unlisted in ISO)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Darngawn</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawbung</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Lawitlang</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ngurte</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pakhuong</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Changsan</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawlhring</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Faihriem (Saihriem)</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 font-mono text-emerald-800 font-semibold">syri1242 (Distinct Variety)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Biate</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 font-mono text-emerald-800">bie / biat1247 (Distinct Variety)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Hrangkhawl</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 font-mono text-emerald-800">hra / hran1239 (Distinct Variety)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khelte (Khiengte)</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pautu</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Rawite</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Sakum</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Vangsie</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Sakechep (Khelma)</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 font-mono text-emerald-800">klh / khel1240 (Distinct Variety)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ngente</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5">Subsumed under hmr</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section III */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION III
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                The Foundation's Position
              </h3>
            </div>
            
            <h4 className="text-lg font-bold text-stone-900 mt-4">3.1 Rejection of Colonial Exonyms and Adoption of Zo</h4>
            <p className="text-stone-700 leading-relaxed text-base">
              The Hmar Heritage Foundation encourages moving beyond legacy colonial umbrella terms, specifically macro-labels like "Kuki-Chin-Naga" and "Kuki-Chin", which were originally introduced for administrative convenience rather than genetic relationships.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              In place of these colonial labels, the Foundation advocates for adopting the autonym <strong>Zo</strong>, academically described as <em>South-Central Tibeto-Burman</em>, as the family name for the 55 closely related speech varieties across Northeast India, Western Myanmar, and the Chittagong Hill Tracts. We maintain that language classification must pair comparative phonological linguistics with deep ethnographic study, consulting native speakers, community elders, and living oral history, rather than relying on century-old administrative shortcuts.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Updating metadata descriptions across global platforms like Glottolog and SIL Ethnologue is valuable because academic linguistic papers, digital corpora, and AI datasets rely on these databases for indexing. When open platforms force legacy tags like <code className="font-mono">kuki-chin-naga</code> for search indexing, they create a self-reinforcing loop where researchers feel compelled to include outdated terms in paper abstracts just to ensure their work remains discoverable.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Respecting native cultural sentiments by adopting authentic autonyms like <strong>Zo</strong> provides a clear, respectful path forward. The Foundation operationalizes the <strong>Zo</strong> classification across all its public datasets, Hugging Face repositories, and software metadata as a practical benchmark.
            </p>

            <h4 className="text-lg font-bold text-stone-900 mt-6">3.2 ISO Code Compatibility & Indigenous Autonomy</h4>
            <p className="text-stone-700 leading-relaxed text-base">
              To maintain software compatibility, the Foundation preserves existing individual ISO 639-3 language codes, such as <code className="font-mono text-emerald-800">hmr</code>, <code className="font-mono text-emerald-800">lus</code>, <code className="font-mono text-emerald-800">pck</code>, and <code className="font-mono text-emerald-800">ted</code>, while updating overarching family classification metadata from legacy exonyms to <strong>Zo</strong>. Furthermore, we affirm the complete separation of Meitei, Naga, and Karbi into their own independent language branches.
            </p>
          </article>

          {/* Section IV */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION IV
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Historical Critique of Grierson (1904)
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              The historical error began in the <em>Linguistic Survey of India</em> (LSI Vol. III, Part III, 1904), where G.A. Grierson acknowledged the outsider origin of the terminology:
            </p>
            <blockquote className="my-4 border-l-4 border-emerald-800 pl-4 py-3 italic text-stone-800 bg-emerald-50/50 rounded-r-md font-serif text-sm">
              "The name Kuki is an Assamese or Bengali word, applied to various hill tribes... Chin is a Burmese word used to denote the various hill tribes living in the country between Burma and the provinces of Assam and Bengal."
              <span className="block not-italic text-xs font-mono text-stone-500 mt-2 font-bold">G.A. Grierson, LSI Vol. III, Part III (1904, pp. 1–2)</span>
            </blockquote>
            <p className="text-stone-700 leading-relaxed text-base">
              However, Grierson departed from his stated criteria by placing Meitei, a historically valley-dwelling population of the Imphal Valley, under the same umbrella. He did this despite explicitly acknowledging that Meitei possesses structural, morphological, and lexical ties that align it more closely with Written Burmese and Classical Tibetan than with the surrounding hill languages:
            </p>
            <blockquote className="my-4 border-l-4 border-emerald-800 pl-4 py-3 italic text-stone-800 bg-emerald-50/50 rounded-r-md font-serif text-sm">
              "It will also be seen that Meithei in some respects agrees with written Burmese, as against the other languages of the group... Connection with Tibetan."
              <span className="block not-italic text-xs font-mono text-stone-500 mt-2 font-bold">G.A. Grierson, LSI Vol. III, Part III (1904, pp. 6, 20–24)</span>
            </blockquote>
            <p className="text-stone-700 leading-relaxed text-base">
              In the mid-20th century, structural surveys by Robert Shafer (1955) and Paul K. Benedict (1972) merged Kuki-Chin, various Naga languages, Meitei, and Karbi under broad umbrella terms. When Shafer published his classification, the undivided state of Assam had not yet been reorganized into modern states like Nagaland (1963) or Mizoram (1972/1987). Subsequent scholars easily confused colonial hill administrative groupings with true language families, compounding administrative shortcuts into permanent academic labels.
            </p>
          </article>

          {/* Section V */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION V
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Cladistic Restructuring Table
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              To replace colonial administrative shortcuts with scientific accuracy, the Foundation advocates for separating non-Zo language branches from the top-level macro-node (Glottocode: <code className="font-mono">kuki1245</code>, 94 speech varieties) into independent nodes, while renaming the remaining parent node to the authentic autonym <strong>Zo</strong> (55 speech varieties).
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              For database maintainers and registry maintainers, re-assigning non-Zo branches into their own independent Sino-Tibetan nodes is significantly simpler than building an isolated tree from scratch, as the 55 Zo speech varieties form the vast majority of the existing clade and share proven Proto-Zo phonological innovations.
            </p>
            <p className="text-stone-700 leading-relaxed text-base font-semibold">
              We highlight the structural independence of the following five non-Zo branches:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-stone-700 text-sm font-mono">
              <li>Angami-Ao Branch (<code className="text-emerald-800 font-bold">anga1312</code>, 18 speech varieties)</li>
              <li>Karbic Branch (<code className="text-emerald-800 font-bold">karb1240</code>, 2 speech varieties)</li>
              <li>Manipuri / Meitei Branch (<code className="text-emerald-800 font-bold">mani1292</code>, Independent node)</li>
              <li>Tangkhul-Maring Branch (<code className="text-emerald-800 font-bold">tang1335</code>, 11 speech varieties)</li>
              <li>Zemeic Branch (<code className="text-emerald-800 font-bold">zeme1241</code>, 7 speech varieties)</li>
            </ul>
            <p className="text-stone-700 leading-relaxed text-base mt-2">
              Once these 39 non-Zo speech varieties are established as independent Sino-Tibetan branches, the primary parent node (<code className="font-mono">kuki1246</code>) seamlessly becomes the dedicated <strong>Zo</strong> language clade.
            </p>

            <div className="my-6 overflow-x-auto rounded-xl border border-stone-200 shadow-xs bg-white text-xs sm:text-sm font-sans">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-100 font-mono text-stone-800 font-bold border-b border-stone-200 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Glottolog ID</th>
                    <th className="px-4 py-3">Legacy Glottolog Label</th>
                    <th className="px-4 py-3">Proposed Cladistic Label</th>
                    <th className="px-4 py-3">Scope & Speech Varieties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr className="bg-stone-50">
                    <td className="px-4 py-3 font-mono font-semibold text-stone-900">sino1245</td>
                    <td className="px-4 py-3">Sino-Tibetan</td>
                    <td className="px-4 py-3 font-bold text-stone-900">Sino-Tibetan / Trans-Himalayan</td>
                    <td className="px-4 py-3">Top-level family root.</td>
                  </tr>
                  <tr className="bg-red-50/60 text-red-900 font-mono text-xs">
                    <td className="px-4 py-3 font-semibold">kuki1245</td>
                    <td className="px-4 py-3 italic line-through">Kuki-Chin-Naga (Legacy)</td>
                    <td className="px-4 py-3 font-bold uppercase tracking-wider text-red-700">[NODE DISSOLUTION]</td>
                    <td className="px-4 py-3 font-sans">Dissolve non-monophyletic geographical macro-node (94 varieties).</td>
                  </tr>
                  <tr className="bg-emerald-50/70 text-emerald-950 font-medium">
                    <td className="px-4 py-3 font-mono font-semibold text-emerald-900">kuki1246</td>
                    <td className="px-4 py-3 text-stone-600">Kuki-Chin</td>
                    <td className="px-4 py-3 font-bold text-emerald-800">Zo Languages / South-Central</td>
                    <td className="px-4 py-3"><strong>55 Speech Varieties</strong> sharing Proto-Zo phonology.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-stone-500 pl-6">├── cent2330</td>
                    <td className="px-4 py-3 text-stone-600">Core Central Kuki-Chin</td>
                    <td className="px-4 py-3 font-semibold text-stone-900">Central Zo (17 varieties)</td>
                    <td className="px-4 py-3">Hmar, Mizo (Lushai), Lai/Hakha, Maraic, Pangkhua.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-stone-500 pl-6">├── oldk1252</td>
                    <td className="px-4 py-3 text-stone-600">Northwestern Kuki-Chin</td>
                    <td className="px-4 py-3 font-semibold text-stone-900">Northwestern Zo (16 varieties)</td>
                    <td className="px-4 py-3">Anal, Monsang, Moyon, Purum, Aimol, Lamkang, Tarao.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-stone-500 pl-6">└── peri1260</td>
                    <td className="px-4 py-3 text-stone-600">Peripheral Kuki-Chin</td>
                    <td className="px-4 py-3 font-semibold text-stone-900">Peripheral Zo (22 varieties)</td>
                    <td className="px-4 py-3">Tedim, Paite, Thadou, Vaiphei, Simte, Khomic, Ashö.</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="px-4 py-3 font-mono font-semibold text-stone-900">anga1312</td>
                    <td className="px-4 py-3">Angami-Ao</td>
                    <td className="px-4 py-3 font-bold text-stone-900">Angami-Ao Branch (Independent)</td>
                    <td className="px-4 py-3">Independent node (18 varieties).</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="px-4 py-3 font-mono font-semibold text-stone-900">karb1240</td>
                    <td className="px-4 py-3">Karbic</td>
                    <td className="px-4 py-3 font-bold text-stone-900">Karbic Branch (Independent)</td>
                    <td className="px-4 py-3">Independent node (2 varieties).</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="px-4 py-3 font-mono font-semibold text-stone-900">mani1292</td>
                    <td className="px-4 py-3">Manipuri / Meitei</td>
                    <td className="px-4 py-3 font-bold text-stone-900">Meitei Branch (Independent)</td>
                    <td className="px-4 py-3">Independent Sino-Tibetan node outside Zo.</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="px-4 py-3 font-mono font-semibold text-stone-900">tang1335</td>
                    <td className="px-4 py-3">Tangkhul-Maring</td>
                    <td className="px-4 py-3 font-bold text-stone-900">Tangkhul-Maring Branch (Independent)</td>
                    <td className="px-4 py-3">Independent node (11 varieties).</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="px-4 py-3 font-mono font-semibold text-stone-900">zeme1241</td>
                    <td className="px-4 py-3">Zemeic</td>
                    <td className="px-4 py-3 font-bold text-stone-900">Zemeic Branch (Independent)</td>
                    <td className="px-4 py-3">Independent node (7 varieties).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section VI */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION VI
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Respecting Indigenous Self-Determination
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Recognizing Naga, Karbi, and Meitei languages as independent clades within Sino-Tibetan reflects their distinct linguistic identities and cultural autonomy.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Groupings introduced under colonial administrative rubrics do not reflect the distinct ancestral heritage of Naga, Karbi, Meitei, and Zo communities. The Foundation maintains clear institutional boundaries: where Naga, Karbi, or Meitei languages are classified within Sino-Tibetan remains strictly up to those respective communities, their scholars, and field linguists.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              We do not dictate the classification of neighboring groups. Our goal is removing colonial clutter so every community across the region can define its own linguistic heritage.
            </p>
          </article>

          {/* Section VII */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION VII
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Field Evidence vs. Legacy Registries
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Institutional registries often claim legacy classifications reflect academic consensus. In reality, primary comparative linguists actively conducting field research reject these colonial labels.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              In his benchmark phonological reconstruction <em>Proto-Kuki-Chin</em> (STEDT Monograph 8, 2009), Dr. Kenneth Van Bik explicitly excludes Naga languages from the family, demonstrating that Naga languages share no unique phonological innovations with Zo languages.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Similarly, Robbins Burling and Mark W. Post (2003, 2017) show that "Naga" and "Kuki-Chin-Naga" are not valid genetic units, emphasizing that compound colonial labels are geographic catch-alls lacking comparative evidence of shared sound innovations.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Furthermore, Scott DeLancey (2013, 2015) treats the South-Central Zo branch as a distinct primary lineage, while Linda Konnerth (2018) recommends adopting <em>South-Central Trans-Himalayan</em> specifically because colonial exonyms carry negative connotations for native speakers. Citing academic consensus to justify century-old administrative shortcuts while ignoring the explicit reconstructions of field researchers misrepresents contemporary linguistics.
            </p>
          </article>

          {/* Section VIII */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION VIII
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Methodological Contradictions & Internal Tree Analysis
              </h3>
            </div>
            
            <h4 className="text-lg font-bold text-stone-900 mt-4">8.1 Internal Inconsistencies in Glottolog Taxonomy</h4>
            <p className="text-stone-700 leading-relaxed text-base">
              A detailed inspection of current Glottolog tree structures reveals significant internal contradictions resulting from relying on legacy literature rather than native field evidence:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-stone-700 text-base leading-relaxed">
              <li>
                <strong>Misplaced Ancestral Hmar Clans:</strong> Ancestral core clans of the Hmar people (<em>Hnam 14</em>) are arbitrarily split across distant tree branches in Glottolog. For example, <em>Changsan</em> (Glottocode: <code className="font-mono text-emerald-800">chan1312</code>) is indexed under <code className="font-mono text-xs">Peripheral Kuki-Chin -&gt; Northeastern -&gt; Thadoic -&gt; Thado Chin</code>, while standard <em>Hmar</em> is placed under <code className="font-mono text-xs">Central Kuki-Chin -&gt; Mizoic -&gt; Hmaric</code>. Similarly, <em>Syriem (Saihriem)</em> is placed under <code className="font-mono text-xs">Western Northwestern Kuki-Chin -&gt; Sakachep-Chorei</code>. This demonstrates that colonial officers recorded clan names in isolation during regional administrative surveys, and registry frameworks converted those historical shortcuts into split tree branches.
              </li>
              <li>
                <strong>Duplicated Nodes across Sub-branches:</strong> Speech varieties like <em>Hrangkhawl</em> are indexed twice under separate parent branches (placed under <code className="font-mono text-xs">Mizoic -&gt; Hmaric</code> as well as under <code className="font-mono text-xs">Western Northwestern Kuki-Chin -&gt; Halam</code>). Similarly, <em>Ralte</em> is duplicated under both <code className="font-mono text-xs">Mizoic -&gt; Mizo</code> and <code className="font-mono text-xs">Thadoic -&gt; Paiteic</code>.
              </li>
              <li>
                <strong>Omission of Living Languages:</strong> Varieties such as <em>Leiri</em> and <em>Zote</em> possess distinct speech identities spoken by native communities, yet they are completely omitted as independent language nodes in Glottolog.
              </li>
            </ol>

            <h4 className="text-lg font-bold text-stone-900 mt-6">8.2 Clarification on Restructuring Proposals</h4>
            <p className="text-stone-700 leading-relaxed text-base">
              We do not demand an immediate, arbitrary restructuring without empirical field study. A comprehensive field study pairing comparative phonological reconstructions with native ethnographic research must be conducted.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Our objective is to highlight these structural contradictions, demonstrating that legacy academic literature contains unresolved errors that must not be treated as permanent scientific consensus.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Updating these legacy structures is a matter of long-overdue institutional care. We recognize that updating century-old language classifications is genuinely disruptive to institutional registries, database schemas, and academic indexing systems. Changing top-level family nodes requires technical refactoring, updating cross-references, and adapting downstream metadata pipelines. However, technical inconvenience cannot justify perpetuating outdated colonial labels. Structural corrections should not be overlooked simply because they require institutional effort.
            </p>
          </article>

          {/* Section IX */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION IX
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Governance & Policy Impacts
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Inaccurate language classification is not an abstract technical debate; it has real-world consequences for governance, education, and cultural identity.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              For decades, official government registries and census frameworks lumped distinct speech communities together under broad colonial exonyms. While partial administrative updates have been made, overarching legacy labels still linger in state policy.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              This administrative lumping distorts history. For communities that transitioned into written literacy within the last century, state lumping affects how history is documented and passed down. When young generations read government documents that force a foreign administrative label onto their heritage, it rewrites their origin stories through administrative routine.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Furthermore, modern digital governance depends on precise language tags. Under educational mandates (such as India’s National Education Policy 2020), mother-tongue textbook development, curriculum funding, and teacher training depend on recognized language classifications. Flawed grouping leads to minority varieties missing out on textbook printing, preservation grants, and localized software interfaces.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Treating legacy labels as mere technical tags while ignoring their impact on policy, education, and identity denies institutional responsibility. Language is the vessel of cultural identity, and standards bodies share in the responsibility for the administrative legacy they maintain.
            </p>
          </article>

          {/* Section X */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION X
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Digital Implementation
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              To lead by example, the Hmar Heritage Foundation applies this policy across all its open digital repositories, text corpora, speech recordings, and language datasets.
            </p>
            <p className="text-stone-900 font-semibold text-base border-l-4 border-emerald-800 pl-4 py-2 bg-emerald-50/60 rounded-r-md">
              We maintain individual ISO 639-3 codes, such as <code className="font-mono text-emerald-800">hmr</code> for Hmar, for seamless software and Unicode compatibility, while updating overarching family labels to <strong>Zo</strong> across all dataset metadata headers.
            </p>
            <div className="bg-stone-900 text-emerald-300 font-mono text-xs p-4 rounded-xl shadow-inner my-3 leading-relaxed">
              dataset_metadata: &#123;<br />
              &nbsp;&nbsp;language_iso639_3: "hmr",<br />
              &nbsp;&nbsp;clade: "Zo",<br />
              &nbsp;&nbsp;subgroup: "Central Zo (Hmaric)",<br />
              &nbsp;&nbsp;academic_alternative: "South-Central Tibeto-Burman"<br />
              &#125;
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              For now, the Foundation prioritizes implementing these metadata standards internally across our own open datasets, Hugging Face repositories, and software documentation, providing a clean open-access benchmark for developers and researchers, while leaving formal upstream registry petitions for future academic and community initiatives.
            </p>
          </article>

          {/* Section XI */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION XI
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Digital & Community Cultural Registries
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              While peer-reviewed academic literature primarily focuses on established cladistic roots, non-academic digital portals like <strong>Virthli.in (2012)</strong> and pan-Hmar cultural registries serve a vital role in capturing living community knowledge.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Digital community portals document the broader spectrum of <strong>40 recognized Hmar clans</strong> and over <strong>200+ sub-clans (<em>pahnam</em>)</strong> that share the ancestral <em>Sinlung</em> origin tradition across Northeast India. By acknowledging these community archives alongside academic research, the Foundation bridges formal comparative linguistics with living indigenous heritage.
            </p>

            <div className="my-6 overflow-x-auto rounded-xl border border-stone-200 shadow-xs bg-white text-xs sm:text-sm font-sans">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-100 font-mono text-stone-800 font-bold border-b border-stone-200 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3">Source Portal / Registry</th>
                    <th className="px-4 py-3">Scope & Documented Clans</th>
                    <th className="px-4 py-3">Ethnolinguistic Focus</th>
                    <th className="px-4 py-3">Access Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr>
                    <td className="px-4 py-3 font-bold text-stone-900">Virthli</td>
                    <td className="px-4 py-3">40 Clans & 200+ Sub-Clans (<em>Pahnam</em>)</td>
                    <td className="px-4 py-3">Living pan-Hmar cultural & clan genealogy</td>
                    <td className="px-4 py-3 font-mono text-xs">
                      <a href="https://www.virthli.in/2012/03/hmar-clans.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline inline-flex items-center gap-1">
                        virthli.in <ExternalLink size={11} />
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-4 py-3 font-bold text-stone-900">Hmar Inpui</td>
                    <td className="px-4 py-3">21 Customary Administrative Clans (<em>Hnam 21</em>)</td>
                    <td className="px-4 py-3">Tribal governance & customary law</td>
                    <td className="px-4 py-3 font-mono text-xs text-stone-500">Customary Archives</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-bold text-stone-900">Dr. Lal Dena</td>
                    <td className="px-4 py-3">Ancestral & Regional Clan History</td>
                    <td className="px-4 py-3">Historical evolution & migration records</td>
                    <td className="px-4 py-3 font-mono text-xs text-stone-500">Academic Publication (2008)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* References & Bibliography */}
          <article className="space-y-4 pt-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
              <BookOpen size={16} className="text-emerald-800" />
              <span>References & Selected Bibliography</span>
            </div>
            <div className="p-6 rounded-xl border border-stone-200 bg-white text-xs sm:text-sm font-sans space-y-3 text-stone-700 leading-relaxed shadow-xs">
              <p><strong>Benedict, Paul K.</strong> (1972). <em>Sino-Tibetan: A Conspectus</em>. Contributing editor James A. Matisoff. Cambridge: Cambridge University Press.</p>
              <p><strong>Burling, Robbins.</strong> (2003). "The Tibeto-Burman Languages of Northeastern India." In Graham Thurgood and Randy J. LaPolla (eds.), <em>The Sino-Tibetan Languages</em>, pp. 169–191. London: Routledge.</p>
              <p><strong>DeLancey, Scott.</strong> (2013). "The History of Postverbal Agreement in Kuki-Chin." <em>Journal of the Southeast Asian Linguistics Society (JSEALS)</em>, 6: 1–17.</p>
              <p><strong>DeLancey, Scott.</strong> (2015). "Morphological Evidence for Tani Subgrouping." In Linda Konnerth et al. (eds.), <em>North East Indian Linguistics 7</em>. Canberra: Pacific Linguistics.</p>
              <p><strong>Dena, Lal.</strong> (2008). <em>Hmar of North East India: A History</em>. Imphal/New Delhi: Scholar Publishing House & Hmar Historical Society.</p>
              <p><strong>Grierson, George A.</strong> (1904). <em>Linguistic Survey of India: Vol. III, Part III, Tibeto-Burman Family: Specimens of the Kuki-Chin and Burma Groups</em>. Calcutta: Office of the Superintendent of Government Printing.</p>
              <p><strong>Hammarström, Harald, Robert Forkel, Martin Haspelmath, & Sebastian Bank.</strong> (2024). <em>Glottolog 5.0 / 5.3: Kuki-Chin-Naga (kuki1245)</em>. Leipzig: Max Planck Institute for Evolutionary Anthropology.</p>
              <p><strong>Konnerth, Linda.</strong> (2018). "The Historical Phonology of Monsang (Northwestern South-Central / 'Kuki-Chin')." <em>Himalayan Linguistics</em>, 17(1): 111–144.</p>
              <p><strong>Matisoff, James A.</strong> (2003). <em>Handbook of Proto-Tibeto-Burman: System and Philosophy of Sino-Tibetan Reconstruction</em>. Berkeley: University of California Press.</p>
              <p><strong>Post, Mark W., & Robbins Burling.</strong> (2017). "The Sino-Tibetan Languages of Northeast India." In Graham Thurgood and Randy J. LaPolla (eds.), <em>The Sino-Tibetan Languages</em> (2nd ed.), pp. 213–242. London: Routledge.</p>
              <p><strong>Pudaite, Rochunga.</strong> (1960). <em>The Education of the Hmar People</em>. Sielmat: Samaritan Express.</p>
              <p><strong>Shafer, Robert.</strong> (1955). "Classification of the Sino-Tibetan Languages." <em>Word</em>, 11(1): 94–111.</p>
              <p><strong>Shakespear, John.</strong> (1912). <em>The Lushei Kuki Clans</em>. London: Macmillan and Co., Limited.</p>
              <p><strong>Van Bik, Kenneth.</strong> (2009). <em>Proto-Kuki-Chin: A Reconstructed Ancestor of the Kuki-Chin Languages</em>. STEDT Monograph Series No. 8. Berkeley: Center for Southeast Asia Studies, University of California.</p>
              <p><strong>Virthli Information Portal.</strong> (2012). "Hmar Clans Documentation & Classification." <em>Virthli.in Digital Registries</em>. <a href="https://www.virthli.in/2012/03/hmar-clans.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline">virthli.in/2012/03/hmar-clans.html</a>.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
