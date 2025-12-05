import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// If deploying to GitHub Pages under a repository, Vite's base should be set to "/repo-name/".
// For user sites (repo name = "username.github.io"), base should be "/".
// This reads the repo name from the environment variable `GITHUB_REPOSITORY` (set by Actions)
// or from `process.env.REPO_NAME` which you can set locally before building.
function getBase() {
  const repo = process.env.GITHUB_REPOSITORY || process.env.REPO_NAME || "";
  if (!repo) return "/";
  // GITHUB_REPOSITORY is in the form "owner/repo"
  const parts = repo.split("/");
  const repoName = parts.length === 2 ? parts[1] : repo;
  // User site repos (named "username.github.io") are served at root "/"
  if (repoName.endsWith(".github.io")) return "/";
  // Project repos are served under "/repo-name/"
  return `/${repoName}/`;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: getBase(),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
