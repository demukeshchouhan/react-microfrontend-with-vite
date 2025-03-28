import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "appOne",
      filename: "remoteEntry.js",
      exposes: {
        "./MicroApp": "./src/App.jsx",
        "./Store": "./src/store.js",
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    host: "localhost",
    port: 5173,
    strictPort: true,
    cors: true,
  },
});
