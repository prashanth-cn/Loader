import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/packages/index.tsx"), // Entry point for the library
      name: "Loader",
      fileName: (format) => `index.${format}.js`, // Customize output file name
      formats: ["es"],
    },
    rollupOptions: {
      // Ensure to externalize deps you don't want to bundle into the library
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
