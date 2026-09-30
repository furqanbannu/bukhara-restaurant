import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, MapPin, CheckCircle, Download, PhoneCall, Sparkles, Shield, User } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationSectionProps {
  onDirectCall?: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = () => {
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

  const sittingTimes = [
    { time: '19:00', label: '7:00 PM' },
    { time: '19:30', label: '7:30 PM' },
    { time: '20:00', label: '8:00 PM' },
    { time: '20:30', label: '8:30 PM' },
    { time: '21:00', label: '9:00 PM' },
    { time: '21:30', label: '9:30 PM' },
    { time: '22:00', label: '10:00 PM' },
  ];

  const seatingOptions = [
    'Live BBQ Terrace (Outdoor Heated)',
    'Royal Heritage Indoor Hall',
    'Private Family Jali Alcove',
    'Cliffside Mountain View Window'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedRef = `BKH-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(generatedRef);
      setIsSubmitting(false);
    }, 600);
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
    <section id="reserve" className="py-28 md:py-36 bg-[#17130F] text-[#F4EFE6] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Architectural Hospitality & Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#C6A15B]" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C6A15B]">
                TABLE RESERVATION
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl font-serif font-bold text-[#F4EFE6] tracking-tight mb-4 gold-gradient-text"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Reserve Your Evening
            </h2>

            <p className="text-xl font-serif italic text-[#E4C88A] mb-6">
              Make your next gathering memorable.
            </p>

            <p className="text-sm text-[#F4EFE6]/75 leading-relaxed font-light mb-8">
              Whether you are planning a family reunion, an intimate anniversary dinner beneath the whispering Bhurban pines, or an executive retreat, our dining ambassadors curate every detail of your evening.
            </p>

            {/* Direct Concierge Contact Card */}
            <div className="p-7 bg-[#1E1813] border border-[#B38A45]/35 mb-8 shadow-xl">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A15B] block mb-2 font-semibold">
                Immediate Concierge Assistance
              </span>
              <div className="flex items-center justify-between">
                <div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="text-xl md:text-2xl font-mono text-[#F4EFE6] hover:text-[#C6A15B] transition-colors font-bold block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <span className="text-xs text-[#817568] mt-1 block">
                    Direct line to Pearl Continental Bhurban dining desk
                  </span>
                </div>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="p-3.5 bg-[#2B2118] border border-[#B38A45]/40 text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#17130F] transition-all shadow-md"
                  aria-label="Call concierge"
                >
                  <PhoneCall className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Dining Protocol Bullet points */}
            <div className="space-y-3.5 text-xs text-[#817568]">
              <div className="flex items-start gap-3">
                <span className="text-[#C6A15B] font-bold">·</span>
                <span>Grand Dinner Buffet: 7:00 PM – 11:30 PM daily</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C6A15B] font-bold">·</span>
                <span>Heated outdoor terrace with personal radiant warmers & pashmina shawls</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#C6A15B] font-bold">·</span>
                <span>Reservations held for 20 minutes past requested sitting time</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Booking Card / Confirmation Pass */}
          <div className="lg:col-span-7 bg-[#1E1813] border border-[#B38A45]/40 p-8 sm:p-12 shadow-2xl relative">
            {bookingRef ? (
              /* Verified Booking Voucher Card */
              <div className="py-4 text-left animate-fade-in">
                <div className="flex items-center gap-3 text-[#C6A15B] mb-4">
                  <CheckCircle className="w-8 h-8" />
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold">
                    Table Provisionally Confirmed
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#F4EFE6] mb-2">
                  Welcome to Bukhara, {formData.name}
                </h3>
                <p className="text-xs text-[#F4EFE6]/70 mb-6">
                  We look forward to hosting you at Pearl Continental Bhurban. A confirmation dispatch has been routed to <strong className="text-[#C6A15B]">{formData.phone}</strong>.
                </p>

                {/* Booking Pass Voucher */}
                <div className="p-6 bg-[#17130F] border border-[#B38A45]/40 mb-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-[#B38A45]/20">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#817568]">
                      Booking Reference
                    </span>
                    <span className="text-2xl font-mono font-bold text-[#C6A15B]">
                      {bookingRef}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-[#817568] block mb-0.5">Date & Time</span>
                      <span className="text-[#F4EFE6] font-semibold">{formData.date} at {formData.time}</span>
                    </div>
                    <div>
                      <span className="text-[#817568] block mb-0.5">Guests</span>
                      <span className="text-[#F4EFE6] font-semibold">{formData.guests} Persons</span>
                    </div>
                    <div>
                      <span className="text-[#817568] block mb-0.5">Seating Ambience</span>
                      <span className="text-[#F4EFE6] font-semibold">{formData.seatingPreference}</span>
                    </div>
                    <div>
                      <span className="text-[#817568] block mb-0.5">Location</span>
                      <span className="text-[#F4EFE6] font-semibold">PC Bhurban, Hotel Road</span>
                    </div>
                  </div>

                  {formData.specialRequest && (
                    <div className="pt-2 border-t border-white/5 text-xs">
                      <span className="text-[#817568] block mb-0.5">Special Requests</span>
                      <span className="text-[#F4EFE6]/80 italic">"{formData.specialRequest}"</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleDownloadICS}
                    className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-colors flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save to Calendar (.ics)</span>
                  </button>

                  <button
                    onClick={() => {
                      setBookingRef(null);
                      setFormData({
                        name: '',
                        phone: '',
                        date: new Date().toISOString().split('T')[0],
                        time: '20:00',
                        guests: '2',
                        seatingPreference: 'Live BBQ Terrace (Outdoor Heated)',
                        specialRequest: '',
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] border border-white/20 text-[#F4EFE6]/80 hover:text-[#F4EFE6] hover:border-white/40 transition-colors"
                  >
                    New Reservation
                  </button>
                </div>
              </div>
            ) : (
              /* High-End Reservation Form */
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] tracking-[0.22em] uppercase text-[#C6A15B] font-semibold block mb-2">
                        Guest Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sardar Haroon"
                          className="w-full p-3.5 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.22em] uppercase text-[#C6A15B] font-semibold block mb-2">
                        Contact Phone (+92) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full p-3.5 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none transition-colors font-mono"
                      />
                    </div>
                  </div>

                  {/* Date & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] tracking-[0.22em] uppercase text-[#C6A15B] font-semibold block mb-2">
                        Reservation Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full p-3.5 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.22em] uppercase text-[#C6A15B] font-semibold block mb-2">
                        Party Size (Guests) *
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full p-3.5 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 20].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Sitting Times Buttons */}
                  <div>
                    <label className="text-[10px] tracking-[0.22em] uppercase text-[#C6A15B] font-semibold block mb-2">
                      Dinner Sitting Time *
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                      {sittingTimes.map((st) => (
                        <button
                          key={st.time}
                          type="button"
                          onClick={() => setFormData({ ...formData, time: st.time })}
                          className={`py-2.5 px-2 text-xs font-mono transition-all border ${
                            formData.time === st.time
                              ? 'bg-[#C6A15B] text-[#17130F] font-bold border-[#C6A15B]'
                              : 'bg-[#17130F] text-[#F4EFE6]/80 border-[#B38A45]/30 hover:border-[#C6A15B]'
                          }`}
                        >
                          {st.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Seating Atmosphere */}
                  <div>
                    <label className="text-[10px] tracking-[0.22em] uppercase text-[#C6A15B] font-semibold block mb-2">
                      Atmosphere Preference
                    </label>
                    <select
                      value={formData.seatingPreference}
                      onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value })}
                      className="w-full p-3.5 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none transition-colors"
                    >
                      {seatingOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="text-[10px] tracking-[0.22em] uppercase text-[#C6A15B] font-semibold block mb-2">
                      Special Requests & Culinary Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      placeholder="Anniversary, terrace table with fire pit, dietary requirements, baby high chair..."
                      className="w-full p-3.5 bg-[#17130F] border border-[#B38A45]/30 text-[#F4EFE6] text-xs focus:border-[#C6A15B] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Gold Reservation Button (Mandatory) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative overflow-hidden w-full py-4 text-xs font-semibold uppercase tracking-[0.22em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-all duration-300 shadow-2xl cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 group"
                    >
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 transition-transform bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                      <Calendar className="w-4 h-4 text-[#17130F]" />
                      <span>{isSubmitting ? 'Confirming Table...' : 'Reserve a Table'}</span>
                    </button>
                  </div>

                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
