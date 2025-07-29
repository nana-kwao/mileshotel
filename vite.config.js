/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/mileshotel",
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@img": path.resolve(__dirname, "src/assets/img"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
    },
  },
});
