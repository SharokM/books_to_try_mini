

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/books_to_read_mini/',
  plugins: [react()],
})
