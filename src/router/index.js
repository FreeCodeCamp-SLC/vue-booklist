import { createWebHistory, createRouter } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import SignIn from '../views/SignIn.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: '/lists',
        component: HelloWorld,
      },
    ],
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
