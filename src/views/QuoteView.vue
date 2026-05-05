<script setup lang="ts">
import {computed, onBeforeMount} from "vue";
import QuoteCard from "@/components/AlphaVantage/QuoteCard.vue";
import SelectTickers from "@/components/AlphaVantage/SelectTickers.vue";
import {useAvailableTickersStore} from "@/stores/AlphaVantage/AvailableAssetsStore.ts";
import {useSelectTickersStore} from "@/stores/AlphaVantage/SelectAssetsStore.ts";
import type {SelectOption} from "@/types/SelectOption.ts";
import type TickerInterface from "@/types/TickerInterface.ts";

defineProps<{
  title: string
}>()


const selectTickersStore = useSelectTickersStore()
const availableTickersStore = useAvailableTickersStore()

const selectedTickers = computed(() => {
  return selectTickersStore.selectTickers.filter(ticker => {
    return ticker.selected === true
  }) as SelectOption<TickerInterface>[]
});

const changeStatus = (tickerSelected: SelectOption<TickerInterface>) => {
  selectTickersStore.changeStatus(tickerSelected)
}

function onRemoveQuote(ticker: TickerInterface) {
  const selectedTicker = {label: ticker.companyName, value: ticker, selected: false} as SelectOption<TickerInterface>
  selectTickersStore.changeStatus(selectedTicker)
}

onBeforeMount(async () => {
  await availableTickersStore.fetchAvailableTickers();
  const availableTickers = availableTickersStore.availableTickers
  await selectTickersStore.fetchSelectTickers(availableTickers)
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
      <SelectTickers
          @selected-ticker="changeStatus"/>

    </div>
    <div class="flex-2 grid grid-cols-1 md:grid-cols-2 gap-3">
      <QuoteCard
          v-for="selectedAsset in selectedTickers"
          :key="selectedAsset.value.symbol"
          :ticker-interface="selectedAsset.value"
          @remove-quote="onRemoveQuote"
      />
    </div>

  </div>

</template>
<style scoped>

</style>