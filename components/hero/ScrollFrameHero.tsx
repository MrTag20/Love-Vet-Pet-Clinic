'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Clock, HeartHandshake, Sparkles, ChevronDown, ArrowDown } from 'lucide-react';
import { NeuButton } from '@/components/ui/NeuButton';

interface ScrollFrameHeroProps {
  frameCount?: number;
  basePath?: string;
  fileExtension?: string;
  onBookClick?: () => void;
  onServicesClick?: () => void;
  onCompleteChange?: (isComplete: boolean) => void;
}

// Key thresholds along the scroll track:
// 0.00 -> 0.70 : Frames 001 to 240 scrub sequentially (all frames finish at 0.70!)
// 0.70 -> 0.85 : Frame 240 (Doctor + Puppy) sits pure & unobstructed on screen
// 0.85 -> 1.00 : User scrolls one more time -> Navbar & Hero Card popup!
const ANIMATION_FINISH_THRESHOLD = 0.70;
const POPUP_REVEAL_THRESHOLD = 0.85;

export const ScrollFrameHero: React.FC<ScrollFrameHeroProps> = ({
  frameCount = 240,
  basePath = '/framesimg/ezgif-frame-',
  fileExtension = '.jpg',
  onBookClick,
  onServicesClick,
  onCompleteChange,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const isCompleteRef = useRef<boolean>(false);

  // Cover-fit image calculation on Canvas
  const drawImageProp = (
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    cw: number,
    ch: number
  ) => {
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    if (!iw || !ih) return;

    const hRatio = cw / iw;
    const vRatio = ch / ih;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (cw - iw * ratio) / 2;
    const centerShiftY = (ch - ih * ratio) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(
      img,
      0,
      0,
      iw,
      ih,
      centerShiftX,
      centerShiftY,
      iw * ratio,
      ih * ratio
    );
  };

  // Render a specific frame
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < frameCount; offset++) {
        const prev = imagesRef.current[frameIndex - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (img && img.complete && img.naturalWidth > 0) {
      drawImageProp(ctx, img, canvas.width, canvas.height);
    }
  }, [frameCount]);

  // Handle Canvas Resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Instant Frame 1 Loader + Background Streaming
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = new Array(frameCount);

    // 1. Load First Frame Immediately
    const firstImg = new Image();
    firstImg.src = `${basePath}001${fileExtension}`;
    firstImg.onload = () => {
      if (isCancelled) return;
      images[0] = firstImg;
      imagesRef.current = images;
      renderFrame(0);
    };
    images[0] = firstImg;
    imagesRef.current = images;

    // 2. Preload remaining frames
    let loadedCount = 1;
    const loadNextBatch = (startIndex: number, batchSize: number) => {
      if (isCancelled || startIndex >= frameCount) return;

      const endIndex = Math.min(startIndex + batchSize, frameCount);
      let batchLoaded = 0;

      for (let i = startIndex; i < endIndex; i++) {
        const img = new Image();
        const paddedIndex = String(i + 1).padStart(3, '0');
        img.src = `${basePath}${paddedIndex}${fileExtension}`;

        const onDone = () => {
          if (isCancelled) return;
          loadedCount++;
          batchLoaded++;
          if (batchLoaded === endIndex - startIndex) {
            setTimeout(() => loadNextBatch(endIndex, batchSize), 16);
          }
        };

        img.onload = onDone;
        img.onerror = onDone;
        images[i] = img;
      }
    };

    const timeout = setTimeout(() => {
      loadNextBatch(1, 20);
    }, 40);

    return () => {
      isCancelled = true;
      clearTimeout(timeout);
    };
  }, [frameCount, basePath, fileExtension, renderFrame]);

  // Pure Native Sticky Scroll Scrubber
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const track = trackRef.current;
        if (!track) return;

        const rect = track.getBoundingClientRect();
        const totalScrollableDistance = rect.height - window.innerHeight;
        if (totalScrollableDistance <= 0) return;

        // Current scroll progress through hero track (0.0 to 1.0)
        const progress = Math.min(
          1,
          Math.max(0, -rect.top / totalScrollableDistance)
        );

        setScrollProgress(progress);

        // Map progress to frame index:
        // All 240 frames complete during the first ANIMATION_FINISH_THRESHOLD (0% to 70%)
        let targetFrame = 0;
        if (progress <= ANIMATION_FINISH_THRESHOLD) {
          targetFrame = Math.min(
            frameCount - 1,
            Math.floor((progress / ANIMATION_FINISH_THRESHOLD) * (frameCount - 1))
          );
        } else {
          // Locked on last frame 240 for the remainder of the hero track
          targetFrame = frameCount - 1;
        }

        if (targetFrame !== currentFrameRef.current) {
          currentFrameRef.current = targetFrame;
          renderFrame(targetFrame);
        }

        // Trigger Navbar Popup ONLY after reaching POPUP_REVEAL_THRESHOLD (0.85)
        const isComplete = progress >= POPUP_REVEAL_THRESHOLD || -rect.top >= totalScrollableDistance;
        if (isComplete !== isCompleteRef.current) {
          isCompleteRef.current = isComplete;
          if (onCompleteChange) {
            onCompleteChange(isComplete);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [frameCount, renderFrame, onCompleteChange]);

  // Is all 240 frames finished?
  const areAllFramesFinished = scrollProgress >= ANIMATION_FINISH_THRESHOLD;
  // Has user scrolled one more time to reveal the popup?
  const isPopupRevealed = scrollProgress >= POPUP_REVEAL_THRESHOLD;

  return (
    <div
      ref={trackRef}
      className="relative w-full h-[380vh] bg-[#FAF7F0]"
      id="home"
    >
      {/* Sticky Full-Screen Viewport Window */}
      <div className="sticky top-0 w-full h-[100dvh] h-screen overflow-hidden flex items-center justify-center">
        {/* Fullscreen Canvas for 240-Frame Animation */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Subtle Top & Bottom Gradients */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F3EEE1]/60 to-transparent z-5 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F3EEE1]/80 to-transparent z-5 pointer-events-none" />

        {/* Phase 1 & Phase 2 Bottom Guidance Prompt */}
        <AnimatePresence>
          {!isPopupRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5 pointer-events-none"
            >
              <div className="px-5 py-2.5 rounded-full bg-[#F3EEE1]/95 backdrop-blur-md shadow-[6px_6px_16px_rgba(163,148,116,0.35),-6px_-6px_16px_rgba(255,255,255,0.9)] border border-white/80 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4A017] animate-ping" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2B4A34]">
                  {!areAllFramesFinished
                    ? 'Scroll down to enter Love Vet'
                    : 'Scroll once more to explore'}
                </span>
                <div className="w-6 h-6 rounded-full bg-[#2B4A34] text-[#F0D98C] flex items-center justify-center animate-bounce">
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="w-48 h-1.5 rounded-full bg-[#EBE4D5] overflow-hidden shadow-inner">
                <div
                  className="h-full bg-[#2B4A34] transition-all duration-75"
                  style={{
                    width: `${Math.min(
                      100,
                      Math.round((scrollProgress / POPUP_REVEAL_THRESHOLD) * 100)
                    )}%`,
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 3 Hero Content Overlay: ONLY POPUPS AFTER SCROLLING ONE MORE TIME PAST THE LAST FRAME */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-between h-full pointer-events-none">
          {/* Top spacer for navbar */}
          <div className="h-16 sm:h-20" />

          {/* Main Content Card Container */}
          <div className="flex items-center justify-start">
            <AnimatePresence>
              {isPopupRevealed && (
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.94 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 40, scale: 0.94 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-auto max-w-md lg:max-w-lg bg-[#F3EEE1]/92 backdrop-blur-md p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] shadow-[14px_14px_32px_rgba(163,148,116,0.35),-12px_-12px_28px_rgba(255,255,255,0.95)] border border-white/80"
                >
                  {/* Eyebrow Badge */}
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="px-3.5 py-1 rounded-full bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.3),-3px_-3px_8px_rgba(255,255,255,0.85)] border border-white/60 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-ping" />
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#2B4A34]">
                        TRUSTED PET CARE & SURGERY
                      </span>
                    </div>
                  </div>

                  {/* Main Headline */}
                  <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B4A34] tracking-tight leading-[1.14] mb-3">
                    Compassionate Care for Your{' '}
                    <span className="relative inline-block text-[#2B4A34]">
                      <span className="text-[#D4A017] italic">Beloved</span> Companions
                      <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#D4A017]/40 rounded-full" />
                    </span>
                  </h1>

                  {/* Subtext */}
                  <p className="text-xs sm:text-sm text-[#6B6357] font-normal leading-relaxed mb-5">
                    Expert veterinary care, delivered with love — from routine health
                    certifications and luxury grooming to 24×7 emergency surgery.
                  </p>

                  {/* Trust Metrics Pill Row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-6">
                    <div className="flex items-center gap-2 p-2 rounded-2xl bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.25),-3px_-3px_8px_rgba(255,255,255,0.85)] border border-white/50">
                      <div className="w-7 h-7 rounded-full bg-[#EBE4D5] shadow-[inset_2px_2px_4px_rgba(163,148,116,0.3)] flex items-center justify-center text-[#2B4A34] shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D4A017]" />
                      </div>
                      <div className="leading-tight truncate">
                        <p className="text-[11px] font-bold text-[#2B4A34] truncate">Certified</p>
                        <p className="text-[9px] text-[#6B6357] truncate">Specialists</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-2xl bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.25),-3px_-3px_8px_rgba(255,255,255,0.85)] border border-white/50">
                      <div className="w-7 h-7 rounded-full bg-[#EBE4D5] shadow-[inset_2px_2px_4px_rgba(163,148,116,0.3)] flex items-center justify-center text-[#2B4A34] shrink-0">
                        <Clock className="w-3.5 h-3.5 text-[#D4A017]" />
                      </div>
                      <div className="leading-tight truncate">
                        <p className="text-[11px] font-bold text-[#2B4A34] truncate">24×7 Care</p>
                        <p className="text-[9px] text-[#6B6357] truncate">Emergency</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded-2xl bg-[#F3EEE1] shadow-[3px_3px_8px_rgba(163,148,116,0.25),-3px_-3px_8px_rgba(255,255,255,0.85)] border border-white/50">
                      <div className="w-7 h-7 rounded-full bg-[#EBE4D5] shadow-[inset_2px_2px_4px_rgba(163,148,116,0.3)] flex items-center justify-center text-[#2B4A34] shrink-0">
                        <HeartHandshake className="w-3.5 h-3.5 text-[#D4A017]" />
                      </div>
                      <div className="leading-tight truncate">
                        <p className="text-[11px] font-bold text-[#2B4A34] truncate">Happy Pets</p>
                        <p className="text-[9px] text-[#6B6357] truncate">Fear-Free</p>
                      </div>
                    </div>
                  </div>

                  {/* Action CTAs */}
                  <div className="flex flex-wrap items-center gap-3">
                    <NeuButton
                      size="md"
                      variant="primary"
                      onClick={onBookClick || (() => {
                        document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                      })}
                      leftIcon={<Sparkles className="w-4 h-4 text-[#F0D98C]" />}
                    >
                      Book Appointment
                    </NeuButton>

                    <NeuButton
                      size="md"
                      variant="secondary"
                      onClick={onServicesClick || (() => {
                        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                      })}
                    >
                      Our Services
                    </NeuButton>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom space */}
          <div className="h-6" />
        </div>
      </div>
    </div>
  );
};
