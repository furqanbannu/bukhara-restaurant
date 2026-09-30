import React from 'react';
import { Sparkles, UtensilsCrossed, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface IntroSectionProps {
  onOpenReservation: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="story" className="relative py-28 md:py-36 bg-[#17130F] text-[#F4EFE6] overflow-hidden">
      {/* Background Architectural Watermark / Subtle Texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(179,138,69,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Label */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B]">
                THE BUKHARA EXPERIENCE
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F4EFE6] tracking-tight leading-[1.18] mb-6 text-balance"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Where tradition meets the art of fine dining.
            </h2>

            {/* Accent divider */}
            <div className="w-16 h-[2px] bg-[#B38A45]/40 mb-8" />

            {/* Primary Text */}
            <p className="text-base md:text-lg text-[#F4EFE6]/80 leading-relaxed font-light mb-6">
              {RESTAURANT_INFO.name} celebrates the soul of Pakistani cuisine through time-honoured recipes, premium ingredients and live cooking traditions. Every plate is prepared to create a memorable dining experience.
            </p>

            {/* Secondary Editorial Commentary */}
            <p className="text-sm md:text-base text-[#817568] leading-relaxed mb-8">
              Set high on the forested ridges of Bhurban, our culinary philosophy unites the royal kitchens of Mughal Lahore, the rugged open-fire mastery of the North-West Frontier, and the refined court cuisines of ancient Punjab. Here, live woodfire embers infuse every bite with an unmistakable mountain aroma.
            </p>

            {/* Key Quality Pillars (Unboxed Clean Presentation) */}
            <div className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-[#B38A45]/20 mb-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-medium block mb-1">
                  Woodfire Sigri
                </span>
                <p className="text-xs text-[#F4EFE6]/70 leading-relaxed">
                  Natural deodar & fruitwood charcoal imparting deep smoky notes.
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-medium block mb-1">
                  Pure Desi Ghee
                </span>
                <p className="text-xs text-[#F4EFE6]/70 leading-relaxed">
                  Clarified mountain butter for authentic rich textures & sweets.
                </p>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A15B] hover:text-[#E4C88A] group transition-colors"
            >
              <span>Experience The Heritage</span>
              <span className="w-8 h-[1px] bg-[#C6A15B] group-hover:w-12 transition-all" />
            </button>
          </div>

          {/* Right Column: Asymmetric Editorial Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Primary Large Image Frame */}
              <div className="relative z-10 overflow-hidden border border-[#B38A45]/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional Pakistani Food and Handi Presentation at Bukhara"
                  className="w-full h-[440px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-transparent to-transparent opacity-60" />
                
                {/* Floating caption tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#17130F]/90 backdrop-blur-md border border-[#B38A45]/30 text-xs">
                  <span className="text-[#C6A15B] font-serif italic text-sm block">Authentic Handi & Royal Platters</span>
                  <span className="text-[#817568] tracking-wider uppercase text-[10px]">Prepared fresh with generational heirloom spice blends</span>
                </div>
              </div>

              {/* Secondary Overlapping Accent Card (Asymmetry) */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 z-20 w-56 p-5 bg-[#2B2118] border border-[#B38A45]/40 shadow-2xl">
                <span className="text-[10px] tracking-[0.25em] text-[#C6A15B] uppercase font-semibold block mb-1">
                  PC Bhurban
                </span>
                <span className="text-xl font-serif text-[#F4EFE6] font-bold block mb-1">
                  2,084m
                </span>
                <p className="text-xs text-[#F4EFE6]/70 font-light">
                  Elevated dining amidst Murree pine mist and starlit mountain skies.
                </p>
              </div>

              {/* Decorative Corner Framing */}
              <div className="absolute -top-4 -right-4 w-28 h-28 border-t-2 border-r-2 border-[#C6A15B]/30 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
