import {defineStore} from 'pinia';
import {ref} from 'vue';
import AuthService from "@/services/AuthService.ts";
import type UserInterface from "@/types/UserInterface.ts";

export const useAuthStore = defineStore('authStore', () => {
    const token = ref<string | null>(null);
    const authService = new AuthService();
    const user = ref<UserInterface>(authService.getDefaultUser());
    const loading = ref<boolean>(false);

    const login = async (email: string, password: string) => {
        loading.value = true;
        const response = await authService.login(email, password);
        token.value = response.token;
        user.value = authService.getUser(response.token)
        loading.value = false;
    };

    const logout = () => {
        token.value = null;
        user.value = authService.getDefaultUser();
    };

    const isLoggedIn = () => {
        return token.value !== null && user.value?.expirationDate > Date.now() / 1000;
    };

    return {token, login, logout, user, loading, isLoggedIn};
}, {
    persist: {
        key: 'auth-store',
        storage: localStorage,
        pick: ['token', 'user'],
    }
});