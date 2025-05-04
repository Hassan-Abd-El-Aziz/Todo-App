import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
    meta: { title: "Home-Page" },
  },
  {
    path: "/show-todos",
    name: "show-todos",
    component: () => import("@/views/ShowTodos.vue"),
    meta: { title: "show-Page" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
