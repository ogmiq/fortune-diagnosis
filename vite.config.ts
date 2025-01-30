import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // `@/` を `src/` に解決
    },
  },
})
