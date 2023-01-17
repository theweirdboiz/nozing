import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
const pluginScrollbar = require("tailwindcss/plugin");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@routers": path.resolve(__dirname, "./src/routers"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [
    react(),
    pluginScrollbar(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: `${theme("colors.blue.600")} ${theme(
            "colors.blue.200"
          )}`,
          scrollbarWidth: "thin",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: "2px",
          width: "2px",
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: theme("colors.blue.600"),
        },
        ".scrollbar::-webkit-scrollbar-track-piece": {
          backgroundColor: theme("colors.blue.200"),
        },
      });
    }),
  ],
});
