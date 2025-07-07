// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './', // stay in frontend/
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
})
