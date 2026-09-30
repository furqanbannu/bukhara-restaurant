import React, { useState, useEffect } from 'react';
import { Calendar, ChevronDown, Compass, Flame, MapPin, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  const [ambientAudioActive, setAmbientAudioActive] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[720px] flex items-center justify-center overflow-hidden bg-[#17130F]"
    >
      {/* Cinematic Architectural Background with Slow Dynamic Breathing Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="w-full h-full bg-cover bg-center animate-slow-zoom transition-transform will-change-transform scale-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2600&q=90')`,
            backgroundPosition: 'center 45%',
          }}
        />

        {/* Layered Cinematic Overlays for Depth, Warm Candlelight & Architectural Mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-[#17130F]/65 to-[#17130F]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#17130F]/85 via-transparent to-[#17130F]/85" />
        
        {/* Warm Golden Candle & Hearth Glow Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,161,91,0.18)_0%,rgba(43,33,24,0.6)_50%,rgba(23,19,15,0.92)_85%)]" />

        {/* Animated Fire/Charcoal Ember Particles Floating Upward */}
        <div className="absolute bottom-16 left-1/4 w-1.5 h-1.5 rounded-full bg-[#E4C88A] blur-[0.5px] ember-1 pointer-events-none" />
        <div className="absolute bottom-24 left-1/2 w-2 h-2 rounded-full bg-[#C6A15B] blur-[0.8px] ember-2 pointer-events-none" />
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 rounded-full bg-[#B38A45] blur-[0.5px] ember-3 pointer-events-none" />
      </div>

      {/* Decorative Traditional Mughal Arch Architectural Framing */}
      <div className="absolute inset-x-8 top-20 bottom-12 border border-[#C6A15B]/15 pointer-events-none hidden md:block">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C6A15B]/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C6A15B]/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C6A15B]/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C6A15B]/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center pt-16">
        
        {/* Eyebrow with Traditional Pakistani Ornamentation */}
        <div className="inline-flex items-center gap-3 sm:gap-4 mb-6 animate-fade-in">
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#C6A15B]" />
          <span className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.32em] uppercase text-[#C6A15B]">
            A JOURNEY THROUGH PAKISTANI FLAVOURS
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#C6A15B]" />
        </div>

        {/* Main Headline: Large BUKHARA Typography with Gold Gradient */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold tracking-[0.22em] uppercase mb-4 drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] gold-gradient-text transition-all duration-700"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          BUKHARA
        </h1>

        {/* Subheadline with Poetic Polish */}
        <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#E4C88A] max-w-2xl font-normal tracking-wide mb-5">
          {RESTAURANT_INFO.subheadline}
        </p>

        {/* Architectural Atmosphere Narrative */}
        <p className="text-xs sm:text-sm md:text-base text-[#F4EFE6]/80 max-w-2xl leading-relaxed font-light mb-10 text-balance">
          {RESTAURANT_INFO.description}
        </p>

        {/* Action Buttons: Gold Filled + Transparent Bordered */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Gold Filled Button with Shimmer Sweep */}
          <button
            onClick={onOpenReservation}
            className="relative overflow-hidden w-full sm:w-auto px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-all duration-300 shadow-2xl active:scale-98 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 group"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 transition-transform bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            <Calendar className="w-4 h-4 text-[#17130F] group-hover:scale-110 transition-transform" />
            <span>Reserve a Table</span>
          </button>

          {/* Transparent Bordered Button */}
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] border border-[#C6A15B]/50 text-[#F4EFE6] hover:text-[#C6A15B] hover:border-[#C6A15B] hover:bg-[#C6A15B]/10 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#C6A15B]" />
            <span>Explore Menu</span>
          </button>
        </div>

        {/* Ambient Soundscape Simulator & Altitude Callout */}
        <div className="mt-14 pt-8 border-t border-[#B38A45]/20 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs tracking-wider text-[#F4EFE6]/75 uppercase">
          <span className="flex items-center gap-1.5 text-[#C6A15B]">
            <MapPin className="w-3.5 h-3.5" />
            PC Bhurban, Murree Hills
          </span>
          <span aria-hidden="true" className="text-[#B38A45]/40">·</span>
          <span>Elevation {RESTAURANT_INFO.elevation}</span>
          <span aria-hidden="true" className="text-[#B38A45]/40">·</span>
          <span className="flex items-center gap-1.5 text-[#C6A15B]">
            <Flame className="w-3.5 h-3.5" />
            Open-Fire Sigri BBQ
          </span>
          <span aria-hidden="true" className="text-[#B38A45]/40">·</span>

          {/* Audio atmosphere simulator toggle */}
          <button
            onClick={() => setAmbientAudioActive(!ambientAudioActive)}
            className="flex items-center gap-1.5 text-[#817568] hover:text-[#C6A15B] transition-colors cursor-pointer"
            title="Toggle mountain hearth soundscape ambience indicator"
          >
            {ambientAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span className="text-[#C6A15B] font-mono text-[10px]">Hearth Ambience: Active</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="text-[10px]">Hearth Ambience</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Discover Chevron Cue */}
      <a
        href="#architecture"
        aria-label="Scroll to architecture"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#F4EFE6]/50 hover:text-[#C6A15B] transition-colors"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase">Architecture & Heritage</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
