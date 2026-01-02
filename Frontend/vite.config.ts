/// <reference types="vitest" />
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "ChatbotWidget",
      fileName: (format) => `chatbot-widget.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      output: {
        globals: {
          // Define any external dependencies here if needed
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["src/test/setup.ts"],
  },
});
