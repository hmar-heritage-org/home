import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Compass, ArrowRight, BookOpen, FileText, Globe, AlertTriangle } from "lucide-react";

export const metadata = {
  title: `Language Standards & Classifications | ${siteConfig.fullName}`,
  description: "Official policy of the Hmar Heritage Foundation on language classification, clan diversity, colonial exonyms, the Zo autonym, and international registry standards.",
};

export default function StandardsPage() {
  return (
    <div className="py-12 space-y-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* 1. Left-Aligned Editorial Header */}
      <section className="space-y-6 border-b border-slate-200 pb-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#9E1B24]" />
            <span>Official Policy &amp; Standards Specification</span>
          </div>
          <div className="text-xs font-mono text-slate-700 font-bold bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full">
            Standards Policy Draft
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Language Standards &amp; Classification Policy
        </h1>

        <p className="text-base text-slate-700 leading-relaxed font-sans font-medium">
          Our official policy on language classification, clan diversity, replacing colonial exonyms with the Zo autonym, and updating metadata standards across global software registries.
        </p>
      </section>

      {/* 2. Clean Top Status Notice Banner */}
      <div className="bg-[#FAF9F6] border border-slate-300 rounded-2xl p-5 sm:p-6 space-y-1.5 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
          <FileText className="w-4 h-4 text-[#9E1B24]" />
          <span>Drafting &amp; Review Phase · In Progress</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          This policy specification is currently in drafting and review phase while core digital portals and maintainer pipelines are deployed.
        </p>
      </div>

      {/* 3. Typographic Essay Body */}
      <div className="space-y-12 text-slate-800 leading-relaxed text-base font-sans pt-2">
        
        {/* Section I: Policy Scope & Purpose */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section I · Policy Scope &amp; Purpose
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Target Audience and Operational Preamble
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              This policy specification is written primarily for upstream institutional database maintainers, standards registration authorities, comparative linguists, and software engineers. Specifically, it provides technical guidance for maintainers at <strong>Glottolog</strong> (Max Planck Institute for Evolutionary Anthropology), <strong>SIL International / Ethnologue</strong>, <strong>ISO 639 Registration Authorities</strong>, and open NLP corpus maintainers on platforms like <strong>Hugging Face</strong>.
            </p>
            <p>
              This page is an operational policy statement of the Hmar Heritage Foundation rather than a casual general-audience overview or a formal academic research paper; it should not be cited as a peer-reviewed academic source. The citations and references included throughout are provided to demonstrate that our metadata standards are grounded in existing comparative linguistics and ethnographic research rather than un-supported assertions.
            </p>
            <p>
              The Foundation does not claim scientific authority over global language registries or neighboring speech communities. Our purpose is to establish clear, transparent standards for our own open datasets, software metadata, and community digital archives, while petitioning upstream maintainers for long-overdue metadata corrections. We explicitly recognize that Glottolog did not invent these historical colonial exonyms, but simply recorded what existing published literature contained. However, as Glottolog has become the primary programmatic taxonomy root powering modern language technology and AI pipelines worldwide, it has become responsible for how these legacy labels are perpetuated into the digital future.
            </p>
            <p>
              While the language used on this page may sound definitive and at times confrontational, that is not our intention; there is simply no soft way to state that we reject these classifications without making it sound like a declaration. We also understand that our stance is far more ambitious than it needs to be, but there can be no middle ground when we can literally observe structural flaws that directly undermine our languages and, by proxy, the living identity of our culture.
            </p>
          </div>
        </section>

        {/* Section II: Clan Diversity and Speech Varieties */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section II · Clan Diversity &amp; Speech Varieties
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            The Ancestral Bedrock and Literary Standard
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              Ethnographic research documents 14 foundational ancestral clans, historically known as <em>Hnam 14</em> (Dr. H. Rochunga Pudaite, 1960): <strong>Lawitlang, Zote, Ngurte, Khawbung, Ṭhiek, Lungṭau, Leiri, Darngawn, Pakhuong, Hrangkhawl, Biate, Changsan, Khawlhring</strong>, and <strong>Faihriem (Saihriem)</strong>. Over centuries, these clans expanded into sub-clans (<em>pahnam</em>) and family lineages across Manipur, Mizoram, Assam, Meghalaya, and Tripura.
            </p>
            <p>
              Written Standard Hmar (ISO 639-3: <code>hmr</code>, Glottocode: <code>hmar1241</code>) developed primarily from the <em>Khawsak / Ṭhiek</em> speech variety, which served as the early literary standard for Bible translation, hymnbooks, and school textbooks. Major clans such as <strong>Zote, Leiri, Lungṭau, Darngawn, Khawbung, Rawite</strong>, and <strong>Vangsie</strong> speak closely intertwined varieties that are subsumed under standard <code>hmr</code> without separate ISO codes.
            </p>
            <p>
              Native speech communities must have a direct voice in how their speech varieties are represented in global registries. Currently, international standards bodies display arbitrary inconsistencies when cataloging Hmar clan speech varieties. For instance, <strong>Faihriem (Saihriem / Syriem)</strong> has no dedicated ISO 639-3 code and remains un-coded in Ethnologue, despite Glottolog maintaining a distinct entry (<code>syri1242</code>). Similarly, speech varieties such as <strong>Leiri</strong> and <strong>Zote</strong> possess distinct linguistic identities spoken by native communities, yet they do not have dedicated ISO 639-3 language codes in global registries. They are either administratively subsumed under standard <code>hmr</code> or omitted from international listings entirely.
            </p>
            <p>
              We emphasize that these registry discrepancies stem from historical institutional neglect and minimal community participation in international standards bodies rather than malice. To be clear, the Foundation has no major dispute with ISO 639-3 or Ethnologue regarding the standard Hmar literary code (<code>hmr</code>). Our primary focus is opening dialogue on recognizing unlisted ancestral speech varieties as digital documentation expands. Asserting that these varieties must immediately receive separate language codes would be premature without thorough field study; our aim is simply ensuring that global registries remain open to native community representation as documentation progresses.
            </p>

            {/* Table II.A: Academic & Customary Consensus Framework */}
            <div className="space-y-3 pt-6">
              <h3 className="font-serif font-bold text-slate-900 text-lg">
                Table II.A · Comparative Academic &amp; Customary Clan Frameworks
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Below is a comparative breakdown of how major Hmar clans are documented across foundational ethnographic literature (Dr. H. Rochunga Pudaite 1960: 14 Core Clans), colonial surveys (Lt. Col. J. Shakespear 1912: 16 Colonial Clans), and customary governance (<em>Hmar Inpui</em>: 21 Council Clans).
              </p>
              
              <div className="my-4 overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
                <table className="min-w-full divide-y divide-slate-200 text-xs font-sans">
                  <thead className="bg-slate-100 font-mono text-slate-800 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="px-3 py-3 text-left">#</th>
                      <th className="px-3 py-3 text-left">Clan Name</th>
                      <th className="px-3 py-3 text-center">Pudaite (1960)</th>
                      <th className="px-3 py-3 text-center">Shakespear (1912)</th>
                      <th className="px-3 py-3 text-center">Hmar Inpui (21)</th>
                      <th className="px-3 py-3 text-left">Registry / ISO Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">1</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Ṭhiek</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] font-bold text-emerald-800">hmr / hmar1241 (Literary Standard)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">2</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Lungṭau</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-amber-50/30">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">3</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Leiri</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] font-semibold text-amber-800">Distinct Variety (Unlisted in ISO)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-amber-50/30">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">4</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Zote</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] font-semibold text-amber-800">Distinct Variety (Unlisted in ISO)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">5</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Darngawn</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">6</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Khawbung</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">7</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Lawitlang</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">8</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Ngurte</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">9</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Pakhuong</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">10</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Changsan</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">11</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Khawlhring</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">12</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Faihriem (Saihriem)</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] font-bold text-slate-900">syri1242 (Distinct Variety)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">13</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Biate</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] font-bold text-slate-900">bie / biat1247 (Distinct Variety)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-emerald-50/20">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">14</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Hrangkhawl</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] font-bold text-slate-900">hra / hran1239 (Distinct Variety)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">15</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Khelte (Khiengte)</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">16</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Pautu</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">17</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Rawite</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">18</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Sakum</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">19</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Vangsie</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">20</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Sakechep (Khelma)</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] font-bold text-slate-900">klh / khel1240 (Distinct Variety)</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-3 py-2 text-center font-mono text-slate-400">21</td>
                      <td className="px-3 py-2 font-bold text-slate-900">Ngente</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center text-slate-300">-</td>
                      <td className="px-3 py-2 text-center font-bold text-emerald-700">Yes</td>
                      <td className="px-3 py-2 font-mono text-[11px] text-slate-600">Subsumed under hmr</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section III: The Foundation's Position */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section III · The Foundation&apos;s Position
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Rejection of Colonial Exonyms and Adoption of Zo
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              The Hmar Heritage Foundation rejects legacy colonial umbrella terms, specifically macro-labels like &quot;Kuki-Chin-Naga&quot; and &quot;Kuki-Chin&quot;, as obsolete exonyms that distort language relationships for administrative convenience.
            </p>
            <p>
              In place of these colonial labels, the Foundation advocates for adopting the autonym <strong>Zo</strong>, academically described as <em>South-Central Tibeto-Burman</em>, as the family name for the 55 closely related speech varieties across Northeast India, Western Myanmar, and the Chittagong Hill Tracts. We maintain that language classification must pair comparative phonological linguistics with deep ethnographic study, consulting native speakers, community elders, and living oral history, rather than relying on century-old administrative shortcuts.
            </p>
            <p>
              Restructuring global registries like Glottolog and SIL Ethnologue is of critical importance because academic linguistic papers, digital corpora, and AI datasets rely directly on these databases for indexing and discoverability. When open platforms force legacy tags like <code>kuki-chin-naga</code> for search indexing, they create a self-reinforcing loop where researchers feel compelled to include outdated terms in paper abstracts just to ensure their work remains discoverable in citation databases.
            </p>
            <p>
              Even while formal scientific committee reviews take time to complete, respecting native cultural sentiments by abandoning colonial exonyms in favor of authentic autonyms like <strong>Zo</strong> is the most appropriate and responsible path forward. Until institutional registries complete these ethnographic updates, the Foundation operationalizes the <strong>Zo</strong> classification across all its public datasets, Hugging Face repositories, and software metadata. By implementing this standard today, we lead by example and set an open benchmark for researchers and developers worldwide.
            </p>
            <p>
              To maintain software compatibility, the Foundation preserves existing individual ISO 639-3 language codes, such as <code>hmr</code>, <code>lus</code>, <code>pck</code>, and <code>ted</code>, while updating overarching family classification metadata from legacy exonyms to <strong>Zo</strong>. Furthermore, we affirm the complete separation of Meitei, Naga, and Karbi into their own independent language branches.
            </p>
          </div>
        </section>

        {/* Section IV: Historical Critique */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section IV · Historical Critique
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Grierson&apos;s Stated Criteria vs. Administrative Grouping
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              The historical error began in the <em>Linguistic Survey of India</em> (LSI Vol. III, Part III, 1904), where G.A. Grierson acknowledged the outsider origin of the terminology:
            </p>
            
            <blockquote className="my-4 border-l-4 border-[#9E1B24] pl-4 py-2.5 italic text-slate-700 bg-slate-50 rounded-r-md font-serif text-sm sm:text-base shadow-sm">
              &quot;The name Kuki is an Assamese or Bengali word, applied to various hill tribes... Chin is a Burmese word used to denote the various hill tribes living in the country between Burma and the provinces of Assam and Bengal.&quot;
              <span className="block not-italic text-xs font-mono text-slate-700 font-bold mt-1.5">G.A. Grierson, LSI Vol. III, Part III (1904, pp. 1-2)</span>
            </blockquote>

            <p>
              However, Grierson departed from his stated criteria by placing Meitei, a historically valley-dwelling population of the Imphal Valley, under the same umbrella. He did this despite explicitly acknowledging that Meitei possesses structural, morphological, and lexical ties that align it more closely with Written Burmese and Classical Tibetan than with the surrounding hill languages:
            </p>

            <blockquote className="my-4 border-l-4 border-[#9E1B24] pl-4 py-2.5 italic text-slate-700 bg-slate-50 rounded-r-md font-serif text-sm sm:text-base shadow-sm">
              &quot;It will also be seen that Meithei in some respects agrees with written Burmese, as against the other languages of the group... Connection with Tibetan.&quot;
              <span className="block not-italic text-xs font-mono text-slate-700 font-bold mt-1.5">G.A. Grierson, LSI Vol. III, Part III (1904, pp. 6, 20-24)</span>
            </blockquote>

            <p>
              In the mid-20th century, structural surveys by Robert Shafer (1955) and Paul K. Benedict (1972) merged Kuki-Chin, various Naga languages, Meitei, and Karbi under broad umbrella terms. When Shafer published his classification, the undivided state of Assam had not yet been reorganized into modern states like Nagaland (1963) or Mizoram (1972/1987). Subsequent scholars easily confused colonial hill administrative groupings with true language families, compounding administrative shortcuts into permanent academic labels.
            </p>
          </div>
        </section>

        {/* Section V: Cladistic Restructuring & Table */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section V · Cladistic Restructuring
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Replacing the Parent Exonym Node with Zo
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              To replace colonial administrative shortcuts with scientific accuracy, the Foundation advocates for separating non-Zo language branches from the top-level macro-node (Glottocode: <code>kuki1245</code>, 94 speech varieties) into independent nodes, while renaming the remaining parent node to the authentic autonym <strong>Zo</strong> (55 speech varieties).
            </p>
            <p>
              For database maintainers and registry maintainers, re-assigning these non-Zo branches into their own independent Sino-Tibetan nodes is significantly simpler than building an isolated tree from scratch, as the 55 Zo speech varieties form the vast majority of the existing clade and share proven Proto-Zo phonological innovations.
            </p>
            <p>
              We explicitly petition for the separation of the following five non-Zo branches into independent nodes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base font-semibold text-slate-800">
              <li>Angami-Ao Branch (Glottocode: <code>anga1312</code>, 18 speech varieties)</li>
              <li>Karbic Branch (Glottocode: <code>karb1240</code>, 2 speech varieties)</li>
              <li>Manipuri / Meitei Branch (Glottocode: <code>mani1292</code>, Independent node)</li>
              <li>Tangkhul-Maring Branch (Glottocode: <code>tang1335</code>, 11 speech varieties)</li>
              <li>Zemeic Branch (Glottocode: <code>zeme1241</code>, 7 speech varieties)</li>
            </ul>
            <p>
              Once these 39 non-Zo speech varieties are established as independent Sino-Tibetan branches, the primary parent node (<code>kuki1246</code>) seamlessly becomes the dedicated <strong>Zo</strong> language clade.
            </p>

            {/* Cladistic Restructuring Table */}
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
                    <td className="px-4 py-3">Dissolve non-monophyletic geographical macro-node (94 varieties).</td>
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
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">anga1312</td>
                    <td className="px-4 py-3">Angami-Ao</td>
                    <td className="px-4 py-3 font-bold text-slate-900">Angami-Ao Branch (Independent)</td>
                    <td className="px-4 py-3">Independent node (18 varieties).</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">karb1240</td>
                    <td className="px-4 py-3">Karbic</td>
                    <td className="px-4 py-3 font-bold text-slate-900">Karbic Branch (Independent)</td>
                    <td className="px-4 py-3">Independent node (2 varieties).</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">mani1292</td>
                    <td className="px-4 py-3">Manipuri / Meitei</td>
                    <td className="px-4 py-3 font-bold text-slate-900">Meitei Branch (Independent)</td>
                    <td className="px-4 py-3">Independent Sino-Tibetan node outside Zo.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">tang1335</td>
                    <td className="px-4 py-3">Tangkhul-Maring</td>
                    <td className="px-4 py-3 font-bold text-slate-900">Tangkhul-Maring Branch (Independent)</td>
                    <td className="px-4 py-3">Independent node (11 varieties).</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-4 py-3 font-mono font-semibold text-slate-900">zeme1241</td>
                    <td className="px-4 py-3">Zemeic</td>
                    <td className="px-4 py-3 font-bold text-slate-900">Zemeic Branch (Independent)</td>
                    <td className="px-4 py-3">Independent node (7 varieties).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section VI: Indigenous Autonomy */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VI · Indigenous Autonomy
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Respecting Indigenous Self-Determination
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              Separating Naga, Karbi, and Meitei languages from the Zo family tree restores cultural dignity and linguistic accuracy for all groups involved.
            </p>
            <p>
              Lumping these distinct groups under a colonial exonym was disrespectful to Naga, Karbi, Meitei, and Zo heritage alike. However, the Foundation maintains clear institutional boundaries: where Naga, Karbi, or Meitei languages are classified within Sino-Tibetan remains strictly up to those respective communities, their scholars, and field linguists.
            </p>
            <p>
              We do not dictate the classification of neighboring groups. Our goal is removing colonial clutter so every community across the region can define its own linguistic heritage.
            </p>
          </div>
        </section>

        {/* Section VII: Field Research & Comparative Linguistics */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section VII · Field Research
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Field Evidence vs. Legacy Registries
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              Institutional registries often claim legacy classifications reflect academic consensus. In reality, primary comparative linguists actively conducting field research reject these colonial labels.
            </p>
            <p>
              In his benchmark phonological reconstruction <em>Proto-Kuki-Chin</em> (STEDT Monograph 8, 2009), Dr. Kenneth Van Bik explicitly excludes Naga languages from the family, demonstrating that Naga languages share no unique phonological innovations with Zo languages.
            </p>
            <p>
              Similarly, Robbins Burling and Mark W. Post (2003, 2017) show that &quot;Naga&quot; and &quot;Kuki-Chin-Naga&quot; are not valid genetic units, emphasizing that compound colonial labels are geographic catch-alls lacking comparative evidence of shared sound innovations.
            </p>
            <p>
              Furthermore, Scott DeLancey (2013, 2015) treats the South-Central Zo branch as a distinct primary lineage, while Linda Konnerth (2018) recommends adopting <em>South-Central Trans-Himalayan</em> specifically because colonial exonyms carry negative connotations for native speakers. Citing academic consensus to justify century-old administrative shortcuts while ignoring the explicit reconstructions of field researchers misrepresents contemporary linguistics.
            </p>
          </div>
        </section>

        {/* Section VIII: Methodological Contradictions & Internal Tree Errors */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#9E1B24]" />
            <span>Section VIII · Registry Infrastructure &amp; Tree Analysis</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Internal Inconsistencies in Glottolog Taxonomy
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              A detailed inspection of current Glottolog tree structures reveals significant internal contradictions resulting from relying on legacy literature rather than native field evidence:
            </p>
            
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>
                <strong>Misplaced Ancestral Hmar Clans:</strong> Ancestral core clans of the Hmar people (<em>Hnam 14</em>) are arbitrarily split across distant tree branches in Glottolog. For example, <em>Changsan</em> (Glottocode: <code>chan1312</code>) is indexed under <code>Peripheral Kuki-Chin -&gt; Northeastern -&gt; Thadoic -&gt; Thado Chin</code>, while standard <em>Hmar</em> is placed under <code>Central Kuki-Chin -&gt; Mizoic -&gt; Hmaric</code>. Similarly, <em>Syriem (Saihriem)</em> is placed under <code>Western Northwestern Kuki-Chin -&gt; Sakachep-Chorei</code>. This demonstrates that colonial officers recorded clan names in isolation during regional administrative surveys, and registry frameworks converted those historical shortcuts into split tree branches.
              </li>
              <li>
                <strong>Duplicated Nodes across Sub-branches:</strong> Speech varieties like <em>Hrangkhawl</em> are indexed twice under separate parent branches (placed under <code>Mizoic -&gt; Hmaric</code> as well as under <code>Western Northwestern Kuki-Chin -&gt; Halam</code>). Similarly, <em>Ralte</em> is duplicated under both <code>Mizoic -&gt; Mizo</code> and <code>Thadoic -&gt; Paiteic</code>.
              </li>
              <li>
                <strong>Omission of Living Languages:</strong> Varieties such as <em>Leiri</em> and <em>Zote</em> possess distinct speech identities spoken by native communities, yet they are completely omitted as independent language nodes in Glottolog.
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-slate-800 text-sm leading-relaxed my-4 space-y-2">
              <div className="font-bold font-mono text-amber-900 text-xs uppercase tracking-wider">
                Clarification on Restructuring Proposals
              </div>
              <p>
                We do not demand an immediate, arbitrary restructuring without empirical field study. A comprehensive field study pairing comparative phonological reconstructions with native ethnographic research must be conducted.
              </p>
              <p>
                Our objective is to highlight these structural contradictions, demonstrating that legacy academic literature contains unresolved errors that must not be treated as permanent scientific consensus.
              </p>
            </div>

            <p>
              Updating these legacy structures is a matter of long-overdue institutional care. We recognize that updating century-old language classifications is genuinely disruptive to institutional registries, database schemas, and academic indexing systems. Changing top-level family nodes requires technical refactoring, updating cross-references, and adapting downstream metadata pipelines. However, technical inconvenience cannot justify perpetuating outdated colonial labels. Structural corrections should not be overlooked simply because they require institutional effort.
            </p>
          </div>
        </section>

        {/* Section IX: Governance & Socio-Technical Impacts */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section IX · Governance &amp; Policy Impacts
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            The Cost of Misclassification
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              Inaccurate language classification is not an abstract technical debate; it has real-world consequences for governance, education, and cultural identity.
            </p>
            <p>
              For decades, official government registries and census frameworks lumped distinct speech communities together under broad colonial exonyms. While partial administrative updates have been made, overarching legacy labels still linger in state policy.
            </p>
            <p>
              This administrative lumping distorts history. For communities that transitioned into written literacy within the last century, state lumping affects how history is documented and passed down. When young generations read government documents that force a foreign administrative label onto their heritage, it rewrites their origin stories through administrative routine.
            </p>
            <p>
              Furthermore, modern digital governance depends on precise language tags. Under educational mandates, mother-tongue textbook development, curriculum funding, and teacher training depend on recognized language classifications. Flawed grouping leads to minority varieties missing out on textbook printing, preservation grants, and localized software interfaces.
            </p>
            <p>
              Treating legacy labels as mere technical tags while ignoring their impact on policy, education, and identity denies institutional responsibility. Language is the vessel of cultural identity, and standards bodies share in the responsibility for the administrative legacy they maintain.
            </p>
          </div>
        </section>

        {/* Section X: Digital Implementation */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section X · Digital Implementation
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Applying the Zo Standard Across Open Datasets
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              To lead by example, the Hmar Heritage Foundation applies this policy across all its open digital repositories, text corpora, speech recordings, and language datasets.
            </p>
            <p>
              We maintain individual ISO 639-3 codes, such as <code>hmr</code> for Hmar, for seamless software and Unicode compatibility, while updating overarching family labels to <strong>Zo</strong> across all dataset metadata headers. All open-source text and audio datasets published by the Foundation on platforms like Hugging Face pair stable ISO codes with updated taxonomic headers: <code>language_iso639_3: &quot;hmr&quot;</code>, <code>clade: &quot;Zo&quot;</code>, <code>subgroup: &quot;Central Zo (Hmaric)&quot;</code>, <code>academic_alternative: &quot;South-Central Tibeto-Burman&quot;</code>.
            </p>
            <p>
              Finally, the Foundation will submit formal proposals to Glottolog to dissolve the macro-node <code>kuki1245</code>, isolate Meitei and Naga branches, and rename <code>kuki1246</code> to <strong>Zo / South-Central</strong>, while petitioning SIL International and ISO 639-5 to update overarching family classifications.
            </p>
          </div>
        </section>

        {/* Section XI: Digital & Community Cultural Registries (Virthli.in & Pan-Hmar Documentation) */}
        <section className="space-y-4 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#9E1B24]" />
            <span>Section XI · Digital &amp; Community Cultural Registries</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Living Community Repositories (Virthli.in &amp; Pan-Hmar Documentation)
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base">
            <p>
              While peer-reviewed academic literature primarily focuses on established cladistic roots, non-academic digital portals like <strong>Virthli.in (2012)</strong> and pan-Hmar cultural registries serve a vital role in capturing living community knowledge.
            </p>
            <p>
              Digital community portals document the broader spectrum of <strong>40 recognized Hmar clans</strong> and over <strong>200+ sub-clans (<em>pahnam</em>)</strong> that share the ancestral <em>Sinlung</em> origin tradition across Northeast India. By acknowledging these community archives alongside academic research, the Foundation bridges formal comparative linguistics with living indigenous heritage.
            </p>

            {/* Table XI: Community Registry Breakdown */}
            <div className="my-6 overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-xs font-sans">
                <thead className="bg-slate-100 font-mono text-slate-800 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="px-3 py-3 text-left">Source Portal / Registry</th>
                    <th className="px-3 py-3 text-left">Scope &amp; Documented Clans</th>
                    <th className="px-3 py-3 text-left">Ethnolinguistic Focus</th>
                    <th className="px-3 py-3 text-left">Access Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="px-3 py-2.5 font-bold text-slate-900">Virthli News &amp; Information Portal (2012)</td>
                    <td className="px-3 py-2.5">40 Clans &amp; 200+ Sub-Clans (*Pahnam*)</td>
                    <td className="px-3 py-2.5">Living pan-Hmar cultural &amp; clan genealogy</td>
                    <td className="px-3 py-2.5 font-mono text-[11px]">
                      <a href="https://www.virthli.in/2012/03/hmar-clans.html" target="_blank" rel="noopener noreferrer" className="text-[#9E1B24] underline font-bold">
                        virthli.in/2012/03/hmar-clans.html
                      </a>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-3 py-2.5 font-bold text-slate-900">Hmar Inpui Customary Council</td>
                    <td className="px-3 py-2.5">21 Customary Administrative Clans (*Hnam 21*)</td>
                    <td className="px-3 py-2.5">Tribal governance &amp; customary law</td>
                    <td className="px-3 py-2.5 text-slate-500 font-mono text-[11px]">Customary Archives</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-3 py-2.5 font-bold text-slate-900">Hmar Historical Society (Dr. Lal Dena)</td>
                    <td className="px-3 py-2.5">Ancestral &amp; Regional Clan History</td>
                    <td className="px-3 py-2.5">Historical evolution &amp; migration records</td>
                    <td className="px-3 py-2.5 text-slate-500 font-mono text-[11px]">Academic Publication (2008)</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
            <p><strong>Burling, Robbins.</strong> (2003). &quot;The Tibeto-Burman Languages of Northeastern India.&quot; In Graham Thurgood and Randy J. LaPolla (eds.), <em>The Sino-Tibetan Languages</em>, pp. 169-191. London: Routledge.</p>
            <p><strong>DeLancey, Scott.</strong> (2013). &quot;The History of Postverbal Agreement in Kuki-Chin.&quot; <em>Journal of the Southeast Asian Linguistics Society (JSEALS)</em>, 6: 1-17.</p>
            <p><strong>DeLancey, Scott.</strong> (2015). &quot;Morphological Evidence for Tani Subgrouping.&quot; In Linda Konnerth et al. (eds.), <em>North East Indian Linguistics 7</em>. Canberra: Pacific Linguistics.</p>
            <p><strong>Dena, Lal.</strong> (2008). <em>Hmar of North East India: A History</em>. Imphal/New Delhi: Scholar Publishing House &amp; Hmar Historical Society.</p>
            <p><strong>Grierson, George A.</strong> (1904). <em>Linguistic Survey of India: Vol. III, Part III, Tibeto-Burman Family: Specimens of the Kuki-Chin and Burma Groups</em>. Calcutta: Office of the Superintendent of Government Printing.</p>
            <p><strong>Hammarström, Harald, Robert Forkel, Martin Haspelmath, &amp; Sebastian Bank.</strong> (2024). <em>Glottolog 5.0 / 5.3: Kuki-Chin-Naga (kuki1245)</em>. Leipzig: Max Planck Institute for Evolutionary Anthropology.</p>
            <p><strong>Konnerth, Linda.</strong> (2018). &quot;The Historical Phonology of Monsang (Northwestern South-Central / &apos;Kuki-Chin&apos;).&quot; <em>Himalayan Linguistics</em>, 17(1): 111-144.</p>
            <p><strong>Matisoff, James A.</strong> (2003). <em>Handbook of Proto-Tibeto-Burman: System and Philosophy of Sino-Tibetan Reconstruction</em>. Berkeley: University of California Press.</p>
            <p><strong>Post, Mark W., &amp; Robbins Burling.</strong> (2017). &quot;The Sino-Tibetan Languages of Northeast India.&quot; In Graham Thurgood and Randy J. LaPolla (eds.), <em>The Sino-Tibetan Languages</em> (2nd ed.), pp. 213-242. London: Routledge.</p>
            <p><strong>Pudaite, Rochunga.</strong> (1960). <em>The Education of the Hmar People</em>. Sielmat: Samaritan Express.</p>
            <p><strong>Shafer, Robert.</strong> (1955). &quot;Classification of the Sino-Tibetan Languages.&quot; <em>Word</em>, 11(1): 94-111.</p>
            <p><strong>Shakespear, John.</strong> (1912). <em>The Lushei Kuki Clans</em>. London: Macmillan and Co., Limited.</p>
            <p><strong>Van Bik, Kenneth.</strong> (2009). <em>Proto-Kuki-Chin: A Reconstructed Ancestor of the Kuki-Chin Languages</em>. STEDT Monograph Series No. 8. Berkeley: Center for Southeast Asia Studies, University of California.</p>
            <p><strong>Virthli Information Portal.</strong> (2012). &quot;Hmar Clans Documentation &amp; Classification.&quot; <em>Virthli.in Digital Registries</em>. Available online: <a href="https://www.virthli.in/2012/03/hmar-clans.html" target="_blank" rel="noopener noreferrer" className="text-[#9E1B24] underline font-medium">virthli.in/2012/03/hmar-clans.html</a>.</p>
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
