<script setup lang="ts">
import {computed, onBeforeMount} from "vue";
import GlobalQuoteCard from "@/components/AlphaVantage/GlobalQuoteCard.vue";
import SelectAssets from "@/components/AlphaVantage/SelectAssets.vue";
import {useAvailableAssetsStore} from "@/stores/AlphaVantage/AvailableAssetsStore.ts";
import {useSelectAssetsStore} from "@/stores/AlphaVantage/SelectAssetsStore.ts";
import type {SelectOption} from "@/types/SelectOption.ts";
import type TickerInterface from "@/types/TickerInterface.ts";

defineProps<{
  title: string
}>()


const selectAssetsStore = useSelectAssetsStore()
const availableAssetsStore = useAvailableAssetsStore()

const selectedAssets = computed(() => {
  return selectAssetsStore.selectAssets.filter(asset => {
    return asset.selected === true
  }) as SelectOption<TickerInterface>[]
});

const changeStatus = (assetSelected: SelectOption<TickerInterface>) => {
  selectAssetsStore.changeStatus(assetSelected)
}

function onRemoveQuote(asset: TickerInterface) {
  const selectedAsset = {label: asset.companyName, value: asset, selected: false} as SelectOption<TickerInterface>
  selectAssetsStore.changeStatus(selectedAsset)
}

onBeforeMount(async () => {
  await availableAssetsStore.fetchAvailableAssets();
  const availableAssets = availableAssetsStore.availableAssets
  await selectAssetsStore.fetchSelectAssets(availableAssets)
})
</script>

<template>
  <div class="flex flex-col gap-4
      md:flex-row md:gap-6">

    <div class="
        flex flex-row gap-3 flex-nowrap flex-1
        sticky top-2 self-start
        md:top-6"
    >
      <SelectAssets
          @selected-asset="changeStatus"/>

    </div>
    <div class="flex-2 grid grid-cols-1 md:grid-cols-2 gap-3">
      <GlobalQuoteCard
          v-for="selectedAsset in selectedAssets"
          :key="selectedAsset.value.symbol"
          :asset-interface="selectedAsset.value"
          @remove-quote="onRemoveQuote"
      />
    </div>

  </div>

</template>
<style scoped>

</style>