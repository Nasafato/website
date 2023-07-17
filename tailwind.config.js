const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("theme-system", ".theme-system &");
    }),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
