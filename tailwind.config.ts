import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        'bg-base': '#F3EEE1',
        'bg-base-dark': '#E8E1D0',
        'primary-green': {
          DEFAULT: '#2B4A34',
          light: '#3D6549',
          dark: '#1D3424',
          glow: 'rgba(43, 74, 52, 0.25)',
        },
        'accent-gold': {
          DEFAULT: '#D4A017',
          soft: '#F0D98C',
          light: '#F8E8B4',
          dark: '#A87D0E',
          glow: 'rgba(212, 160, 23, 0.3)',
        },
        'text-dark': '#1E2A22',
        'text-muted': '#6B6357',
        'white-soft': '#FBF9F3',
      },
      boxShadow: {
        // Light Neumorphic Shadows (Base: #F3EEE1 / #E8E1D0)
        'neu-raised': '8px 8px 16px rgba(163,148,116,0.35), -8px -8px 16px rgba(255,255,255,0.85)',
        'neu-raised-sm': '4px 4px 10px rgba(163,148,116,0.3), -4px -4px 10px rgba(255,255,255,0.85)',
        'neu-raised-lg': '12px 12px 24px rgba(163,148,116,0.3), -12px -12px 24px rgba(255,255,255,0.9)',
        'neu-floating': '14px 14px 28px rgba(163,148,116,0.32), -14px -14px 28px rgba(255,255,255,0.95)',
        'neu-inset': 'inset 6px 6px 12px rgba(163,148,116,0.3), inset -6px -6px 12px rgba(255,255,255,0.8)',
        'neu-inset-sm': 'inset 3px 3px 6px rgba(163,148,116,0.25), inset -3px -3px 6px rgba(255,255,255,0.75)',
        'neu-gold-glow': '0 0 20px rgba(212, 160, 23, 0.4), 6px 6px 14px rgba(163,148,116,0.3)',
        
        // Dark Neumorphic Shadows (Base: #2B4A34)
        'neu-dark-raised': '6px 6px 14px rgba(18, 33, 23, 0.6), -6px -6px 14px rgba(55, 93, 67, 0.4)',
        'neu-dark-raised-sm': '3px 3px 8px rgba(18, 33, 23, 0.5), -3px -3px 8px rgba(55, 93, 67, 0.35)',
        'neu-dark-inset': 'inset 4px 4px 8px rgba(18, 33, 23, 0.6), inset -4px -4px 8px rgba(55, 93, 67, 0.3)',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'neu': '1.25rem',
        'neu-lg': '1.75rem',
        'neu-xl': '2.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
