import {defineStore} from "pinia";
import GlobalQuoteService from "@/services/GlobalQuoteService.ts";
import {ref} from "vue";
import type GlobalQuoteInterface from "@/types/AlphaVantage/GlobalQuoteInterface.ts";
import type AssetInterface from "@/types/AssetInterface.ts";

export const useQuoteStore = defineStore("quote", () => {
    const service = new GlobalQuoteService();

    const quotes = ref<Record<string, GlobalQuoteInterface>>({});
    const loading = ref<Record<string, boolean>>({});

    const fetchQuote = async (asset: AssetInterface) => {
        const symbol = asset.symbol;

        loading.value[symbol] = true;

        const quote = await service.getGlobalQuote(asset);
        quotes.value[symbol] = quote;
        loading.value[symbol] = false;
    }
    return {quotes, loading, fetchQuote};
});