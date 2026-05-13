<script setup>

import HomeCard from "@/components/HomeCard.vue";
import {useOperations} from "@/stores/OperationsStore.ts";
import {useMainStore} from "@/stores/MainStore.ts";
import {onBeforeMount} from "vue";
import {useRoute} from "vue-router";

const operations = useOperations().operations
const mainStore = useMainStore()

const route = useRoute()

onBeforeMount(() => {
  mainStore.setPageTitle(route.meta.title)
})

</script>
<template>

  <div class="py-4 px-2 grid grid-cols-1 md:grid-cols-3 gap-4">
    <HomeCard
        v-for="operation in operations"
        :key="operation.slug"
        :operation="operation"
    />
  </div>
</template>
