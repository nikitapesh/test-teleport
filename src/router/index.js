import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {auth: true},
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/AuthView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = localStorage.getItem('authStatus')
  const requireAuth = to.matched.some(home => home.meta.auth)
  localStorage.setItem('requireAuth', requireAuth)

  if (requireAuth && !currentUser) {
    next('auth')
  } else {
    next()
  }
})

export default router
