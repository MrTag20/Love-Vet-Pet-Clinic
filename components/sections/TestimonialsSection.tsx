'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { NeuCard } from '@/components/ui/NeuCard';
import { NeuIconDisc } from '@/components/ui/NeuIconDisc';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 'test-1',
      name: 'Emily R.',
      pet: 'Golden Retriever (Cooper)',
      role: 'Happy Pet Parent',
      image: '/images/avatar-1.svg',
      quote:
        'Love Vet has everything my dog needs! Dr. Binay Sharma handled Cooper’s knee surgery with such gentleness. Great communication, fast recovery, and my pup absolutely loves the staff.',
      rating: 5,
      date: 'Verified Pet Parent',
    },
    {
      id: 'test-2',
      name: 'Marcus Sterling',
      pet: 'Ragdoll Cat (Milo)',
      role: 'Happy Pet Parent',
      image: '/images/avatar-2.svg',
      quote:
        'We needed urgent travel certifications and titer test clearance for our move to the UK. The Love Vet team prepared every document flawlessly in 24 hours. Truly world-class veterinary service!',
      rating: 5,
      date: 'Verified Pet Parent',
    },
    {
      id: 'test-3',
      name: 'Sarah Jenkins',
      pet: 'Beagle Pup (Daisy)',
      role: 'Happy Pet Parent',
      image: '/images/avatar-3.svg',
      quote:
        'The home sample collection service saved us so much stress with an anxious puppy. Friendly staff, spotless clinic, and the online video consult was crystal clear. Highly recommended!',
      rating: 5,
      date: 'Verified Pet Parent',
    },
  ];

  // Auto advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3EEE1] relative">
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
              TESTIMONIALS & STORIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B4A34] tracking-tight mb-4"
          >
            Why Pet Parents Love <span className="text-[#D4A017]">Love Vet</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-[#6B6357]"
          >
            Real stories from loving families whose furry companions have found healing, comfort,
            and lifelong wellness with us.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-[#F3EEE1] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-[12px_12px_28px_rgba(163,148,116,0.35),-12px_-12px_28px_rgba(255,255,255,0.95)] border border-white/60 relative overflow-hidden">
                {/* Background decorative paw stamp */}
                <div className="absolute right-6 bottom-4 text-[#A39474]/10 text-9xl font-bold pointer-events-none select-none">
                  🐾
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center">
                  {/* Left: Avatar with Neumorphic Frame */}
                  <div className="sm:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-2 bg-[#F3EEE1] shadow-[6px_6px_14px_rgba(163,148,116,0.35),-6px_-6px_14px_rgba(255,255,255,0.9)] border border-white/60 mb-3 relative">
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        <Image
                          src={current.image}
                          alt={current.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="absolute bottom-1 right-2 text-xl">💛</span>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-[#2B4A34]">
                      {current.name}
                    </h4>
                    <p className="text-xs font-semibold text-[#D4A017]">{current.pet}</p>
                    <p className="text-[11px] text-[#6B6357]">{current.role}</p>
                  </div>

                  {/* Right: Quote Content & 5-Star Rating */}
                  <div className="sm:col-span-8 flex flex-col justify-center">
                    <div className="flex items-center gap-1 text-[#D4A017] mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#D4A017] text-[#D4A017]"
                        />
                      ))}
                      <span className="ml-2 text-xs font-bold text-[#2B4A34]">
                        5.0 / 5.0
                      </span>
                    </div>

                    <div className="relative mb-6">
                      <Quote className="w-8 h-8 text-[#D4A017]/30 absolute -top-4 -left-3 rotate-180 pointer-events-none" />
                      <p className="font-serif text-lg sm:text-xl text-[#1E2A22] leading-relaxed italic pl-6">
                        &ldquo;{current.quote}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#DFD5C2]">
                      <span className="text-xs font-mono text-[#6B6357]">
                        {current.date}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[#2B4A34] font-semibold">
                        <Heart className="w-3.5 h-3.5 fill-[#2B4A34]" />
                        <span>Loved at Love Vet</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Dot Navigation & Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() =>
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))
              }
              className="w-10 h-10 rounded-full bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.3),-3px_-3px_8px_rgba(255,255,255,0.85)] flex items-center justify-center text-[#2B4A34] hover:text-[#D4A017] transition-all cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {testimonials.map((t, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`
                      h-3 rounded-full transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ? 'w-8 bg-[#2B4A34] shadow-[inset_2px_2px_4px_rgba(18,33,23,0.8)]'
                          : 'w-3 bg-[#EBE4D5] shadow-[inset_1px_1px_3px_rgba(163,148,116,0.3)] hover:bg-[#D4A017]/60'
                      }
                    `}
                  />
                );
              })}
            </div>

            <button
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="w-10 h-10 rounded-full bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.3),-3px_-3px_8px_rgba(255,255,255,0.85)] flex items-center justify-center text-[#2B4A34] hover:text-[#D4A017] transition-all cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
