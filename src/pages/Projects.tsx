import { Link } from 'react-router-dom';
import {
  Archive,
  Keyboard,
  Globe,
  BookOpen,
  Camera,
  ArrowRight,
  CheckCircle2,
  Circle,
  Lock,
  FolderGit2,
  Database,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/data/projects';
import { projectImages } from '@/data/images';

const iconMap: Record<string, typeof Archive> = {
  Archive,
  Keyboard,
  Globe,
  BookOpen,
  Camera,
};

export default function Projects() {
  return (
    <div>
      <PageHeader
        label="Projects Hub"
        title="Active Initiatives"
        subtitle="Five community-driven projects spanning digital archival, language engineering, open knowledge, lexicography, and cultural artifacts stewardship. All open-source, all volunteer-built."
        backgroundImage="https://images.pexels.com/photos/29848182/pexels-photo-29848182.jpeg?auto=compress&cs=tinysrgb&w=1400"
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = iconMap[project.icon] || Archive;
            const image = projectImages[project.slug];
            const isPlanning = project.status === 'planning';

            const cardContent = (
              <>
                {image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isPlanning ? 'grayscale-[30%] opacity-90' : 'group-hover:scale-105'
                      }`}
                    />
                    {project.slug === 'archival' ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/90 via-stone-900 to-emerald-950 flex flex-col items-center justify-center p-4">
                        <div className="flex items-center gap-3.5 bg-white/10 border border-white/20 px-4 py-3 rounded-xl backdrop-blur-md shadow-lg">
                          <img src="/huggingface-logo.svg" alt="Hugging Face Logo" className="w-11 h-11 object-contain drop-shadow" />
                          <div>
                            <div className="text-xs font-bold text-amber-300 tracking-widest font-mono">HUGGING FACE DATASETS</div>
                            <div className="text-[11px] text-stone-200 font-mono font-medium">hmar-heritage-org</div>
                          </div>
                        </div>
                      </div>
                    ) : project.slug === 'locale' ? (
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/50 to-stone-900/30 flex flex-col justify-end p-4">
                        <div className="bg-stone-900/85 border border-emerald-500/40 rounded-lg p-3 backdrop-blur-md shadow-lg">
                          <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 border-b border-stone-700/60 pb-1.5 mb-1.5">
                            <span className="font-semibold tracking-wide">ISO 639-3: hmar</span>
                            <span className="text-amber-300 bg-amber-950/80 px-1.5 py-0.5 rounded text-[10px] border border-amber-500/30 font-sans font-medium">Unicode CLDR</span>
                          </div>
                          <div className="text-[12px] font-mono text-stone-200">
                            <span className="text-emerald-400 font-semibold">locale:</span> "hm_IN" &bull; <span className="text-emerald-400 font-semibold">keyman:</span> "hmar_latin"
                          </div>
                          <p className="text-[11px] text-stone-300 font-sans italic mt-1 font-medium">
                            "Hmar Software Locales & Unicode CLDR Keys"
                          </p>
                        </div>
                      </div>
                    ) : project.slug === 'lexicon' ? (
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/50 to-stone-900/30 flex flex-col justify-end p-4">
                        <div className="bg-stone-900/85 border border-amber-500/40 rounded-lg p-3 backdrop-blur-md shadow-lg">
                          <div className="flex items-center justify-between text-[11px] font-mono text-amber-400 border-b border-stone-700/60 pb-1.5 mb-1.5">
                            <span className="font-semibold tracking-wide flex items-center gap-1.5">
                              <BookOpen size={13} className="text-amber-400" />
                              DICTIONARY ENTRY [TEI-XML]
                            </span>
                            <span className="text-stone-300 bg-stone-800 px-1.5 py-0.5 rounded text-[10px] border border-stone-700 font-mono">
                              JSON &bull; CSV
                            </span>
                          </div>
                          <div className="text-[12px] font-serif font-bold text-amber-200">
                            Inpui <span className="text-[11px] font-mono font-normal text-stone-400">/in-pui/</span> <span className="text-[10px] font-sans font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.2 rounded">noun</span>
                          </div>
                          <p className="text-[11px] text-stone-300 font-sans italic mt-0.5">
                            1. Supreme clan assembly or council of elders. 2. [Lit.] Great House.
                          </p>
                        </div>
                      </div>
                    ) : project.slug === 'wikipedia' ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-stone-900 to-emerald-950 flex flex-col items-center justify-center p-4">
                        <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl backdrop-blur-md shadow-inner">
                          <img src="/wikimedia-logo.svg" alt="Wikimedia Logo" className="w-10 h-10 object-contain drop-shadow" />
                          <div>
                            <div className="text-xs font-bold text-white tracking-widest font-mono">WIKIMEDIA</div>
                            <div className="text-[11px] text-stone-300 font-sans font-medium">Open Knowledge & Incubator</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                    )}
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <Icon className="text-emerald-900" size={22} />
                    </div>
                    <span
                      className={`absolute top-4 right-4 text-xs font-mono px-2.5 py-1 rounded-full inline-flex items-center gap-1 font-semibold ${
                        project.status === 'active'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : isPlanning
                            ? 'bg-amber-100/90 text-amber-900 border border-amber-300/80'
                            : 'bg-blue-100 text-blue-800 border border-blue-300'
                      }`}
                    >
                      {isPlanning && <Lock size={11} />}
                      {project.status}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3
                    className={`font-semibold text-xl text-stone-900 mb-2 ${
                      isPlanning ? '' : 'group-hover:text-[#064e3b] transition-colors'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed mb-4 text-sm">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                    <div className="flex items-center gap-2 text-xs text-stone-500 font-mono">
                      <span>{project.milestones.filter((m) => m.done).length}/{project.milestones.length} milestones</span>
                    </div>
                    {isPlanning ? (
                      <span className="inline-flex items-center gap-1 text-amber-800 font-medium text-xs bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                        <Lock size={12} /> Planning (Locked)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[#064e3b] font-medium text-sm group-hover:gap-2 transition-all">
                        Read brief <ArrowRight size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </>
            );

            if (isPlanning) {
              return (
                <div
                  key={project.slug}
                  className="card bg-stone-50/70 border border-amber-200/60 overflow-hidden cursor-not-allowed opacity-90 shadow-xs"
                >
                  {cardContent}
                </div>
              );
            }

            return (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="card card-hover group overflow-hidden"
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Status summary */}
      <section className="bg-parchment border-t border-stone-200 py-16">
        <div className="container-page">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Project Milestones at a Glance
            </h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.slug}>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="font-semibold text-stone-900 hover:text-crimson-700 transition-colors"
                  >
                    {project.shortTitle}
                  </Link>
                  <div className="mt-2 flex flex-wrap gap-3">
                    {project.milestones.map((m) => (
                      <div
                        key={m.title}
                        className={`flex items-center gap-1.5 text-sm ${
                          m.done ? 'text-stone-400' : 'text-stone-700'
                        }`}
                      >
                        {m.done ? (
                          <CheckCircle2 size={15} className="text-green-600" />
                        ) : (
                          <Circle size={15} className="text-stone-400" />
                        )}
                        <span className={m.done ? 'line-through' : ''}>
                          {m.title}
                        </span>
                        <span className="text-xs text-stone-400 font-mono">
                          ({m.date})
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
