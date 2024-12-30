import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'main.js', // Disable hashed filenames for JS entry files
        chunkFileNames: '[name].js', // Optional: disable hash for chunks
        assetFileNames: '[name][extname]' // Optional: disable hash for assets
      }
    }
  }
})
