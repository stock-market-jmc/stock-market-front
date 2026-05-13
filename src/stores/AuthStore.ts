import { defineStore } from 'pinia';
import { ref } from 'vue';
import AuthService from "@/services/AuthService.ts";

export const useAuthStore = defineStore('authStore', () => {
    const token = ref<string | null>(null);

    const authService = new AuthService();
    const login = async (email: string, password: string) => {

        const response = await authService.login(email, password);
        token.value = response.token;
    };

    const logout = () => {
        token.value = null;
    };

    return { token, login, logout };
}, {
    persist: {
        key: 'auth-store',
        storage: localStorage,
        pick: ['token'],
    }
});