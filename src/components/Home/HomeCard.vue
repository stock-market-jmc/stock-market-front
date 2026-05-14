<script setup lang="ts">

import {computed, type ComputedRef} from "vue";
import CardGeneric from "@/components/common/CardGeneric.vue";
import type {HomeOptionInterface} from "@/types/HomeOptionInterface.ts";

const props= defineProps<{
  option: HomeOptionInterface
}>()

const linkToOperationPage: ComputedRef<string> = computed(()=>{
  return props.option.slug
})

</script>

<template>
  <router-link :to="linkToOperationPage">
    <CardGeneric
        :title="option.name"
        :content="option.description"
    />
  </router-link>
</template>

<style scoped>

</style>