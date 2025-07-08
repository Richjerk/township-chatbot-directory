// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  root: '.', // Define root folder for Vite
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Township Chatbot Directory',
        short_name: 'Township Directory',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4f46e5',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ]
      }
    })
  ],
  build: {
    outDir: '../dist',      // Output outside frontend/
    emptyOutDir: true       // Clean dist before build
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './frontend/src'), // Optional: alias for imports
    }
  }
});
