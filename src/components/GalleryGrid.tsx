import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/images';

export default function GalleryGrid() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () =>
    setLightbox((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null,
    );

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 grid-flow-dense">
        {galleryImages.map((image, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className={`group relative overflow-hidden rounded-xl bg-stone-800 ${
              i === 0 || i === 7 ? 'sm:col-span-2 sm:row-span-2 min-h-[260px]' : 'h-48 sm:h-52'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/40 transition-colors duration-300 flex items-end p-3">
              <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 text-left">
                {image.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-stone-950/90 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
          <img
            src={galleryImages[lightbox].url.replace('w=800', 'w=1400')}
            alt={galleryImages[lightbox].alt}
            className="max-w-[90%] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center max-w-2xl px-4">
            {galleryImages[lightbox].alt}
          </p>
        </div>
      )}
    </>
  );
}
