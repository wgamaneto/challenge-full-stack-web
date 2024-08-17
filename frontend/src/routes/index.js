import { createRouter, createWebHistory } from "vue-router";
import StudentsView from "../views/StudentsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: StudentsView,
  },
  {
    path: "/cadastrar",
    name: "studentsRegistry",
    component: () => import("../views/RegistryView.vue"),
  },
  {
    path: "/update",
    name: "studentsUpdate",
    component: () => import("../views/UpdateView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
