<script setup lang="ts">

import {useOperations} from "@/stores/OperationsStore.ts";
import {computed} from "vue";

const props = defineProps<{
  type: string
}>()

const operation = computed(() => useOperations().findByType(props.type))
</script>

<template>
  <h1>{{ operation.type }}</h1>
</template>

<style scoped>

</style>