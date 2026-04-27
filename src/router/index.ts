import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue';
import OperationPage from "@/views/OperationPage.vue";
import {VALID_OPERATIONS} from "@/constants/operations.ts";

const operationsPattern = VALID_OPERATIONS.join('|')

const routes = [
    { path: '/', component: HomePage },
    {
        path: `/operation/:type(${operationsPattern})`,
        component: OperationPage,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router