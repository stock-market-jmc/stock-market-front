<script setup lang="ts">
import {computed, onBeforeMount, watch} from "vue";
import {useOperations} from "@/stores/OperationsStore.ts";
import {useMainStore} from "@/stores/MainStore.ts";
import router from "@/router";
import {useAuthStore} from "@/stores/AuthStore.ts";

const props = defineProps<{
  slug: string
}>()

const mainStore = useMainStore()
const operationStore = useOperations()
const operation = computed(() => operationStore.findBySlug(props.slug))
const authStore = useAuthStore()
onBeforeMount(() => {
  mainStore.setPageTitle(operation.value.name)
  if (!authStore.isLoggedIn()) {
    router.push('/login')
  }
})

const isLoggedIn = computed(() => authStore.isLoggedIn())
watch(isLoggedIn, (newVal) => {
  if (!newVal) {
    router.push('/')
  }
})

</script>
<template>
  <component
      :is="operation.component"
      :title="operation.name"
  />
</template>
<style scoped></style>