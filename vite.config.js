import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"
  },
  test: {
    globals: true,        // allow using expect/test/describe without imports
    environment: "jsdom", // required for React components
    setupFiles: "./vitest.setup.js"
  },
    server: {
    host: true,
    allowedHosts: true,
  },
});

