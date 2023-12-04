import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => ['feblend'].includes(tag),
      }
    }
  })],
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.join(__dirname, "src") },
      { find: /^src\//, replacement: path.join(__dirname, "src/") },
      { find: "/root/src", replacement: path.join(__dirname, "src") },
    ],
  },
})
