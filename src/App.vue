<script setup lang="ts">
import NavigationView from "@/views/NavigationView.vue";
</script>

<template>
  <div class="h-screen flex flex-col">
    <nav class="h-[10%] bg-gray-800">
      <div class="w-93.75 mx-auto md:w-300">
        <NavigationView/>
      </div>
    </nav>

    <main class="h-[90%] overflow-y-scroll">
      <div class="w-93.75 mx-auto my-2 px-2
      md:px-4 md:w-300 md:my-6">
        <router-view />
      </div>
    </main>
  </div>
</template>