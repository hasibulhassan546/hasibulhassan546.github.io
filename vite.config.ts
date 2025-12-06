import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Determine base path: '/' for local development, '/' for username.github.io, '/<REPO-NAME>/' for other GitHub Pages
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
const base = process.env.GITHUB_REPOSITORY
  ? (repoName.endsWith('.github.io') ? '/' : `/${repoName}/`)
  : '/';

export default defineConfig({
  plugins: [react()],
  base,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
