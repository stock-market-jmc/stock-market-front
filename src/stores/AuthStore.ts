import {defineStore} from 'pinia';
import {ref} from 'vue';
import AuthService from "@/services/AuthService.ts";
import type UserInterface from "@/types/UserInterface.ts";

export const useAuthStore = defineStore('authStore', () => {
    const token = ref<string | null>(null);
    const authService = new AuthService();
    const user = ref<UserInterface>(authService.getDefaultUser());
    const login = async (email: string, password: string) => {

        const response = await authService.login(email, password);
        token.value = response.token;
        user.value = authService.getUser(response.token)
    };

    const logout = () => {
        token.value = null;
    };

    return { token, login, logout, user };
}, {
    persist: {
        key: 'auth-store',
        storage: localStorage,
        pick: ['token', 'user'],
    }
});