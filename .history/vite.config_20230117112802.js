import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
const plugin = require("tailwindcss/plugin");
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
  plugins: [react()],
});
