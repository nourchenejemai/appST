import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../components/Navbar.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Navbar',
    component: Navbar
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
