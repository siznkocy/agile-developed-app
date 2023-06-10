/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "0.1rem",
      },
      backgroundImage: {},
      colors: {
        primary: {
          100: "#212931",
          200: "#212931",
        },
        secondary: {
          200: "#F9FBFC",
          300: "#F2F3F7",
          400: "#EAEEF2",
          500: "#BEC1C8",
          600: "#797D81",
        },
        accent: {
          100: "#AF0C08",
          200: "#C01208",
          300: "#C01208",
        },
        tertiary: {
          100: "#23A695",
        },
      },
    },
  },
  plugins: [],
};
