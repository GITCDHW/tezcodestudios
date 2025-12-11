/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-neon': '#00F0FF', // A bright cyan for neon
        'secondary-neon': '#FF00F0', // A bright magenta for contrast
        'dark-background': '#0A0A0A', // Very dark grey
        'dark-surface': '#1A1A1A', // Slightly lighter dark grey
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or 'Roboto Mono', 'Space Mono' for techy feel
        mono: ['Roboto Mono', 'monospace'],
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 'box-shadow': '0 0 5px rgba(0, 240, 255, 0.4)' },
          '50%': { 'box-shadow': '0 0 20px rgba(0, 240, 255, 0.8), 0 0 30px rgba(0, 240, 255, 0.6)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
