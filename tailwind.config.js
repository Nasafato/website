const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
