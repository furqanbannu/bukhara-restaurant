import React, { useState } from 'react';
import { Flame, Sparkles, Utensils, Mountain, ArrowRight, Check } from 'lucide-react';
import { SIGNATURE_EXPERIENCES } from '../data/restaurantData';

interface SignatureExperienceProps {
  onOpenReservation: () => void;
  onExploreDishes: () => void;
}

export const SignatureExperience: React.FC<SignatureExperienceProps> = ({
  onOpenReservation,
  onExploreDishes,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Flame, Sparkles, Utensils, Mountain];

  const experienceImages = [
    {
      url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
      caption: 'Live outdoor Sigri grilling over fragrant deodar mountain wood coals.',
    },
    {
      url: 'https://images.unsplash.com/photo-1589119908995-c6837fa14d48?auto=format&fit=crop&w=1200&q=80',
      caption: 'Live jalebi spiraled in golden desi ghee & cardamom rose gulab jamun.',
    },
    {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      caption: 'Slow-simmered handi stews, tender mutton paya & banqueting delicacies.',
    },
    {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      caption: 'The cliffside terrace of Pearl Continental Bhurban overlooking the valleys.',
    },
  ];

  return (
    <section id="experience" className="py-28 md:py-36 bg-[#2B2118] text-[#F4EFE6] relative overflow-hidden">
      {/* Subtle background ambient pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B]">
              THE FOUR PILLARS
            </span>
            <span className="w-8 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F4EFE6] tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            An Evening Worth Remembering
          </h2>

          <p className="text-base text-[#F4EFE6]/70 font-light leading-relaxed">
            Every element at Bukhara is curated to immerse your senses in the majesty of Pakistani culinary tradition and mountain grandeur.
          </p>
        </div>

        {/* Interactive Experience Grid / Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 4 Interactive Pillars List */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {SIGNATURE_EXPERIENCES.map((exp, index) => {
              const Icon = icons[index];
              const isActive = activeTab === index;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-6 transition-all duration-300 border cursor-pointer relative ${
                    isActive
                      ? 'bg-[#17130F] border-[#C6A15B] shadow-xl'
                      : 'bg-[#17130F]/40 border-white/5 hover:border-[#B38A45]/30 hover:bg-[#17130F]/60'
                  }`}
                >
                  {/* Left accent bar on active */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#C6A15B]" />
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-none transition-colors ${
                        isActive
                          ? 'bg-[#C6A15B] text-[#17130F]'
                          : 'bg-[#2B2118] text-[#C6A15B] border border-[#B38A45]/20'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-serif font-semibold text-[#F4EFE6]">
                          {exp.title}
                        </h3>
                        <span className="text-[10px] tracking-wider uppercase text-[#C6A15B] font-mono">
                          0{index + 1}
                        </span>
                      </div>
                      <p className="text-xs text-[#817568] uppercase tracking-wider mb-2 font-medium">
                        {exp.tagline}
                      </p>
                      <p className="text-xs text-[#F4EFE6]/75 leading-relaxed line-clamp-2">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Spotlight Showcase */}
          <div className="lg:col-span-7 bg-[#17130F] border border-[#B38A45]/30 p-8 md:p-10 flex flex-col justify-between shadow-2xl relative">
            <div>
              {/* Pillar Category & Title */}
              <div className="flex items-center justify-between border-b border-[#B38A45]/20 pb-4 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block">
                    {SIGNATURE_EXPERIENCES[activeTab].badge}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-serif font-bold text-[#F4EFE6] mt-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {SIGNATURE_EXPERIENCES[activeTab].title}
                  </h3>
                </div>
                <span className="text-2xl font-serif text-[#C6A15B]/40 font-bold">
                  0{activeTab + 1}
                </span>
              </div>

              {/* Main Image Frame with Smooth Swap */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#B38A45]/20 mb-6">
                <img
                  src={experienceImages[activeTab].url}
                  alt={SIGNATURE_EXPERIENCES[activeTab].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs text-[#F4EFE6]/80 italic">
                  {experienceImages[activeTab].caption}
                </div>
              </div>

              {/* Deep Narrative Description */}
              <p className="text-sm md:text-base text-[#F4EFE6]/85 leading-relaxed mb-6 font-light">
                {SIGNATURE_EXPERIENCES[activeTab].description}
              </p>

              {/* Feature Points Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {SIGNATURE_EXPERIENCES[activeTab].features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs text-[#F4EFE6]/80">
                    <span className="w-4 h-4 rounded-none bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center shrink-0 border border-[#C6A15B]/30">
                      <Check className="w-2.5 h-2.5" />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#B38A45]/20 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onOpenReservation}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-colors flex items-center gap-2"
              >
                <span>Reserve An Evening</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onExploreDishes}
                className="text-xs uppercase tracking-[0.18em] text-[#C6A15B] hover:text-[#E4C88A] underline underline-offset-8 transition-colors"
              >
                View Related Dishes
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
