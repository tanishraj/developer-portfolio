import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lib: resolve(__dirname, 'src/lib'),
      routes: resolve(__dirname, 'src/routes'),
      router: resolve(__dirname, 'src/lib/router'),
      theme: resolve(__dirname, 'src/lib/styles/theme'),
      globals: resolve(__dirname, 'src/lib/styles/globals'),
      layout: resolve(__dirname, 'src/lib/layout'),
      pages: resolve(__dirname, 'src/lib/pages'),
      assets: resolve(__dirname, 'public/assets'),
    },
  },
});
