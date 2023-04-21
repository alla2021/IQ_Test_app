import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/pages/MainPage.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    },
    {
        path: '/test',
        name: 'test',
        component: () => import("../pages/TestPage.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;