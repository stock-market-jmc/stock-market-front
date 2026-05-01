<script setup lang="ts">
import type GlobalQuoteInterface from "@/types/AlphaVantage/GlobalQuoteInterface.ts";

const props = defineProps<{
  symbol: string,
  globalQuote: GlobalQuoteInterface,
  loading: boolean
}>();

const emits = defineEmits<{
  removeQuote: [GlobalQuoteInterface]
}>()
const onClick = () => {
  emits('removeQuote', props.globalQuote)
}
</script>

<template>
  <div
      class="bg-white rounded-lg shadow-md p-4"
      @click="onClick">
    <div v-if="props.loading">Loading...</div>
    <div v-else-if="globalQuote" class="flex flex-col gap-2">
      <h2 class="text-2xl text-center">{{ props.symbol }}</h2>

      <div class="w-full h-0.5 bg-gray-300"></div>
      <p>Open: {{ props.globalQuote.open }}</p>
      <p>High: {{ props.globalQuote.high }}</p>
      <p>Low: {{ props.globalQuote.low }}</p>
      <p>Price: {{ props.globalQuote.price }}</p>

      <p>Volume: {{ props.globalQuote.volume }}</p>

      <p>
        Latest Trading Day:
        {{ props.globalQuote.latestTradingDay }}
      </p>

      <p>Previous Close: {{ props.globalQuote.previousClose }}</p>

      <p>Change: {{ props.globalQuote.change }}</p>
      <p>Change Percent: {{ props.globalQuote.changePercent }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>