import { defineConfig } from "vite";

// Relative base so built asset URLs resolve wherever the site is served
// (https://raemr.github.io/) without hardcoding a path.
export default defineConfig({
  base: "./",
});
