'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Scissors,
  Syringe,
  Video,
  FlaskConical,
  ArrowRight,
  CheckCircle2,
  X,
  CalendarCheck,
} from 'lucide-react';
import { NeuCard } from '@/components/ui/NeuCard';
import { NeuIconDisc } from '@/components/ui/NeuIconDisc';
import { NeuButton } from '@/components/ui/NeuButton';
import { NeuBadge } from '@/components/ui/NeuBadge';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const services = [
    {
      id: 'grooming',
      title: 'Pet Grooming & Spa',
      category: 'Grooming',
      shortDesc: 'Hydrotherapy baths, breed styling, deshedding & stress-free spa treatments.',
      icon: Scissors,
      badge: 'Popular',
      details: [
        'Medicated & organic herbal bubble baths',
        'Breed-specific artistic cuts & hand stripping',
        'Nail trimming, ear flushing & sanitary trims',
        'Anti-flea & soothing skin therapies',
      ],
      price: 'From $45',
      time: '60–90 mins',
    },
    {
      id: 'vaccination',
      title: 'Immunisation & Vaccination',
      category: 'Vaccination',
      shortDesc: 'Full vaccine schedules, annual booster shots & digital vaccination passports.',
      icon: Syringe,
      badge: 'Essential',
      details: [
        'DHPP, Rabies, Bordetella & Leptospirosis shots',
        'Feline FVRCP & FeLV vaccination schedules',
        'Digital QR-verified vaccine certificate records',
        'Pre-vaccine comprehensive vital health checks',
      ],
      price: 'From $35',
      time: '20–30 mins',
    },
    {
      id: 'consultation',
      title: 'Online Video Consultation',
      category: 'Consultation',
      shortDesc: 'Instant tele-health video & chat consults with senior certified veterinarians.',
      icon: Video,
      badge: 'Tele-Health',
      details: [
        'High-definition video call with veterinary surgeons',
        'Behavioral, diet & wellness advice from home',
        'Digital prescriptions sent directly to your phone',
        'Follow-up review sessions included',
      ],
      price: 'From $30',
      time: '25 mins',
    },
    {
      id: 'sample-collection',
      title: 'At-Home Sample Collection',
      category: 'Sample Collection',
      shortDesc: 'Stress-free doorstep blood, urine & swab sampling with same-day lab results.',
      icon: FlaskConical,
      badge: 'At Home',
      details: [
        'Trained veterinary technician visits your home',
        'Complete CBC, biochemistry & thyroid screening',
        'Urine analysis & fecal parasite screenings',
        'Digital encrypted lab report within 6 hours',
      ],
      price: 'From $40',
      time: '15 mins',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3EEE1] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.25),-3px_-3px_8px_rgba(255,255,255,0.85)] border border-white/50 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2B4A34]">
              WHAT WE OFFER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B4A34] tracking-tight mb-4"
          >
            Our Veterinary Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#6B6357]"
          >
            Comprehensive preventive, clinical, and surgical treatments delivered with gentle
            hands and state-of-the-art diagnostic technology.
          </motion.p>
        </div>

        {/* 4 Neumorphic Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <NeuCard
                  variant="raised"
                  hoverEffect
                  className="w-full flex flex-col justify-between p-6 sm:p-7 relative group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div>
                    {/* Top Row: Icon Disc + Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <NeuIconDisc
                        size="md"
                        variant="raised"
                        className="group-hover:rotate-6 group-hover:scale-105 transition-all duration-300"
                      >
                        <Icon className="w-6 h-6 text-[#2B4A34]" />
                      </NeuIconDisc>

                      {service.badge && (
                        <NeuBadge variant="gold" size="sm">
                          {service.badge}
                        </NeuBadge>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-[#2B4A34] mb-2 group-hover:text-[#3D6549] transition-colors">
                      {service.title}
                    </h3>

                    {/* 1-Line Description */}
                    <p className="text-xs sm:text-sm text-[#6B6357] leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bottom Action Row */}
                  <div className="pt-4 border-t border-[#E8E1D0]/70 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#D4A017]">
                      {service.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className="text-xs font-bold text-[#2B4A34] group-hover:text-[#D4A017] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </NeuCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1E2A22]/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-[#F3EEE1] rounded-3xl p-6 sm:p-8 shadow-[16px_16px_36px_rgba(0,0,0,0.35),-12px_-12px_28px_rgba(255,255,255,0.9)] border border-white/60 relative"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EBE4D5] shadow-[inset_2px_2px_4px_rgba(163,148,116,0.3)] flex items-center justify-center text-[#2B4A34] hover:text-[#D4A017] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <NeuIconDisc size="md" variant="raised">
                  <selectedService.icon className="w-6 h-6 text-[#2B4A34]" />
                </NeuIconDisc>
                <div>
                  <NeuBadge variant="gold" size="sm">
                    {selectedService.badge}
                  </NeuBadge>
                  <h3 className="font-serif text-2xl font-bold text-[#2B4A34] mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#6B6357] mb-6">
                {selectedService.shortDesc}
              </p>

              <div className="bg-[#EBE4D5] rounded-2xl p-4 shadow-[inset_3px_3px_6px_rgba(163,148,116,0.25),inset_-3px_-3px_6px_rgba(255,255,255,0.8)] border border-[#DFD5C2]/40 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B4A34] mb-3">
                  Service Inclusions:
                </h4>
                <ul className="space-y-2">
                  {selectedService.details.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#1E2A22]">
                      <CheckCircle2 className="w-4 h-4 text-[#D4A017] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#6B6357]">Starting at</span>
                  <p className="font-serif text-xl font-bold text-[#2B4A34]">{selectedService.price}</p>
                </div>

                <NeuButton
                  variant="primary"
                  onClick={() => {
                    setSelectedService(null);
                    const appointmentEl = document.getElementById('appointment');
                    if (appointmentEl) {
                      appointmentEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  leftIcon={<CalendarCheck className="w-4 h-4 text-[#F0D98C]" />}
                >
                  Book This Service
                </NeuButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
