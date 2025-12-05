import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/hasibulhassan546.github.io/',  // <-- use your repo name here
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
