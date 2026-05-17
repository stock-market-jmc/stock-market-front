<script setup lang="ts">
import {computed, onBeforeMount} from "vue";
import {useOperations} from "@/stores/OperationsStore.ts";
import {useMainStore} from "@/stores/MainStore.ts";

const props = defineProps<{
  slug: string
}>()

const mainStore = useMainStore()
const operationStore = useOperations()
const operation = computed(() => operationStore.findBySlug(props.slug))

onBeforeMount(() => {
  mainStore.setPageTitle(operation.value.name)
})

</script>
<template>
  <component
      :is="operation.component"
      :title="operation.name"
  />
</template>
<style scoped></style>