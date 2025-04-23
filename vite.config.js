import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/media/', // 👈 This line tells Vite how to build for GitHub Pages
  plugins: [react()],
})
