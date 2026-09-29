'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SideOpeningIntroProps {
  onComplete?: () => void;
  companyName?: string;
  tagline?: string;
}

export const SideOpeningIntro: React.FC<SideOpeningIntroProps> = ({
  onComplete,
  companyName = 'Love Vet',
  tagline = 'Compassionate Care & Advanced Surgery',
}) => {
  // Phase sequence: 'enter' (brand reveal) -> 'split' (doors slide open) -> 'finished' (unmounted)
  const [phase, setPhase] = useState<'enter' | 'split' | 'finished'>('enter');
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    // 1. Automatic percentage counter (completes in ~600ms)
    const startTime = Date.now();
    const duration = 650;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(100, Math.round((elapsed / duration) * 100));
      setPercent(p);

      if (p >= 100) {
        clearInterval(interval);

        // 2. Automatically trigger side curtain opening after brief pause
        setTimeout(() => {
          setPhase('split');
          if (onComplete) onComplete();

          // 3. Fully unmount once side doors have slid off-screen
          setTimeout(() => {
            setPhase('finished');
          }, 850);
        }, 350);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (phase === 'finished') return null;

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center overflow-hidden select-none">
      {/* LEFT SIDE CURTAIN (Slides to the left) */}
      <motion.div
        initial={{ x: '0%' }}
        animate={phase === 'split' ? { x: '-100%' } : { x: '0%' }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1], // Smooth luxury cubic-bezier curve
        }}
        className="absolute top-0 left-0 w-1/2 h-full bg-[#1D3424] border-r border-[#3D6549]/50 shadow-[12px_0_35px_rgba(0,0,0,0.6)] z-20 flex items-center justify-end pointer-events-auto"
      >
        <div className="absolute left-6 sm:left-12 text-[14vw] font-serif font-black text-[#2B4A34]/20 pointer-events-none select-none">
          LOVE
        </div>
      </motion.div>

      {/* RIGHT SIDE CURTAIN (Slides to the right) */}
      <motion.div
        initial={{ x: '0%' }}
        animate={phase === 'split' ? { x: '100%' } : { x: '0%' }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#1D3424] border-l border-[#3D6549]/50 shadow-[-12px_0_35px_rgba(0,0,0,0.6)] z-20 flex items-center justify-start pointer-events-auto"
      >
        <div className="absolute right-6 sm:right-12 text-[14vw] font-serif font-black text-[#2B4A34]/20 pointer-events-none select-none">
          VET
        </div>
      </motion.div>

      {/* GLOWING CENTER SEAM LINE */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={
          phase === 'split'
            ? { opacity: 0, scaleY: 1.6 }
            : { opacity: 0.8, scaleY: 1 }
        }
        transition={{ duration: 0.5 }}
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#D4A017] to-transparent z-25 pointer-events-none"
      />

      {/* CENTER BRANDING & TYPOGRAPHY */}
      <AnimatePresence>
        {phase === 'enter' && (
          <motion.div
            key="brand-reveal"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative z-30 flex flex-col items-center justify-center text-center px-6 max-w-lg pointer-events-auto"
          >
            {/* Animated Paw Disc */}
            <motion.div
              initial={{ scale: 0, rotate: -25 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: 'spring',
                stiffness: 350,
                damping: 22,
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2B4A34] shadow-[6px_6px_16px_rgba(12,22,15,0.8),-4px_-4px_12px_rgba(55,93,67,0.4)] border border-[#D4A017]/40 flex items-center justify-center mb-5 relative"
            >
              <span className="text-3xl sm:text-4xl select-none">🐾</span>
              <span className="absolute -inset-1 rounded-full border border-[#D4A017]/30 animate-ping pointer-events-none" />
            </motion.div>

            {/* Company Wordmark */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-5xl sm:text-7xl font-black text-[#F3EEE1] tracking-tight leading-none drop-shadow-lg"
              >
                Love<span className="text-[#D4A017]">Vet</span>
              </motion.h1>
            </div>

            {/* Gold Divider Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="h-1 bg-[#D4A017] rounded-full mb-3 shadow-[0_0_12px_rgba(212,160,23,0.6)]"
            />

            {/* Subtitle / Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#F0D98C] mb-6"
            >
              {tagline}
            </motion.p>

            {/* Automatic Percentage Counter & Progress Line */}
            <div className="flex flex-col items-center gap-2 w-44 sm:w-56">
              <div className="flex items-center justify-between w-full text-[11px] font-mono text-[#F3EEE1]/70">
                <span className="tracking-widest uppercase text-[9px]">Entering Clinic</span>
                <span className="font-bold text-[#D4A017]">{percent}%</span>
              </div>

              <div className="w-full h-1.5 rounded-full bg-[#15251a] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)] overflow-hidden p-0.5 border border-[#3D6549]/30">
                <div
                  className="h-full bg-gradient-to-r from-[#D4A017] to-[#F0D98C] rounded-full shadow-[0_0_8px_rgba(212,160,23,0.7)] transition-all duration-75"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
