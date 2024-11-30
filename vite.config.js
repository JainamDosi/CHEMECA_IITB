import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CHEMECA_IITB/', 
  build: {
    outDir: 'build', // Ensure the build output folder is named 'build'
  },
})
