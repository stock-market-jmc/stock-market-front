<script setup lang="ts">

import type {OperationInterface} from "@/types/OperationInterface.ts";
import {computed, type ComputedRef} from "vue";
import CardGeneric from "@/components/common/CardGeneric.vue";

const props= defineProps<{
  operation: OperationInterface
}>()

const linkToOperationPage: ComputedRef<string> = computed(()=>{
  const slug = props.operation.slug
  return `operation/${slug}`
})

</script>

<template>
  <router-link :to="linkToOperationPage">
    <CardGeneric :title="operation.name"/>
  </router-link>
</template>

<style scoped>

</style>