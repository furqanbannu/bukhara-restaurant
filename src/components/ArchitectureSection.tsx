import React, { useState } from 'react';
import { Sparkles, Eye, Compass, Layers, ShieldCheck, ChevronRight } from 'lucide-react';

interface MaterialPillar {
  id: string;
  name: string;
  urduName: string;
  title: string;
  description: string;
  architecturalContext: string;
  image: string;
  materials: string[];
}

const MATERIAL_PILLARS: MaterialPillar[] = [
  {
    id: 'arches',
    name: 'Traditional Arches',
    urduName: 'محراب و شاہی کمان',
    title: 'Mughal & Gandhara Cusped Arches',
    description: 'Graceful multi-foil arches frame panoramic vistas of the Bhurban pine valleys, creating a timeless architectural rhythm between interior sanctuary and mountain grandeur.',
    architecturalContext: 'Proportioned according to Mughal imperial geometry, each archway is sculpted with clean stone relief and highlighted with warm recessed lighting.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    materials: ['Chiseled Murree Sandstone', 'Recessed Warm Amber LEDs', 'Hand-plastered Earthen Stucco']
  },
  {
    id: 'timber',
    name: 'Handcrafted Wood',
    urduName: 'دیودار کی دستکاری',
    title: 'Deodar & Walnut Timber Ceilings',
    description: 'Indigenous aged deodar (Himalayan cedar) and walnut timbers hand-carved by master wood artisans from Swat and Murree form deep coffered ceilings that fill the dining room with sweet pine resin aroma.',
    architecturalContext: 'Treated with organic beeswax rather than synthetic lacquers, the wood breathes with seasonal mountain humidity and ages to a rich cognac tone.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    materials: ['Solid Deodar Cedar', 'Walnut Rosette Reliefs', 'Beeswax Organic Patina']
  },
  {
    id: 'stone',
    name: 'Stone Walls',
    urduName: 'پہاڑی پتھر کی چنائی',
    title: 'Chiseled Murree Sandstone & Hearth',
    description: 'Massive local river stone and sandstone masonry anchor the indoor fireplaces and exterior sigri pavilions, creating grounding thermal mass that radiates warmth long into frosty Himalayan nights.',
    architecturalContext: 'Dry-stacked by local stonemasons using traditional bonding techniques that honor the vernacular hill architecture of Punjab and Khyber.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    materials: ['Murree River Rock', 'Thermal Sandstone Slabs', 'Mortarless Dry Jointing']
  },
  {
    id: 'brass',
    name: 'Brass Details',
    urduName: 'پیتل اور تانبے کے نقوش',
    title: 'Hand-Beaten Brass & Samovars',
    description: 'Custom beaten brass sconces, antique tea samovars, and tableware crafted by hereditary metalworkers in Patiala and Peshawar reflect flickering candlelight across every dining table.',
    architecturalContext: 'Each lantern features hand-pierced jali perforations that cast delicate geometric lace shadows across the polished timber floors.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    materials: ['Hand-Hammered Patiala Brass', 'Pierced Jali Perforations', 'Cardamom Tea Samovars']
  }
];

export const ArchitectureSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialPillar>(MATERIAL_PILLARS[0]);

  return (
    <section id="architecture" className="py-28 md:py-36 bg-[#17130F] text-[#F4EFE6] relative overflow-hidden">
      {/* Decorative architectural watermark grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 pb-8 border-b border-[#B38A45]/30">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#C6A15B]">
                THE SOUL OF THE STRUCTURE
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE6] tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Designed Around the Spirit of Bukhara
            </h2>
            <p className="text-base md:text-lg text-[#E4C88A] font-serif italic mt-3 max-w-2xl">
              An architectural harmony of royal Pakistani arches, mountain timber, hand-chiseled stone, and ambient firelight.
            </p>
          </div>

          <div className="lg:col-span-4 text-left lg:text-right">
            <span className="text-xs uppercase tracking-[0.2em] text-[#817568] block mb-1">
              Architectural Concept
            </span>
            <span className="text-sm font-serif text-[#F4EFE6] block">
              Northern Vernacular Meets Mughal Grandeur
            </span>
            <span className="text-xs font-mono text-[#C6A15B] block mt-1">
              PC Bhurban · 2,084m Altitude
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition: Left Hero Architectural Frame, Right Tactile Material Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Left Column (7 cols): Large Architectural Focal Photography */}
          <div className="lg:col-span-7 flex flex-col justify-between relative group">
            <div className="relative w-full h-full min-h-[460px] md:min-h-[580px] overflow-hidden border border-[#B38A45]/40 shadow-2xl bg-[#1E1813]">
              <img
                src={selectedMaterial.image}
                alt={selectedMaterial.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17130F] via-[#17130F]/40 to-transparent" />
              
              {/* Corner Architectural Bracket Accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#C6A15B]/60" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#C6A15B]/60" />

              {/* Floating Architectural Callout Badge */}
              <div className="absolute top-6 right-6 px-3.5 py-1.5 bg-[#17130F]/90 backdrop-blur-md border border-[#C6A15B]/40 text-xs font-serif text-[#C6A15B]">
                {selectedMaterial.urduName}
              </div>

              {/* Bottom Architectural Caption Box */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#17130F]/95 backdrop-blur-md border border-[#B38A45]/30">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A15B] font-semibold block mb-1">
                  ARCHITECTURAL COMPOSITION
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F4EFE6] mb-2">
                  {selectedMaterial.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F4EFE6]/80 font-light leading-relaxed">
                  {selectedMaterial.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Interactive Material Selector & Craft Matrix */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#817568] font-semibold block mb-4">
                TACTILE MATERIALS & TECHNIQUES
              </span>

              {MATERIAL_PILLARS.map((mat, idx) => {
                const isSelected = selectedMaterial.id === mat.id;
                return (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`w-full text-left p-5 transition-all duration-300 border cursor-pointer relative ${
                      isSelected
                        ? 'bg-[#241D16] border-[#C6A15B] shadow-xl'
                        : 'bg-[#1E1813]/60 border-white/5 hover:border-[#B38A45]/40 hover:bg-[#1E1813]'
                    }`}
                  >
                    {/* Active vertical indicator bar */}
                    {isSelected && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#C6A15B]" />
                    )}

                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#C6A15B]">0{idx + 1}</span>
                        <h4 className="text-base font-serif font-bold text-[#F4EFE6]">
                          {mat.name}
                        </h4>
                      </div>
                      <span className="text-xs font-serif text-[#C6A15B]/70">{mat.urduName}</span>
                    </div>

                    <p className="text-xs text-[#F4EFE6]/70 font-light line-clamp-2 mb-2">
                      {mat.architecturalContext}
                    </p>

                    <div className="flex items-center justify-between text-[10px] text-[#C6A15B] uppercase tracking-wider">
                      <span>{isSelected ? 'Viewing Material Detail' : 'Inspect Material'}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-1' : ''}`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Material Ingredient Spec Sheet */}
            <div className="p-6 bg-[#17130F] border border-[#B38A45]/30">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#817568] font-semibold block mb-2">
                Authentic Material Specifications
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedMaterial.materials.map((m) => (
                  <span
                    key={m}
                    className="text-xs px-3 py-1 bg-[#2B2118] text-[#E4C88A] border border-[#B38A45]/30 font-medium"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Full-Bleed Panorama Architectural Rest Strip */}
        <div className="relative overflow-hidden border border-[#B38A45]/30 bg-[#1E1813] p-8 md:p-14 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-2">
                WARM ARCHITECTURAL AMBIENCE
              </span>
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#F4EFE6] leading-snug">
                "Every arch, timber joint, and hearthstone at Bukhara was sculpted to evoke the stately hill residences of ancient Punjab—where glowing embers, aged deodar wood, and twilight mountain mist unite."
              </blockquote>
              <p className="text-xs text-[#817568] uppercase tracking-wider mt-4">
                Architecture & Interior Design · Pearl Continental Hotels & Resorts
              </p>
            </div>

            <div className="md:col-span-4 border-l border-[#B38A45]/20 pl-0 md:pl-8 space-y-4 text-xs text-[#F4EFE6]/80 font-light">
              <div>
                <span className="text-[#C6A15B] font-semibold uppercase tracking-wider block">Indoor Dining Hall</span>
                <span>Accommodates up to 140 guests under carved timber rosettes.</span>
              </div>
              <div>
                <span className="text-[#C6A15B] font-semibold uppercase tracking-wider block">Heated Cliff Terrace</span>
                <span>Open-air live BBQ sigris with mountain view fire pits.</span>
              </div>
              <div>
                <span className="text-[#C6A15B] font-semibold uppercase tracking-wider block">Family Jali Alcoves</span>
                <span>Private traditional wooden screened rooms for intimate gatherings.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
