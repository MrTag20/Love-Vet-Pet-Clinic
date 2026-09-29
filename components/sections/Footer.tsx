'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Heart,
  Check,
  Sparkles,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3500);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#services' },
    { name: 'Certifications', href: '#why-us' },
    { name: 'Featured Products', href: '#products' },
    { name: 'Specialist Doctors', href: '#doctor' },
    { name: 'Pet Parent Reviews', href: '#testimonials' },
    { name: 'Book Appointment', href: '#appointment' },
  ];

  const services = [
    { name: 'Pet Grooming & Spa', href: '#services' },
    { name: 'Vaccination Schedules', href: '#services' },
    { name: 'Online Tele-Consultations', href: '#services' },
    { name: 'Home Sample Collection', href: '#services' },
    { name: 'Fit to Fly Certification', href: '#why-us' },
    { name: 'Orthopedic & Soft Surgery', href: '#why-us' },
  ];

  return (
    <footer id="contact" className="bg-[#1D3424] text-[#F3EEE1] pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative border-t border-[#2B4A34]">
      <div className="max-w-7xl mx-auto">
        {/* Top Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2B4A34]">
          {/* Col 1: Brand & Bio & Dark Neumorphic Social Discs */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="#home" className="flex items-center gap-2 mb-4 group cursor-pointer inline-flex">
              <div className="w-10 h-10 rounded-full bg-[#2B4A34] text-[#F0D98C] flex items-center justify-center shadow-[4px_4px_10px_rgba(12,22,15,0.7),-3px_-3px_8px_rgba(55,93,67,0.35)] group-hover:scale-105 transition-transform">
                <span className="text-xl">🐾</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  Love<span className="text-[#D4A017]">Vet</span>
                </span>
                <span className="text-[9px] font-bold tracking-widest text-[#F0D98C] uppercase">
                  Care & Surgery
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#F3EEE1]/80 leading-relaxed mb-6 max-w-sm">
              Dedicated to compassionate, gold-standard veterinary care, advanced surgical
              precision, and certified health documentation for your cherished family pets.
            </p>

            {/* Dark Neumorphic Social Discs */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#2B4A34] text-[#F0D98C] shadow-[4px_4px_10px_rgba(12,22,15,0.7),-4px_-4px_10px_rgba(55,93,67,0.35)] hover:shadow-[0_0_14px_rgba(212,160,23,0.4)] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#2B4A34] text-[#F0D98C] shadow-[4px_4px_10px_rgba(12,22,15,0.7),-4px_-4px_10px_rgba(55,93,67,0.35)] hover:shadow-[0_0_14px_rgba(212,160,23,0.4)] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X Twitter"
                className="w-10 h-10 rounded-full bg-[#2B4A34] text-[#F0D98C] shadow-[4px_4px_10px_rgba(12,22,15,0.7),-4px_-4px_10px_rgba(55,93,67,0.35)] hover:shadow-[0_0_14px_rgba(212,160,23,0.4)] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#2B4A34] text-[#F0D98C] shadow-[4px_4px_10px_rgba(12,22,15,0.7),-4px_-4px_10px_rgba(55,93,67,0.35)] hover:shadow-[0_0_14px_rgba(212,160,23,0.4)] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[#F3EEE1]/80 hover:text-[#D4A017] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-[#D4A017]">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Services & Care
            </h4>
            <ul className="space-y-2.5">
              {services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[#F3EEE1]/80 hover:text-[#D4A017] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="text-[#D4A017]">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Contact & Hours
            </h4>

            <div className="space-y-3 mb-6 text-xs text-[#F3EEE1]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                <span>108 Pet Care Blvd, Suite 400, New York, NY 10012</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A017] shrink-0" />
                <span>+1 (800) 568-3838 (24×7 Hotline)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A017] shrink-0" />
                <span>care@lovevetclinic.com</span>
              </div>
            </div>

            {/* Newsletter Inset Box + Gold Button */}
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <label htmlFor="newsletter-email" className="text-xs font-bold text-[#F0D98C] uppercase tracking-wider">
                Pet Parent Newsletter:
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#2B4A34] text-xs text-white placeholder-[#A3B8AA] shadow-[inset_3px_3px_6px_rgba(12,22,15,0.8),inset_-3px_-3px_6px_rgba(55,93,67,0.3)] border border-[#3D6549]/60 focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2.5 rounded-xl bg-[#D4A017] text-[#1E2A22] font-bold text-xs shadow-[3px_3px_8px_rgba(12,22,15,0.7),-2px_-2px_6px_rgba(55,93,67,0.3)] hover:bg-[#E5B228] transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  {subscribed ? (
                    <Check className="w-4 h-4 text-[#1E2A22]" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 font-semibold">
                  Thank you for subscribing!
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3EEE1]/60">
          <p>© {new Date().getFullYear()} Love Vet Pet Clinic. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Veterinary Care</a>
            <a href="#" className="hover:text-white transition-colors">Emergency Protocol</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
