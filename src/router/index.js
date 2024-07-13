import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Play from '@/views/PlayPage.vue'
import Heroes from '../views/HeroesPage.vue'
import Shop from '@/views/ShopPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Play',
    name:'play',
    component: Play
  },
  {
    path: '/Heroes',
    name: 'heroes',
    component: Heroes
  },
  {
    path: '/Shop',
    name: 'shop',
    component: Shop
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
