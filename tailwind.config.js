module.exports = {
  content: [
    "./packages/web/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00ff88",
          dark: "#00cc6a",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          dark: "#5B21B6",
        },
        background: {
          DEFAULT: "#000000",
          dark: "#111111",
        }
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }
    },
  },
  plugins: [],
}
