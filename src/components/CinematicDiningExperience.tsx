import React, { useState } from 'react';
import { Flame, Utensils, Mountain, Wine, Sparkles, ChevronRight, Calendar } from 'lucide-react';

interface CinematicAct {
  id: string;
  actNumber: string;
  title: string;
  subtitle: string;
  urduTitle: string;
  description: string;
  sensoryNotes: {
    scent: string;
    sound: string;
    atmosphere: string;
  };
  image: string;
  caption: string;
}

const CINEMATIC_ACTS: CinematicAct[] = [
  {
    id: 'live-bbq',
    actNumber: 'ACT I',
    title: 'Live Charcoal BBQ Sigris',
    subtitle: 'Open flame mastery beneath starlit Bhurban pines',
    urduTitle: 'انگھیٹی و سیخ کباب',
    description: 'On the brisk mountain terrace, master pitmasters tend glowing sigris fueled by fragrant indigenous deodar wood. Thick skewers of Malai Boti, Seekh Kebabs, and Lamb Chops sizzle as white aromatic smoke floats into the cool mountain air.',
    sensoryNotes: {
      scent: 'Smoky deodar charcoal, toasted cumin, and roasted clotted malai',
      sound: 'Gentle crackle of fruitwood embers and the soft hiss of sizzling marinades',
      atmosphere: 'Warm amber terrace glowing against the twilight indigo mountain sky'
    },
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=2000&q=85',
    caption: 'Master grill chefs caramelizing skewers over white-hot embers on the PC Bhurban terrace.'
  },
  {
    id: 'traditional-food',
    actNumber: 'ACT II',
    title: 'The Royal Pakistani Feast',
    subtitle: 'Generational recipes simmered in earthen clay handis',
    urduTitle: 'شاہی روایتی ضیافت',
    description: 'Bukhara honors centuries of royal Mughlai and Punjabi banqueting. From mutton paya slow-cooked overnight until gelatinous and rich, to cast-iron karahis tossed at roaring heat with mountain butter and tellicherry black pepper.',
    sensoryNotes: {
      scent: 'Cardamom pods, crushed Kashmiri saffron, and freshly baked roghani naan',
      sound: 'Rhythmic ladle stirs against heavy copper and clay handi pots',
      atmosphere: 'Banqueting tables laden with smoking dishes and traditional accompaniments'
    },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=85',
    caption: 'Clay handis, cast-iron karahis, and aged basmati pulao presented with royal grace.'
  },
  {
    id: 'table-setting',
    actNumber: 'ACT III',
    title: 'Artisanal Table Setting',
    subtitle: 'Hand-beaten brass, fine linen & candlelight intimacy',
    urduTitle: 'دسترخوان و پیتل',
    description: 'Every table at Bukhara is an intimate sanctuary. Heavy hand-hammered brass platters, custom candle lanterns, and crisp linen create a warm, reflective glow that honors the sacred Pakistani tradition of dastarkhwan hospitality.',
    sensoryNotes: {
      scent: 'Beeswax candlelight, fresh mint sprigs, and rose petal water',
      sound: 'Soft acoustic sitar chords floating through deodar wood halls',
      atmosphere: 'Intimate candlelit warmth framed by sculpted traditional archways'
    },
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85',
    caption: 'Handcrafted timber dining tables illuminated by soft candle glow and brass samovars.'
  },
  {
    id: 'mountain-ambience',
    actNumber: 'ACT IV',
    title: 'Bhurban Mountain Ambience',
    subtitle: 'Perched 2,084 meters above the Murree mist',
    urduTitle: 'بھوربن کی شام',
    description: 'Surrounded by ancient cedar forests and sub-Himalayan peaks, dining at Bukhara is inseparable from its mountain setting. As mist rolls through the valleys, guests wrap themselves in warm wool shawls beside open fire pits, savoring pink Kashmiri noon chai.',
    sensoryNotes: {
      scent: 'Crisp highland pine needles, woodfire hearth smoke, and autumn dew',
      sound: 'Whispering pine trees in the mountain breeze and distant evening calls',
      atmosphere: 'Panoramic valley lights twinkling beneath the dark Himalayan sky'
    },
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85',
    caption: 'The twilight ridge at Pearl Continental Bhurban overlooking the sub-Himalayan valleys.'
  }
];

interface CinematicDiningExperienceProps {
  onOpenReservation: () => void;
}

export const CinematicDiningExperience: React.FC<CinematicDiningExperienceProps> = ({
  onOpenReservation,
}) => {
  const [activeActIndex, setActiveActIndex] = useState(0);
  const activeAct = CINEMATIC_ACTS[activeActIndex];

  return (
    <section id="experience" className="py-28 md:py-36 bg-[#120F0C] text-[#F4EFE6] relative overflow-hidden">
      
      {/* Background ambient texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,161,91,0.08)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C6A15B]" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C6A15B]">
              THE EVENING CHRONICLE
            </span>
            <span className="w-8 h-[1px] bg-[#C6A15B]" />
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE6] tracking-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cinematic Dining Experience
          </h2>

          <p className="text-base text-[#F4EFE6]/75 font-light leading-relaxed">
            An evening at Bukhara unfolds in four sensory acts—from live charcoal embers and heirloom clay handis to starlit mountain serenity.
          </p>
        </div>

        {/* Interactive Act Navigation Switcher (Editorial Buttons) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {CINEMATIC_ACTS.map((act, index) => {
            const isSelected = activeActIndex === index;
            return (
              <button
                key={act.id}
                onClick={() => setActiveActIndex(index)}
                className={`text-left p-4 sm:p-5 transition-all duration-300 border cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#1E1813] border-[#C6A15B] shadow-2xl'
                    : 'bg-[#17130F]/60 border-white/5 hover:border-[#B38A45]/30 hover:bg-[#17130F]'
                }`}
              >
                {/* Gold Top Indicator */}
                {isSelected && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-[#C6A15B]" />
                )}

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#C6A15B] font-semibold">
                    {act.actNumber}
                  </span>
                  <span className="text-xs font-serif text-[#C6A15B]/60 hidden sm:inline">
                    {act.urduTitle}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-serif font-bold text-[#F4EFE6] truncate">
                  {act.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Full-Width Cinematic Feature Frame with Slow Reveal Animation */}
        <div className="relative overflow-hidden border border-[#B38A45]/35 shadow-2xl bg-[#17130F]">
          
          {/* Main Full-Width Photographic Canvas */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/10] w-full overflow-hidden">
            <img
              key={activeAct.image}
              src={activeAct.image}
              alt={activeAct.title}
              className="w-full h-full object-cover animate-fade-in transition-transform duration-1000 scale-100 hover:scale-103"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120F0C] via-[#120F0C]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#120F0C]/80 via-transparent to-[#120F0C]/60" />

            {/* In-Frame Floating Urdu Typography Callout */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-[#17130F]/90 backdrop-blur-md border border-[#C6A15B]/40 text-sm font-serif text-[#C6A15B] shadow-xl">
              {activeAct.urduTitle}
            </div>

            {/* In-Frame Photographic Caption */}
            <div className="absolute bottom-4 right-6 text-xs text-[#F4EFE6]/70 italic hidden sm:block max-w-md text-right">
              {activeAct.caption}
            </div>
          </div>

          {/* Deep Narrative & Sensory Profile Drawer below the Image */}
          <div className="p-8 sm:p-12 bg-[#17130F] border-t border-[#B38A45]/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Narrative Copy & Titles */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-[#C6A15B] uppercase tracking-widest font-semibold">
                    {activeAct.actNumber}
                  </span>
                  <span className="w-4 h-[1px] bg-[#B38A45]/40" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#817568]">
                    {activeAct.subtitle}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#F4EFE6] tracking-tight mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {activeAct.title}
                </h3>

                <p className="text-sm sm:text-base text-[#F4EFE6]/80 leading-relaxed font-light mb-6">
                  {activeAct.description}
                </p>

                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-colors shadow-lg"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table for This Evening</span>
                </button>
              </div>

              {/* Right Column: Sensory Profile Card (Scent, Sound, Atmosphere) */}
              <div className="lg:col-span-5 bg-[#1F1813] border border-[#B38A45]/30 p-6 sm:p-7">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-4">
                  SENSORY ARCHITECTURE
                </span>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-[#817568] uppercase tracking-wider block mb-1 font-medium">
                      Aroma & Scent
                    </span>
                    <p className="text-[#F4EFE6]/90 font-light leading-relaxed">
                      {activeAct.sensoryNotes.scent}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[#817568] uppercase tracking-wider block mb-1 font-medium">
                      Soundscape
                    </span>
                    <p className="text-[#F4EFE6]/90 font-light leading-relaxed">
                      {activeAct.sensoryNotes.sound}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[#817568] uppercase tracking-wider block mb-1 font-medium">
                      Mountain Atmosphere
                    </span>
                    <p className="text-[#C6A15B] font-medium leading-relaxed">
                      {activeAct.sensoryNotes.atmosphere}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
