<script setup lang="ts">
import {computed, onBeforeMount} from "vue";
import QuoteCard from "@/components/FinnHub/QuoteCard.vue";
import SelectTickers from "@/components/FinnHub/SelectTickers.vue";
import {useAvailableTickersStore} from "@/stores/FinnHub/AvailableAssetsStore.ts";
import {useSelectTickersStore} from "@/stores/FinnHub/SelectTickersStore.ts";
import type {SelectOption} from "@/types/SelectOption.ts";
import type TickerInterface from "@/types/TickerInterface.ts";
import {useQuoteStore} from "@/stores/FinnHub/QuoteStore.ts";

defineProps<{
  title: string
}>()


const selectTickersStore = useSelectTickersStore()
const availableTickersStore = useAvailableTickersStore()
const quoteStore = useQuoteStore()

const orderedQuotes = computed(() => {
  return quoteStore.orderedQuotes as TickerInterface[]
})

const changeStatus = (tickerSelected: SelectOption<TickerInterface>) => {
  selectTickersStore.changeStatus(tickerSelected)
  if(tickerSelected.selected) {
    quoteStore.addToOrder(tickerSelected.value)
  }else {
    quoteStore.removeFromOrder(tickerSelected.value)
  }
}

function onRemoveQuote(ticker: TickerInterface) {
  const selectedTicker = {label: ticker.companyName, value: ticker, selected: false} as SelectOption<TickerInterface>
  quoteStore.removeFromOrder(ticker)
  selectTickersStore.changeStatus(selectedTicker)
}

onBeforeMount(async () => {
  await availableTickersStore.fetchAvailableTickers();
  const availableTickers = availableTickersStore.availableTickers
  await selectTickersStore.buildSelectTickers(availableTickers)
})
</script>

<template>
  <div class="flex flex-col gap-4
      md:flex-row md:gap-6">

    <div class="
        flex flex-row gap-3 flex-nowrap flex-1
        sticky top-16 self-start"
    >
      <SelectTickers
          @selected-ticker="changeStatus"/>

    </div>
    <div class="flex-2 grid grid-cols-1 md:grid-cols-2 gap-3">
      <QuoteCard
          v-for="quote in orderedQuotes"
          :key="quote.symbol"
          :ticker-interface="quote"
          @remove-quote="onRemoveQuote"
      />
    </div>

  </div>

</template>
<style scoped>

</style>