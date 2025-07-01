import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  babel()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
