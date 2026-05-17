import {createRouter, createWebHistory} from 'vue-router'

import OperationsPage from '@/pages/OperationsPage.vue';
import OperationPage from "@/pages/OperationPage.vue";
import {VALID_OPERATIONS} from "@/constants/operations.ts";
import LoginPage from "@/pages/LoginPage.vue";
import HomePage from "@/pages/HomePage.vue";
import {useAuthStore} from "@/stores/AuthStore.ts";

const slugs = VALID_OPERATIONS.map(operation => operation.slug);
const operationsPattern = slugs.join('|');

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {title: 'Home'}
    },
    {
        path: '/operations',
        name: 'operations',
        component: OperationsPage,
        meta: {title: 'Operations'}
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        meta: {title: 'Login'}
    },
    {
        path: `/operations/:slug(${operationsPattern})`,
        component: OperationPage,
        props: true,
        meta: {
            title: operationsPattern,
            requiresAuth: true
        }
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, _from) => {
    const authStore = useAuthStore();
    const isLoggedIn = authStore.isLoggedIn();

    if (to.meta.requiresAuth && !isLoggedIn) {
        return {name: 'login', query: {redirect: to.fullPath}};
    }
    return true;
})

export default router