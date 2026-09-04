import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Users, ShieldCheck, BookOpen, Heart, Landmark, Compass, ArrowRight } from "lucide-react";

export const metadata = {
  title: `Who Are The Hmars? Heritage, Clans & Customary Identity | ${siteConfig.fullName}`,
  description: "An overview of the Hmar people: ancestral history, geographic distribution across Northeast India, customary governance, traditional literature, and the Hmar Inpui 21-clan framework.",
};

export default function HmarsPage() {
  const hmarInpuiClans = [
    "Lawitlang", "Zote", "Ngurte", "Khawbung", "Ṭhiek", "Lungṭau", "Leiri",
    "Darngawn", "Pakhuong", "Hrangkhawl", "Biate", "Changsan", "Khawlhring",
    "Faihriem (Saihriem)", "Rawite", "Vangsie", "Bapui", "Hmar Lusei",
    "Khelte", "Thiak", "Tuollai"
  ];

  return (
    <div className="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-800 font-sans">
      {/* Header Section */}
      <section className="space-y-6 border-b border-slate-200 pb-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="text-xs font-mono font-bold tracking-widest text-[#9E1B24] uppercase flex items-center gap-2">
            <Users className="w-4 h-4 text-[#9E1B24]" />
            <span>Ancestral Identity &amp; Customary Governance</span>
          </div>
          <div className="text-xs font-mono text-slate-700 font-bold bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full">
            Cultural Heritage Guide
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
          Who Are The Hmars?
        </h1>

        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans font-medium max-w-3xl">
          An introduction to the Hmar people: our ancestral origins, geographic homelands across Northeast India, customary clan governance under <em>Hmar Inpui</em>, and living traditions.
        </p>
      </section>

      {/* Main Body */}
      <div className="space-y-12 text-slate-800 leading-relaxed text-base font-sans">
        
        {/* Section 1: Ancestral Homelands & People */}
        <section className="space-y-5 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section 1 · Origins &amp; Geography
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Ancestral Homelands Across Northeast India
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base font-sans leading-relaxed">
            <p>
              The Hmar are an indigenous trans-border people belonging to the Zo (Sino-Tibetan) family, residing in contiguous ancestral homelands spanning Northeast India—primarily in <strong>Manipur, Mizoram, Assam, Meghalaya, and Tripura</strong>.
            </p>
            <p>
              Historically rooted in agricultural stewardship, oral poetry, and customary clan governance, the Hmar people share deep historical ties with neighboring Zo groups while maintaining their own distinct oral literature, clan lineage networks, customary habits, and community identity.
            </p>
          </div>
        </section>

        {/* Section 2: Customary Governance - Hmar Inpui 21 Clans */}
        <section className="space-y-5 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section 2 · Customary Governance
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Customary Clans Framework (Hmar Inpui)
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base font-sans leading-relaxed">
            <p>
              Customary social structure among the Hmar is organized around clan lineages (<em>hnam</em>) and family sub-clans (<em>pahnam</em>). The supreme apex customary body of the Hmar community is the <strong>Hmar Inpui</strong>, which formally recognizes the 21 customary clan lineages that form the bedrock of our social governance:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs text-slate-800">
              {hmarInpuiClans.map((clan, idx) => (
                <div key={clan} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-2">
                  <span className="text-slate-400 font-bold">{idx + 1}.</span>
                  <span className="font-semibold text-slate-900">{clan}</span>
                </div>
              ))}
            </div>

            <p className="pt-2 text-sm text-slate-600">
              While early ethnographic literature (such as Dr. H. Rochunga Pudaite, 1960) documented 14 foundational clans (<em>Hnam 14</em>), contemporary customary governance under <em>Hmar Inpui</em> encompasses 21 recognized clan lineages, reflecting centuries of historical expansion, village settlements, and social harmony.
            </p>
          </div>
        </section>

        {/* Section 3: Cultural Heritage & Living Traditions */}
        <section className="space-y-5 border-b border-slate-200 pb-10">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section 3 · Heritage &amp; Oral Literature
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Folk Ballads, Textiles &amp; Customary Celebrations
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base font-sans leading-relaxed">
            <p>
              Hmar cultural identity is expressed through rich oral literature, traditional textile iconography, and customary community festivals:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-sm text-slate-700">
              <li>
                <strong>Oral Ballads (Hmar Hla):</strong> Epic folk songs, ancestral chants, and story-ballads passed down orally over centuries, recording historical migrations, heroism, and agricultural cycles.
              </li>
              <li>
                <strong>Traditional Textiles (Puan):</strong> Intricate handwoven textiles—such as the <em>Thangsuo Puan</em>, <em>Ntek</em>, and <em>Kawkpuizik Puan</em>—whose geometric motifs signify customary achievements, social standing, and clan heritage.
              </li>
              <li>
                <strong>Sikpuiruoi Festival:</strong> The historic winter harvest and thanksgiving festival of the Hmar people, marked by communal feasts, traditional dances, and ancestral prayers for peace and unity.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Digital Stewardship Connection */}
        <section className="space-y-5">
          <div className="text-xs font-mono font-bold text-[#9E1B24] uppercase tracking-wider">
            Section 4 · Modern Stewardship
          </div>
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            Connecting Tradition to Open Digital Resources
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base font-sans leading-relaxed bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
            <p>
              The Hmar Heritage Foundation exists to serve this living community. By preserving out-of-print books, capturing oral histories, cataloging customary material culture, and building open digital resources, we ensure that our ancestral heritage remains vibrant and accessible in the modern digital era.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <Link
                href="/manifesto"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#9E1B24] text-white font-bold hover:bg-[#781219] transition-colors"
              >
                <span>Read Our Mission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
              >
                <span>Explore Foundation Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
