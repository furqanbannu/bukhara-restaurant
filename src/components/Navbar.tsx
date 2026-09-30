import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#story' },
    { label: 'Menu', href: '#menu' },
    { label: 'Specials', href: '#seasonal' },
    { label: 'Experience', href: '#experience' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#location' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#17130F]/95 backdrop-blur-md border-b border-[#B38A45]/20 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark as per Top Bar Contract */}
          <a
            href="#hero"
            className="text-2xl md:text-3xl font-serif tracking-[0.25em] text-[#F4EFE6] font-bold hover:text-[#C6A15B] transition-colors uppercase"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            BUKHARA RESTAURANT
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#F4EFE6]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#C6A15B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A15B] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] bg-[#C6A15B] text-[#17130F] hover:bg-[#E4C88A] transition-all duration-200 shadow-md hover:shadow-lg active:scale-98 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve a Table</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F4EFE6] hover:text-[#C6A15B] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A15B]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#17130F]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-12 px-8 transition-opacity duration-300">
          <div className="flex flex-col gap-6">
            <div className="text-center pb-4 border-b border-[#B38A45]/20">
              <span className="text-2xl font-serif tracking-[0.3em] text-[#C6A15B] font-bold block">
                BUKHARA RESTAURANT
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#F4EFE6]/60 mt-1 block">
                Pearl Continental Bhurban
              </span>
            </div>

            <nav className="flex flex-col items-center gap-5 text-sm uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-[#F4EFE6]/90 hover:text-[#C6A15B] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#B38A45]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.18em] bg-[#C6A15B] text-[#17130F] flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="w-full py-3 text-xs font-semibold uppercase tracking-[0.18em] border border-[#B38A45]/40 text-[#C6A15B] hover:bg-[#B38A45]/10 flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Concierge</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
