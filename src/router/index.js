import { createWebHistory, createRouter } from 'vue-router'
import Test from '../views/Test.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'Test',
    component: Test,
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
