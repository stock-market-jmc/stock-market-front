<script setup lang="ts">

import {useMainStore} from "@/stores/MainStore.ts";
import {computed} from "vue";
import ButtonGeneric from "@/components/common/ButtonGeneric.vue";
import LoginIcon from "@/components/common/SVG/LoginIcon.vue";
import {useAuthStore} from "@/stores/AuthStore.ts";
import LogoutIcon from "@/components/common/SVG/LogoutIcon.vue";
import HomeIcon from "@/components/common/SVG/HomeIcon.vue";

const mainStore = useMainStore()
const authStore = useAuthStore()

const title = computed(() => mainStore.pageTitle)
const isLoggedIn = computed(() => authStore.isLoggedIn())

const logout = () => {
  authStore.logout()
}
</script>

<template>

  <nav class="fixed top-0 left-0 w-full bg-gray-800 z-10 h-16">
    <div class="md:w-300 flex items-center justify-between m-auto h-full px-4">
      <router-link to="/" class="text-white hover:text-gray-300 transition-colors">
        <ButtonGeneric
            title="Home"
            class="px-6 hidden md:block"
        />
        <HomeIcon class="md:hidden inline-flex items-center"/>
      </router-link>

      <h1 class="text-white text-3xl m-0">{{ title }}</h1>

      <div v-if="!isLoggedIn" class="hidden md:block">
        <router-link to="/login">
          <ButtonGeneric
              title="Login"
              class="px-6"
          />
        </router-link>
      </div>
      <div v-else class="hidden md:block">
        <ButtonGeneric
            title="Logout"
            class="px-6"
            @clicked="logout"
        />
      </div>

      <div
          v-if="!isLoggedIn"
          class="md:hidden inline-flex items-center">
        <router-link to="/login">
          <LoginIcon/>
        </router-link>
      </div>
      <div v-else
           class="md:hidden inline-flex items-center">
         <LogoutIcon
            v-on:click="logout"
        />
      </div>
    </div>

  </nav>
</template>
<style scoped>

</style>