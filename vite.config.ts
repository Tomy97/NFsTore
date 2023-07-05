import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@store": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@composables": fileURLToPath(
        new URL("./src/composables", import.meta.url)
      ),
      "@services": fileURLToPath(new URL("./src/services", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      "@interfaces": fileURLToPath(new URL("./src/interfaces", import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `
        //   @import "bootstrap/scss/functions";
        //   @import "src/assets/scss/override";
        // `
        additionalData: `
        @import 'tailwindcss/base';
        @import 'tailwindcss/components';
        @import 'tailwindcss/utilities';
        `
      }
    }
  }
});
