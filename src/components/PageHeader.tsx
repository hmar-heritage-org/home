import { ReactNode } from 'react';

interface PageHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  variant?: 'modern' | 'institutional';
  backgroundImage?: string;
}

export default function PageHeader({
  label,
  title,
  subtitle,
  variant = 'modern',
  backgroundImage,
}: PageHeaderProps) {
  const isDark = Boolean(backgroundImage);

  return (
    <section
      className={`relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900 text-white py-16 md:py-20'
          : 'bg-bone text-stone-900 border-b border-stone-200/60 py-10 md:py-14'
      } px-4 sm:px-6`}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/45 to-stone-900/30" />
        </>
      )}

      <div className="relative z-10 container-page">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <span
            className={`section-label ${
              isDark ? 'text-emerald-400 font-semibold' : 'text-[#064e3b] font-semibold'
            }`}
          >
            {label}
          </span>
          <h1
            className={`mt-3 font-bold tracking-tight ${
              isDark
                ? 'text-white text-3xl md:text-4xl lg:text-5xl leading-tight'
                : 'text-stone-900 text-3xl md:text-4xl font-serif'
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`mt-4 leading-relaxed ${
                isDark
                  ? 'text-stone-200 text-base md:text-lg max-w-2xl mx-auto'
                  : 'text-stone-600 text-base md:text-lg'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
