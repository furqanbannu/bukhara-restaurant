import React from 'react';
import { MapPin, Navigation, Compass, CloudFog, Phone, Car, Clock, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Bukhara Restaurant Pearl Continental Hotel Bhurban Pakistan'
  )}`;

  return (
    <section id="location" className="py-28 md:py-36 bg-[#17130F] text-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#B38A45]/20 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A15B]">
                MOUNTAIN SANCTUARY
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F4EFE6] tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Find Bukhara
            </h2>
            <p className="text-base text-[#817568] mt-2">
              Secluded within the lush deodar ridges of Pearl Continental Bhurban.
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-colors shadow-lg self-start md:self-auto"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
          </a>
        </div>

        {/* Two-Column Map and Travel Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Styled Dark Luxury Map Representation */}
          <div className="lg:col-span-7 bg-[#1E1813] border border-[#B38A45]/30 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[420px]">
            {/* Dark Styled Map Canvas */}
            <div className="absolute inset-0 bg-[#16120E]">
              {/* Mountain contour subtle pattern */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:28px_28px]" />
              
              {/* Stylized Mountain Topography Vector Lines */}
              <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 350 Q 200 280, 450 330 T 900 290" fill="none" stroke="#C6A15B" strokeWidth="1" />
                <path d="M 0 300 Q 250 210, 500 270 T 900 220" fill="none" stroke="#C6A15B" strokeWidth="1" />
                <path d="M 0 250 Q 280 140, 550 200 T 900 160" fill="none" stroke="#C6A15B" strokeWidth="1.5" strokeDasharray="4,4" />
                <path d="M 0 200 Q 320 80, 600 150 T 900 110" fill="none" stroke="#C6A15B" strokeWidth="1" />
              </svg>

              {/* Central Glowing Pin for Bukhara */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#C6A15B]/20 animate-ping absolute" />
                  <div className="w-10 h-10 rounded-full bg-[#17130F] border-2 border-[#C6A15B] flex items-center justify-center text-[#C6A15B] shadow-2xl z-10">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2 px-3 py-1.5 bg-[#17130F]/95 border border-[#B38A45]/40 text-center backdrop-blur-md shadow-xl">
                  <span className="text-xs font-serif font-bold text-[#F4EFE6] block">
                    BUKHARA
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-[#C6A15B] block">
                    Pearl Continental Bhurban
                  </span>
                </div>
              </div>
            </div>

            {/* Map Top Bar with Live Altitude & Coordinates */}
            <div className="relative z-10 p-5 flex items-center justify-between bg-[#17130F]/90 backdrop-blur-md border-b border-[#B38A45]/20">
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-[#C6A15B]" />
                <span className="text-xs font-mono text-[#F4EFE6]">
                  33.9556° N, 73.4528° E · {RESTAURANT_INFO.elevation}
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-[#817568]">
                Murree Sub-Himalayan Range
              </span>
            </div>

            {/* Map Bottom Bar with Direct Map Link */}
            <div className="relative z-10 p-5 bg-[#17130F]/90 backdrop-blur-md border-t border-[#B38A45]/20 flex items-center justify-between">
              <span className="text-xs text-[#F4EFE6]/80 font-light truncate max-w-sm">
                {RESTAURANT_INFO.fullAddress}
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C6A15B] hover:text-[#E4C88A] flex items-center gap-1 uppercase tracking-wider font-semibold whitespace-nowrap ml-2"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Travel Times, Altitude, & Arrival Advice */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Address & Phone Direct Contact Cards */}
            <div className="p-8 bg-[#241D16] border border-[#B38A45]/30">
              <h3 className="text-lg font-serif font-bold text-[#F4EFE6] mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C6A15B]" />
                <span>Bhurban Sanctuary Address</span>
              </h3>

              <div className="space-y-3 text-xs mb-6">
                <div>
                  <span className="text-[#817568] uppercase tracking-wider block mb-0.5">Physical Address</span>
                  <span className="text-[#F4EFE6] font-medium leading-relaxed block">
                    {RESTAURANT_INFO.fullAddress}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <span className="text-[#817568] uppercase tracking-wider block mb-0.5">Direct Hospitality Desk</span>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-base font-mono font-bold text-[#C6A15B] hover:text-[#E4C88A] transition-colors block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-xs font-semibold uppercase tracking-[0.18em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions (Google Maps)</span>
              </a>
            </div>

            {/* Travel Times from Key Cities */}
            <div className="p-8 bg-[#241D16] border border-[#B38A45]/30">
              <h3 className="text-lg font-serif font-bold text-[#F4EFE6] mb-4 flex items-center gap-2">
                <Car className="w-4 h-4 text-[#C6A15B]" />
                <span>Driving Times</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div>
                    <span className="text-xs text-[#F4EFE6] font-medium block">
                      Islamabad / Rawalpindi
                    </span>
                    <span className="text-[10px] text-[#817568]">Via Murree Expressway (N-75)</span>
                  </div>
                  <span className="text-xs font-mono text-[#C6A15B] font-bold">
                    ~1 hr 45 min
                  </span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div>
                    <span className="text-xs text-[#F4EFE6] font-medium block">
                      Murree Mall Road
                    </span>
                    <span className="text-[10px] text-[#817568]">Via Hotel Road</span>
                  </div>
                  <span className="text-xs font-mono text-[#C6A15B] font-bold">
                    ~25 min
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#F4EFE6] font-medium block">
                      Islamabad Int. Airport (ISB)
                    </span>
                    <span className="text-[10px] text-[#817568]">Via Srinagar Highway & N-75</span>
                  </div>
                  <span className="text-xs font-mono text-[#C6A15B] font-bold">
                    ~2 hr 10 min
                  </span>
                </div>
              </div>
            </div>

            {/* Mountain Weather & Valet Details */}
            <div className="p-8 bg-[#1E1813] border border-[#B38A45]/20">
              <div className="flex items-center gap-3 mb-4">
                <CloudFog className="w-5 h-5 text-[#C6A15B]" />
                <h4 className="text-sm uppercase tracking-[0.2em] font-serif font-semibold text-[#F4EFE6]">
                  Evening Atmosphere Advisory
                </h4>
              </div>

              <p className="text-xs text-[#F4EFE6]/75 leading-relaxed font-light mb-4">
                Evening temperatures at Bhurban typically drop 8–10°C below Islamabad. Even during warm summer months, terrace diners are advised to carry light shawls or blazers to comfortably enjoy our live BBQ stations.
              </p>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-[#817568]">
                <span>Complimentary PC Valet Parking</span>
                <span className="text-[#C6A15B]">Hotel Road Security</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
