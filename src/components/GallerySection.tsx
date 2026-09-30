import React, { useState, useEffect } from 'react';
import { GALLERY_IMAGES } from '../data/restaurantData';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Architecture', 'Interior', 'Food', 'BBQ', 'Outdoor Atmosphere'];

  const filteredImages = GALLERY_IMAGES.filter((img) => {
    if (filter === 'All') return true;
    return img.category === filter;
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
      if (e.key === 'ArrowRight') setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#17130F] text-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 pb-8 border-b border-[#B38A45]/30 gap-8">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C6A15B]">
                CURATED ARCHITECTURAL ARCHIVE
              </span>
            </div>
            
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE6] tracking-tight gold-gradient-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Inside Bukhara
            </h2>
            
            <p className="text-base text-[#E4C88A] font-serif italic mt-2">
              A visual chronicle of mountain firelight, royal arches, and culinary theatrics.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all cursor-pointer border ${
                  filter === cat
                    ? 'bg-[#C6A15B] text-[#17130F] font-bold border-[#C6A15B] shadow-lg'
                    : 'bg-[#1E1813]/60 text-[#F4EFE6]/75 border-white/10 hover:border-[#B38A45]/40 hover:text-[#C6A15B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Masonry Editorial Grid with Diverse Rhythms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
          {filteredImages.map((img, index) => {
            const globalIndex = GALLERY_IMAGES.findIndex((item) => item.id === img.id);
            
            // Asymmetric masonry layout spans
            let colSpan = 'lg:col-span-4';
            let rowSpan = 'lg:row-span-1';
            let minHeight = 'min-h-[320px]';

            if (index === 0) {
              colSpan = 'lg:col-span-8';
              rowSpan = 'lg:row-span-2';
              minHeight = 'min-h-[460px] lg:min-h-[580px]';
            } else if (index === 1 || index === 4) {
              colSpan = 'lg:col-span-4';
              minHeight = 'min-h-[360px]';
            } else if (index === 5) {
              colSpan = 'lg:col-span-6';
              minHeight = 'min-h-[380px]';
            } else if (index === 6 || index === 7) {
              colSpan = 'lg:col-span-6';
              minHeight = 'min-h-[380px]';
            }

            return (
              <div
                key={img.id}
                onClick={() => setLightboxIndex(globalIndex)}
                className={`group relative overflow-hidden bg-[#1E1813] border border-[#B38A45]/30 cursor-pointer shadow-xl hover:shadow-2xl hover:border-[#C6A15B] transition-all duration-500 ${colSpan} ${rowSpan}`}
              >
                <div className={`relative w-full h-full ${minHeight}`}>
                  <img
                    src={img.image}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  {/* Corner Accent */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#C6A15B]/40 group-hover:border-[#C6A15B] transition-colors" />

                  {/* Overlay Typography & Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A15B] font-semibold mb-1">
                      {img.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F4EFE6] leading-tight mb-1">
                      {img.title}
                    </h3>
                    <p className="text-xs text-[#F4EFE6]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 font-light">
                      {img.caption}
                    </p>
                  </div>

                  {/* Expand Icon Cue */}
                  <div className="absolute top-4 right-4 p-2 bg-[#17130F]/90 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-opacity border border-[#B38A45]/40 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close fullscreen lightbox"
            className="absolute top-6 right-6 p-2.5 text-[#F4EFE6] hover:text-[#C6A15B] transition-colors z-50 border border-white/10 hover:border-[#C6A15B]/60 bg-[#17130F]/80"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous photograph"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#F4EFE6] hover:text-[#C6A15B] transition-colors z-50 border border-white/10 hover:border-[#C6A15B]/60 bg-[#17130F]/80"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next photograph"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#F4EFE6] hover:text-[#C6A15B] transition-colors z-50 border border-white/10 hover:border-[#C6A15B]/60 bg-[#17130F]/80"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Central Image & Caption */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_IMAGES[lightboxIndex].image}
              alt={GALLERY_IMAGES[lightboxIndex].title}
              className="max-h-[72vh] w-auto object-contain border border-[#B38A45]/40 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="mt-5 text-center max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] block mb-1 font-mono">
                {GALLERY_IMAGES[lightboxIndex].category} · {lightboxIndex + 1} of {GALLERY_IMAGES.length}
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#F4EFE6]">
                {GALLERY_IMAGES[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#F4EFE6]/75 mt-1 font-light">
                {GALLERY_IMAGES[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
