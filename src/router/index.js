import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Play from '@/views/PlayPage.vue'
import Heroes from '../views/HeroesPage.vue'
import Shop from '@/views/ShopPage.vue'
import Pass from '@/views/BattlePassPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
  {
    path: '/Pass',
    name: 'pass',
    component: Pass
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
