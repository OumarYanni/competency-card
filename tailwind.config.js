/** @type {import('tailwindcss').Config} */
module.exports = {
  //purge: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: [
          "Space Grotesk",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
