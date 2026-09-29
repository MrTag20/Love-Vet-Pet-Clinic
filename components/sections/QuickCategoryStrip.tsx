'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Dog,
  Cat,
  Syringe,
  Scissors,
  Activity,
  Ambulance,
  Pill,
  Award,
  Sparkles,
} from 'lucide-react';
import { NeuIconDisc } from '@/components/ui/NeuIconDisc';

interface QuickCategoryStripProps {
  onSelectCategory?: (category: string) => void;
}

export const QuickCategoryStrip: React.FC<QuickCategoryStripProps> = ({
  onSelectCategory,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Dogs');

  const categories = [
    { id: 'dogs', label: 'Dogs', icon: Dog, target: '#services', badge: 'Popular' },
    { id: 'cats', label: 'Cats', icon: Cat, target: '#services' },
    { id: 'vaccination', label: 'Vaccination', icon: Syringe, target: '#services' },
    { id: 'grooming', label: 'Grooming', icon: Scissors, target: '#services' },
    { id: 'surgery', label: 'Surgery', icon: Activity, target: '#services' },
    { id: 'emergency', label: 'Emergency', icon: Ambulance, target: '#contact', alert: true },
    { id: 'pharmacy', label: 'Pharmacy', icon: Pill, target: '#products' },
    { id: 'certificates', label: 'Certificates', icon: Award, target: '#why-us' },
  ];

  const handleCategoryClick = (cat: (typeof categories)[0]) => {
    setActiveCategory(cat.label);
    if (onSelectCategory) {
      onSelectCategory(cat.label);
    }
    const targetEl = document.querySelector(cat.target);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-20 py-8 px-4 sm:px-6 lg:px-8 bg-[#F3EEE1]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4 px-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[#6B6357] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
            <span>Explore Clinical & Pet Care Specialties</span>
          </p>
          <span className="hidden sm:inline-block text-xs font-semibold text-[#2B4A34]">
            Quick Direct Navigation
          </span>
        </div>

        {/* Scrollable / Responsive category strip */}
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4 pt-2 px-2 no-scrollbar scroll-smooth">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.label;

            return (
              <motion.button
                key={cat.id}
                onClick={() => handleCategoryClick(cat)}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col items-center gap-2.5 min-w-[76px] sm:min-w-[90px] cursor-pointer focus:outline-none"
              >
                <div className="relative">
                  <NeuIconDisc
                    size="md"
                    variant={isActive ? 'gold' : 'raised'}
                    interactive
                    className={`
                      transition-all duration-300
                      ${isActive ? 'scale-110 ring-2 ring-[#D4A017]/50' : 'group-hover:scale-105'}
                    `}
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors duration-200 ${
                        isActive
                          ? 'text-[#1E2A22]'
                          : cat.alert
                          ? 'text-[#C94A29]'
                          : 'text-[#2B4A34]'
                      }`}
                    />
                  </NeuIconDisc>

                  {cat.badge && (
                    <span className="absolute -top-1 -right-2 bg-[#2B4A34] text-[#F0D98C] text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">
                      {cat.badge}
                    </span>
                  )}
                </div>

                <span
                  className={`text-xs font-semibold tracking-tight transition-colors duration-200 ${
                    isActive
                      ? 'text-[#2B4A34] font-bold underline decoration-[#D4A017] decoration-2 underline-offset-4'
                      : 'text-[#6B6357] group-hover:text-[#2B4A34]'
                  }`}
                >
                  {cat.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
