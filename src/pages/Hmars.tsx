import { Link } from 'react-router-dom';
import {
  MapPin,
  Users,
  Music,
  BookOpen,
  Sparkles,
  ArrowRight,
  Layers,
  Languages,
  Wheat,
  Heart,
  ShieldCheck,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { clans } from '@/data/content';
import PageHeader from '@/components/PageHeader';

const stats = [
  { value: '~100K', label: 'Estimated speakers' },
  { value: '5', label: 'States across NE India' },
  { value: '21', label: 'Customary clan branches' },
  { value: '1910', label: 'Earliest written grammar' },
];

const culturalPillars = [
  {
    icon: Heart,
    title: 'Tlawmngaina',
    subtitle: 'Selfless Service & Hospitality',
    description:
      'The noble ethos of unselfish duty, moral courage, hospitality, and putting the well-being of others and the community above oneself.',
  },
  {
    icon: Users,
    title: 'Inthuruolna',
    subtitle: 'Communal Unity & Harmony',
    description:
      'The spirit of solidarity, mutual consensus, and standing together as one united community across all clans and villages.',
  },
  {
    icon: ShieldCheck,
    title: 'Ringumna',
    subtitle: 'Integrity & Faithfulness',
    description:
      'Unwavering truthfulness to one\'s word, honesty, and steadfast moral integrity in everyday life and customary covenant.',
  },
];

export default function Hmars() {
  return (
    <div>
      {/* Hero */}
      <PageHeader
        label="Cultural Discovery"
        title="Who are the Hmars?"
        subtitle="An indigenous community of North East India, with a language, a literature, and a way of life shaped by the highland landscapes they have called home for centuries."
        backgroundImage="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Stats */}
      <section className="bg-stone-900 text-white py-10">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-crimson-400">
                  {stat.value}
                </div>
                <div className="text-sm text-stone-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-prose mx-auto">
          <span className="section-label">Introduction</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            A people of the hills
          </h2>
          <div className="prose-institutional">
            <p>
              The Hmar people are an indigenous community primarily inhabiting the
              hill regions of North East India, with significant populations across
              Manipur, Mizoram, Assam, Meghalaya, and Tripura. They speak the Hmar
              language, a member of the Zo language family (South-Central Tibeto-Burman).
            </p>
            <p>
              The name "Hmar" is traditionally understood to mean "north" or
              "northerner," reflecting the community's oral histories of migration
              from northern regions into their present highland homelands. These
              oral chronicles, passed down through the <em>Hla</em> (song) tradition,
              describe journeys across rivers, forests, and mountain passes,
              stories that are still recited at community gatherings today.
            </p>
            <p>
              Historically a highland agrarian society, the Hmar people developed
              a distinctive customary system organized around the <em>Inpui</em> (the
              great clan assembly), which deliberates on matters of
              governance, land, and customary law. This system persists in modified
              form in many villages today.
            </p>
            <p>
              The Hmar language was first rendered in the Latin script in the early
              20th century, and a rich body of written literature has since grown
              alongside the older oral tradition. Today, the language faces the
              pressures of digital marginalization as it lacks keyboard support,
              operating-system locales, and localized software. This is
              precisely the gap this Foundation seeks to address.
            </p>
          </div>
        </div>
      </section>

      {/* Geographic context */}
      <section className="bg-parchment border-y border-stone-200 py-16 md:py-24">
        <div className="container-page max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">Homelands</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-stone-900">
              Across Five States of North East India
            </h2>
            <p className="mt-3 text-stone-600 text-base">
              The Hmar community is spread across historic highland districts and river valleys in North East India.
            </p>
          </div>

          {/* Top Row: 3 State Hubs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { state: 'Manipur', detail: 'Churachandpur, Pherzawl, and Chandel districts (the largest Hmar population centers).' },
              { state: 'Mizoram', detail: 'Aizawl, Lunglei, and Champhai districts (communities with historical ties to the broader Zo language family).' },
              { state: 'Assam', detail: 'Cachar, Hailakandi, and Dima Hasao districts (communities in the Barak valley and North Cachar hills).' },
            ].map((item) => (
              <div key={item.state} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between hover:border-[#064e3b]/40 transition-all">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-[#064e3b]" />
                    {item.state}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Centered State Hubs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { state: 'Meghalaya', detail: 'East and West Khasi Hills (smaller communities in the border regions).' },
              { state: 'Tripura', detail: 'Dhalai and Gomati districts (communities in the interior highland areas).' },
            ].map((item) => (
              <div key={item.state} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between hover:border-[#064e3b]/40 transition-all">
                <div>
                  <h3 className="font-bold text-lg text-stone-900 flex items-center gap-2 mb-3">
                    <MapPin size={18} className="text-[#064e3b]" />
                    {item.state}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="container-page py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">Cultural Heritage</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-stone-900 font-serif">
            Three Pillars of Hmar Cultural Life
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {culturalPillars.map((item) => (
            <div key={item.title} className="text-center bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:border-[#064e3b]/30 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-5">
                <item.icon className="text-[#064e3b]" size={28} />
              </div>
              <h3 className="font-bold text-2xl text-stone-900 mb-1">
                {item.title}
              </h3>
              <div className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-3">
                {item.subtitle}
              </div>
              <p className="text-stone-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clans */}
      <section className="bg-stone-900 text-white py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <span className="section-label text-crimson-400">Customary Clans</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              The 21 Hmar ancestral clans
            </h2>
            <p className="mt-4 text-lg text-stone-300">
              Hmar social organization is built around customary clans, each with
              its own lineage, dialectal nuances, and customary practices. Hmar
              Inpui (the apex traditional supreme organization) serves as the
              deliberative council that unites them all.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {clans.map((clan, i) => (
              <div
                key={clan.name}
                className="bg-stone-800/50 rounded-xl p-5 border border-stone-700 hover:border-crimson-700/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-stone-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-semibold text-white text-sm">{clan.name}</h3>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed">
                  {clan.notes}
                </p>
                <div className="mt-2 flex items-center gap-1 text-xs text-crimson-400">
                  <MapPin size={12} />
                  {clan.region}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language section */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <span className="section-label">The Hmar Language</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            A language with deep roots, facing a digital future
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Hmar belongs to the Zo language family across Northeast India. It is written in the Latin script and has a rich literary
              tradition encompassing poetry, prose, customary songs, and
              religious texts.
            </p>
            <div className="bg-parchment rounded-xl p-6 border border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <Languages className="text-[#064e3b]" size={20} />
                <div>
                  <div className="text-xs font-mono text-stone-500">ISO 639-3</div>
                  <div className="font-semibold font-mono text-stone-900">hmr</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="text-[#064e3b]" size={20} />
                <div>
                  <div className="text-xs font-mono text-stone-500">Glottocode</div>
                  <div className="font-semibold font-mono text-stone-900">hmar1241</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="text-[#064e3b]" size={20} />
                <div>
                  <div className="text-xs font-mono text-stone-500">Script</div>
                  <div className="font-semibold text-stone-900">Latin</div>
                </div>
              </div>
            </div>
            <p>
              Despite its rich tradition, the Hmar language has minimal digital
              presence. Our Foundation works to change this through keyboard
              layouts, locale data, and software localization.
            </p>
            <Link
              to="/projects/locale"
              className="inline-flex items-center gap-2 text-emerald-800 font-medium link-underline"
            >
              Learn about our language engineering work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Community News & Media */}
      <section className="bg-stone-900 text-white py-16 border-t border-stone-800">
        <div className="container-page max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-stone-800/90 via-stone-800/60 to-stone-900 rounded-2xl p-8 border border-stone-700/70 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider bg-amber-400/10 px-2.5 py-1 rounded-md">
                <Globe size={14} />
                Community News Portal
              </div>
              <h3 className="text-2xl font-bold text-white font-serif">
                The Hmars News Website
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Check out <strong className="text-white">The Hmars</strong> news portal at <a href="https://thehmars.onrender.com" target="_blank" rel="noopener noreferrer" className="text-amber-300 underline underline-offset-2 hover:text-amber-200">thehmars.onrender.com</a> — covering global and regional news for the Hmar community.
              </p>
            </div>
            <a
              href="https://thehmars.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#064e3b] hover:bg-[#04392b] text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-md flex-shrink-0 group"
            >
              <span>Visit News Portal</span>
              <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-parchment border-t border-stone-200 py-16">
        <div className="container-page text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
            Want to learn more or get involved?
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Explore our projects, read our philosophy, or join the community of
            volunteers working to preserve Hmar heritage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/projects" className="btn-primary">
              Explore Projects <ArrowRight size={18} />
            </Link>
            <Link to="/join" className="btn-secondary">
              Join the Foundation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
