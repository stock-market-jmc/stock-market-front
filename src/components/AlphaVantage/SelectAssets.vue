<script setup lang="ts">

import SelectGeneric from "@/components/common/SelectGeneric.vue";
import {computed, onBeforeMount, ref} from "vue";
import {storeToRefs} from "pinia";
import {useAvailableAssetsStore} from "@/stores/AlphaVantage/AvailableAssetsStore.ts";
import type AssetInterface from "@/types/AssetInterface.ts";
import CheckGeneric from "@/components/common/CheckGenerick.vue";

defineProps<{
  selectedAsset: AssetInterface
}>()

const emit = defineEmits<{
  'updateOption': [AssetInterface]
}>()

const availableAssetsStore = useAvailableAssetsStore()
const {availableAssets} = storeToRefs(availableAssetsStore);

const assetsNames = computed(() => availableAssets.value.map(asset => asset.name))

const buildAssetFromName = (name: string): AssetInterface => {

  const asset = availableAssets.value.find(asset => asset.name === name)
  return asset ?? {symbol: 'UNKNOWN', name: name}
}

onBeforeMount(() => {
      availableAssetsStore.fetchAvailableAssets()
    }
)

const updateOption = (selectedOption: string) => {
  const asset = buildAssetFromName(selectedOption)
  emit('updateOption', asset)
}

const closeOnClick = ref(true)

const onClick = (clicked: boolean) => {
  closeOnClick.value = clicked
}
</script>

<template>

  <SelectGeneric
      :selected-option="selectedAsset.name"
      :options="assetsNames"
      @updateOption="updateOption"
      :close-onclick="closeOnClick"
      @closeOnClick="onClick"
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