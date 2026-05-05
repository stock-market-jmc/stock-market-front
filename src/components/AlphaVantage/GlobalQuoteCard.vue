<script setup lang="ts">
import type QuoteInterface from "@/types/AlphaVantage/QuoteInterface.ts";
import {computed, onBeforeMount, ref} from "vue";
import {useQuoteStore} from "@/stores/AlphaVantage/GlobalQuoteStore.ts";
import type TickerInterface from "@/types/TickerInterface.ts";
import {storeToRefs} from "pinia";

const props = defineProps<{
  assetInterface: TickerInterface
}>();

const emits = defineEmits<{
  removeQuote: [asset: TickerInterface]
}>()

const globalQuoteStore = useQuoteStore()
const {loadings} = storeToRefs(globalQuoteStore)


const loading = computed(() =>
    loadings.value[props.assetInterface.symbol]
)

const onClick = () => {
  emits('removeQuote', props.assetInterface)
}

const globalQuote = ref<QuoteInterface>()
onBeforeMount(async () => {
  globalQuote.value = await globalQuoteStore.fetchQuote(props.assetInterface)
})

</script>

<template>
  <div
      class="bg-white rounded-lg shadow-md p-4"
      @click="onClick">
    <div v-if="loading">Loading...</div>
    <div v-else-if="globalQuote" class="flex flex-col gap-2">
      <div class="text-2xl flex justify-between">
        <h2>{{ assetInterface.companyName }}</h2>
        <h2>{{ assetInterface.symbol }}</h2>
      </div>


      <div class="w-full h-0.5 bg-gray-300"></div>

      <p>Current price: {{ globalQuote.currentPrice }}</p>
      <p>Price change: {{ globalQuote.priceChange }}</p>
      <p>Change Percent: {{ globalQuote.changePercent }}</p>
      <p>High: {{ globalQuote.high }}</p>
      <p>Low: {{ globalQuote.low }}</p>
      <p>Open: {{ globalQuote.open }}</p>
      <p>Previous Close: {{ globalQuote.previousClose }}</p>
      <p>Last Update: {{ globalQuote.lastUpdate }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>