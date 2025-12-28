import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({ algorithm: "brotliCompress" }),
  ],
  base: "/tedx/",
  build: {
    chunkSizeWarningLimit: 600, // increase warning limit if needed
    rollupOptions: {
      output: {
        // Split vendor libraries into a separate chunk
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
