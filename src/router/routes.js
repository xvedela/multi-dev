export default [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/Home.vue"),
    },
    {
        path: '/contactUs',
        name: 'ContactUs',
        component: () => import("../views/ContactUs.vue")
    }
];