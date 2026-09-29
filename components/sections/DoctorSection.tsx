'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Award,
  Star,
  Users,
  Calendar,
  CheckCircle2,
  Heart,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { NeuCard } from '@/components/ui/NeuCard';
import { NeuButton } from '@/components/ui/NeuButton';
import { NeuBadge } from '@/components/ui/NeuBadge';
import { Doctor } from '@/types';

interface DoctorSectionProps {
  doctors?: Doctor[];
  onBookWithDoctor?: (doctorName: string) => void;
}

const defaultDoctors: Doctor[] = [
  {
    id: 'dr-binay',
    name: 'Dr. Binay Sharma',
    credentials: 'BVSc & AH, MVSc (Veterinary Surgery)',
    title: 'Chief Veterinary Surgeon, Love Vet Clinic',
    bio: 'Pioneering minimally invasive orthopedic and soft-tissue surgery with over 12 years of dedicated companion animal clinical practice. Passionate about gentle diagnostic workups and stress-free feline and canine recovery.',
    yearsExperience: 12,
    petsTreated: '5,000+',
    rating: 4.9,
    specializations: [
      'Advanced Surgery',
      'Orthopedics',
      'Trauma & Emergency Care',
      'Clinical Dermatology',
    ],
    image: '/images/doctor-real.jpg',
  },
  {
    id: 'dr-marcus',
    name: 'Dr. Marcus Vance',
    credentials: 'DVM, DACVIM (Internal Medicine)',
    title: 'Senior Veterinary Internist & Cardiologist',
    bio: 'Specializing in complex cardiology, ultrasound diagnostics, and endocrinology. Renowned for patient-first diagnostic care and compassionate chronic disease management.',
    yearsExperience: 10,
    petsTreated: '4,200+',
    rating: 4.95,
    specializations: [
      'Cardiology',
      'Internal Medicine',
      'Ultrasound Diagnostics',
      'Geriatric Pet Care',
    ],
    image: '/images/doctor-aanya.svg', // Fallback avatar
  },
];

export const DoctorSection: React.FC<DoctorSectionProps> = ({
  doctors = defaultDoctors,
  onBookWithDoctor,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentDoctor = doctors[currentIndex] || doctors[0];

  const handleBook = () => {
    if (onBookWithDoctor) {
      onBookWithDoctor(currentDoctor.name);
    }
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="doctor" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#E8E1D0]/50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.3),-3px_-3px_8px_rgba(255,255,255,0.9)] border border-white/50 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2B4A34]">
              MEET THE EXPERT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B4A34] tracking-tight mb-4"
          >
            Our Specialized Doctor
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#6B6357]"
          >
            Board-certified veterinary surgeons and clinicians dedicated to the highest caliber
            of medical science and deep empathy for every patient.
          </motion.p>
        </div>

        {/* Doctor Spotlight Card (Two-Column Neumorphic Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#F3EEE1] rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[14px_14px_32px_rgba(163,148,116,0.35),-14px_-14px_32px_rgba(255,255,255,0.95)] border border-white/60">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* LEFT: Large Neumorphic Framed Doctor Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm sm:max-w-md">
                  {/* Soft Raised Neumorphic Outer Frame with Gold Ring Accent */}
                  <div className="p-3 sm:p-4 rounded-3xl sm:rounded-[2rem] bg-[#F3EEE1] shadow-[10px_10px_24px_rgba(163,148,116,0.35),-10px_-10px_24px_rgba(255,255,255,0.9)] border border-white/60 relative">
                    <div className="aspect-[4/5] w-full rounded-2xl sm:rounded-[1.5rem] overflow-hidden bg-[#FAF7F0] relative border-2 border-[#D4A017]/30">
                      <Image
                        src={currentDoctor.image}
                        alt={currentDoctor.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                        priority
                      />
                    </div>

                    {/* Floating Neumorphic Corner Badge */}
                    <div className="absolute -bottom-4 -right-2 sm:-right-4 z-20">
                      <div className="px-4 py-2.5 rounded-2xl bg-[#F3EEE1] shadow-[6px_6px_14px_rgba(163,148,116,0.35),-4px_-4px_10px_rgba(255,255,255,0.9)] border border-[#D4A017]/50 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#2B4A34] text-[#F0D98C] flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                          ★
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#2B4A34]">
                            {currentDoctor.yearsExperience}+ Years
                          </p>
                          <p className="text-[10px] text-[#6B6357]">Clinical Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Credentials, Bio, Stat Chips, Specializations & CTA */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <NeuBadge variant="gold" size="sm">
                    Verified Chief Surgeon
                  </NeuBadge>
                  <span className="text-xs font-mono text-[#6B6357]">
                    Reg. Lic #VET-88392
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B4A34] mb-1">
                  {currentDoctor.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#D4A017] mb-1">
                  {currentDoctor.credentials}
                </p>
                <p className="text-xs text-[#6B6357] font-medium mb-5">
                  {currentDoctor.title}
                </p>

                <p className="text-sm text-[#1E2A22]/90 leading-relaxed mb-6">
                  {currentDoctor.bio}
                </p>

                {/* Neumorphic Stat Chips Row */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#EBE4D5] shadow-[inset_3px_3px_6px_rgba(163,148,116,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.85)] border border-[#DFD5C2]/40 text-center">
                    <p className="font-serif text-lg sm:text-xl font-bold text-[#2B4A34]">
                      {currentDoctor.yearsExperience}+ Yrs
                    </p>
                    <p className="text-[10px] uppercase font-bold text-[#6B6357]">Experience</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#EBE4D5] shadow-[inset_3px_3px_6px_rgba(163,148,116,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.85)] border border-[#DFD5C2]/40 text-center">
                    <p className="font-serif text-lg sm:text-xl font-bold text-[#2B4A34]">
                      {currentDoctor.petsTreated}
                    </p>
                    <p className="text-[10px] uppercase font-bold text-[#6B6357]">Pets Treated</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#EBE4D5] shadow-[inset_3px_3px_6px_rgba(163,148,116,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.85)] border border-[#DFD5C2]/40 text-center">
                    <p className="font-serif text-lg sm:text-xl font-bold text-[#D4A017] flex items-center justify-center gap-1">
                      <span>{currentDoctor.rating}</span>
                      <span className="text-xs">★</span>
                    </p>
                    <p className="text-[10px] uppercase font-bold text-[#6B6357]">Client Rating</p>
                  </div>
                </div>

                {/* Specialization Pills */}
                <div className="mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2B4A34] mb-2.5">
                    Clinical Specializations:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentDoctor.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="px-3.5 py-1.5 rounded-full bg-[#F3EEE1] shadow-[3px_3px_7px_rgba(163,148,116,0.25),-3px_-3px_7px_rgba(255,255,255,0.85)] text-xs font-semibold text-[#2B4A34] border border-white/50"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <NeuButton
                    size="lg"
                    variant="primary"
                    onClick={handleBook}
                    leftIcon={<Calendar className="w-4 h-4 text-[#F0D98C]" />}
                  >
                    Book with {currentDoctor.name.split(' ')[1] || 'Doctor'}
                  </NeuButton>

                  {/* Multi-doctor switcher support */}
                  {doctors.length > 1 && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setCurrentIndex((prev) => (prev > 0 ? prev - 1 : doctors.length - 1))
                        }
                        className="w-10 h-10 rounded-full bg-[#F3EEE1] shadow-[3px_3px_6px_rgba(163,148,116,0.3),-3px_-3px_6px_rgba(255,255,255,0.85)] flex items-center justify-center text-[#2B4A34] hover:text-[#D4A017] transition-colors"
                        aria-label="Previous Doctor"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-mono text-[#6B6357]">
                        {currentIndex + 1} / {doctors.length}
                      </span>
                      <button
                        onClick={() =>
                          setCurrentIndex((prev) => (prev < doctors.length - 1 ? prev + 1 : 0))
                        }
                        className="w-10 h-10 rounded-full bg-[#F3EEE1] shadow-[3px_3px_6px_rgba(163,148,116,0.3),-3px_-3px_6px_rgba(255,255,255,0.85)] flex items-center justify-center text-[#2B4A34] hover:text-[#D4A017] transition-colors"
                        aria-label="Next Doctor"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
