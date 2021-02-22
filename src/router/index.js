import { createWebHistory, createRouter } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: SignIn,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
