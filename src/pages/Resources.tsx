import { useState } from 'react';
import {
  Database,
  Terminal,
  Download,
  ExternalLink,
  Filter,
  FolderOpen,
  Cpu,
  Palette,
  Info,
  Clock,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { resources } from '@/data/content';

const categoryConfig = {
  data: { icon: Database, label: 'Datasets' },
  tools: { icon: Terminal, label: 'Tools & Software' },
  model: { icon: Cpu, label: 'Community Models' },
  assets: { icon: Palette, label: 'Brand Assets' },
};

const categories = ['all', 'data', 'tools', 'model', 'assets'] as const;

export default function Resources() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('all');

  const filtered =
    filter === 'all'
      ? resources
      : resources.filter((r) => r.category === filter);

  return (
    <div>
      <PageHeader
        label="Resources & Datasets"
        title="Open-Access Downloads"
        subtitle="Open datasets, linguistic corpora, software tools, and community models. Everything is free to download and use under open licenses."
      />

      {/* Filters */}
      <section className="container-page py-10">
        <div className="flex items-center gap-3 flex-wrap">
          <Filter size={18} className="text-stone-400" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-emerald-900 text-amber-100 shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat === 'all'
                ? 'All Resources'
                : categoryConfig[cat].label}
            </button>
          ))}
        </div>
      </section>

      {/* Resource cards */}
      <section className="container-page pb-16 md:pb-24">
        {/* Model distinction note if viewing models */}
        {filter === 'model' && (
          <div className="mb-8 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-stone-800 text-sm flex items-start gap-3">
            <Info size={18} className="text-amber-800 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-semibold text-amber-950">Foundation Datasets vs Downstream Models:</strong> The Hmar Heritage Foundation compiles and publishes open linguistic datasets, corpora, and digital archives. Downstream language models and spaces shown here are external community projects built with open corpora, not official Foundation products.
            </div>
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="card p-12 text-center max-w-lg mx-auto border border-dashed border-stone-300 bg-parchment/60">
            <div className="w-14 h-14 rounded-full bg-emerald-950/5 border border-emerald-900/10 text-emerald-900 flex items-center justify-center mx-auto mb-4">
              <FolderOpen size={26} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-stone-900 mb-2">
              Nothing here yet
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed mb-6">
              Resources for this category are currently being curated and packaged into open releases. Check back soon!
            </p>
            <a
              href="https://github.com/hmar-heritage-org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-emerald-900 text-amber-100 hover:bg-emerald-800 transition-all shadow-sm mx-auto"
            >
              <ExternalLink size={14} />
              Visit GitHub Organization
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((resource) => {
              const config = categoryConfig[resource.category];
              const Icon = config.icon;
              return (
                <div
                  key={resource.url || `${resource.title}-${resource.type}`}
                  className={`bg-white rounded-xl border p-6 flex flex-col justify-between transition-all ${
                    resource.disabled
                      ? 'border-stone-200/80 bg-stone-50/40 opacity-90'
                      : 'border-stone-200 hover:border-stone-300 hover:shadow-sm'
                  }`}
                >
                  <div>
                    {/* Header: Type, Status/Provenance Badge, and License */}
                    <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-stone-500">
                          <Icon size={14} className="text-[#064e3b]" />
                          <span>{resource.type}</span>
                        </span>
                        {resource.statusBadge && (
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                              resource.disabled
                                ? 'bg-stone-200/60 text-stone-600 border border-stone-300/60'
                                : resource.provenance === 'community'
                                ? 'bg-amber-50 text-amber-800 border border-amber-200/70'
                                : 'bg-emerald-50 text-emerald-800 border border-emerald-200/70'
                            }`}
                          >
                            {resource.statusBadge}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-100 text-stone-600 border border-stone-200/70">
                        {resource.license}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-lg text-stone-900 mb-2 leading-snug">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-stone-600 leading-relaxed mb-4">
                      {resource.description}
                    </p>
                  </div>

                  {/* Footer: Metadata and Action Buttons */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-xs font-mono text-stone-500 flex items-center gap-2">
                      <Download size={13} className="text-stone-400" />
                      <span>{resource.format}</span>
                      <span>·</span>
                      <span>{resource.size}</span>
                    </div>

                    {resource.disabled ? (
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100 text-stone-400 border border-stone-200 cursor-not-allowed shrink-0 select-none"
                        title="Model weights not yet trained. Tokenizer and vocabulary only."
                      >
                        <Clock size={13} className="text-stone-400" />
                        <span>{resource.buttonLabel || 'Untrained · Tokens Only'}</span>
                      </span>
                    ) : resource.url ? (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#064e3b] text-white hover:bg-[#04392b] transition-colors shadow-xs shrink-0"
                      >
                        {resource.url.includes('pypi.org') ? (
                          <img src="/pypi-logo.svg" alt="PyPI" className="w-3.5 h-3.5 object-contain" />
                        ) : resource.url.includes('github.com') ? (
                          <img src="/github-logo.svg" alt="GitHub" className="w-3.5 h-3.5 object-contain" />
                        ) : resource.url.includes('huggingface.co') ? (
                          <img src="/huggingface-logo.svg" alt="HF" className="w-3.5 h-3.5 object-contain" />
                        ) : (
                          <ExternalLink size={13} />
                        )}
                        <span>{resource.buttonLabel}</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* License info */}
      <section className="bg-parchment border-t border-stone-200 py-16">
        <div className="container-page">
          <div className="max-w-prose mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              Licensing & Usage
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              All resources are released under open licenses. Software tools use the
              MIT license. Datasets use CC BY-SA 4.0 or MIT. Please check each resource's
              specific license for details.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-900 font-medium link-underline"
              >
                CC BY-SA 4.0 <ExternalLink size={14} />
              </a>
              <a
                href="https://opensource.org/licenses/MIT"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-900 font-medium link-underline"
              >
                MIT License <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
