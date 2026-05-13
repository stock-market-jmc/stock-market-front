<script setup lang="ts">

import LoginView from "@/views/LoginView.vue";
import {useRoute} from "vue-router";
import {useMainStore} from "@/stores/MainStore.ts";
import {onBeforeMount} from "vue";

const route = useRoute()

const mainStore = useMainStore()

onBeforeMount(() => {
  mainStore.setPageTitle(route.meta.title)
})

</script>

<template>
  <LoginView/>
</template>

<style scoped>

</style>