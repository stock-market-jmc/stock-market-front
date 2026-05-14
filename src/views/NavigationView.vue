<script setup lang="ts">

import {useMainStore} from "@/stores/MainStore.ts";
import {computed} from "vue";

const mainStore = useMainStore()
const title = computed(() => mainStore.pageTitle)
</script>

<template>

  <nav class="fixed top-0 left-0 w-full bg-gray-800 z-10 h-16">
    <div class="md:w-300 flex items-center justify-between m-auto h-full px-4">
      <h1 class="text-white text-3xl m-0">{{ title }}</h1>

      <div class="hidden md:block">
        <router-link to="/login">
          <div class="
          bg-indigo-600 hover:bg-indigo-500 text-white
          px-4 py-2 rounded-lg shadow-md
          transition-all duration-200
          hover:shadow-lg hover:cursor-pointer"
          >
            Log In
          </div>
        </router-link>
      </div>

      <div class="md:hidden inline-flex items-center">
        <router-link to="/login">
          <div class="text-white hover:text-blue-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
        </router-link>
      </div>
    </div>

  </nav>
</template>
<style scoped>

</style>