<script setup lang="ts">
import {computed} from "vue";
import {useOperations} from "@/stores/OperationsStore.ts";

const props = defineProps<{
  slug: string
}>()

const operationStore = useOperations()
const operation = computed(() => operationStore.findByType(props.slug))
</script>
<template>
  <component
      :is="operation.component"
      :title="operation.name"
  />
</template>
<style scoped></style>