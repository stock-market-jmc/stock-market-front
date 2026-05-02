<script setup lang="ts">
import type GlobalQuoteInterface from "@/types/AlphaVantage/GlobalQuoteInterface.ts";
import {computed, onBeforeMount, ref} from "vue";
import {useQuoteStore} from "@/stores/AlphaVantage/GlobalQuoteStore.ts";
import type AssetInterface from "@/types/AssetInterface.ts";
import {storeToRefs} from "pinia";

const props = defineProps<{
  assetInterface: AssetInterface
}>();

const emits = defineEmits<{
  removeQuote: [asset: AssetInterface]
}>()

const globalQuoteStore = useQuoteStore()
const {loadings} = storeToRefs(globalQuoteStore)


const loading = computed(() =>
    loadings.value[props.assetInterface.symbol]
)

const onClick = () => {
  emits('removeQuote', props.assetInterface)
}

const globalQuote = ref<GlobalQuoteInterface>()
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
        <h2>{{ assetInterface.name }}</h2>
        <h2>{{ assetInterface.symbol }}</h2>
      </div>


      <div class="w-full h-0.5 bg-gray-300"></div>
      <p>Open: {{ globalQuote.open }}</p>
      <p>High: {{ globalQuote.high }}</p>
      <p>Low: {{ globalQuote.low }}</p>
      <p>Price: {{ globalQuote.price }}</p>

      <p>Volume: {{ globalQuote.volume }}</p>

      <p>
        Latest Trading Day:
        {{ globalQuote.latestTradingDay }}
      </p>

      <p>Previous Close: {{ globalQuote.previousClose }}</p>

      <p>Change: {{ globalQuote.change }}</p>
      <p>Change Percent: {{ globalQuote.changePercent }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>