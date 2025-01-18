import { RouterView } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
];

export default routes;