import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif']
      },
      colors: {
        'kopi-ink': '#0d0b0a',
        'kopi-cream': '#f6ede3',
        'kopi-gold': '#c79a5a',
        'kopi-deep': '#1b140f'
      },
      boxShadow: {
        'soft-ambient': '0 40px 120px rgba(0,0,0,0.55)'
      },
      animation: {
        'gradient-flow': 'gradient-flow 16s ease-in-out infinite',
        'blob': 'blob 14s ease-in-out infinite'
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        blob: {
          '0%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(10%, -5%, 0) scale(1.1)' },
          '66%': { transform: 'translate3d(-8%, 6%, 0) scale(0.95)' },
          '100%': { transform: 'translate3d(0,0,0) scale(1)' }
        }
      }
    }
  },
  plugins: []
};

export default config;

