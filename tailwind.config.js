/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#090909',
        surface: {
          DEFAULT: '#111113',
          hover: '#18181c',
          card: '#0d0e12',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        primary: {
          DEFAULT: '#FFFFFF',
          muted: '#8A8F9E',
          dim: '#A1A7B4',
        },
        accent: {
          DEFAULT: '#4F7CFF',
          glow: '#4F7CFF33',
          light: '#7AE7FF',
          cyan: '#7AE7FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'grid-pulse': 'gridPulse 8s ease-in-out infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
        'glow-spin': 'glowSpin 10s linear infinite',
        'border-beam': 'borderBeam 4s linear infinite',
        'scan-line': 'scanLine 3s linear infinite',
      },
      keyframes: {
        gridPulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.45' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        borderBeam: {
          '0%': { offsetDistance: '0%' },
          '100%': { offsetDistance: '100%' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'dots-pattern': 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'drawer': 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
  plugins: [],
};
