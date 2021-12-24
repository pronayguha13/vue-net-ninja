import { createRouter, createWebHistory } from "vue-router";
import AllTasks from "@/views/AllTasks";
import ToDo from "@/views/ToDo.vue";

const routes = [
  {
    path: "/",
    name: "AllTasks",
    component: AllTasks,
  },
  {
    path: "/todo/:id",
    name: "ToDo",
    component: ToDo,
  },
  //   {
  //     name: "Home",
  //     path: "/",
  //     component: Home,
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
