'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface NeuCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'raised' | 'floating' | 'inset' | 'dark' | 'flat';
  className?: string;
  hoverEffect?: boolean;
}

export const NeuCard: React.FC<NeuCardProps> = ({
  children,
  variant = 'raised',
  className = '',
  hoverEffect = false,
  ...props
}) => {
  const variantStyles = {
    raised:
      'bg-[#F3EEE1] shadow-[8px_8px_18px_rgba(163,148,116,0.32),-8px_-8px_18px_rgba(255,255,255,0.85)] border border-white/40',
    floating:
      'bg-[#F3EEE1] shadow-[14px_14px_28px_rgba(163,148,116,0.32),-14px_-14px_28px_rgba(255,255,255,0.95)] border border-white/50',
    inset:
      'bg-[#EFE9DC] shadow-[inset_6px_6px_12px_rgba(163,148,116,0.3),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] border border-[#E2D8C3]/50',
    dark:
      'bg-[#2B4A34] text-[#F3EEE1] shadow-[8px_8px_20px_rgba(15,27,19,0.7),-6px_-6px_16px_rgba(55,93,67,0.4)] border border-[#3D6549]/40',
    flat: 'bg-[#F3EEE1]',
  };

  return (
    <motion.div
      whileHover={
        hoverEffect && variant !== 'inset'
          ? {
              y: -4,
              scale: 1.015,
              boxShadow:
                variant === 'dark'
                  ? '10px 10px 24px rgba(15,27,19,0.8), -8px -8px 20px rgba(55,93,67,0.5)'
                  : '12px 12px 24px rgba(163,148,116,0.4), -12px -12px 24px rgba(255,255,255,0.98)',
            }
          : {}
      }
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`
        rounded-2xl md:rounded-3xl p-6 transition-colors duration-200
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};
