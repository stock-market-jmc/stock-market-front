<script setup lang="ts">
import { ref} from "vue";
import type AssetInterface from "@/types/AssetInterface.ts";
import GlobalQuoteCard from "@/components/AlphaVantage/GlobalQuoteCard.vue";
import {useQuoteStore} from "@/stores/AlphaVantage/GlobalQuoteStore.ts";
import {storeToRefs} from "pinia";
import type GlobalQuoteInterface from "@/types/AlphaVantage/GlobalQuoteInterface.ts";
import SelectAssets from "@/components/AlphaVantage/SelectAssets.vue";

defineProps<{
  title: string
}>()

const EMPTY_ASSET = {symbol: '', name: 'Select an asset'}

const globalQuoteStore = useQuoteStore()
const selectedSymbols = ref<string[]>([]);

const {quotes, loading} = storeToRefs(globalQuoteStore);

const selectedAsset = ref<AssetInterface>(EMPTY_ASSET)

const onSelect = async (option: AssetInterface) => {

  const symbol = option.symbol;

  const index = selectedSymbols.value.indexOf(symbol);
  if (index !== -1) {
    selectedSymbols.value.splice(index, 1);
    return;
  }

  selectedSymbols.value.push(symbol);
  if (!quotes.value[symbol]) {
    await globalQuoteStore.fetchQuote(option);
  }
};

const removeQuote = (globalQuote: GlobalQuoteInterface) => {
  const symbol = globalQuote.symbol;
  const index = selectedSymbols.value.indexOf(symbol);
  selectedSymbols.value.splice(index, 1);
}

</script>

<template>
  <div class="flex flex-col">

    <h1 class="w-full text-2xl font-semibold text-gray-800 pb-6 text-center">
      {{ title }}
    </h1>

    <div class="flex flex-col md:flex-row gap-6">

      <div class="
        overflow-x-auto overflow-y-visible
        flex flex-row gap-3 flex-nowrap scrollbar-hidden
        md:flex-col md:overflow-visible "
      >
        <SelectAssets
            :selected-asset="selectedAsset"
            @updateOption="onSelect"
        />

      </div>
      <div>
        <GlobalQuoteCard
            v-for="symbol in selectedSymbols"
            :key="symbol"
            :symbol="symbol"
            :global-quote="quotes[symbol]"
            :loading="loading[symbol]"
            @remove-quote="removeQuote"
        />
      </div>

    </div>

  </div>
</template>
<style scoped>

</style>