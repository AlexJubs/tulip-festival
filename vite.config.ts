import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    allowedHosts: [
      "a918-2607-fea8-fe30-7cc6-d25-757a-ba9-c968.ngrok-free.app",
      "*"
    ]
  }
})
