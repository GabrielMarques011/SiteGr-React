import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Pasta de saída do build
    rollupOptions: {
      output: {
        manualChunks: undefined, // Isso pode ajudar a evitar problemas com múltiplos chunks
      },
    },
  },
  plugins: [react()],
})
