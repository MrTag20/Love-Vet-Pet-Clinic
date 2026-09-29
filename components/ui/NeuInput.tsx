'use client';

import React, { forwardRef } from 'react';

export interface NeuInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const NeuInput = forwardRef<HTMLInputElement, NeuInputProps>(
  ({ label, error, helperText, leftIcon, rightIcon, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-bold text-[#2B4A34] tracking-wide uppercase flex items-center justify-between"
          >
            <span>{label}</span>
            {props.required && <span className="text-[#D4A017] font-normal text-xs">* Required</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-4 text-[#6B6357] pointer-events-none flex items-center">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={`
              w-full bg-[#EBE4D5] text-[#1E2A22] placeholder-[#8E867A]
              rounded-xl px-4 py-3 text-sm transition-all duration-200
              shadow-[inset_4px_4px_8px_rgba(163,148,116,0.32),inset_-4px_-4px_8px_rgba(255,255,255,0.85)]
              border border-[#DFD5C2]/40
              focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-[#D4A017]
              focus:bg-[#F2ECE0]
              ${leftIcon ? 'pl-11' : ''}
              ${rightIcon ? 'pr-11' : ''}
              ${error ? 'border-red-500/70 ring-1 ring-red-500/50' : ''}
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-4 text-[#6B6357] flex items-center">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <span className="text-xs font-medium text-red-600 mt-0.5">{error}</span>}
        {helperText && !error && (
          <span className="text-xs text-[#6B6357] mt-0.5">{helperText}</span>
        )}
      </div>
    );
  }
);

NeuInput.displayName = 'NeuInput';
