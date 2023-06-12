import {RouterView} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
    },
    {
        path: "/services",
        component: () => RouterView,
        children: [
            {
                path: "customWebsite",
                name: "CustomWebsite",
                component: () => import("../views/CustomWebsites.vue"),
            },
            {
                path: "templatedSites",
                name: "TemplatedSites",
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
