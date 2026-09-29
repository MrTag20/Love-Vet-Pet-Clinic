'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface NeuIconDiscProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'raised' | 'inset' | 'gold' | 'dark' | 'green';
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  ariaLabel?: string;
}

export const NeuIconDisc: React.FC<NeuIconDiscProps> = ({
  children,
  size = 'md',
  variant = 'raised',
  className = '',
  onClick,
  interactive = false,
  ariaLabel,
  ...props
}) => {
  const sizeStyles = {
    xs: 'w-8 h-8 text-xs',
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-base',
    lg: 'w-18 h-18 text-xl',
    xl: 'w-22 h-22 text-2xl',
  };

  const variantStyles = {
    raised:
      'bg-[#F3EEE1] text-[#2B4A34] shadow-[5px_5px_12px_rgba(163,148,116,0.35),-5px_-5px_12px_rgba(255,255,255,0.9)] border border-white/50',
    inset:
      'bg-[#EBE4D5] text-[#2B4A34] shadow-[inset_4px_4px_8px_rgba(163,148,116,0.32),inset_-4px_-4px_8px_rgba(255,255,255,0.85)] border border-[#DFD5C2]/40',
    gold:
      'bg-[#D4A017] text-[#1E2A22] shadow-[5px_5px_12px_rgba(163,148,116,0.35),-4px_-4px_10px_rgba(255,255,255,0.8)]',
    green:
      'bg-[#2B4A34] text-[#FBF9F3] shadow-[5px_5px_12px_rgba(163,148,116,0.35),-4px_-4px_10px_rgba(255,255,255,0.8)]',
    dark:
      'bg-[#1D3424] text-[#F3EEE1] shadow-[4px_4px_10px_rgba(12,22,15,0.7),-4px_-4px_10px_rgba(55,93,67,0.35)]',
  };

  const isClickable = interactive || !!onClick;

  return (
    <motion.div
      whileHover={isClickable ? { scale: 1.08, rotate: 3 } : {}}
      whileTap={isClickable ? { scale: 0.94 } : {}}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      aria-label={ariaLabel}
      tabIndex={isClickable ? 0 : undefined}
      className={`
        rounded-full flex items-center justify-center shrink-0 select-none
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${isClickable ? 'cursor-pointer neu-focus' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};
