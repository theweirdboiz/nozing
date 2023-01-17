/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "sidebar-bg": "hsla(0,0%,100%,0.05)",
      "layout-bg": "#170f23",
      "purple-primary": "#9b4de0",
    },
  },
  plugins: [],
};
