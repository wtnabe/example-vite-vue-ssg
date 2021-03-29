import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'layouts-generated'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
