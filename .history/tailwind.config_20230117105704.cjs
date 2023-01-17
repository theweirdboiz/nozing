/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "sidebar-bg": "hsla(0,0%,100%,0.05)",
      "layout-bg": "#170f23",
      "purple-primary": "#9b4de0",
      "border-primary": "hsla(0,0%,100%,0.1);",
      vip: "#ffdb00",
      black: "#111111",
      white: "#fff",
      secondary: "hsla(0,0%,100%,0.5)",
      "link-text-hover": "#c273ed",
      "hover-circle": "hsla(0,0%,100%,.1)",
    },
    backgroundImage: {
      "gradient-vip": "linear-gradient(117deg,#5a4be7,#c86dd7 102%);",
    },
  },
  plugins: [],
};
