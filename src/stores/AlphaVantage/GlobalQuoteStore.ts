import {defineStore} from "pinia";
import QuoteService from "@/services/QuoteService.ts";
import {ref} from "vue";
import type QuoteInterface from "@/types/AlphaVantage/QuoteInterface.ts";
import type TickerInterface from "@/types/TickerInterface.ts";

export const useQuoteStore = defineStore("quoteStore", () => {
    const service = new QuoteService();

    const quotes = ref<Record<string, QuoteInterface>>({});
    const loadings = ref<Record<string, boolean>>({});

    const fetchQuote = async (ticker: TickerInterface) => {
        const symbol = ticker.symbol;

        loadings.value[symbol] = true;

        if (quotes.value[symbol]) {
            loadings.value[symbol] = false;
            return quotes.value[symbol];
        }
        const quote = await service.getQuote(ticker);
        quotes.value[symbol] = quote;
        loadings.value[symbol] = false;

        return quote
    }
    return {quotes, loadings, fetchQuote};
});