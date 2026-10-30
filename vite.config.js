import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  // Nombre exacto del repositorio en GitHub (https://bq2203.github.io//T1_React/)
  base: '/T1_React/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,jsx,css,html,ico,png,svg,jpg,webp}']
      },
      includeAssets: ['Logo-Sena-192.png', 'Logo-Sena-512.png'],
      manifest: {
        name: 'Mi primera PWA',
        short_name: 'MyAppPWA',
        description: 'La PWA mas fantastica del mundo',
        scope: '/T1_React/',
        start_url: '/T1_React/',
        display: 'standalone',
        theme_color: '#000000',

        screenshots: [
          {
            src: 'PWA-img.jpg',
            sizes: '1200x581',
            type: 'image/jpeg',
            form_factor: 'narrow'
          },
          {
            src: 'PWA-img.jpg',
            sizes: '1200x581',
            type: 'image/jpeg',
            form_factor: 'wide'
          }
        ],
        icons: [
          {
            src: 'Logo-Sena-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'Logo-Sena-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})