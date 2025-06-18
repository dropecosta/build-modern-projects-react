import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://5lp3xl1v-3000.uks1.devtunnels.ms/',
        changeOrigin: true,
      }
    }
  }
})