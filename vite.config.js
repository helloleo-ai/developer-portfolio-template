import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'brave-dog-6c0d2177-cf38-4b57-8c86-4263fe28b3e3.preprod.projects.helloleo.terros.io'
    ]
  }
})
