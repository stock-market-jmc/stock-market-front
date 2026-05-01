<script setup>

import HomeCard from "@/components/HomeCard.vue";
import {useOperations} from "@/stores/OperationsStore.ts";

const operations= useOperations().operations

</script>
<template>
  <h1 class="text-2xl font-semibold text-gray-800  text-center">
    Operations
  </h1>
  <div class="py-4 px-2 grid grid-cols-1 md:grid-cols-3 gap-4">
    <HomeCard
        v-for="operation in operations"
        :key="operation.slug"
        :operation="operation"
    />
  </div>
</template>
