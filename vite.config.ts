import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
// https://vitejs.dev/config/

const getPath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

// @ts-ignore
export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "@", replacement: getPath("./src") },
      { find: "shared", replacement: getPath("./src/shared") },
      { find: "components", replacement: getPath("./src/components") },
    ],
  },
  plugins: [vue()],
  root: ".",
  //@ts-ignore
  test: {
    globals: true,
    environment: "jsdom",
  },
});
