/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        base: "#0A0E1A",
        deep: "#060810",
        elevated: "#0F1729",
        accent: {
          DEFAULT: "#00D9C0",
          soft: "rgba(0, 217, 192, 0.14)",
          glow: "rgba(0, 217, 192, 0.35)",
        },
        accent2: {
          DEFAULT: "#FF6B9D",
          soft: "rgba(255, 107, 157, 0.12)",
        },
        ink: {
          primary: "#F2F4F8",
          secondary: "#9BA3B4",
          tertiary: "#5C6478",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.045)",
          strong: "rgba(255, 255, 255, 0.07)",
          border: "rgba(255, 255, 255, 0.09)",
          borderStrong: "rgba(255, 255, 255, 0.16)",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Vazirmatn", "sans-serif"],
        body: ["var(--font-inter)", "Vazirmatn", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Vazirmatn", "monospace"],
        fa: ["Vazirmatn", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        lg: "24px",
        md: "16px",
        sm: "10px",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "50.01%, 100%": { opacity: "0" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        scrollPulse: "scrollPulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
