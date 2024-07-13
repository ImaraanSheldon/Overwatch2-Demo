import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Heroes from '../views/HeroesPage.vue'
import Play from '@/views/PlayPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Heroes',
    name: 'heroes',
    component: Heroes
  },
  {
    path: '/Play',
    name:'play',
    component: Play
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
