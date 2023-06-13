import {RouterView} from "vue-router";
import {defineComponent} from "vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/services",
        component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
        children: [
            {
                path: "customWebsites",
                name: "CustomWebsites",
                component: () => import("../views/CustomWebsites.vue"),
            },
            {
                path: "templatedWebSites",
                name: "TemplatedWebsites",
                component: () => import("../views/TemplatedWebSites.vue"),
            },
            {
                path: "searchEngineOptimization",
                name: "SearchEngineOptimization",
                component: () => import("../views/SearchEngineOptimization.vue"),
            }
        ],
    },
    {
        path: "/ourWork",
        name: "OurWork",
        component: () => import("../views/OurWork.vue"),
    },
    {
        path: "/blog",
        name: "Blog",
        component: () => import("../views/Blog.vue"),
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
    },
];

export default routes;
