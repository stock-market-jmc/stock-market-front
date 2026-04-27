<script setup lang="ts">

import type {OperationInterface} from "@/types/OperationInterface.ts";
import {computed, type ComputedRef} from "vue";

const props= defineProps<{
  operation: OperationInterface
}>()

const linkToOperationPage: ComputedRef<string> = computed(()=>{
  const operation = props.operation.type.toLowerCase().replace(' ','-')
  return `operation/${operation}`
})

</script>

<template>
  <router-link
      :to="linkToOperationPage"
      class="block bg-white border border-gray-200 text-gray-900
         p-6 rounded-xl w-full h-full

         transition-all duration-300 ease-in-out
         hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
  >
    <h1 class="text-lg font-semibold">{{ operation.type }}</h1>
  </router-link>
</template>

<style scoped>

</style>