<script setup lang="ts">

import {useOperations} from "@/stores/OperationsStore.ts";
import {computed, ref} from "vue";
import SelectAssetInput from "@/components/common/SelectAssetInput.vue";
import {alphaVantageApi} from "@/api/AlphaVantageApi.ts";
import type AssetInterface from "@/types/AssetInterface.ts";

const props = defineProps<{
  type: string
}>()

const operation = computed(() => useOperations().findByType(props.type))

const response = ref('')
const callApi = async (option: AssetInterface) => {
  response.value = await alphaVantageApi.get(option.symbol)
}
</script>

<template>
  <div class="flex flex-col">

    <h1 class="w-full text-2xl font-semibold text-gray-800 pb-6 text-center">
      {{ operation.type }}
    </h1>

    <div class="flex flex-col lg:flex-row gap-6">

      <div class="
        overflow-x-auto overflow-y-visible
        flex flex-row gap-3 flex-nowrap scrollbar-hidden
        lg:flex-col lg:overflow-visible "
      >
        <SelectAssetInput
        @select="callApi"/>
      </div>
      <div >
        {{ response }}
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>