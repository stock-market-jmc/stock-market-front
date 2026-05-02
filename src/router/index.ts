import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '@/pages/HomePage.vue';
import OperationPage from "@/pages/OperationPage.vue";
import {VALID_OPERATIONS} from "@/constants/operations.ts";

const operationsPattern = VALID_OPERATIONS.join('|')

const routes = [
    {
        path: '/',
        component: HomePage,
        meta: {title: 'Home'}
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