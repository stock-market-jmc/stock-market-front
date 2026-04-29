<script setup lang="ts">
import type GlobalQuoteInterface from "@/types/AlphaVantage/GlobalQuoteInterface.ts";

const props = defineProps<{
  symbol: string,
  globalQuote: GlobalQuoteInterface,
  loading: boolean
}>();

const emits = defineEmits<{
  clicked: [GlobalQuoteInterface]
}>()
const onClick = () => {
  emits('clicked', props.globalQuote)
}
</script>

<template>
  <div
      class="p-4 bg-white rounded-lg shadow-md"
      @click="onClick">
    <div v-if="props.loading">Loading...</div>
    <div v-else>
      <h2>{{ props.symbol }}</h2>

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