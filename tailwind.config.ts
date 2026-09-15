import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        signature: ['var(--font-caveat)', 'Caveat', 'cursive'],
        display: ['var(--font-plus-jakarta-sans)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        brand: {
          accent: '#84cc16',
          neon: '#a3e635',
          cyan: '#06b6d4',
          surface: 'rgba(15, 23, 42, 0.45)',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(132, 204, 22, 0.4))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(132, 204, 22, 0.8))' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
