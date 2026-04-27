<script setup>

import HomeCard from "@/components/HomeCard.vue";
import {useOperations} from "@/stores/OperationsStore.ts";

const operations= useOperations().operations

</script>
<template>
  <div class="py-10 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
    <HomeCard
        v-for="operation in operations"
        :key="operation"
        :operation="operation"
    />
  </div>
</template>
