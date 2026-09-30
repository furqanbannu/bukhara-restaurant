/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { CinematicDiningExperience } from './components/CinematicDiningExperience';
import { MenuSection } from './components/MenuSection';
import { SeasonalSpecials } from './components/SeasonalSpecials';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsReservationModalOpen(true);
  };

  const handleCloseReservation = () => {
    setIsReservationModalOpen(false);
  };

  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#17130F] text-[#F4EFE6] selection:bg-[#B38A45]/30 selection:text-[#C6A15B]">
      {/* 1. Primary Top Bar Navbar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* 2. Cinematic Fullscreen Hero with Luxury Architecture & Warm Fire Lighting */}
      <Hero
        onOpenReservation={handleOpenReservation}
        onExploreMenu={handleExploreMenu}
      />

      {/* 3. Two-Column Editorial Intro Section */}
      <IntroSection onOpenReservation={handleOpenReservation} />

      {/* 4. Completely New Architecture Section with Asymmetrical Layout */}
      <ArchitectureSection />

      {/* 5. Cinematic Dining Experience: Full-Width Narrative & Live BBQ */}
      <CinematicDiningExperience onOpenReservation={handleOpenReservation} />

      {/* 6. Redesigned Menu Section: 6 Core Dishes & Gold Typography */}
      <MenuSection onOpenReservation={handleOpenReservation} />

      {/* 7. Seasonal Specials: Rotating Chef's Recommendations */}
      <SeasonalSpecials onOpenReservation={handleOpenReservation} />

      {/* 8. Luxury Masonry Gallery & Fullscreen Lightbox */}
      <GallerySection />

      {/* 9. Guests of Bukhara Testimonials & Reviews */}
      <ReviewsSection />

      {/* 10. Premium Table Reservation Section with Gold Button */}
      <ReservationSection />

      {/* 11. Luxury Location Section with Dark Map, Address, Phone & Directions */}
      <LocationSection />

      {/* 12. Luxury Dark Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* 13. Sticky Mobile Reservation Bar (<15% viewport cap) */}
      <StickyMobileBar onOpenReservation={handleOpenReservation} />

      {/* 14. Quick Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={handleCloseReservation}
      />
    </div>
  );
}
