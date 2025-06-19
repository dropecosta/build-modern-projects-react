import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: '', // Replace with your API base URL or your local tunnel URL
        changeOrigin: true,
      }
    }
  }
})