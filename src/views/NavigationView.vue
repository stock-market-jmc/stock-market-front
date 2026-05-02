<script setup lang="ts">

import {useMainStore} from "@/stores/MainStore.ts";
import {computed} from "vue";

const mainStore = useMainStore()
const title = computed(() => mainStore.pageTitle)
</script>

<template>

  <nav class="fixed top-0 left-0 w-full h-16 bg-gray-800 z-10 flex items-center">
    <h1 class="text-white text-3xl m-auto">{{ title }}</h1>
  </nav>
</template>

<style scoped>

</style>