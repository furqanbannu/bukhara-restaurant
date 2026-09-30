import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface StickyMobileBarProps {
  onOpenReservation: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenReservation }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#17130F]/95 backdrop-blur-md border-t border-[#B38A45]/30 p-3 shadow-2xl">
      <div className="max-w-md mx-auto flex items-center gap-3">
        <button
          onClick={onOpenReservation}
          className="flex-1 py-3 px-4 bg-[#C6A15B] text-[#17130F] text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2 shadow-lg active:scale-98"
        >
          <Calendar className="w-4 h-4" />
          <span className="truncate">Reserve Table</span>
        </button>

        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          aria-label="Call restaurant concierge"
          className="p-3 border border-[#B38A45]/40 text-[#C6A15B] bg-[#2B2118] hover:bg-[#B38A45]/20 flex items-center justify-center shrink-0"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
