/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "sidebar-bg": "hsla(0,0%,100%,0.05)",
      "alpha-bg": "hsla(0,0%,100%,0.1)",
      "layout-bg": "#170f23",
      "purple-primary": "#9b4de0",
      "border-primary": "hsla(0,0%,100%,0.1);",
      vip: "#ffdb00",
      black: "#111111",
      white: "#fff",
      secondary: "hsla(0,0%,100%,0.5)",
      "link-text-hover": "#c273ed",
      "hover-circle": "hsla(0,0%,100%,.1)",
      "box-shadow-queue":
        "0 1px 0 rgba(0,0,0,0.3),0 1px 6px rgba(0,0,0,0.3),inset 0 1px 1px rgba(25,255,255,0.05);",
      "queue-player-bg": "#120822",
      "tab-active-bg": "hsla(0,0%,100%,0.3);",
    },
    backgroundImage: {
      "gradient-vip": "linear-gradient(117deg,#5a4be7,#c86dd7 102%);",
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
