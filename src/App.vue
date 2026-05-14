<script setup lang="ts">
import NavigationView from "@/views/NavigationView.vue";
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <NavigationView/>
    <main class="pt-16">
      <div class="mx-auto my-2 px-2 md:px-4 md:w-300 md:my-6">
        <router-view/>
      </div>
    </main>
  </div>
</template>
