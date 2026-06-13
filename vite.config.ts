import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          framer: ['framer-motion'],
          gsap: ['gsap'],
          lenis: ['@studio-freight/lenis'],
        }
      }
    }
  }
})