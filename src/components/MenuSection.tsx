import React, { useState } from 'react';
import { MenuItem, MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { Eye, X, Flame, Sparkles, ChefHat, Calendar, Check, ZoomIn, ArrowRight } from 'lucide-react';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [hoveredDishId, setHoveredDishId] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [showAllDishes, setShowAllDishes] = useState<boolean>(false);

  // The 6 Signature Dishes mandated by Phase 2
  const coreSignatureDishIds = [
    'mutton-paya',
    'malai-boti',
    'chicken-white-karahi',
    'beef-pulao',
    'chicken-jalfrezi',
    'palak-gosht'
  ];

  const categories = [
    { id: 'all', label: 'All Signature Dishes' },
    { id: 'traditional', label: 'Traditional Heritage' },
    { id: 'bbq', label: 'Live BBQ Sigri' },
    { id: 'karahi', label: 'Karahi & Handi' },
    { id: 'rice', label: 'Royal Pulao & Rice' },
    { id: 'dessert', label: 'Live Hot Sweets' },
  ];

  const filteredDishes = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const displayedDishes = showAllDishes 
    ? filteredDishes 
    : (activeCategory === 'all' 
        ? MENU_ITEMS.filter(d => coreSignatureDishIds.includes(d.id))
        : filteredDishes);

  return (
    <section id="menu" className="py-28 md:py-36 bg-[#17130F] text-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with Elegant Gold Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-[#B38A45]/30 gap-8">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C6A15B]">
                HERITAGE GASTRONOMY
              </span>
            </div>
            
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#F4EFE6] gold-gradient-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Signature Flavours
            </h2>
            
            <p className="text-base sm:text-lg text-[#E4C88A] font-serif italic mt-2">
              A celebration of Pakistan's rich culinary heritage
            </p>
          </div>

          {/* Dinner Buffet Pricing Box with Gold Hairline */}
          <div className="p-5 bg-[#1F1813] border border-[#B38A45]/40 max-w-md shadow-xl">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-semibold">
                Grand Evening Dinner Buffet
              </span>
              <span className="text-sm font-mono font-bold text-[#F4EFE6] tabular-nums">
                {RESTAURANT_INFO.priceRange}
              </span>
            </div>
            <p className="text-xs text-[#F4EFE6]/70 leading-relaxed font-light">
              Full access to open-fire sigri BBQ, overnight paya, cast-iron karahis, Bannu beef pulao, and fresh live jalebi.
            </p>
          </div>
        </div>

        {/* Category Filtering Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setShowAllDishes(true);
                }}
                className={`px-6 py-3 text-xs uppercase tracking-[0.18em] whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#C6A15B] text-[#17130F] font-bold border-[#C6A15B] shadow-lg'
                    : 'bg-[#1E1813]/60 text-[#F4EFE6]/75 border-white/10 hover:border-[#B38A45]/50 hover:text-[#C6A15B]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Large Professional Food Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {displayedDishes.map((dish) => {
            const isHovered = hoveredDishId === dish.id;
            return (
              <div
                key={dish.id}
                onMouseEnter={() => setHoveredDishId(dish.id)}
                onMouseLeave={() => setHoveredDishId(null)}
                onClick={() => setSelectedDish(dish)}
                className={`group cursor-pointer bg-[#1E1813] border transition-all duration-400 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl relative ${
                  isHovered
                    ? 'border-[#C6A15B] -translate-y-2 ring-1 ring-[#C6A15B]/40'
                    : 'border-[#B38A45]/25'
                }`}
              >
                {/* Large Photography Frame with Vignette & Quick-View Lens */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#16120E]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1813] via-transparent to-transparent opacity-85" />

                  {/* Urdu Calligraphy Badge */}
                  {dish.urduName && (
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 bg-[#17130F]/90 backdrop-blur-md text-[#C6A15B] text-xs font-serif tracking-wide border border-[#B38A45]/35 shadow-lg">
                      {dish.urduName}
                    </div>
                  )}

                  {/* Floating Quick View Affordance on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="px-4 py-2 bg-[#17130F] border border-[#C6A15B] text-xs uppercase tracking-[0.2em] text-[#C6A15B] flex items-center gap-2 shadow-2xl">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Dish</span>
                    </span>
                  </div>
                </div>

                {/* Dish Information Body */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category & Spice Profile */}
                    <div className="flex items-center justify-between text-[11px] tracking-wider uppercase text-[#817568] mb-2 font-medium">
                      <span>{dish.categoryLabel}</span>
                      <span aria-hidden="true" className="text-[#C6A15B]/40">·</span>
                      <span className="text-[#C6A15B] flex items-center gap-1">
                        <Flame className="w-3 h-3 text-[#C6A15B]" />
                        {dish.spiceLevel}
                      </span>
                    </div>

                    {/* Dish Headline */}
                    <h3 className="text-2xl font-serif font-bold text-[#F4EFE6] group-hover:text-[#C6A15B] transition-colors mb-2">
                      {dish.name}
                    </h3>

                    {/* Minimalist Culinary Description */}
                    <p className="text-xs text-[#F4EFE6]/75 leading-relaxed font-light line-clamp-2 mb-4">
                      {dish.description}
                    </p>
                  </div>

                  {/* Hover Drawer: Authentic Technique and Key Ingredients */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isHovered ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-3 border-t border-[#B38A45]/30 space-y-2 bg-[#17130F]/80 p-3">
                      <div className="flex items-start gap-2 text-[11px]">
                        <ChefHat className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span className="text-[#F4EFE6]/90 line-clamp-1">{dish.cookingMethod}</span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {dish.ingredients.slice(0, 3).map((ing) => (
                          <span
                            key={ing}
                            className="text-[10px] px-2 py-0.5 bg-[#2B2118] text-[#C6A15B] border border-[#B38A45]/20"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Price & Buffet Status */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                    <span className="text-base font-semibold font-mono tabular-nums text-[#C6A15B]">
                      {dish.price}
                    </span>
                    <span className="text-[10px] tracking-widest uppercase text-[#817568] group-hover:text-[#C6A15B] transition-colors">
                      Buffet Included
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Menu Button / Reservation Action */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          {!showAllDishes && (
            <button
              onClick={() => setShowAllDishes(true)}
              className="px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#17130F] transition-all duration-300 cursor-pointer shadow-lg"
            >
              View Full Menu ({MENU_ITEMS.length} Offerings)
            </button>
          )}

          <button
            onClick={onOpenReservation}
            className="px-9 py-4 text-xs font-semibold uppercase tracking-[0.22em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-all duration-300 cursor-pointer shadow-xl"
          >
            Reserve Table For Dinner
          </button>
        </div>

      </div>

      {/* High-Resolution Dish Quick-View Pop-Up Modal */}
      {selectedDish && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => {
            setSelectedDish(null);
            setIsZoomed(false);
          }}
        >
          <div
            className="relative w-full max-w-3xl bg-[#1E1813] border border-[#B38A45]/40 shadow-2xl p-6 sm:p-8 overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedDish(null);
                setIsZoomed(false);
              }}
              aria-label="Close dish quick view"
              className="absolute top-4 right-4 p-2 text-[#F4EFE6]/60 hover:text-[#C6A15B] transition-colors border border-white/5 hover:border-[#C6A15B]/30 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
              <div className="md:col-span-6 relative aspect-square sm:aspect-[4/3] md:aspect-square overflow-hidden border border-[#B38A45]/30 group/img bg-black">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className={`w-full h-full object-cover transition-transform duration-500 cursor-zoom-in ${
                    isZoomed ? 'scale-150' : 'group-hover/img:scale-105'
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                  referrerPolicy="no-referrer"
                />
                
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#17130F]/90 text-[10px] uppercase tracking-wider text-[#C6A15B] border border-[#B38A45]/30 flex items-center gap-1.5 backdrop-blur-sm"
                >
                  <ZoomIn className="w-3 h-3" />
                  <span>{isZoomed ? 'Reset Zoom' : 'High-Res Zoom'}</span>
                </button>

                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#17130F]/90 text-xs font-serif text-[#C6A15B] border border-[#B38A45]/30">
                  {selectedDish.urduName || selectedDish.categoryLabel}
                </div>
              </div>

              <div className="md:col-span-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-medium mb-1">
                    <span>{selectedDish.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedDish.spiceLevel}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE6] mb-2">
                    {selectedDish.name}
                  </h3>

                  <div className="text-xl font-mono tabular-nums text-[#C6A15B] font-semibold mb-4">
                    {selectedDish.price}
                    <span className="text-xs text-[#817568] ml-2 font-sans font-normal">
                      (Grand Dinner Buffet Included)
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#F4EFE6]/80 leading-relaxed font-light mb-6">
                    {selectedDish.description}
                  </p>
                </div>

                <div className="p-3.5 bg-[#17130F] border border-[#B38A45]/20 text-xs mb-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#817568] block mb-1">
                    Authentic Preparation Technique
                  </span>
                  <p className="text-[#F4EFE6] font-medium leading-relaxed">
                    {selectedDish.cookingMethod}
                  </p>
                </div>
              </div>
            </div>

            <div className="py-4 border-t border-[#B38A45]/20 mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#817568] block mb-2 font-medium">
                Prime Ingredients & Royal Seasonings
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedDish.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="text-xs px-2.5 py-1 bg-[#2B2118] text-[#F4EFE6]/90 border border-[#B38A45]/20"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="text-xs text-[#817568] hidden sm:block">
                <span>Served fresh daily at dinner buffet & à la carte</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedDish(null);
                    setIsZoomed(false);
                    onOpenReservation();
                  }}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table For Tonight</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
