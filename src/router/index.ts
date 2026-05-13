import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '@/pages/HomePage.vue';
import OperationPage from "@/pages/OperationPage.vue";
import {VALID_OPERATIONS} from "@/constants/operations.ts";
import LoginPage from "@/pages/LoginPage.vue";

const slugs = VALID_OPERATIONS.map(operation => operation.slug);
const operationsPattern = slugs.join('|');

const routes = [
    {
        path: '/',
        component: HomePage,
        meta: {title: 'Home'}
    },
    {
        path: '/login',
        component: LoginPage,
        meta: {title: 'Login'}
    },
    {
        path: `/operation/:slug(${operationsPattern})`,
        component: OperationPage,
        props: true,
        meta: {title: operationsPattern}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router