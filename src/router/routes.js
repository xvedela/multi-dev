import {RouterView} from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/custom-websites",
    name: "CustomWebsites",
    component: () => import("../views/CustomWebsites.vue"),
  },
  {
    path: "/templated-websites",
    name: "TemplatedWebsites",
    component: () => import("../views/TemplatedWebsites.vue"),
  },
  {
    path: "/our-work",
    name: "OurWork",
    component: () => import("../views/OurWork.vue"),
  },
  {
    path: "/blog",
    component: RouterView,
    children: [
      {
        path: "",
        name: "Blog",
        component: () => import("../views/Blogs.vue"),
      },
      {
        path: ":id",
        name: "BlogId",
        component: () => import("../views/Blog.vue"),
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

export default routes;
