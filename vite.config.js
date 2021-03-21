import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutdir: true
  },
  plugins: [
    vue(),
    Pages(),
    Layouts({
      layoutsDir: 'src/layouts'
    })
  ]
})
