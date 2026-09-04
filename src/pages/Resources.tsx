import { useState } from 'react';
import {
  Keyboard,
  Database,
  FileText,
  Type,
  Download,
  ExternalLink,
  Filter,
  FolderOpen,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { resources } from '@/data/content';

const categoryConfig = {
  keyboard: { icon: Keyboard, label: 'Keyboards & Software' },
  data: { icon: Database, label: 'Datasets' },
  guide: { icon: FileText, label: 'Guides & Documentation' },
  font: { icon: Type, label: 'Fonts' },
};

const categories = ['all', 'keyboard', 'data', 'guide', 'font'] as const;

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
        subtitle="Keyboard layouts, fonts, lexicon data, documentation guides, and more. Everything is free to download and use under open licenses."
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((resource) => {
              const config = categoryConfig[resource.category];
              const Icon = config.icon;
              return (
                <div key={resource.title} className="card card-hover p-6 flex flex-col justify-between">
                  <div>
                    {resource.hfBadge && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-900 text-xs font-mono mb-3">
                        <img src="/huggingface-logo.svg" alt="HF" className="w-4 h-4 object-contain" />
                        <span>{resource.hfBadge}</span>
                      </div>
                    )}
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-950/5 border border-emerald-900/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-emerald-900" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-stone-900 mb-1">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-stone-600 leading-relaxed">
                          {resource.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs font-mono text-stone-500 my-4 pt-3 border-t border-stone-200/60">
                      <span className="flex items-center gap-1">
                        <Download size={12} />
                        {resource.format}
                      </span>
                      <span>•</span>
                      <span>{resource.size}</span>
                      <span>•</span>
                      <span className="text-emerald-800 font-semibold">{resource.license}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-emerald-900 text-amber-100 hover:bg-emerald-800 transition-all shadow-sm"
                      >
                        {resource.hfBadge ? (
                          <>
                            <img src="/huggingface-logo.svg" alt="HF" className="w-3.5 h-3.5" />
                            View on Hugging Face
                          </>
                        ) : (
                          <>
                            <ExternalLink size={14} />
                            View Repository
                          </>
                        )}
                      </a>
                    )}
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
              All resources are released under open licenses. Software uses the
              MIT license. Datasets use CC BY-SA 4.0. Guides use CC BY 4.0. Fonts
              use the SIL Open Font License 1.1. Please check each resource's
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
              <a
                href="https://scripts.sil.org/OFL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-emerald-900 font-medium link-underline"
              >
                SIL OFL 1.1 <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
