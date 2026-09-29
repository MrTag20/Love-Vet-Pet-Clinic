'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, FlaskConical, Copy, Check, Sparkles, ArrowRight } from 'lucide-react';
import { NeuCard } from '@/components/ui/NeuCard';
import { NeuButton } from '@/components/ui/NeuButton';
import { NeuIconDisc } from '@/components/ui/NeuIconDisc';

export const PromoStrip: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('LOVEVET10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#F3EEE1]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: 10% Off First Consultation Banner (Forest Green + Gold Accent + Puppy) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex"
          >
            <div className="w-full relative overflow-hidden rounded-3xl bg-[#2B4A34] text-[#F3EEE1] p-6 sm:p-8 shadow-[10px_10px_24px_rgba(15,27,19,0.7),-6px_-6px_18px_rgba(55,93,67,0.4)] border border-[#3D6549]/50 flex flex-col sm:flex-row items-center justify-between gap-6 group">
              {/* Background ambient radial glow */}
              <div className="absolute -right-10 -bottom-10 w-52 h-52 rounded-full bg-[#D4A017]/15 blur-2xl pointer-events-none" />

              <div className="flex-1 z-10">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F0D98C] mb-1">
                  New Patient Special
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
                  Get <span className="text-[#D4A017]">10% Off</span> Your First Consultation
                </h3>
                <p className="text-xs sm:text-sm text-[#F3EEE1]/80 mb-4 max-w-sm">
                  Complete comprehensive health assessment & wellness plan for new puppies, kittens & rescued pets.
                </p>

                {/* Coupon Code Copy Button */}
                <div className="inline-flex items-center gap-2">
                  <button
                    onClick={handleCopyCode}
                    className="px-4 py-2 rounded-full bg-[#1D3424] text-[#F0D98C] font-mono text-xs font-bold tracking-wider shadow-[inset_3px_3px_6px_rgba(10,18,12,0.8),inset_-3px_-3px_6px_rgba(43,74,52,0.3)] border border-[#D4A017]/30 hover:border-[#D4A017] transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>LOVEVET10</span>
                    {copied ? (
                      <span className="flex items-center gap-1 text-white text-[11px]">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#D4A017]" />
                    )}
                  </button>
                  <span className="text-[11px] text-[#F3EEE1]/60">Click to copy code</span>
                </div>
              </div>

              {/* Puppy Illustration */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 shrink-0 relative z-10 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/puppy-promo.svg"
                  alt="Cute Puppy in Gift Box"
                  width={176}
                  height={176}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: 2 Cream Promo Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 2: 24x7 Emergency Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex"
            >
              <NeuCard
                variant="raised"
                hoverEffect
                className="w-full flex flex-col justify-between p-6 cursor-pointer group"
                onClick={() => {
                  window.location.href = 'tel:+18005683838';
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C94A29] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#C94A29] animate-ping" />
                      Always On Standby
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#2B4A34] mt-1">
                      24×7 Emergency Support
                    </h4>
                    <p className="text-xs text-[#6B6357] mt-1">
                      Immediate trauma triage, emergency surgery & critical intensive care.
                    </p>
                  </div>
                  <NeuIconDisc size="sm" variant="raised" className="shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 text-[#C94A29]" />
                  </NeuIconDisc>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E8E1D0]">
                  <span className="font-mono text-xs font-bold text-[#2B4A34]">
                    +1 (800) 568-3838
                  </span>
                  <span className="text-xs font-bold text-[#D4A017] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Call Now <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </NeuCard>
            </motion.div>

            {/* Card 3: Home Sample Collection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex"
            >
              <NeuCard
                variant="raised"
                hoverEffect
                className="w-full flex flex-col justify-between p-6 cursor-pointer group"
                onClick={() => {
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2B4A34]">
                      Doorstep Convenience
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#2B4A34] mt-1">
                      Home Sample Collection
                    </h4>
                    <p className="text-xs text-[#6B6357] mt-1">
                      Stress-free blood, urine & swab sampling collected right in your living room.
                    </p>
                  </div>
                  <NeuIconDisc size="sm" variant="raised" className="shrink-0 group-hover:scale-110 transition-transform">
                    <FlaskConical className="w-4 h-4 text-[#2B4A34]" />
                  </NeuIconDisc>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#E8E1D0]">
                  <span className="text-xs font-semibold text-[#6B6357]">
                    Same-day lab reports
                  </span>
                  <span className="text-xs font-bold text-[#2B4A34] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Book Pickup <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </NeuCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
