import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, MapPin, Mail, Clock, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#120F0C] text-[#F4EFE6] border-t border-[#B38A45]/30 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#B38A45]/20">
          
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <span
              className="text-3xl sm:text-4xl font-serif font-bold tracking-[0.25em] text-[#F4EFE6] block mb-3 uppercase"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              BUKHARA
            </span>
            <p className="text-sm font-serif italic text-[#C6A15B] tracking-wide mb-6">
              The art of Pakistani hospitality.
            </p>
            <p className="text-xs text-[#817568] leading-relaxed max-w-sm mb-6 font-light">
              A tribute to Pakistan's royal culinary heritage, live BBQ traditions, and warm deodar hearths perched 2,000 meters above the ordinary at Pearl Continental Bhurban.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#C6A15B] uppercase tracking-widest font-mono">
              <span>PC Bhurban</span>
              <span>·</span>
              <span>Murree Hills</span>
              <span>·</span>
              <span>Est. 1992</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-4">
              Navigation
            </span>
            <ul className="space-y-3 text-xs tracking-wider uppercase text-[#F4EFE6]/70">
              <li>
                <a href="#hero" className="hover:text-[#C6A15B] transition-colors">Home</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#C6A15B] transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C6A15B] transition-colors">Signature Menu</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C6A15B] transition-colors">Signature Experience</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-[#C6A15B] transition-colors">Architecture</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C6A15B] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#C6A15B] transition-colors">Guest Reviews</a>
              </li>
              <li>
                <a href="#reserve" onClick={(e) => { e.preventDefault(); onOpenReservation(); }} className="hover:text-[#C6A15B] transition-colors text-[#C6A15B]">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-4">
              Hospitality Concierge
            </span>

            <div className="flex items-start gap-3 text-xs text-[#F4EFE6]/80 font-light">
              <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
              <span>{RESTAURANT_INFO.fullAddress}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#F4EFE6]/80 font-light">
              <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
              <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#C6A15B] transition-colors font-mono">
                {RESTAURANT_INFO.phone}
              </a>
            </div>

            <div className="flex items-start gap-3 text-xs text-[#F4EFE6]/80 font-light">
              <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
              <div>
                <span className="block font-medium text-[#F4EFE6]">Dinner Service: {RESTAURANT_INFO.timings.dinner}</span>
                <span className="text-[#817568] block">Live Sigri Grills from 7:30 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[10px] tracking-wider uppercase text-[#817568] block mb-1">
                Dress Code
              </span>
              <span className="text-xs text-[#C6A15B] font-medium">
                {RESTAURANT_INFO.dressCode}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#817568]">
          <p>© 2026 Bukhara. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#C6A15B] transition-colors uppercase tracking-widest text-[10px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
