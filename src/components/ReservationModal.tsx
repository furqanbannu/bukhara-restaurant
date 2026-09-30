import React, { useState } from 'react';
import { X, CheckCircle, Download, Calendar, Users, Clock, Phone, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2',
    seatingPreference: 'Live BBQ Terrace (Outdoor Heated)',
    specialRequest: '',
  });

  const [bookingRef, setBookingRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setBookingRef(`BKH-${Math.floor(1000 + Math.random() * 9000)}`);
      setIsSubmitting(false);
    }, 500);
  };

  const handleDownloadICS = () => {
    if (!bookingRef) return;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Bukhara Restaurant//Bhurban Dining//EN
BEGIN:VEVENT
SUMMARY:Dinner at Bukhara - PC Bhurban
DESCRIPTION:Reservation Ref: ${bookingRef}\\nGuests: ${formData.guests}\\nSeating: ${formData.seatingPreference}\\nPhone: ${RESTAURANT_INFO.phone}
LOCATION:${RESTAURANT_INFO.fullAddress}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `bukhara-reservation-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#1E1813] border border-[#B38A45]/40 shadow-2xl p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close reservation dialog"
          className="absolute top-5 right-5 p-2 text-[#F4EFE6]/60 hover:text-[#C6A15B] transition-colors border border-white/5 hover:border-[#C6A15B]/30"
        >
          <X className="w-5 h-5" />
        </button>

        {bookingRef ? (
          /* Confirmation card */
          <div className="py-4 text-left">
            <div className="flex items-center gap-3 text-[#C6A15B] mb-3">
              <CheckCircle className="w-6 h-6" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">
                Table Reserved
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE6] mb-2">
              Evening Reserved, {formData.name}
            </h3>

            <p className="text-xs text-[#F4EFE6]/70 mb-6">
              Your table at Bukhara, Pearl Continental Bhurban is confirmed for <strong className="text-[#C6A15B]">{formData.date} at {formData.time}</strong>.
            </p>

            <div className="p-5 bg-[#17130F] border border-[#B38A45]/30 mb-6 space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-[#B38A45]/20">
                <span className="text-[#817568] uppercase tracking-wider text-[10px]">Reference</span>
                <span className="font-mono text-[#C6A15B] font-bold text-base">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#817568]">Guests:</span>
                <span className="text-[#F4EFE6] font-medium">{formData.guests} Persons</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#817568]">Seating:</span>
                <span className="text-[#F4EFE6] font-medium">{formData.seatingPreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#817568]">Contact:</span>
                <span className="text-[#F4EFE6] font-medium">{formData.phone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownloadICS}
                className="w-full py-3 text-xs font-semibold uppercase tracking-[0.16em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save to Calendar (.ics)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-3 text-xs font-semibold uppercase tracking-[0.16em] border border-white/20 text-[#F4EFE6] hover:border-white/40 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A15B] font-semibold block mb-1">
                PEARL CONTINENTAL BHURBAN
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EFE6]">
                Reserve Your Table
              </h3>
              <p className="text-xs text-[#817568] mt-1 font-light">
                Dinner Buffet & À La Carte · 7:00 PM – 11:30 PM
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Sardar Haroon"
                    className="w-full p-3 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                    Phone (+92) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+92 300 1234567"
                    className="w-full p-3 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full p-3 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                    Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full p-3 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                  >
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                    Party Size *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full p-3 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                  Seating Atmosphere
                </label>
                <select
                  value={formData.seatingPreference}
                  onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                  className="w-full p-3 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                >
                  <option value="Live BBQ Terrace (Outdoor Heated)">Live BBQ Terrace (Outdoor Heated)</option>
                  <option value="Royal Heritage Indoor Hall">Royal Heritage Indoor Hall</option>
                  <option value="Private Family Jali Alcove">Private Family Jali Alcove</option>
                  <option value="Cliffside Mountain View Window">Cliffside Mountain View Window</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.2em] uppercase text-[#C6A15B] block mb-1">
                  Special Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  placeholder="Occasion, birthday cake request, spicy level..."
                  className="w-full p-3 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.2em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-colors disabled:opacity-50 cursor-pointer shadow-lg"
            >
              {isSubmitting ? 'Requesting...' : 'Request Reservation'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
