import { useState } from 'react';
import { Compass, AlertCircle, List } from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const IsoLink = ({ code, className = "" }: { code: string; className?: string }) => (
  <a
    href={`https://iso639-3.sil.org/code/${code}`}
    target="_blank"
    rel="noopener noreferrer"
    title={`ISO 639-3: ${code}`}
    className={`hover:underline text-emerald-800 font-mono ${className}`}
  >
    {code}
  </a>
);

const GlottoLink = ({ id, className = "" }: { id: string; className?: string }) => (
  <a
    href={`https://glottolog.org/resource/languoid/id/${id}`}
    target="_blank"
    rel="noopener noreferrer"
    title={`Glottolog: ${id}`}
    className={`hover:underline text-emerald-800 font-mono ${className}`}
  >
    {id}
  </a>
);

const standardsSections = [
  {
    id: "sec-1",
    num: "Section I",
    title: "Policy Purpose",
    desc: "Accountability in global databases, software pipelines, and taxonomy trees."
  },
  {
    id: "sec-2",
    num: "Section II",
    title: "Historical Critique",
    desc: "Methodological flaws in Grierson (1904) and Konow (1909)."
  },
  {
    id: "sec-3",
    num: "Section III",
    title: "Shafer's Expansion",
    desc: "Over-extension of the Kukish section and false genetic grouping."
  },
  {
    id: "sec-4",
    num: "Section IV",
    title: "Modern Linguistic Refutation",
    desc: "Dissolving composite groups via Post & Burling areal diffusion models."
  },
  {
    id: "sec-5",
    num: "Section V",
    title: "Structural Registry Misalignment",
    desc: "Identity miniaturization, ST scheduling, and the Thadou-Kuki discrepancy."
  },
  {
    id: "sec-6",
    num: "Section VI",
    title: "Clan Diversity & Customary Registry",
    desc: "The 14 ancestral clans, literary standard, and comparative frameworks."
  },
  {
    id: "sec-7",
    num: "Section VII",
    title: "Methodological Inconsistencies",
    desc: "Arbitrary tree splitting, duplicate nodes, and speech subsumption."
  },
  {
    id: "sec-8",
    num: "Section VIII",
    title: "Re-Classification & Autonym Adoption",
    desc: "Dissolving kuki1245 and establishing Zo across 55 speech varieties."
  },
  {
    id: "sec-9",
    num: "Section IX",
    title: "Indigenous Self-Determination",
    desc: "Autonomy for Naga, Karbi, and Meitei independent clades."
  },
  {
    id: "sec-10",
    num: "Section X",
    title: "Governance & Educational Policy",
    desc: "Mother-tongue textbook funding, NEP 2020, and cultural survival."
  },
  {
    id: "sec-11",
    num: "Section XI",
    title: "Digital Implementation",
    desc: "Open dataset schemas, language metadata, and tokenizer standards."
  },
  {
    id: "sec-12",
    num: "Section XII",
    title: "Community Cultural Registries",
    desc: "Living clan genealogies, Virthli archives, and customary tribal bodies."
  }
];

export default function Standards() {
  const [tocOpen, setTocOpen] = useState(true);

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
              <IsoLink code="hmr" className="text-2xl font-mono font-bold text-stone-900" />
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
              <GlottoLink id="hmar1241" className="text-2xl font-mono font-bold text-stone-900" />
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
              Language Standards &amp; Classification Policy
            </h2>
          </div>

          {/* Unified Table of Contents */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
            {/* Master Header */}
            <div className="bg-stone-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-stone-950">
              <div className="flex items-center gap-3">
                <List className="w-4 h-4 text-emerald-400" />
                <div>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-stone-100">
                    Policy Architecture &amp; Table of Contents
                  </h3>
                  <p className="text-[11px] text-stone-400 font-sans">
                    12 Scientific &amp; Registry Sections
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setTocOpen(!tocOpen)}
                className="text-xs font-mono font-medium text-emerald-300 hover:text-emerald-200 bg-stone-800 hover:bg-stone-700/80 px-3 py-1.5 rounded-lg border border-stone-700 transition-colors cursor-pointer"
              >
                {tocOpen ? 'Collapse TOC' : 'Expand TOC'}
              </button>
            </div>

            {/* Section Links */}
            {tocOpen && (
              <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-2 bg-white">
                {standardsSections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="p-2.5 rounded-lg border border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group block"
                  >
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-mono text-xs font-bold text-stone-700 group-hover:underline">
                        {sec.num}
                      </span>
                      <strong className="text-stone-900 text-xs font-semibold">
                        {sec.title}
                      </strong>
                    </div>
                    <p className="text-stone-500 text-[11px] leading-relaxed mt-1 line-clamp-2">
                      {sec.desc}
                    </p>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* EMPIRICAL SPECIFICATION */}
          <div className="pt-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-emerald-900 bg-emerald-100/80 px-2.5 py-1 rounded">
                SPECIFICATION
              </span>
              <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                Empirical Linguistic Specification
              </span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
              Scientific Evidence, Cladistic Restructuring &amp; Registry Standards
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed mb-10">
              Comparative phonological shifts, customary clan taxonomy, and peer-reviewed refutations of the legacy Sino-Tibetan macro-classifications.
            </p>
          </div>

          {/* Section I */}
          <article id="sec-1" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION I
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Policy Purpose
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              This specification serves as a formal operational justification and open request to academic researchers, comparative linguists, native scholars, and community advocates. Our purpose is to establish clear, transparent standards for our own open datasets, software metadata, and community digital archives, while providing a clean, open-access benchmark for developers and researchers.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              We explicitly recognize that global databases like <strong>Glottolog</strong> (Max Planck Institute for Evolutionary Anthropology), <strong>SIL International / Ethnologue</strong>, and <strong>ISO 639 Registration Authorities</strong> did not invent these historical colonial exonyms, but simply recorded what existing published literature contained. However, as these platforms have become the primary programmatic taxonomy roots powering modern language technology and AI pipelines worldwide, they are now responsible for how these legacy labels—many of which are acknowledged derogatory slurs—are perpetuated into the digital future.
            </p>
            <p className="text-stone-900 font-semibold text-base border-l-4 border-emerald-800 pl-4 py-2 bg-emerald-50/60 rounded-r-md">
              This document outlines the systematic, empirical, and political errors of the legacy "Kuki-Chin-Naga" classification and presents a unified cladistic restructure that replaces colonial-era nomenclature with scientific accuracy and indigenous dignity.
            </p>
          </article>

          {/* Section II */}
          <article id="sec-2" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION II
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Historical Critique
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              The historical error of regional taxonomy began with early colonial surveys (Grierson, 1904; Konow, 1909), which relied on superficial word-order criteria and geographical administrative convenience rather than comparative sound laws (Shafer, 1955).
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              In compiling the <em>Linguistic Survey of India</em> (Vol. III, Part III, 1904), Sir George Abraham Grierson committed a profound structural incoherence. Grierson explicitly acknowledged that "Kuki" and "Chin" were synonymous exonyms used by outsiders to denote various migrating, non-literate hill tribes who had been expelled from the Lushai and Chin hills:
            </p>
            <blockquote className="border-l-4 border-emerald-800 italic pl-4 py-2 my-4 text-stone-800 bg-stone-100/70 rounded-r-md text-sm leading-relaxed">
              "The denomination Kuki-Chin is a purely conventional one, there being no proper name comprising all these tribes... Kuki is an Assamese or Bengali term, applied to various hill tribes... Chin is a Burmese word used to denote the various hill tribes living in the country between Burma and the Provinces of Assam and Bengal."
              <span className="block font-mono text-xs font-semibold text-stone-600 mt-1.5 not-italic">
                — G.A. Grierson, Linguistic Survey of India, Vol. III, Part III (1904, pp. 1–2)
              </span>
            </blockquote>
            <p className="text-stone-700 leading-relaxed text-base">
              Furthermore, he admitted that the people:
            </p>
            <blockquote className="border-l-4 border-emerald-800 italic pl-4 py-2 my-4 text-stone-800 bg-stone-100/70 rounded-r-md text-sm leading-relaxed">
              "...do not themselves recognise the name Chin, but call themselves Yo or Zo and Sho."
              <span className="block font-mono text-xs font-semibold text-stone-600 mt-1.5 not-italic">
                — G.A. Grierson, LSI Vol. III, Part III (1904, p. 2)
              </span>
            </blockquote>
            <p className="text-stone-700 leading-relaxed text-base">
              Despite this, Grierson grouped the <strong>Meitei (Manipuri)</strong> under the same Kuki-Chin linguistic umbrella, creating a major taxonomic contradiction. The Meiteis were a settled, civilized, valley-dwelling population with an independent written script (<strong>Meitei Mayek</strong>), a complex legal administrative apparatus, and over a thousand years of documented history in the Imphal Valley, of which the migrating hill tribes were never a part.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              In making this classification, Grierson ignored his own structural evidence. He openly observed that Meitei possesses morphological and lexical ties that align it more closely with Written Burmese and Classical Tibetan than with any of the surrounding hill languages:
            </p>
            <blockquote className="border-l-4 border-emerald-800 italic pl-4 py-2 my-4 text-stone-800 bg-stone-100/70 rounded-r-md text-sm leading-relaxed">
              "It will also be seen that Meithei in some respects agrees with written Burmese, as against the other languages of the group... Connection with Tibetan."
              <span className="block font-mono text-xs font-semibold text-stone-600 mt-1.5 not-italic">
                — G.A. Grierson, LSI Vol. III, Part III (1904, pp. 6, 20–24)
              </span>
            </blockquote>
            <p className="text-stone-700 leading-relaxed text-base">
              Modern scholars have rejected Grierson's grouping as an administrative and areal convenience rather than a genetic reality. As Shobhana L. Chelliah (2017) notes:
            </p>
            <blockquote className="border-l-4 border-emerald-800 italic pl-4 py-2 my-4 text-stone-800 bg-stone-100/70 rounded-r-md text-sm leading-relaxed">
              "Meitei (Manipuri) shows no clear genetic relationship to Kuki-Chin or Tangkhulic, with similarities instead attributed to borrowing."
              <span className="block font-mono text-xs font-semibold text-stone-600 mt-1.5 not-italic">
                — Shobhana L. Chelliah, The Sino-Tibetan Languages (2nd ed., Routledge, p. 295)
              </span>
            </blockquote>
          </article>

          {/* Section III */}
          <article id="sec-3" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION III
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Shafer's Expansion
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              The early colonial classification errors were significantly amplified and exaggerated in the mid-20th century by Robert Shafer. Shafer (1955) aggressively dismantled the independent "Naga" group set up by Sten Konow, attempting to absorb almost all Naga speech varieties into his newly designated "Kukish Section":
            </p>
            <blockquote className="border-l-4 border-emerald-800 italic pl-4 py-2 my-4 text-stone-800 bg-stone-100/70 rounded-r-md text-sm leading-relaxed">
              "The Naga languages are all Kukish except the northeastern-most."
              <span className="block font-mono text-xs font-semibold text-stone-600 mt-1.5 not-italic">
                — Robert Shafer, "Classification of the Sino-Tibetan Languages", Word, 11(1), 1955, p. 104
              </span>
            </blockquote>
            <p className="text-stone-700 leading-relaxed text-base">
              Shafer's rationale relied heavily on phonetic equations and superficial vocabulary overlaps. He argued that the languages of the Angami-Pochuri, Zeme, and Tangkhul groups shared closer phonetic correspondences with Kuki-Chin than with each other. This administrative and methodological shortcut hardcoded the "Kuki-Chin-Naga" genetic node into global academic frameworks, establishing a false genetic macro-family that modern databases like Glottolog (Languoid ID: <GlottoLink id="kuki1245" />) continue to maintain today.
            </p>
          </article>

          {/* Section IV */}
          <article id="sec-4" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION IV
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Modern Linguistic Refutation
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Modern comparative linguistics has systematically dismantled the "Kuki-Chin-Naga" macro-group. Primary field researchers have demonstrated that "Naga" is an ethnic and political umbrella, not a genetic linguistic family, with Naga-identifying communities speaking languages belonging to as many as seven entirely distinct Tibeto-Burman subgroups.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Mark W. Post and Robbins Burling (2017) deliver a fatal blow to the validity of these composite taxonomies:
            </p>
            <blockquote className="border-l-4 border-emerald-800 italic pl-4 py-2 my-4 text-stone-800 bg-stone-100/70 rounded-r-md text-sm leading-relaxed">
              "Despite the existence of ‘catchall’ labels... the languages of Northeast India have never been demonstrated to form a genealogical unit within Tibeto-Burman – nor, we believe, can they ever be."
              <span className="block font-mono text-xs font-semibold text-stone-600 mt-1.5 not-italic">
                — Mark W. Post &amp; Robbins Burling, The Sino-Tibetan Languages (2nd ed., Routledge, p. 217)
              </span>
            </blockquote>
            <p className="text-stone-700 leading-relaxed text-base">
              The superficial resemblances that led Grierson and Shafer to group these languages together are now recognized as the outcome of <strong>areal diffusion</strong>—centuries of language contact, lexical borrowing, and morphosyntactic convergence among neighboring communities in a geographically contiguous mountain zone, rather than genetic inheritance from a single parent language.
            </p>
          </article>

          {/* Section V */}
          <article id="sec-5" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION V
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Structural Registry Misalignment
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              This academic error has created a profound misalignment between international research and local indigenous reality:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-stone-700 leading-relaxed">
              <li><strong>The International Perspective:</strong> International institutions (relying on SIL Ethnologue, ISO 639-3, and Glottolog) use "Kuki-Chin" and "Kuki-Chin-Naga" as broad, inclusive linguistic categories to index shared origins.</li>
              <li><strong>The Indigenous Perspective:</strong> Locally, the term "Kuki" has undergone a severe <strong>miniaturization of identity</strong>. Following the <em>Constitution (Scheduled Tribes) Modification Order, 1956</em> (Act No. 63 of 1956), the Indian government stopped recognizing these tribes collectively as "Any Kuki Tribes" and began listing each dialect group separately. This induced fifty years of intense internal division as communities abandoned the broad "Kuki" label to compete as independent Scheduled Tribes.</li>
              <li><strong>The Thadou-Kuki Discrepancy:</strong> The identity crisis was exacerbated when dominant Thadou-speaking clans attempted to declare Thadou as the universal "Kuki language" (<em>Kuki Pao</em>), alienating cognate tribes (Hmar, Paite, Vaiphei, Gangte) who viewed this as an attempt at cultural absorption:
                <blockquote className="border-l-4 border-emerald-800 italic pl-4 py-2 my-2 text-stone-800 bg-stone-100/70 rounded-r-md text-sm leading-relaxed">
                  "Until and unless that mistake is corrected, asserting Kuki Pao/language will take the vicious circle and the new nomenclature will be as good as Thadou."
                  <span className="block font-mono text-xs font-semibold text-stone-600 mt-1.5 not-italic">
                    — Ngamkhohao Haokip, "Politics of Tribe Identity with reference to the Kukis", Journal of North East India Studies, Vol. 2(2), 2012, p. 65
                  </span>
                </blockquote>
              </li>
            </ol>
            <p className="text-stone-700 leading-relaxed text-base">
              Consequently, when indigenous scholars use the term "Kuki" in a modern cultural sense, it is heavily miniaturized and exclusive, strictly denoting Thadou-speakers and excluding the non-Thadou tribes who historically fell under the umbrella. As Letminlun Khongsai (2011) summarizes:
            </p>
            <blockquote className="border-l-4 border-emerald-800 italic pl-4 py-2 my-4 text-stone-800 bg-stone-100/70 rounded-r-md text-sm leading-relaxed">
              "The term Kuki or Chin or Mizo has been accepted by all the tribes when used in connection with linguistic or ethnic classification. However, the same cannot be true in relation to political ideology or identity."
              <span className="block font-mono text-xs font-semibold text-stone-600 mt-1.5 not-italic">
                — Letminlun Khongsai, Review of Kuki Society: Past, Present, Future, Journal of North East India Studies, Vol. 1(1), 2011, p. 106
              </span>
            </blockquote>
            <p className="text-stone-700 leading-relaxed text-base">
              This creates a severe paradox: a foreign linguist classifying Hmar or Paite under the "Kuki" taxonomy is linguistically accurate under standard ISO codes, but locally offensive and politically contested on the ground.
            </p>
          </article>

          {/* Section VI */}
          <article id="sec-6" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION VI
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Clan Diversity &amp; Customary Registry
              </h3>
            </div>
            
            <h4 className="text-lg font-bold text-stone-900 mt-4">The Ancestral Bedrock and Literary Standard</h4>
            <p className="text-stone-700 leading-relaxed text-base">
              Ethnographic research documents 14 foundational ancestral clans, historically known as <em>Hnam 14</em> (Dr. H. Rochunga Pudaite, 1960): <strong>Lawitlang, Zote, Ngurte, Khawbung, Ṭhiek, Lungṭau, Leiri, Darngawn, Pakhuong, Hrangkhawl, Biate, Changsan, Khawlhring</strong>, and <strong>Faihriem (Saihriem)</strong>. Over centuries, these clans expanded into sub-clans (<em>pahnam</em>) and family lineages across Manipur, Mizoram, Assam, Meghalaya, and Tripura.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Written Standard Hmar (ISO 639-3: <IsoLink code="hmr" />, Glottocode: <GlottoLink id="hmar1241" />) developed primarily from the <em>Khawsak / Ṭhiek</em> speech variety, which served as the early literary standard for Bible translation, hymnbooks, and school textbooks. Major clans such as <strong>Zote, Leiri, Lungṭau, Darngawn, Khawbung, Rawite</strong>, and <strong>Vangsie</strong> speak closely intertwined varieties, much of whose unique oral distinctiveness has been lost to time. Today, these varieties remain subsumed under standard <IsoLink code="hmr" /> without separate ISO codes.
            </p>

            <div className="my-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-950 mb-1">Customary Clan Research Notice</p>
                <p className="leading-relaxed text-amber-900/90">
                  Ethnolinguistic cross-references, clan classifications, and database identifiers are undergoing active synthesis between historical documentation (Dr. H. Rochunga Pudaite 1960, J. Shakespear 1912) and international registries (ISO 639-3, Glottolog). Detailed comparative registry tables have been archived while ongoing community consultation and peer verification are finalized.
                </p>
              </div>
            </div>
          </article>

          {/* Section VII */}
          <article id="sec-7" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION VII
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Methodological Inconsistencies
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Global databases like Glottolog display arbitrary inconsistencies when cataloging clan speech varieties, converting historical colonial administrative shortcuts into split genetic branches:
            </p>
            <ol className="list-decimal pl-5 space-y-3 text-stone-700 leading-relaxed">
              <li><strong>Misplaced Ancestral Hmar Clans:</strong> The 14 ancestral customary clans of the Hmar people (<em>Hnam 14</em>) are split across distant tree branches in Glottolog. For example, <strong>Changsan (Changsen)</strong> is cataloged as a dialect under Thado Chin (<GlottoLink id="chan1312" />, ISO: <IsoLink code="chan" />) under Peripheral Zo -&gt; Northeastern -&gt; Thadoic, while standard <strong>Hmar</strong> is placed under Central Zo -&gt; Mizoic -&gt; Hmaric. Similarly, <strong>Syriem (Saihriem / Faihriem)</strong> (<GlottoLink id="syri1242" />) is placed under Western Northwestern Zo -&gt; Sakachep-Chorei, completely omitting its core customary Hmar identity.</li>
              <li><strong>Duplicated Nodes across Sub-branches:</strong> Single speech entities are fragmented into duplicate registry nodes. For example, <strong>Hrangkhawl (Hrangkol)</strong> is indexed twice under separate parent branches in Glottolog (placed under Mizoic -&gt; Hmaric as <GlottoLink id="hran1239" /> with ISO <IsoLink code="hra" />, and under Western Northwestern Zo -&gt; Halam as <GlottoLink id="hran1240" />). Similarly, <strong>Ralte</strong> is duplicated under both Mizoic -&gt; Mizo and Thadoic -&gt; Paiteic.</li>
              <li><strong>Subsumption of Ancestral Speech Varieties:</strong> Traditional clan speech varieties—including <strong>Leiri, Zote, Darngawn, Khawbung, Lawitlang</strong>, and others—are cataloged under standard <IsoLink code="hmr" /> in global registries, reflecting how historic customary speech has integrated under the written literary standard.</li>
            </ol>
          </article>

          {/* Section VIII */}
          <article id="sec-8" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION VIII
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Re-Classification &amp; Autonym Adoption
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              To replace colonial administrative shortcuts with scientific accuracy and ethical respect, <strong>The Foundation</strong> advocates for dissolving the non-monophyletic geographical macro-node (Glottocode: <GlottoLink id="kuki1245" />) and renaming the remaining parent node (Glottocode: <GlottoLink id="kuki1246" />) to the authentic autonym <strong>Zo</strong>.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Before British and Burmese intervention, these tribes referred to themselves using phonetic variants of <strong>Zo</strong> or <strong>Zho</strong> (meaning "highlander"):
            </p>
            <blockquote className="border-l-4 border-emerald-800 italic pl-4 py-2 my-4 text-stone-800 bg-stone-100/70 rounded-r-md text-sm leading-relaxed">
              "...the Kukis knew themselves by the name 'Zô' or 'Zhô' (highland, in their language), probably another civilizational term as noted earlier."
              <span className="block font-mono text-xs font-semibold text-stone-600 mt-1.5 not-italic">
                — Jangkhomang Guite, "Peopling in the Empire’s Borderland", Journal of North East India Studies, Vol. 14(2), 2024, p. 44
              </span>
            </blockquote>
            <p className="text-stone-700 leading-relaxed text-base">
              The term "Zo" avoids the prefix/suffix trap of political movements (such as <em>Mizo</em> or <em>Zomi</em>) and represents the only dialect-neutral identifier. Modern comparative studies validate this genetic coherence:
            </p>
            <blockquote className="border-l-4 border-emerald-800 italic pl-4 py-2 my-4 text-stone-800 bg-stone-100/70 rounded-r-md text-sm leading-relaxed">
              "We use the term Kuki-Chin in the present work because it is standardly used in linguistics, but note that it is controversial... 'Kuki' and 'Chin' are used to refer to both languages and ethnic groups in a region where an already complex socio-political situation is further complicated by the legacy of colonialism..."
              <span className="block font-mono text-xs font-semibold text-stone-600 mt-1.5 not-italic">
                — Stuart Lotven, Kenneth Van Bik, Stuart Davis, et al., "The syllable in Kuki-Chin", Journal of South Asian Languages and Linguistics, 2020, p. 1
              </span>
            </blockquote>
          </article>

          {/* Section IX */}
          <article id="sec-9" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION IX
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Indigenous Self-Determination
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Recognizing Naga, Karbi, and Meitei languages as independent clades within Sino-Tibetan reflects their distinct linguistic identities and cultural autonomy. Groupings introduced under colonial administrative rubrics do not reflect the distinct ancestral heritage of these communities. Where Naga, Karbi, or Meitei languages are classified within Sino-Tibetan remains strictly up to those respective communities, their scholars, and field linguists. Technical inconvenience cannot justify perpetuating outdated colonial labels.
            </p>
          </article>

          {/* Section X */}
          <article id="sec-10" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION X
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Governance &amp; Educational Policy
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              Inaccurate language classification is not an abstract technical debate; it has real-world consequences for governance, education, and cultural survival.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Under modern educational mandates, such as India’s <strong>National Education Policy (NEP) 2020</strong>, mother-tongue textbook development, curriculum funding, and teacher training depend directly on recognized language classifications. When global registries "lump" minority languages together under broad colonial catchalls, these minority varieties miss out on textbook printing, preservation grants, and localized digital interfaces. Treating legacy labels as mere "technical tags" while ignoring their impact on policy, education, and identity denies institutional responsibility.
            </p>
          </article>

          {/* Section XI */}
          <article id="sec-11" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION XI
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Digital Implementation
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              To lead by example, this policy is applied across all public digital repositories, text corpora, and language datasets. Individual ISO 639-3 codes (such as <IsoLink code="hmr" />, <IsoLink code="lus" />, <IsoLink code="pck" />, <IsoLink code="ted" />) are maintained for seamless software compatibility, while overarching family metadata is updated to the autonym <strong>Zo</strong>.
            </p>
            <pre className="bg-stone-900 text-stone-100 p-4 rounded-xl font-mono text-xs overflow-x-auto leading-relaxed shadow-sm">
{`dataset_metadata: {
  "language_iso639_3": "hmr",
  "clade": "Zo",
  "subgroup": "Central Zo (Hmaric)",
  "academic_alternative": "South-Central Tibeto-Burman",
  "legacy_family_tag": "kuki-chin-naga"
}`}
            </pre>
          </article>

          {/* Section XII */}
          <article id="sec-12" className="space-y-4 scroll-mt-24 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION XII
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Community Cultural Registries
              </h3>
            </div>
            <p className="text-stone-700 leading-relaxed text-base">
              While peer-reviewed academic literature primarily focuses on established cladistic roots, non-academic digital portals like <strong>Virthli.in (2012)</strong> and pan-Hmar cultural registries serve a vital role in capturing living community knowledge.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Digital community portals document the broader spectrum of <strong>40 recognized Hmar clans</strong> and over <strong>200+ sub-clans (<em>pahnam</em>)</strong> that share the ancestral <em>Sinlung</em> origin tradition across Northeast India. By acknowledging these community archives alongside academic research, the Foundation bridges formal comparative linguistics with living indigenous heritage.
            </p>
          </article>

          {/* References & Bibliography */}
          <article className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-stone-900 font-serif">
              References &amp; Selected Bibliography
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
              <li>• <strong>Benedict, Paul K.</strong> (1972). <em>Sino-Tibetan: A Conspectus</em>. Contributing editor James A. Matisoff. Cambridge: Cambridge University Press.</li>
              <li>• <strong>Burling, Robbins.</strong> (2003). "The Tibeto-Burman Languages of Northeastern India." In Graham Thurgood and Randy J. LaPolla (eds.), <em>The Sino-Tibetan Languages</em>, pp. 169–191. London: Routledge.</li>
              <li>• <strong>Chakraborty, Anup Shekhar.</strong> (2013). "Identity and Virtual Spaces among the Zo hnahthlak: Emergent Zo Cyberpolitics." In Gaurav Desai (ed.), <em>Journal of South Asian Studies</em>.</li>
              <li>• <strong>Chelliah, Shobhana L.</strong> (2017). "Meitei." In Graham Thurgood and Randy J. LaPolla (eds.), <em>The Sino-Tibetan Languages</em> (2nd ed.), pp. 295–311. London: Routledge.</li>
              <li>• <strong>DeLancey, Scott.</strong> (2013). "The History of Postverbal Agreement in Kuki-Chin." <em>Journal of the Southeast Asian Linguistics Society (JSEALS)</em>, 6: 1–17.</li>
              <li>• <strong>DeLancey, Scott.</strong> (2015). "Morphological Evidence for Tani Subgrouping." In Linda Konnerth et al. (eds.), <em>North East Indian Linguistics 7</em>. Canberra: Pacific Linguistics.</li>
              <li>• <strong>Dena, Lal.</strong> (2008). <em>Hmar of North East India: A History</em>. Imphal/New Delhi: Scholar Publishing House &amp; Hmar Historical Society.</li>
              <li>• <strong>Grierson, George A.</strong> (1904). <em>Linguistic Survey of India: Vol. III, Part III, Tibeto-Burman Family: Specimens of the Kuki-Chin and Burma Groups</em>. Calcutta: Office of the Superintendent of Government Printing.</li>
              <li>• <strong>Guite, Jangkhomang.</strong> (2024). "Peopling in the Empire’s Borderland: A Note on Kuki History and Ancestry in Northeast India." <em>Journal of North East India Studies</em>, Vol. 14(2), pp. 44–75. ISSN: 2278-1455.</li>
              <li>• <strong>Hammarström, Harald, Robert Forkel, Martin Haspelmath, &amp; Sebastian Bank.</strong> (2024). <em>Glottolog 5.3: Kuki-Chin-Naga (kuki1245)</em>. Leipzig: Max Planck Institute for Evolutionary Anthropology.</li>
              <li>• <strong>Haokip, Ngamkhohao.</strong> (2012). "Politics of Tribe Identity with reference to the Kukis." <em>Journal of North East India Studies</em>, Vol. 2(2), pp. 65–84. ISSN: 2278-1455.</li>
              <li>• <strong>Khongsai, Letminlun.</strong> (2011). Review of <em>Kuki Society: Past, Present, Future</em>. <em>Journal of North East India Studies</em>, Vol. 1(1), pp. 101–106. ISSN: 2278-1455.</li>
              <li>• <strong>Konnerth, Linda.</strong> (2018). "The Historical Phonology of Monsang (Northwestern South-Central / 'Kuki-Chin')." <em>Himalayan Linguistics</em>, 17(1): 111–44.</li>
              <li>• <strong>Lotven, Stuart, Kenneth Van Bik, Stuart Davis, et al.</strong> (2020). "The syllable in Kuki-Chin." <em>Journal of South Asian Languages and Linguistics</em>, Vol. 7(1), pp. 1–32. DOI: 10.1515/jsall-2020-2024.</li>
              <li>• <strong>Matisoff, James A.</strong> (2003). <em>Handbook of Proto-Tibeto-Burman: System and Philosophy of Sino-Tibetan Reconstruction</em>. Berkeley: University of California Press.</li>
              <li>• <strong>Post, Mark W., &amp; Robbins Burling.</strong> (2017). "The Sino-Tibetan Languages of Northeast India." In Graham Thurgood and Randy J. LaPolla (eds.), <em>The Sino-Tibetan Languages</em> (2nd ed.), pp. 213–242. London: Routledge.</li>
              <li>• <strong>Pudaite, Rochunga.</strong> (1960). <em>The Education of the Hmar People</em>. Sielmat: Samaritan Express.</li>
              <li>• <strong>Shafer, Robert.</strong> (1955). "Classification of the Sino-Tibetan Languages." <em>Word</em>, 11(1): 94–111.</li>
              <li>• <strong>Shakespear, John.</strong> (1912). <em>The Lushei Kuki Clans</em>. London: Macmillan and Co., Limited.</li>
              <li>• <strong>Thangluaia, H., &amp; Lalpienglien Bungpui.</strong> <em>Mizorama Hmar Hai Chanchin</em> (History of the Hmar People in Mizoram).</li>
              <li>• <strong>Van Bik, Kenneth.</strong> (2009). <em>Proto-Kuki-Chin: A Reconstructed Ancestor of the Kuki-Chin Languages</em>. STEDT Monograph Series No. 8. Berkeley: Center for Southeast Asia Studies, University of California.</li>
              <li>• <strong>Virthli Information Portal.</strong> (2012). "Hmar Clans Documentation &amp; Classification." <em>Virthli.in Digital Registries</em>.</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
