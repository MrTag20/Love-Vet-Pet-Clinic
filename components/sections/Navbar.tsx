'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  User,
  ShoppingBag,
  Menu,
  X,
  PhoneCall,
  Sparkles,
  CalendarCheck,
} from 'lucide-react';
import { NeuButton } from '@/components/ui/NeuButton';
import { NeuIconDisc } from '@/components/ui/NeuIconDisc';

interface NavbarProps {
  cartCount?: number;
  visible?: boolean;
  onOpenSearch?: () => void;
  onOpenCart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount = 2,
  visible = true,
  onOpenSearch,
  onOpenCart,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchModal, setShowSearchModal] = useState(false);

  const handleSearchClick = () => {
    if (onOpenSearch) {
      onOpenSearch();
    } else {
      setShowSearchModal(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Certificates', href: '#why-us' },
    { name: 'Products', href: '#products' },
    { name: 'Doctors', href: '#doctor' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={
          visible
            ? { y: 0, opacity: 1 }
            : { y: -100, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 py-3 px-4 sm:px-6 lg:px-8 ${
          !visible ? 'pointer-events-none' : 'pointer-events-auto'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Neumorphic floating pill navbar container */}
          <nav
            aria-label="Main Navigation"
            className={`
              w-full mx-auto px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-between
              transition-all duration-300
              ${
                isScrolled
                  ? 'bg-[#F3EEE1]/95 backdrop-blur-md shadow-[8px_8px_20px_rgba(163,148,116,0.35),-8px_-8px_20px_rgba(255,255,255,0.95)] border border-white/60'
                  : 'bg-[#F3EEE1] shadow-[6px_6px_16px_rgba(163,148,116,0.3),-6px_-6px_16px_rgba(255,255,255,0.85)] border border-white/40'
              }
            `}
          >
            {/* Logo */}
            <Link
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-2 group cursor-pointer neu-focus rounded-full px-2 py-1"
            >
              <div className="w-10 h-10 rounded-full bg-[#2B4A34] text-[#F0D98C] flex items-center justify-center shadow-[3px_3px_8px_rgba(163,148,116,0.3),-2px_-2px_6px_rgba(255,255,255,0.8)] group-hover:scale-105 transition-transform">
                <span className="text-xl select-none">🐾</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2B4A34] leading-none">
                  Love<span className="text-[#D4A017]">Vet</span>
                </span>
                <span className="text-[9px] font-bold tracking-widest text-[#6B6357] uppercase">
                  Care & Surgery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1E2A22] hover:text-[#2B4A34] hover:bg-[#EBE4D5]/80 active:shadow-[inset_2px_2px_4px_rgba(163,148,116,0.3)] transition-all cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Right Action Icons & Primary CTA */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Disc */}
              <NeuIconDisc
                size="sm"
                variant="raised"
                ariaLabel="Search clinic services"
                interactive
                onClick={handleSearchClick}
                className="hidden sm:flex"
              >
                <Search className="w-4 h-4 text-[#2B4A34]" />
              </NeuIconDisc>

              {/* Account Disc */}
              <NeuIconDisc
                size="sm"
                variant="raised"
                ariaLabel="Pet Owner Portal"
                interactive
                onClick={() => {
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hidden sm:flex"
              >
                <User className="w-4 h-4 text-[#2B4A34]" />
              </NeuIconDisc>

              {/* Shopping Bag Disc with Pill Count */}
              <div className="relative">
                <NeuIconDisc
                  size="sm"
                  variant="raised"
                  ariaLabel="Shopping cart"
                  interactive
                  onClick={
                    onOpenCart ||
                    (() => {
                      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                    })
                  }
                >
                  <ShoppingBag className="w-4 h-4 text-[#2B4A34]" />
                </NeuIconDisc>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#D4A017] text-[#1E2A22] text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-sm">
                    {cartCount}
                  </span>
                )}
              </div>

              {/* Book Appointment CTA Button */}
              <div className="hidden sm:block">
                <NeuButton
                  size="sm"
                  variant="primary"
                  onClick={() => handleNavClick('#appointment')}
                  leftIcon={<CalendarCheck className="w-3.5 h-3.5 text-[#F0D98C]" />}
                >
                  Book Appointment
                </NeuButton>
              </div>

              {/* Mobile Hamburger Toggle */}
              <div className="lg:hidden">
                <NeuIconDisc
                  size="sm"
                  variant={mobileMenuOpen ? 'inset' : 'raised'}
                  interactive
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  ariaLabel="Toggle Navigation Menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5 text-[#2B4A34]" />
                  ) : (
                    <Menu className="w-5 h-5 text-[#2B4A34]" />
                  )}
                </NeuIconDisc>
              </div>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden"
          >
            <div className="bg-[#F3EEE1] rounded-3xl p-6 shadow-[10px_10px_24px_rgba(163,148,116,0.38),-10px_-10px_24px_rgba(255,255,255,0.95)] border border-white/60 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-2.5 rounded-xl font-semibold text-sm text-[#2B4A34] hover:bg-[#EBE4D5] active:shadow-[inset_2px_2px_4px_rgba(163,148,116,0.3)] transition-all flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#D4A017]">→</span>
                  </button>
                ))}
              </div>

              <div className="pt-3 border-t border-[#DFD5C2] flex flex-col gap-3">
                <NeuButton
                  variant="primary"
                  fullWidth
                  onClick={() => handleNavClick('#appointment')}
                  leftIcon={<Sparkles className="w-4 h-4 text-[#F0D98C]" />}
                >
                  Book Appointment Now
                </NeuButton>

                <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#2B4A34] py-1">
                  <PhoneCall className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>24×7 Emergency: +1 (800) 568-3838</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Modal Overlay */}
      <AnimatePresence>
        {showSearchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1E2A22]/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowSearchModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-[#F3EEE1] rounded-3xl p-6 shadow-[14px_14px_30px_rgba(0,0,0,0.35),-10px_-10px_24px_rgba(255,255,255,0.85)] border border-white/60"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🐾</span>
                  <h3 className="font-serif font-bold text-lg text-[#2B4A34]">
                    Search Love Vet
                  </h3>
                </div>
                <button
                  onClick={() => setShowSearchModal(false)}
                  className="w-8 h-8 rounded-full bg-[#EBE4D5] shadow-[inset_2px_2px_4px_rgba(163,148,116,0.3)] flex items-center justify-center text-[#2B4A34]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative mb-4">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6357]" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pet grooming, vaccinations, doctor..."
                  className="w-full pl-12 pr-4 py-3 bg-[#EBE4D5] rounded-xl text-sm text-[#1E2A22] shadow-[inset_4px_4px_8px_rgba(163,148,116,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] border border-[#DFD5C2]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A017]"
                />
              </div>

              <div className="text-xs text-[#6B6357]">
                <p className="font-bold text-[#2B4A34] mb-2 uppercase tracking-wide">
                  Popular Searches:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Rabies Vaccine', 'Fit to Fly Certificate', 'Dr. Binay Sharma', 'Hydrotherapy Grooming', 'Emergency Surgery'].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setShowSearchModal(false);
                        handleNavClick('#services');
                      }}
                      className="px-3 py-1 rounded-full bg-[#F3EEE1] shadow-[3px_3px_6px_rgba(163,148,116,0.25),-3px_-3px_6px_rgba(255,255,255,0.85)] text-[#2B4A34] hover:text-[#D4A017] text-xs font-medium"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
