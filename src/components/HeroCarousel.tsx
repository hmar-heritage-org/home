import { heroImages } from '@/data/images';

export default function HeroCarousel() {
  const featuredImage = heroImages[0];

  return (
    <section className="relative w-full overflow-hidden bg-stone-900 py-6 md:py-10">
      <div className="container-page">
        <div className="relative h-[45vh] min-h-[320px] max-h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
          <img
            src={featuredImage.url}
            alt={featuredImage.alt}
            className="w-full h-full object-cover animate-slow-zoom"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-center md:text-left z-10">
            <p className="text-white/90 text-xs md:text-sm font-mono tracking-wide">
              {featuredImage.alt}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
