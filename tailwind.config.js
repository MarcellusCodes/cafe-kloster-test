/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defautTheme = require("tailwindcss/defaultTheme");
const { blackA, mauve, violet } = require("@radix-ui/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      xs: "540px",
      ...defautTheme.screens,
    },
    extend: {
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      gridRowEnd: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
      },
      fontFamily: {
        title: ["var(--font-hnb)", "sans-serif"],
        heading: ["var(--font-hnm)", "sans-serif"],
        text: ["var(--font-hn)", "sans-serif"],
      },
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        primary: {
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#111111", //primary
        },
        secondary: {
          50: "#f6f8fa", //primary
          100: "#ebeff3",
          200: "#d2dde5",
          300: "#aabfcf",
          400: "#7d9eb3",
          500: "#5c819b",
          600: "#486781",
          700: "#3b5469",
          800: "#344758",
          900: "#2f3e4b",
        },
        tertiary: {
          50: "#fef7ee",
          100: "#feeed6",
          200: "#fbd8ad",
          300: "#f9bc78",
          400: "#f59745", //primary
          500: "#f2771d",
          600: "#e35d13",
          700: "#bc4612",
          800: "#963816",
          900: "#793115",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
