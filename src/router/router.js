import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/pages/MainPage/MainPage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    },
    {
        path: '/test',
        name: 'test',
        component: () => import("../pages/TestPage/TestPage.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;