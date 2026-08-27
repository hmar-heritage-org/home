"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Show ONLY when the dark footer is close to or visible in the viewport
      if (footerRect.top <= viewportHeight + 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className="px-5 py-2.5 rounded-xl bg-slate-900/90 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-2xl border border-slate-700/80 backdrop-blur-md hover:bg-[#9E1B24] hover:border-[#9E1B24] transition-all duration-200 flex items-center gap-2 group cursor-pointer"
        aria-label="Scroll back to top"
      >
        <span>Back to Top</span>
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-white" />
      </button>
    </div>
  );
}
