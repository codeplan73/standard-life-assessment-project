/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F9FDFF",
        primary: "#093D9F",
        secondary: "#3B099F",
        disabled: "#AAB4BE",
        // disabled: "#093D9F/#FFFFFF",
        black: "#111827",
        grayOne: "#4b54463",
        grayTwo: "#6B7280",
        grayThree: "#B35A00",
        form: "#D1D5DB",
        stroke: "#E5E7EB",
      },
      fontFamily: {
        sora: ["'Sora'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        "source-serif-pro": ["'Source Serif Pro'", "serif"],
      },
    },
  },
  plugins: [],
};
