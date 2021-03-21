import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { fixPathWhenSSG } from './plugins/ssg-path-fixer'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutdir: true
  },
  plugins: [
    vue(),
    Pages({
      extendRoute: (route, parent) => {
        return fixPathWhenSSG(route)
      }
    }),
    Layouts({
      layoutsDir: 'src/layouts'
    })
  ]
})
