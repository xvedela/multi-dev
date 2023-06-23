import {defineComponent} from "vue";
import {RouterView} from "vue-router";

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
        component: () => new Promise(resolve => resolve(defineComponent(RouterView))),
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
        ]
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
    },
];

export default routes;
