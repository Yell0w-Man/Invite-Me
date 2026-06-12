import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Dashboard from '../views/dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router