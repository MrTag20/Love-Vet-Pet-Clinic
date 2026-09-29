'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface NeuButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gold' | 'dark' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const NeuButton: React.FC<NeuButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
  onClick,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5 rounded-full font-semibold',
    md: 'px-6 py-3 text-sm gap-2 rounded-full font-semibold',
    lg: 'px-8 py-4 text-base gap-2.5 rounded-full font-bold',
  };

  const variantStyles = {
    primary:
      'bg-[#2B4A34] text-[#FBF9F3] shadow-[6px_6px_14px_rgba(163,148,116,0.35),-4px_-4px_10px_rgba(255,255,255,0.7)] hover:shadow-[0_0_20px_rgba(212,160,23,0.4),6px_6px_16px_rgba(163,148,116,0.4)] active:shadow-[inset_4px_4px_8px_rgba(18,33,23,0.7),inset_-4px_-4px_8px_rgba(55,93,67,0.4)]',
    secondary:
      'bg-[#F3EEE1] text-[#2B4A34] shadow-[6px_6px_14px_rgba(163,148,116,0.35),-6px_-6px_14px_rgba(255,255,255,0.85)] hover:shadow-[8px_8px_18px_rgba(163,148,116,0.4),-8px_-8px_18px_rgba(255,255,255,0.95)] active:shadow-[inset_4px_4px_8px_rgba(163,148,116,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] border border-white/40',
    gold:
      'bg-[#D4A017] text-[#1E2A22] shadow-[6px_6px_14px_rgba(163,148,116,0.35),-4px_-4px_10px_rgba(255,255,255,0.8)] hover:bg-[#E5B228] hover:shadow-[0_0_24px_rgba(212,160,23,0.5),6px_6px_16px_rgba(163,148,116,0.4)] active:shadow-[inset_4px_4px_8px_rgba(168,125,14,0.6),inset_-4px_-4px_8px_rgba(240,217,140,0.5)]',
    dark:
      'bg-[#1D3424] text-[#F3EEE1] shadow-[5px_5px_12px_rgba(12,22,15,0.7),-4px_-4px_10px_rgba(55,93,67,0.35)] hover:shadow-[0_0_18px_rgba(212,160,23,0.3),6px_6px_14px_rgba(12,22,15,0.8)] active:shadow-[inset_3px_3px_6px_rgba(10,18,12,0.8),inset_-3px_-3px_6px_rgba(43,74,52,0.3)]',
    ghost:
      'bg-transparent text-[#2B4A34] hover:bg-[#E8E1D0]/60 active:shadow-[inset_2px_2px_4px_rgba(163,148,116,0.25)]',
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.025 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center transition-all duration-200 select-none
        neu-focus outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </motion.button>
  );
};
