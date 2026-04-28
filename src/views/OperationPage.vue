<script setup lang="ts">

import {useOperations} from "@/stores/OperationsStore.ts";
import {computed} from "vue";
import SelectAssetInput from "@/components/common/SelectAssetInput.vue";

const props = defineProps<{
  type: string
}>()

const operation = computed(() => useOperations().findByType(props.type))
</script>

<template>
  <div class="flex flex-col">

    <h1 class="w-full text-2xl font-semibold text-gray-800 py-6 text-center">
      {{ operation.type }}
    </h1>

    <div class="flex flex-col lg:flex-row gap-6">

      <div class="
        overflow-x-auto overflow-y-visible px-2 lg:px-3
        flex flex-row gap-3 flex-nowrap scrollbar-hidden
        lg:flex-col lg:overflow-visible "
      >
        <SelectAssetInput/>
        <SelectAssetInput/>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>