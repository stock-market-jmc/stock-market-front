<script setup lang="ts">

import SelectGeneric from "@/components/common/SelectGeneric.vue";
import {computed, onBeforeMount} from "vue";
import {storeToRefs} from "pinia";
import {useAvailableAssetsStore} from "@/stores/AlphaVantage/AvailableAssetsStore.ts";
import type AssetInterface from "@/types/AssetInterface.ts";

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
  console.log('SelectAssets',asset)
  emit('updateOption', asset)
}

</script>

<template>

  <SelectGeneric
      :selected-option="selectedAsset.name"
      :options="assetsNames"
      @updateOption="updateOption"
  />
</template>

<style scoped>

</style>