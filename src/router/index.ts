import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue';
import OperationPage from "@/pages/OperationPage.vue";
import {VALID_OPERATIONS} from "@/constants/operations.ts";

const operationsPattern = VALID_OPERATIONS.join('|')

const routes = [
    { path: '/', component: HomePage },
    {
        path: `/operation/:slug(${operationsPattern})`,
        component: OperationPage,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router