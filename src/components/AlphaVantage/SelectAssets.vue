<script setup lang="ts">

import SelectGeneric from "@/components/common/SelectGeneric.vue";
import {ref} from "vue";
import {storeToRefs} from "pinia";
import type AssetInterface from "@/types/AssetInterface.ts";
import CheckGeneric from "@/components/common/CheckGenerick.vue";
import type {SelectOption} from "@/types/SelectOption.ts";
import {useSelectAssetsStore} from "@/stores/AlphaVantage/SelectAssetsStore.ts";

const emit = defineEmits<{
  'selectedAsset': [ SelectOption<AssetInterface>]
}>()

const selectAssetsStore = useSelectAssetsStore()

const {selectAssets, selectedAsset} = storeToRefs(selectAssetsStore)
const onSelectOption = (selectedAsset: SelectOption<AssetInterface>) => {
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
      <CheckGeneric
          label="Close on select"
          type="space-between"
          @clicked="onClick"
      />
    </div>
  </SelectGeneric>
</template>

<style scoped>

</style>