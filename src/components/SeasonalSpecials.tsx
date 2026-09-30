import React, { useState } from 'react';
import { SEASONAL_SPECIALS, SeasonalSpecial, RESTAURANT_INFO } from '../data/restaurantData';
import { Sparkles, Flame, Clock, Award, Calendar, ChevronRight, Check } from 'lucide-react';

interface SeasonalSpecialsProps {
  onOpenReservation: () => void;
}

export const SeasonalSpecials: React.FC<SeasonalSpecialsProps> = ({ onOpenReservation }) => {
  const [activeSpecialIndex, setActiveSpecialIndex] = useState(0);
  const activeSpecial = SEASONAL_SPECIALS[activeSpecialIndex];

  return (
    <section id="seasonal" className="py-28 md:py-36 bg-[#1F1813] text-[#F4EFE6] relative overflow-hidden border-t border-b border-[#B38A45]/25">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(198,161,91,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#B38A45]/20 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B]">
                CHEF'S ROTATING HEARTH
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE6] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Seasonal Specials
            </h2>
            <p className="text-base text-[#E4C88A] font-serif italic mt-2">
              Limited creations inspired by the high altitude harvest & winter pine hearths
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-[#817568] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#C6A15B] animate-pulse" />
            <span className="text-[#C6A15B] font-medium">Autumn / Winter Edition</span>
            <span>·</span>
            <span>Rotating Nightly</span>
          </div>
        </div>

        {/* Feature Spotlight: Asymmetric Two-Column Editorial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Left Column: Spotlight Image with Editorial Overlay */}
          <div className="lg:col-span-6 relative flex flex-col justify-between">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full w-full overflow-hidden border border-[#B38A45]/30 shadow-2xl bg-[#17130F]">
              <img
                src={activeSpecial.image}
                alt={activeSpecial.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1813] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1F1813]/60 via-transparent to-transparent" />

              {/* Floating Season Tag */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#17130F]/90 backdrop-blur-md border border-[#C6A15B]/40 text-xs font-serif text-[#C6A15B]">
                {activeSpecial.seasonLabel}
              </div>

              {/* Bottom Metadata Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#17130F]/95 backdrop-blur-md border border-[#B38A45]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#817568] block">Preparation</span>
                  <span className="text-[#F4EFE6] font-medium">{activeSpecial.preparationTime}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#817568] block">Recommended Pairing</span>
                  <span className="text-[#C6A15B] font-medium">{activeSpecial.pairing}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Chef Note, and Details */}
          <div className="lg:col-span-6 bg-[#17130F] border border-[#B38A45]/30 p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Season kicker & Urdu Callout */}
              <div className="flex items-center justify-between pb-3 border-b border-[#B38A45]/20 mb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-semibold">
                  Chef's Choice Spotlight
                </span>
                <span className="text-sm font-serif text-[#C6A15B]/70 tracking-wider">
                  {activeSpecial.urduName}
                </span>
              </div>

              {/* Dish Name */}
              <h3
                className="text-3xl sm:text-4xl font-serif font-bold text-[#F4EFE6] tracking-tight mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {activeSpecial.name}
              </h3>

              {/* Price & Availability Notice */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-mono tabular-nums text-[#C6A15B] font-bold">
                  {activeSpecial.price}
                </span>
                <span className="h-4 w-[1px] bg-white/10" />
                <span className="text-xs text-[#817568] font-light">
                  {activeSpecial.availability}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#F4EFE6]/80 leading-relaxed font-light mb-6">
                {activeSpecial.description}
              </p>

              {/* Chef's Tasting Quote */}
              <div className="p-4 bg-[#241D16] border-l-2 border-[#C6A15B] mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A15B] block mb-1 font-semibold">
                  Executive Chef's Note
                </span>
                <p className="text-xs sm:text-sm font-serif italic text-[#F4EFE6]/90 leading-relaxed">
                  "{activeSpecial.chefNote}"
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {activeSpecial.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[#F4EFE6]/75">
                    <span className="w-4 h-4 bg-[#C6A15B]/15 text-[#C6A15B] flex items-center justify-center shrink-0 border border-[#C6A15B]/30">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#B38A45]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Table For This Special</span>
              </button>

              <span className="text-xs text-[#817568]">
                Served exclusively at Bukhara terrace & dining hall
              </span>
            </div>

          </div>

        </div>

        {/* Horizontal Rotating Selector Cards */}
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#817568] block mb-4 font-semibold">
            All Current Rotating Recommendations ({SEASONAL_SPECIALS.length})
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SEASONAL_SPECIALS.map((item, index) => {
              const isSelected = activeSpecialIndex === index;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSpecialIndex(index)}
                  className={`text-left p-5 transition-all duration-300 border cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#17130F] border-[#C6A15B] shadow-xl'
                      : 'bg-[#17130F]/40 border-white/5 hover:border-[#B38A45]/40 hover:bg-[#17130F]/70'
                  }`}
                >
                  {/* Active Indicator Top Line */}
                  {isSelected && (
                    <span className="absolute top-0 left-0 right-0 h-1 bg-[#C6A15B]" />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] tracking-wider uppercase text-[#C6A15B] font-mono">
                      0{index + 1}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#F4EFE6] tabular-nums">
                      {item.price}
                    </span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-[#F4EFE6] mb-1 line-clamp-1">
                    {item.name}
                  </h4>

                  <p className="text-[11px] text-[#817568] line-clamp-1 mb-3">
                    {item.seasonLabel}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-[#C6A15B]">
                    <span className="uppercase tracking-wider">Explore Details</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
