const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', ...fontFamily.sans],
        montserrat: ['var(--font-montserrat)', ...fontFamily.sans],
      },
      colors: {
        'neon-blue': '#4c2aff',
        'neon-fuchsia': '#f92a82',
        'dark-bg': '#0a0a0a',
      },
      keyframes: {
        'shine': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'shine': 'shine 2s linear infinite',
      },
    },
  },
  plugins: [],
};