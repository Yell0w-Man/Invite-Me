import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/home.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'
import Dashboard from '../views/dashboard.vue'
import Events from "../views/events.vue"
import Invitation from "../views/invitation.vue"
import ForgotPassword from "../views/forgot-password.vue";
import ResetPassword from "../views/reset-password.vue";

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
  {
  path: "/events",
  name: "events",
  component: Events,
  },
  {
   path: "/invitation",
   name: "invitation",
   component: Invitation,
  },
  {
  path: "/forgot-password",
  name: "forgot-password",
  component: ForgotPassword,
},
{
  path: "/reset-password",
  name: "reset-password",
  component: ResetPassword,
},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router