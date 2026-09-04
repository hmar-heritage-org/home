import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Archive,
  Keyboard,
  Globe,
  BookOpen,
  Camera,
  ArrowRight,
  CheckCircle2,
  Circle,
  ArrowLeft,
  User,
  Tag,
} from 'lucide-react';
import { getProject } from '@/data/projects';
import { projectImages } from '@/data/images';

const iconMap: Record<string, typeof Archive> = {
  Archive,
  Keyboard,
  Globe,
  BookOpen,
  Camera,
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProject(slug) : undefined;

  if (!project || project.status === 'planning') return <Navigate to="/projects" replace />;

  const Icon = iconMap[project.icon] || Archive;
  const image = projectImages[project.slug];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        {image && (
          <img
            src={image.url}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-stone-900/30" />
        <div className="absolute inset-0 flex items-end pb-10">
          <div className="container-page">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-stone-300 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>
            <div className="flex items-start gap-4 max-w-3xl">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0">
                <Icon className="text-white" size={28} />
              </div>
              <div>
                <span
                  className={`inline-block text-xs font-mono px-2.5 py-1 rounded-full mb-2 ${
                    project.status === 'active'
                      ? 'bg-green-500/20 text-green-300'
                      : project.status === 'planning'
                        ? 'bg-amber-500/20 text-amber-300'
                        : 'bg-blue-500/20 text-blue-300'
                  }`}
                >
                  {project.status}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  {project.title}
                </h1>
                <p className="mt-3 text-lg text-stone-200 max-w-2xl">
                  {project.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-page py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="prose-institutional">
              {project.longDescription.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 space-y-10">
              {project.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">
                    {section.heading}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Resources */}
            {project.resources && project.resources.length > 0 && (
              <div className="mt-12 p-6 bg-parchment rounded-xl border border-stone-200">
                <h3 className="text-lg font-semibold text-stone-900 mb-4">
                  Project Resources
                </h3>
                <div className="space-y-2">
                  {project.resources.map((resource) => (
                    <Link
                      key={resource.label}
                      to={resource.href}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white transition-colors group"
                    >
                      <span className="text-stone-700">{resource.label}</span>
                      <ArrowRight
                        size={16}
                        className="text-stone-400 group-hover:text-crimson-700 group-hover:translate-x-1 transition-all"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Info card */}
              <div className="card p-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <User size={16} className="text-stone-400 mt-1" />
                    <div>
                      <div className="text-xs text-stone-500">Lead</div>
                      <div className="text-sm font-medium text-stone-900">
                        {project.lead}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Tag size={16} className="text-stone-400 mt-1" />
                    <div>
                      <div className="text-xs text-stone-500">Focus Areas</div>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-stone-600 bg-stone-100 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestones */}
              <div className="card p-6">
                <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-4">
                  Milestones
                </h3>
                <div className="space-y-3">
                  {project.milestones.map((milestone) => (
                    <div key={milestone.title} className="flex items-start gap-3">
                      {milestone.done ? (
                        <CheckCircle2
                          size={18}
                          className="text-green-600 mt-0.5 flex-shrink-0"
                        />
                      ) : (
                        <Circle
                          size={18}
                          className="text-stone-300 mt-0.5 flex-shrink-0"
                        />
                      )}
                      <div>
                        <div
                          className={`text-sm ${milestone.done ? 'text-stone-400 line-through' : 'text-stone-700'}`}
                        >
                          {milestone.title}
                        </div>
                        <div className="text-xs font-mono text-stone-400">
                          {milestone.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link to="/join" className="btn-primary w-full justify-center">
                Join This Project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="bg-parchment border-t border-stone-200 py-16">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(['archival', 'locale', 'wikipedia', 'lexicon', 'cultural-artifacts'] as const)
              .filter((s) => s !== project.slug)
              .slice(0, 4)
              .map((s) => {
                const p = getProject(s);
                if (!p) return null;
                const PIcon = iconMap[p.icon] || Archive;
                return (
                  <Link
                    key={s}
                    to={`/projects/${s}`}
                    className="card card-hover p-5 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-crimson-50 flex items-center justify-center mb-3">
                      <PIcon className="text-crimson-700" size={20} />
                    </div>
                    <h3 className="font-semibold text-sm text-stone-900 group-hover:text-crimson-700 transition-colors">
                      {p.shortTitle}
                    </h3>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}
