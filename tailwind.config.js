/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00ffff',
        'neon-pink': '#ff00ff',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px var(--tw-shadow-color), 0 0 40px var(--tw-shadow-color)' },
          '50%': { boxShadow: '0 0 40px var(--tw-shadow-color), 0 0 80px var(--tw-shadow-color)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
