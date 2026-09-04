import { Link } from 'react-router-dom';
import {
  Archive,
  Keyboard,
  Globe,
  BookOpen,
  Camera,
  ArrowRight,
  X,
  Quote,
  Users,
  ScrollText,
  Heart,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import { projects } from '@/data/projects';

const iconMap: Record<string, typeof Archive> = {
  Archive,
  Keyboard,
  Globe,
  BookOpen,
  Camera,
};

const pillars = [
  {
    icon: Archive,
    title: 'Digital Archival',
    description:
      'Digitizing oral histories, customary manuscripts, and public domain texts under open licenses.',
  },
  {
    icon: Keyboard,
    title: 'Language Engineering',
    description:
      'Building open-source keyboards, Unicode locale data, and software localization for the Hmar language.',
  },
  {
    icon: Globe,
    title: 'Open Knowledge',
    description:
      'Supporting the Hmar Wikipedia Incubator, Wikidata contributions, and open educational content.',
  },
  {
    icon: ScrollText,
    title: 'Customary Lexicon',
    description:
      'A community-maintained digital dictionary of Hmar words, customary terms, and oral literature vocabulary.',
  },
];

const notList = [
  'A political or governing body',
  'A funded NGO with paid staff',
  'An academic research institution',
  'A representative authority for all Hmar people',
  'A religious or denominational organization',
  'A commercial enterprise',
];

export default function Home() {
  return (
    <div>
      {/* Original Cultural Hero Banner */}
      <section className="relative w-full bg-[#022c22] text-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl">
            Building for Builders. Preserving for Tomorrow.
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-sans max-w-2xl">
            Preserving oral literature, ancestral clan heritage, and open digital resources so our community stewards, storytellers, and builders can thrive freely.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold">
            <Link
              to="/grantmakers"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl bg-[#064e3b] text-white font-bold hover:bg-[#04392b] transition-all shadow-md hover:shadow-emerald-950/30"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>For Grant Officers</span>
            </Link>

            <Link
              to="/join"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-emerald-950/80 hover:bg-emerald-950 text-emerald-100 border border-emerald-800/60 font-medium transition-all"
            >
              <span>Support the Foundation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Hero intro text */}
      <section className="container-page py-16 md:py-24 text-center max-w-4xl mx-auto">
        <span className="section-label">Welcome</span>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-stone-900 leading-tight">
          An open foundation for Hmar heritage, language, and cultural memory.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-stone-600 leading-relaxed font-serif">
          We are a grassroots, volunteer-driven community preserving the language,
          literature, and material culture of the Hmar people across North East
          India. Everything we build is open, accessible, and community-owned.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/hmars" className="btn-primary">
            Discover the Hmar People <ArrowRight size={18} />
          </Link>
          <Link to="/projects" className="btn-secondary">
            Explore Our Projects
          </Link>
        </div>
      </section>

      {/* Founder's Note (Authentic First-Person Narrative Imported from Old Website) */}
      <section className="bg-parchment border-y border-stone-200 py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-prose mx-auto">
            <div className="flex items-center gap-3 mb-6 justify-center text-center">
              <Quote className="text-[#064e3b]" size={28} />
              <span className="section-label">Founder&apos;s Note</span>
            </div>
            <div className="prose-institutional">
              <p>
                I started this project of collecting books and creating datasets, working on it on and off since 2024 because I realized the Hmar community has almost zero digital footprint. Anything that exists is fragmented uploads by the occasional academic that you can only find buried in the Internet Archive or Wayback Machine, and most remaining material exists as raw deposits in separate repositories. Building this open foundation lets us connect these scattered resources into a structured community owned dataset, while opening doors to partner with international institutions to access essential resources.
              </p>
              <p>
                Language is not just a tool for communication, it is also how we preserve our history, traditions, and culture. As we transitioned to preserving our cultural knowledge with books, the world moved on to the digital realm and transformed how information is distributed, and so did the need and the form and formats of data. The sudden rise of artificial intelligence over the past five years has undoubtedly transformed how we consume information and interact with screens. Whether one is pro-AI or anti-AI, this technology is unlikely to disappear, and will only become more integral to daily life. But this initiative is not just about AI and technology. It is about active participation so we do not get left behind and are ready to change on our own terms, rather than surrendering control to governments and corporations who control these systems.
              </p>
              <p>
                This foundation is not about grand claims or controlling external platforms, but about self-determination: providing open tools, cultural archives, and language resources so our community can write its own history and shape its digital presence. What began as a solo effort is now an open door for anyone who wants to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Philosophy Feature Quote Banner */}
      <section className="relative w-full bg-[#022c22] text-white border-y border-emerald-900/60 py-6 sm:py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <blockquote className="italic border-l-2 border-amber-400 pl-4 text-emerald-100 font-serif text-sm sm:text-base leading-snug">
              &ldquo;Planting trees whose shade we may never frolic under.&rdquo;
              <span className="block text-[11px] font-mono not-italic text-amber-300/90 mt-1 font-normal">&mdash; Foundational Maxim</span>
            </blockquote>

            <Link
              to="/philosophy"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#064e3b] text-white font-bold text-xs hover:bg-[#04392b] transition-all shadow-md font-sans border border-emerald-700/50 shrink-0"
            >
              <span>Read Philosophy Essay</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="container-page py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">What We Do</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-stone-900">
            Four pillars of cultural preservation
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Our work spans digital archival, language engineering, open knowledge,
            and customary lexicography — all community-driven, all open source.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="card card-hover p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                <pillar.icon className="text-[#064e3b]" size={24} />
              </div>
              <h3 className="font-semibold text-lg text-stone-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What This Foundation Is Not */}
      <section className="bg-stone-900 text-white py-16 md:py-24">
        <div className="container-page text-center max-w-3xl mx-auto">
          <div>
            <span className="section-label text-amber-400">Transparency</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              What this foundation is not
            </h2>
            <p className="mt-4 text-lg text-stone-300 leading-relaxed">
              We believe in radical transparency. Here is what we are
              <em> not</em>, so you know exactly who you are engaging with.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {notList.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-stone-800/50 rounded-xl p-4 border border-stone-700"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <X size={16} className="text-red-500" />
                </div>
                <span className="text-stone-300">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-stone-400 text-sm">
            <Heart size={16} className="text-amber-500" />
            <span>
              We are a grassroots community effort with zero paid staff, funded by
              small grants and volunteer labor.
            </span>
          </div>
        </div>
      </section>

      {/* Active Initiatives Preview */}
      <section className="container-page py-16 md:py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="section-label">Active Initiatives</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-stone-900">
              Projects in motion
            </h2>
          </div>
          <Link
            to="/projects"
            className="btn-ghost text-[#064e3b]"
          >
            View all projects <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => {
            const Icon = iconMap[project.icon] || Archive;
            const isPlanning = project.status === 'planning';

            const cardMarkup = (
              <>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Icon className="text-[#064e3b]" size={24} />
                </div>
                <h3 className={`font-semibold text-lg text-stone-900 mb-2 ${isPlanning ? '' : 'group-hover:text-[#064e3b] transition-colors'}`}>
                  {project.shortTitle}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed mb-4">
                  {project.tagline}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-semibold ${
                    isPlanning ? 'bg-amber-100/90 text-amber-900 border border-amber-300/60' : 'bg-emerald-50 text-emerald-800'
                  }`}>
                    {isPlanning && <Lock size={11} />}
                    {project.status}
                  </span>
                  <span>{project.tags.length} focus areas</span>
                </div>
              </>
            );

            if (isPlanning) {
              return (
                <div
                  key={project.slug}
                  className="card p-6 bg-stone-50/70 border border-amber-200/60 cursor-not-allowed opacity-90"
                >
                  {cardMarkup}
                </div>
              );
            }

            return (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="card card-hover p-6 group"
              >
                {cardMarkup}
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16 md:py-24">
        <div className="bg-gradient-to-br from-[#064e3b] to-[#022c22] rounded-3xl p-10 md:p-16 text-center text-white">
          <Users className="mx-auto mb-4 text-amber-400" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            This is a community effort
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
            We are always looking for translators, archivists, photographers, and
            anyone who cares about Hmar heritage. No technical skills required —
            just willingness to learn.
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 bg-white text-[#064e3b] px-6 py-3 rounded-xl font-bold transition-all hover:bg-emerald-50 hover:shadow-lg active:scale-95"
          >
            Join the Foundation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
