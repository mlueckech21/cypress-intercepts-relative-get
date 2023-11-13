import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base:'./',
  server: {
    proxy: {
      '/todos/1': 'https://jsonplaceholder.typicode.com/',
      '/posts': 'https://jsonplaceholder.typicode.com/'
    }
  },
})
