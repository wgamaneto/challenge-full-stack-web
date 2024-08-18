import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/StudentsView.vue')
  },
  {
    path: '/cadastrar',
    name: 'studentsRegistry',
    component: () => import('../views/RegistryView.vue')
  },
  {
    path: '/update/:id',
    name: 'UpdateView',
    component: () => import('../views/UpdateView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
