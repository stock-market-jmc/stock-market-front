<script setup lang="ts">

import {useMainStore} from "@/stores/MainStore.ts";
import {computed} from "vue";
import LoginIcon from "@/components/common/SVG/LoginIcon.vue";
import {useAuthStore} from "@/stores/AuthStore.ts";
import LogoutIcon from "@/components/common/SVG/LogoutIcon.vue";
import HomeIcon from "@/components/common/SVG/HomeIcon.vue";
import {useAuth} from "@/composables/useAuth.ts";

const mainStore = useMainStore()
const authStore = useAuthStore()

const title = computed(() => mainStore.pageTitle)
const isLoggedIn = computed(() => authStore.isLoggedIn())
const {logout} = useAuth()
const handleLogout = () => {
  logout()
}
</script>

<template>
  <nav class="fixed top-0 left-0 w-full bg-gray-800 z-10 h-16">
    <div class="md:w-300 flex items-center justify-between m-auto h-full px-4">
      <router-link to="/" class="text-white hover:text-gray-300 transition-colors p-1">
        <HomeIcon />
      </router-link>

      <h1 class="text-white text-3xl m-0">{{ title }}</h1>

      <div class="flex items-center">
        <router-link v-if="!isLoggedIn" to="/login" class="text-white hover:text-gray-300 transition-colors p-1">
          <LoginIcon />
        </router-link>
        <span v-else @click="handleLogout" class="text-white hover:text-gray-300 transition-colors cursor-pointer p-1">
          <LogoutIcon />
        </span>
      </div>
    </div>
  </nav>
</template>