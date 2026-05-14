<script setup lang="ts">

defineProps<{
  title: string
  content?: string
}>()
</script>

<template>
  <div
      class="block bg-white border border-gray-200 text-gray-900
  p-6 rounded-xl w-full h-full

  transition-all duration-300 ease-in-out
  hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
    <h1 class="text-lg font-semibold">{{ title }}</h1>
    <p v-if="content" class="text-gray-600 mt-2">{{ content }}</p>
  </div>
</template>

<style scoped>

</style>