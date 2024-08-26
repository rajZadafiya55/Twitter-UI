import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://twitter-api-2viw.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // This will remove "/api" from the forwarded request
      },
    },
  },
});
