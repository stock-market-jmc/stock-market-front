<script setup lang="ts">

import SelectGeneric from "@/components/common/SelectGeneric.vue";
import {ref} from "vue";
import {storeToRefs} from "pinia";
import type TickerInterface from "@/types/TickerInterface.ts";
import LabeledCheckGeneric from "@/components/common/LabeledCheckGeneric.vue";
import type {SelectOption} from "@/types/SelectOption.ts";
import {useSelectTickersStore} from "@/stores/AlphaVantage/SelectAssetsStore.ts";

const emit = defineEmits<{
  'selectedAsset': [ SelectOption<TickerInterface>]
}>()

const selectAssetsStore = useSelectTickersStore()

const {selectAssets, selectedAsset} = storeToRefs(selectAssetsStore)
const onSelectOption = (selectedAsset: SelectOption<TickerInterface>) => {
  emit('selectedAsset', selectedAsset)
}

const closeOnClick = ref(true)

const onClick = (clicked: boolean) => {
  closeOnClick.value = clicked
}

</script>

<template>

  <SelectGeneric
      :selected-option="selectedAsset"
      :options="selectAssets"
      @option-selected="onSelectOption"
      :close-onclick="closeOnClick"
      @close-on-click="onClick"
      select-class="bg-green-50 text-green-700 font-medium hover:bg-green-100"
  >
    <div class="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-2 text-sm text-gray-500">
      <LabeledCheckGeneric
          label="Close on select"
          v-model="closeOnClick"
          wrapper-class="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-gray-50"
          label-class="text-sm text-gray-700"
          checkbox-class="h-4 w-4 accent-green-600 cursor-pointer"
      />
    </div>
  </SelectGeneric>
</template>

<style scoped>

</style>