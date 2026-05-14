<script setup lang="ts">

import LoginView from "@/views/LoginView.vue";
import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/MainStore.ts";
import {onBeforeMount} from "vue";
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

</script>

<template>
  <LoginView/>
</template>

<style scoped>

</style>