import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clothes',
      name: 'clothes',
      component: () => import('../views/ClothesView.vue')
    },
    {
      path: '/supplements',
      name: 'supplements',
      component: () => import('../views/SupplementsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/accessories',
      name: 'accesories',
      component: () => import('../views/AccessoriesView.vue')
    }
  ]
})

export default router
