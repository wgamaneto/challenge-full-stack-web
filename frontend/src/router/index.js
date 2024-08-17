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
    name: 'studentsUpdate',
    component: () => import('../views/UpdateView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
