'use client';

import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

export interface NeuSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  options: Array<{ value: string; label: string }>;
}

export const NeuSelect = forwardRef<HTMLSelectElement, NeuSelectProps>(
  ({ label, error, helperText, leftIcon, options, className = '', id, ...props }, ref) => {
    const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={selectId}
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
          <select
            id={selectId}
            ref={ref}
            className={`
              w-full appearance-none bg-[#EBE4D5] text-[#1E2A22]
              rounded-xl px-4 py-3 text-sm transition-all duration-200
              shadow-[inset_4px_4px_8px_rgba(163,148,116,0.32),inset_-4px_-4px_8px_rgba(255,255,255,0.85)]
              border border-[#DFD5C2]/40 cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-[#D4A017]
              focus:bg-[#F2ECE0]
              ${leftIcon ? 'pl-11' : ''}
              pr-10
              ${error ? 'border-red-500/70 ring-1 ring-red-500/50' : ''}
              ${className}
            `}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#F3EEE1] text-[#1E2A22]">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-4 text-[#2B4A34] pointer-events-none flex items-center">
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
        {error && <span className="text-xs font-medium text-red-600 mt-0.5">{error}</span>}
        {helperText && !error && (
          <span className="text-xs text-[#6B6357] mt-0.5">{helperText}</span>
        )}
      </div>
    );
  }
);

NeuSelect.displayName = 'NeuSelect';
