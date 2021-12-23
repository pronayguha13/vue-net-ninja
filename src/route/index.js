import { createRouter, createWebHistory } from "vue-router";
import AllTasks from "@/Views/AllTasks";
import ToDo from "@/Views/ToDo.vue";

const routes = [
  {
    path: "/todos",
    name: "ToDos",
    components: AllTasks,
  },
  {
    path: "/todo/:id",
    name: "ToDo",
    components: ToDo,
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
