/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Your New Ocean Cyberpunk Theme ===
        // Primary: Aquamarine
        "primary-neon": "#7FFFD4",

        // Secondary: Sapphire
        "secondary-neon": "#0F52BA",

        // Deep Accent: Navy
        "accent-deep": "#001F3F",

        // Background layers
        "dark-background": "#000000", // Pure black
        "dark-surface": "#0D0D0D", // Slightly lighter

        // Extra glow tones (optional)
        "glow-aqua": "#7FFFD4",
        "glow-sapphire": "#3A66DD",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
      },

      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            "box-shadow": "0 0 6px rgba(127, 255, 212, 0.45)", // aquamarine
          },
          "50%": {
            "box-shadow":
              "0 0 25px rgba(15, 82, 186, 0.85), 0 0 40px rgba(0, 31, 63, 0.6)", // sapphire + navy
          },
        },
      },

      animation: {
        "pulse-glow": "pulse-glow 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};