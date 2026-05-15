<script setup lang="ts">

import LoginView from "@/views/LoginView.vue";
import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/MainStore.ts";
import {computed, onBeforeMount, watch} from "vue";
import {useAuthStore} from "@/stores/AuthStore.ts";
import router from "@/router";

const route = useRoute()

const mainStore = useMainStore()
const authStore = useAuthStore()
onBeforeMount(() => {
  if (authStore.isLoggedIn()){
    router.push('/')
  }
  mainStore.setPageTitle(route.meta.title)
})

const isLoggedIn = computed(() => authStore.isLoggedIn())
watch(isLoggedIn, (newVal) => {
  if (newVal) {
    router.push('/')
  }
})

</script>

<template>
  <LoginView/>
</template>

<style scoped>

</style>