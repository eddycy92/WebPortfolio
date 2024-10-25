// /vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This makes the server accessible externally
    port: 5175, // You can change the port if necessary
    open: false, // Automatically open the browser when the server starts
  },
})
