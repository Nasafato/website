const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    fontFamily: {
      // serif: ["IBM Plex Serif", "serif"],
    },
    // extend: {
    //   fontSize: {
    //     base: "16px",
    //   },
    // },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.tsx"],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("theme-system", ".theme-system &");
    }),
    require("@tailwindcss/typography"),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
