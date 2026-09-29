'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Clock, Award } from 'lucide-react';

export const TrustBadgeStrip: React.FC = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: '100% Certified Vets',
      subtitle: 'Board-Certified Specialists',
    },
    {
      icon: Heart,
      title: '10,000+ Happy Pets',
      subtitle: 'Loved Across Families',
    },
    {
      icon: Clock,
      title: '24×7 Emergency Support',
      subtitle: 'Always On Standby',
    },
    {
      icon: Award,
      title: 'Compassionate Care',
      subtitle: 'Fear-Free Practice Guarantee',
    },
  ];

  return (
    <section className="bg-[#2B4A34] text-[#F3EEE1] py-8 px-4 sm:px-6 lg:px-8 border-y border-[#3D6549]/40 relative overflow-hidden">
      {/* Soft dark texture ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3D6549]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((b, index) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-2xl bg-[#1D3424]/40 border border-[#3D6549]/40 shadow-[4px_4px_10px_rgba(15,27,19,0.5),-3px_-3px_8px_rgba(55,93,67,0.25)]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1D3424] shadow-[inset_3px_3px_6px_rgba(10,18,12,0.8),inset_-3px_-3px_6px_rgba(43,74,52,0.3)] flex items-center justify-center text-[#D4A017] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-white">
                    {b.title}
                  </h4>
                  <p className="text-xs text-[#F0D98C] font-medium">{b.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
