"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/nei_tribes_group.jpg",
    alt: "Hmar Community Heritage",
    title: "Ancestral Heritage",
    description: "Community traditions documented across North East India homelands.",
    href: "/hmars",
  },
  {
    src: "/images/nei_studio_hero.jpg",
    alt: "Traditional Weaving & Textiles",
    title: "Handwoven Textiles",
    description: "Puan motifs and loom techniques preserved by master weavers.",
    href: "/projects/cultural-artifacts",
  },
  {
    src: "/images/hmar_cultural_hero.jpg",
    alt: "Hmar Cultural Pattern",
    title: "Customary Patterns",
    description: "Geometric loom designs symbolizing ancestral clan identities.",
    href: "/hmars",
  },
  {
    src: "/images/nei_studio_hero2.jpg",
    alt: "Customary Artifacts",
    title: "Tangible Artifacts",
    description: "Archiving traditional village tools, musical instruments, and crafts.",
    href: "/projects/cultural-artifacts",
  },
  {
    src: "/images/nei_hero_bg.jpg",
    alt: "Ancestral Homelands",
    title: "Highland Homelands",
    description: "Settlements spanning Manipur, Mizoram, Assam, Meghalaya & Tripura.",
    href: "/hmars",
  },
  {
    src: "/images/open_locale_hero.jpg",
    alt: "Community Preservation",
    title: "Digital Archival Project",
    description: "Open community archives safeguarding Hmar language & literature.",
    href: "/projects/archival",
  },
];

export function HeroGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full relative overflow-hidden py-8 bg-slate-950 border-b border-slate-800 select-none">
      {/* Peeking Stage Track Container with Touch Swipe & Edge Proximity Hover */}
      <div
        className="relative w-full max-w-7xl mx-auto px-2 sm:px-6 flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Edge Proximity Hover Area & Redesigned Glass Pill Button */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="group/left-edge absolute left-0 top-0 bottom-0 w-[20%] sm:w-[22%] z-30 flex items-center justify-start pl-3 sm:pl-8 cursor-pointer hidden sm:flex"
        >
          <div className="bg-slate-950/85 hover:bg-slate-900/95 text-white h-14 sm:h-16 w-11 sm:w-13 rounded-2xl backdrop-blur-xl border border-white/20 hover:border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(255,255,255,0.08)] flex items-center justify-center transition-all duration-300 transform -translate-x-4 opacity-0 group-hover/left-edge:opacity-100 group-hover/left-edge:translate-x-0 group-hover/left-edge:scale-105 active:scale-95">
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white/90 group-hover/left-edge:text-white transition-transform duration-300 group-hover/left-edge:-translate-x-0.5" />
          </div>
        </div>

        {/* Right Edge Proximity Hover Area & Redesigned Glass Pill Button */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="group/right-edge absolute right-0 top-0 bottom-0 w-[20%] sm:w-[22%] z-30 flex items-center justify-end pr-3 sm:pr-8 cursor-pointer hidden sm:flex"
        >
          <div className="bg-slate-950/85 hover:bg-slate-900/95 text-white h-14 sm:h-16 w-11 sm:w-13 rounded-2xl backdrop-blur-xl border border-white/20 hover:border-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(255,255,255,0.08)] flex items-center justify-center transition-all duration-300 transform translate-x-4 opacity-0 group-hover/right-edge:opacity-100 group-hover/right-edge:translate-x-0 group-hover/right-edge:scale-105 active:scale-95">
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white/90 group-hover/right-edge:text-white transition-transform duration-300 group-hover/right-edge:translate-x-0.5" />
          </div>
        </div>

        {/* Gallery Carousel Window */}
        <div className="relative w-full h-[320px] sm:h-[440px] md:h-[500px] flex items-center justify-center">
          
          {galleryImages.map((item, idx) => {
            const total = galleryImages.length;
            const relIdx = (idx - currentIndex + total) % total;
            const diff = relIdx > total / 2 ? relIdx - total : relIdx;

            const isCurrent = diff === 0;
            const isPrev = diff === -1;
            const isNext = diff === 1;

            return (
              <div
                key={item.src}
                onClick={() => {
                  if (isPrev) prevSlide();
                  if (isNext) nextSlide();
                }}
                className={`absolute transition-all duration-700 ease-in-out rounded-3xl overflow-hidden shadow-2xl ${
                  isCurrent
                    ? "w-[84vw] sm:w-[74vw] max-w-4xl h-full z-20 opacity-100 scale-100 translate-x-0 border border-slate-800 shadow-slate-950/50 cursor-default pointer-events-auto"
                    : isPrev
                    ? "w-[84vw] sm:w-[74vw] max-w-4xl h-[88%] z-10 opacity-30 hover:opacity-60 -translate-x-[64%] sm:-translate-x-[70%] scale-95 border border-slate-900 cursor-pointer pointer-events-auto"
                    : isNext
                    ? "w-[84vw] sm:w-[74vw] max-w-4xl h-[88%] z-10 opacity-30 hover:opacity-60 translate-x-[64%] sm:translate-x-[70%] scale-95 border border-slate-900 cursor-pointer pointer-events-auto"
                    : diff < -1
                    ? "w-[84vw] sm:w-[74vw] max-w-4xl h-[88%] z-0 opacity-0 -translate-x-[140%] scale-90 border border-transparent pointer-events-none"
                    : "w-[84vw] sm:w-[74vw] max-w-4xl h-[88%] z-0 opacity-0 translate-x-[140%] scale-90 border border-transparent pointer-events-none"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={isCurrent}
                  className="object-cover object-center"
                />

                {/* Background Overlay for Non-Active Cards */}
                {!isCurrent ? (
                  <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-all" />
                ) : (
                  /* Soft Bottom Gradient Vignette on Active Slide for High Contrast Text Readability */
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none transition-opacity duration-700" />
                )}

                {/* Floating Direct Typography & Read More Link (No Card Box) */}
                <div
                  className={`absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-20 transition-all duration-700 ease-in-out ${
                    isCurrent
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-200/90 font-normal leading-relaxed max-w-xl mt-1 sm:mt-1.5 drop-shadow">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 mt-3 sm:mt-4 px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/30 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group/btn cursor-pointer"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}

        </div>
      </div>

      {/* Centered Dot Indicators */}
      <div className="flex items-center justify-center gap-2 pt-5">
        {galleryImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              currentIndex === idx ? "bg-[#9E1B24] w-7" : "bg-white/30 hover:bg-white/70 w-2"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
