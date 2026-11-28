import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    watch: {
      // En Docker Desktop los eventos del volumen compartido pueden no propagarse.
      usePolling: process.env.DOCKER_WATCH === 'true',
    },
  },
  devtools: {
    // Remove this `apply` property to enable devtools for build as well
    apply: 'serve',
  },
  plugins: [react()],
})
