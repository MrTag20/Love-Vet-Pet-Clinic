'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulse,
  Plane,
  ShieldCheck,
  Scissors,
  FileCheck2,
  Stethoscope,
  Sparkles,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { NeuCard } from '@/components/ui/NeuCard';
import { NeuIconDisc } from '@/components/ui/NeuIconDisc';
import { NeuBadge } from '@/components/ui/NeuBadge';

export const WhyUsSection: React.FC = () => {
  const certifications = [
    {
      id: 'health-fitness',
      title: 'Health Fitness Certificate',
      subtitle: 'Complete physical evaluation & agility clearance',
      description:
        'Thorough systemic exam verifying cardiovascular, respiratory, orthopedic and neurological health for competitions, adoption, or insurance.',
      icon: HeartPulse,
      badge: 'Official Seal',
      turnaround: 'Same Day Issuance',
      features: ['Full biometric assessment', 'Digital tamper-proof QR code', 'Insurer verified'],
    },
    {
      id: 'travel-cert',
      title: 'Domestic & International Travel Certificate',
      subtitle: 'Compliant across global border authorities',
      description:
        'Official government-authorized health permits ensuring seamless inter-state and cross-border transport for canines, felines, and avian companions.',
      icon: Plane,
      badge: 'Govt. Authorized',
      turnaround: '24–48 Hours',
      features: ['USDA & International compliant', 'Microchip verification', 'Endorsement support'],
    },
    {
      id: 'vaccination-cert',
      title: 'Vaccination & Immunization Certificate',
      subtitle: 'Certified vaccine passport with titer testing',
      description:
        'Legally binding documentation of rabies titers, core boosters, and disease immunizations required for boarding kennels and daycares.',
      icon: ShieldCheck,
      badge: 'Boarding Ready',
      turnaround: 'Instant Digital Copy',
      features: ['Core & non-core vaccine records', 'Rabies antibody titer test', 'Cloud passport link'],
    },
    {
      id: 'neutering-cert',
      title: 'Neutering & Spaying Certificate',
      subtitle: 'Post-operative sterilization documentation',
      description:
        'Formal surgeon-signed verification of successful orchiectomy or ovariohysterectomy for municipal licensing, breed clubs, and rescues.',
      icon: Scissors,
      badge: 'Surgeon Certified',
      turnaround: 'Post-Op Discharge',
      features: ['Surgical report included', 'Anesthesia record archive', 'Microchip linked'],
    },
    {
      id: 'fit-to-fly',
      title: 'Fit to Fly Airline Certificate',
      subtitle: 'Airline-specific aviation health clearances',
      description:
        'IATA-compliant cabin and cargo clearance certifying acclimatization, crate comfort, and altitude readiness for long-haul flights.',
      icon: FileCheck2,
      badge: 'IATA Compliant',
      turnaround: 'Within 72h of Flight',
      features: ['Airline-specific paperwork', 'Sedation guidance', 'Crate size verification'],
    },
    {
      id: 'surgery-care',
      title: 'Primary Care & Premium Vet Surgery',
      subtitle: 'Ultra-sterile HEPA surgical suites & monitoring',
      description:
        'Advanced orthopedic, soft tissue, and emergency surgical interventions conducted with state-of-the-art anesthetic monitoring and pain protocols.',
      icon: Stethoscope,
      badge: 'HEPA Surgical Unit',
      turnaround: '24×7 Availability',
      features: ['Isoflurane anesthesia', 'ECG & SpO2 live telemetry', 'Dedicated recovery ICU'],
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#E8E1D0]/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.3),-3px_-3px_8px_rgba(255,255,255,0.9)] border border-white/50 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2B4A34]">
              WHY PET PARENTS TRUST US
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B4A34] tracking-tight mb-4"
          >
            Certified Excellence & Clear Documentation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#6B6357]"
          >
            From globally recognized travel passports to precision surgical suites, every
            treatment is backed by rigorous clinical standards and certified vet signatures.
          </motion.p>
        </div>

        {/* 3x2 Neumorphic Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex"
              >
                <NeuCard
                  variant="raised"
                  hoverEffect
                  className="w-full flex flex-col justify-between p-6 sm:p-7 relative group"
                >
                  <div>
                    {/* Top Row: Icon Frame + Turnaround Pill */}
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-[#EBE4D5] shadow-[inset_4px_4px_8px_rgba(163,148,116,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.85)] border border-[#DFD5C2]/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Icon className="w-7 h-7 text-[#2B4A34] group-hover:text-[#D4A017] transition-colors" />
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <NeuBadge variant="gold" size="sm">
                          {item.badge}
                        </NeuBadge>
                        <span className="text-[10px] text-[#6B6357] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#D4A017]" />
                          {item.turnaround}
                        </span>
                      </div>
                    </div>

                    {/* Heading */}
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2B4A34] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#D4A017] mb-3">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#6B6357] leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="pt-4 border-t border-[#DFD5C2]/60 space-y-1.5">
                    {item.features.map((feat, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2 text-xs text-[#1E2A22]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#2B4A34] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </NeuCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
