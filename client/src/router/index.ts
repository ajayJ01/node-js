import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import User from '../views/User.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/user', name: 'User', component: User }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
