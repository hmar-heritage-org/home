import { Compass, BookOpen, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
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

          {/* Section I */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
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
          <article className="space-y-4 border-b border-stone-200 pb-12">
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
          <article className="space-y-4 border-b border-stone-200 pb-12">
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
          <article className="space-y-4 border-b border-stone-200 pb-12">
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
          <article className="space-y-4 border-b border-stone-200 pb-12">
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
          <article className="space-y-4 border-b border-stone-200 pb-12">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                SECTION VI
              </span>
              <h3 className="text-2xl font-bold text-stone-900">
                Clan Diversity &amp; Customary Registry
              </h3>
            </div>
            
            <h4 className="text-lg font-bold text-stone-900 mt-4">6.1 The Ancestral Bedrock and Literary Standard</h4>
            <p className="text-stone-700 leading-relaxed text-base">
              Ethnographic research documents 14 foundational ancestral clans, historically known as <em>Hnam 14</em> (Dr. H. Rochunga Pudaite, 1960): <strong>Lawitlang, Zote, Ngurte, Khawbung, Ṭhiek, Lungṭau, Leiri, Darngawn, Pakhuong, Hrangkhawl, Biate, Changsan, Khawlhring</strong>, and <strong>Faihriem (Saihriem)</strong>. Over centuries, these clans expanded into sub-clans (<em>pahnam</em>) and family lineages across Manipur, Mizoram, Assam, Meghalaya, and Tripura.
            </p>
            <p className="text-stone-700 leading-relaxed text-base">
              Written Standard Hmar (ISO 639-3: <IsoLink code="hmr" />, Glottocode: <GlottoLink id="hmar1241" />) developed primarily from the <em>Khawsak / Ṭhiek</em> speech variety, which served as the early literary standard for Bible translation, hymnbooks, and school textbooks. Major clans such as <strong>Zote, Leiri, Lungṭau, Darngawn, Khawbung, Rawite</strong>, and <strong>Vangsie</strong> speak closely intertwined varieties, much of whose unique oral distinctiveness has been lost to time. Today, these varieties remain subsumed under standard <IsoLink code="hmr" /> without separate ISO codes.
            </p>

            <div className="my-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-amber-950 mb-1">Disclaimer &amp; Ongoing Research Notice</p>
                <p className="leading-relaxed text-amber-900/90">
                  The ethnolinguistic cross-references, clan classifications, and database identifiers presented in these tables reflect an ongoing synthesis of historical literature (Dr. H. Rochunga Pudaite 1960, J. Shakespear 1912) and international registries (ISO 639-3, Glottolog). Due to dialectal overlap, shifting historical terminology, and external indexing discrepancies, some cataloged entries may contain errors, omissions, or unverified classifications. <strong>The Foundation</strong> actively welcomes community feedback, academic review, and empirical field data to refine this living specification.
                </p>
              </div>
            </div>

            <h4 className="text-lg font-bold text-stone-900 mt-8">6.2 Table II.A · Comparative Academic &amp; Customary Clan Frameworks</h4>
            <div className="my-6 overflow-x-auto rounded-xl border border-stone-200 shadow-xs bg-white text-xs sm:text-sm font-sans">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-100 font-mono text-stone-800 font-bold border-b border-stone-200 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 border-r border-stone-200">Clan Name (Hnam)</th>
                    <th className="px-4 py-3 border-r border-stone-200 text-center">Pudaite (1960)</th>
                    <th className="px-4 py-3 border-r border-stone-200 text-center">Shakespear (1912)</th>
                    <th className="px-4 py-3 border-r border-stone-200 text-center">Hmar Inpui (21)</th>
                    <th className="px-4 py-3 text-center">Thangluaia &amp; Bungpui (25)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawsak</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ṭhiek</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Lungṭau</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Leiri</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Zote</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Darngawn</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawbung</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Lawitlang</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ngurte</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pakhuong</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center text-stone-400">-</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Changsan (Changsen)</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawlhring (Khuolhring)</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Faihriem (Saihriem / Syriem)</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Biate (Biete / Baite)</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Hrangkhawl</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khelte (Khiengte)</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center text-stone-400">-</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pautu</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center text-stone-400">-</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Rawite</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center text-stone-400">-</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Sakum</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center text-stone-400">-</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Vangsie (Vangchhia)</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Sakachep</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ngente</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Chawhte</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Chawnthei</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Bawm (Bawmzo)</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Chiru (Chawrai)</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pang (Pangkhua)</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Aimol</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Halam</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center border-r border-stone-200">Yes</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Darlong</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Kom</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center border-r border-stone-200 text-stone-400">-</td><td className="px-4 py-2.5 text-center">Yes</td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-bold text-stone-900 mt-8">6.3 Table II.B · Standard Hmar Literary Language Specification</h4>
            <div className="my-4 overflow-x-auto rounded-xl border border-emerald-300 shadow-xs bg-emerald-50/40 text-xs sm:text-sm font-sans">
              <table className="w-full text-left border-collapse">
                <thead className="bg-emerald-100 font-mono text-emerald-950 font-bold border-b border-emerald-200 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 border-r border-emerald-200">Language Standard</th>
                    <th className="px-4 py-3 border-r border-emerald-200">ISO 639-3 Code</th>
                    <th className="px-4 py-3 border-r border-emerald-200">Glottolog Identifier</th>
                    <th className="px-4 py-3">Classification &amp; Literary Status</th>
                  </tr>
                </thead>
                <tbody className="text-stone-800">
                  <tr className="font-bold">
                    <td className="px-4 py-3 border-r border-emerald-200 text-emerald-950">Written Standard Hmar</td>
                    <td className="px-4 py-3 font-mono border-r border-emerald-200"><IsoLink code="hmr" /></td>
                    <td className="px-4 py-3 font-mono border-r border-emerald-200"><GlottoLink id="hmar1241" /></td>
                    <td className="px-4 py-3 font-sans text-emerald-900">Official Literary Standard for Bible translation, hymnbooks &amp; school textbooks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-bold text-stone-900 mt-8">6.4 Table II.C · ISO 639-3 &amp; Glottolog Clan Registry Identifiers</h4>
            <div className="my-6 overflow-x-auto rounded-xl border border-stone-200 shadow-xs bg-white text-xs sm:text-sm font-sans">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-100 font-mono text-stone-800 font-bold border-b border-stone-200 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 border-r border-stone-200">Clan Name (Hnam)</th>
                    <th className="px-4 py-3 border-r border-stone-200">ISO 639-3 Code</th>
                    <th className="px-4 py-3">Glottolog Identifier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawsak</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 font-mono"><GlottoLink id="khaw1234" /></td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ṭhiek</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 font-mono"><GlottoLink id="thie1234" /></td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Lungṭau</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Leiri</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Zote</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Darngawn</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawbung</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Lawitlang</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ngurte</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pakhuong</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Changsan (Changsen)</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="chan" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="chan1312" /></td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawlhring (Khuolhring)</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Faihriem (Saihriem / Syriem)</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 font-mono"><GlottoLink id="syri1242" /></td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Biate (Biete / Baite)</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="biu" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="biet1238" /> / <GlottoLink id="bait1247" /></td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Hrangkhawl</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="hra" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="hran1239" /> / <GlottoLink id="hran1240" /></td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khelte (Khiengte)</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pautu</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Rawite</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Sakum</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Vangsie (Vangchhia)</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Sakachep</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="sch" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="saka1283" /></td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ngente</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="lus" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="ngen1250" /></td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Chawhte</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Chawnthei</td><td className="px-4 py-2.5 text-stone-500 font-sans border-r border-stone-200">Unlisted</td><td className="px-4 py-2.5 text-stone-500 font-sans">Unlisted (Subsumed under hmr)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Bawm (Bawmzo)</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="bms" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="bawm1236" /></td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Chiru (Chawrai)</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="cdf" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="chir1283" /></td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pang (Pangkhua)</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="pbr" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="pank1249" /></td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Aimol</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="aim" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="aimo1244" /></td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Halam</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="rnl" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="rang1267" /></td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Darlong</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="dln" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="darl1242" /></td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Kom</td><td className="px-4 py-2.5 font-mono border-r border-stone-200"><IsoLink code="kmm" /></td><td className="px-4 py-2.5 font-mono"><GlottoLink id="komi1270" /></td></tr>
                </tbody>
              </table>
            </div>

            <h4 className="text-lg font-bold text-stone-900 mt-8">6.5 Table II.D · Ethnolinguistic Status &amp; Clan Registry Notes</h4>
            <div className="my-6 overflow-x-auto rounded-xl border border-stone-200 shadow-xs bg-white text-xs sm:text-sm font-sans">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-100 font-mono text-stone-800 font-bold border-b border-stone-200 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 border-r border-stone-200">Clan Name (Hnam)</th>
                    <th className="px-4 py-3 border-r border-stone-200">Classification Status</th>
                    <th className="px-4 py-3">Registry Notes &amp; Ethnolinguistic Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawsak</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Primary spoken basis of written standard Hmar (<GlottoLink id="khaw1234" />); subsumed under standard <IsoLink code="hmr" /> in ISO 639-3</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ṭhiek</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Foundational ancestral Hmar clan (<GlottoLink id="thie1234" />); subsumed under standard <IsoLink code="hmr" /> in ISO 639-3</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Lungṭau</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Leiri</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Ancestral Hmar clan variety; omitted from ISO 639-3 &amp; Ethnologue listings</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Zote</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Ancestral Hmar clan variety; omitted from ISO 639-3 &amp; Ethnologue listings</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Darngawn</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawbung</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Lawitlang</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ngurte</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pakhuong</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Changsan (Changsen)</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Classified under Thadoic (<GlottoLink id="chan1312" /> / <IsoLink code="chan" />) in ISO, but native customary Hmar clan</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khawlhring (Khuolhring)</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Faihriem (Saihriem / Syriem)</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Maintained in Glottolog (<GlottoLink id="syri1242" />) under Sakachep-Chorei, but omitted from ISO 639-3</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Biate (Biete / Baite)</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Native Hmar clan; cataloged as separate Hmaric language (<GlottoLink id="biet1238" /> / <IsoLink code="biu" />) and dialect (<GlottoLink id="bait1247" />) in ISO/Glottolog</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Hrangkhawl</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Duplicated in Glottolog under both Hmaric (<GlottoLink id="hran1239" />) and Halam (<GlottoLink id="hran1240" />); ISO (<IsoLink code="hra" />)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Khelte (Khiengte)</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pautu</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Rawite</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Sakum</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Vangsie (Vangchhia)</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Sakachep</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Cataloged under Western Northwestern (<GlottoLink id="saka1283" /> / <IsoLink code="sch" />) in ISO, but native customary Hmar clan</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Ngente</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Cataloged under Mizo (<GlottoLink id="ngen1250" /> / <IsoLink code="lus" />) in Glottolog/ISO, but native customary Hmar clan</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Chawhte</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Chawnthei</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-amber-100 text-amber-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Subsumed</span></td><td className="px-4 py-2.5">Native customary Hmar clan; subsumed under standard <IsoLink code="hmr" /> (Unlisted in ISO &amp; Glottolog)</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Bawm (Bawmzo)</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Cataloged under Falamic (<GlottoLink id="bawm1236" /> / <IsoLink code="bms" />) in Glottolog/ISO, but native customary Hmar clan</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Chiru (Chawrai)</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Cataloged under Central Old Kuki (<GlottoLink id="chir1283" /> / <IsoLink code="cdf" />) in Glottolog/ISO, but native customary Hmar clan</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Pang (Pangkhua)</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Cataloged under Mizoic (<GlottoLink id="pank1249" /> / <IsoLink code="pbr" />) in Glottolog/ISO, but native customary Hmar clan</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Aimol</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Cataloged under Central Old Kuki (<GlottoLink id="aimo1244" /> / <IsoLink code="aim" />) in Glottolog/ISO, but native customary Hmar clan</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Halam</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Cataloged as Western Northwestern language cluster (<GlottoLink id="rang1267" /> / <IsoLink code="rnl" />), but native Hmar clan cluster</td></tr>
                  <tr className="bg-stone-50/50"><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Darlong</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Native Hmar clan; cataloged as Mizoic variety (<GlottoLink id="darl1242" /> / <IsoLink code="dln" />) in ISO/Glottolog</td></tr>
                  <tr><td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Kom</td><td className="px-4 py-2.5 border-r border-stone-200"><span className="bg-emerald-100 text-emerald-900 font-mono text-xs px-2 py-0.5 rounded-full font-bold">Verified</span></td><td className="px-4 py-2.5">Discrepancy: Cataloged under Kolhrengic (<GlottoLink id="komi1270" /> / <IsoLink code="kmm" />) in Glottolog/ISO, but native customary Hmar clan</td></tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section VII */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
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
          <article className="space-y-4 border-b border-stone-200 pb-12">
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

            <h4 className="text-lg font-bold text-stone-900 mt-8">Proposed Cladistic Restructuring Table</h4>
            <div className="my-6 overflow-x-auto rounded-xl border border-stone-200 shadow-xs bg-white text-xs sm:text-sm font-sans">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-100 font-mono text-stone-800 font-bold border-b border-stone-200 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 border-r border-stone-200">Glottolog ID</th>
                    <th className="px-4 py-3 border-r border-stone-200">Legacy Glottolog Label</th>
                    <th className="px-4 py-3 border-r border-stone-200">Proposed Cladistic Label</th>
                    <th className="px-4 py-3">Scope &amp; Speech Varieties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
                  <tr>
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200"><GlottoLink id="sino1245" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Sino-Tibetan</td>
                    <td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Sino-Tibetan / Trans-Himalayan</td>
                    <td className="px-4 py-2.5">Top-level family root.</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200 text-stone-400 line-through"><GlottoLink id="kuki1245" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200 text-stone-400 line-through">Kuki-Chin-Naga (Legacy)</td>
                    <td className="px-4 py-2.5 font-bold text-red-700 border-r border-stone-200">[NODE DISSOLUTION]</td>
                    <td className="px-4 py-2.5 text-stone-500">Dissolve non-monophyletic geographical macro-node (94 varieties).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200"><GlottoLink id="kuki1246" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Kuki-Chin</td>
                    <td className="px-4 py-2.5 font-bold text-emerald-950 border-r border-stone-200">Zo Languages / South-Central</td>
                    <td className="px-4 py-2.5 font-bold text-emerald-900">55 Speech Varieties sharing Proto-Zo phonology.</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200 pl-6">├── <GlottoLink id="cent2330" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Core Central Kuki-Chin</td>
                    <td className="px-4 py-2.5 font-semibold text-stone-900 border-r border-stone-200">Central Zo (17 varieties)</td>
                    <td className="px-4 py-2.5">Hmar, Mizo (Lushai), Lai/Hakha, Maraic, Pangkhua.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200 pl-6">├── <GlottoLink id="oldk1252" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Northwestern Kuki-Chin</td>
                    <td className="px-4 py-2.5 font-semibold text-stone-900 border-r border-stone-200">Northwestern Zo (16 varieties)</td>
                    <td className="px-4 py-2.5">Anal, Monsang, Moyon, Purum, Aimol, Lamkang, Tarao.</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200 pl-6">└── <GlottoLink id="peri1260" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Peripheral Kuki-Chin</td>
                    <td className="px-4 py-2.5 font-semibold text-stone-900 border-r border-stone-200">Peripheral Zo (22 varieties)</td>
                    <td className="px-4 py-2.5">Tedim, Paite, Thadou, Vaiphei, Simte, Khomic, Ashö.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200"><GlottoLink id="anga1312" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Angami-Ao</td>
                    <td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Angami-Ao Branch (Independent)</td>
                    <td className="px-4 py-2.5">Independent node outside Zo (18 varieties).</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200"><GlottoLink id="karb1240" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Karbic</td>
                    <td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Karbic Branch (Independent)</td>
                    <td className="px-4 py-2.5">Independent node outside Zo (2 varieties).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200"><GlottoLink id="mani1292" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Manipuri / Meitei</td>
                    <td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Meitei Branch (Independent)</td>
                    <td className="px-4 py-2.5">Independent Sino-Tibetan node outside Zo.</td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200"><GlottoLink id="tang1335" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Tangkhul-Maring</td>
                    <td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Tangkhul-Maring Branch (Independent)</td>
                    <td className="px-4 py-2.5">Independent node outside Zo (11 varieties).</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-mono border-r border-stone-200"><GlottoLink id="zeme1241" /></td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Zemeic</td>
                    <td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Zemeic Branch (Independent)</td>
                    <td className="px-4 py-2.5">Independent node outside Zo (7 varieties).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Section IX */}
          <article className="space-y-4 border-b border-stone-200 pb-12">
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
          <article className="space-y-4 border-b border-stone-200 pb-12">
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
          <article className="space-y-4 border-b border-stone-200 pb-12">
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
          <article className="space-y-4 border-b border-stone-200 pb-12">
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

            <div className="my-6 overflow-x-auto rounded-xl border border-stone-200 shadow-xs bg-white text-xs sm:text-sm font-sans">
              <table className="w-full text-left border-collapse">
                <thead className="bg-stone-100 font-mono text-stone-800 font-bold border-b border-stone-200 uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3 border-r border-stone-200">Source Portal / Registry</th>
                    <th className="px-4 py-3 border-r border-stone-200">Scope &amp; Documented Clans</th>
                    <th className="px-4 py-3 border-r border-stone-200">Ethnolinguistic Focus</th>
                    <th className="px-4 py-3">Access Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
                  <tr>
                    <td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Virthli</td>
                    <td className="px-4 py-2.5 border-r border-stone-200">40 Clans &amp; 200+ Sub-Clans (<em>Pahnam</em>)</td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Living pan-Hmar cultural &amp; clan genealogy</td>
                    <td className="px-4 py-2.5"><a href="https://www.virthli.in/2012/03/hmar-clans.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline font-mono">virthli.in</a></td>
                  </tr>
                  <tr className="bg-stone-50/50">
                    <td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Hmar Inpui</td>
                    <td className="px-4 py-2.5 border-r border-stone-200">21 Customary Administrative Clans (<em>Hnam 21</em>)</td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Tribal governance &amp; customary law</td>
                    <td className="px-4 py-2.5 text-stone-500 font-mono">Customary Archives</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-bold text-stone-900 border-r border-stone-200">Dr. Lal Dena</td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Ancestral &amp; Regional Clan History</td>
                    <td className="px-4 py-2.5 border-r border-stone-200">Historical evolution &amp; migration records</td>
                    <td className="px-4 py-2.5 text-stone-500 font-mono">Academic Publication (2008)</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
