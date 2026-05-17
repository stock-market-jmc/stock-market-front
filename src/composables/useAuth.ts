import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/AuthStore.ts';

export function useAuth() {
    const router = useRouter();
    const route = useRoute();
    const authStore = useAuthStore();

    const logout = async () => {
        authStore.logout();
        if (route.meta.requiresAuth === true) {
            await router.replace({ name: 'login', query: { redirect: route.fullPath } });
        }
    };

    const login = async (email: string, password: string) => {
        await authStore.login(email, password);
        const redirect = route.query.redirect as string || '/';
        await router.replace(redirect);
    };

    return { login, logout };
}