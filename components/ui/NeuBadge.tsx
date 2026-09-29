import React from 'react';

export interface NeuBadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'green' | 'cream' | 'dark' | 'sale';
  size?: 'sm' | 'md';
  className?: string;
}

export const NeuBadge: React.FC<NeuBadgeProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase',
    md: 'px-3.5 py-1 text-xs font-bold tracking-wider uppercase',
  };

  const variantStyles = {
    gold:
      'bg-[#D4A017] text-[#1E2A22] shadow-[3px_3px_6px_rgba(163,148,116,0.3),-2px_-2px_6px_rgba(255,255,255,0.8)] border border-[#EAC25E]/40',
    green:
      'bg-[#2B4A34] text-[#FBF9F3] shadow-[3px_3px_6px_rgba(163,148,116,0.3),-2px_-2px_6px_rgba(255,255,255,0.8)]',
    cream:
      'bg-[#F3EEE1] text-[#2B4A34] shadow-[3px_3px_6px_rgba(163,148,116,0.25),-3px_-3px_6px_rgba(255,255,255,0.9)] border border-white/60',
    dark:
      'bg-[#1D3424] text-[#F3EEE1] shadow-[3px_3px_6px_rgba(12,22,15,0.6),-2px_-2px_6px_rgba(55,93,67,0.3)]',
    sale:
      'bg-[#C94A29] text-white shadow-[3px_3px_6px_rgba(201,74,41,0.3),-2px_-2px_6px_rgba(255,255,255,0.8)]',
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center rounded-full select-none
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};
