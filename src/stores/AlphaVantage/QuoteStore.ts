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

            if (isCached(ticker)) {
                loadings.value[symbol] = false;
                return quotes.value[symbol];
            }
            const quote = await service.getQuote(ticker);
            quotes.value[symbol] = quote;
            loadings.value[symbol] = false;

            return quote
        }

        const isCached = (ticker: TickerInterface) => {
            const quote = quotes.value[ticker.symbol]

            if (!quote) {
                return false
            }

            if (quote.lastUpdate === 'UNKNOWN') {
                return false
            }

            const fetchedAt = new Date(quote.fetchedAt)

            if (fetchedAt.getTime() < new Date().getTime() - 1000 * 60 * 15) {
                return false
            }

            return true
        }
        return {quotes, loadings, fetchQuote};
    },
    {
        persist: {
            key: 'quote-store',
            storage: localStorage,
            pick: ['quotes'],
        }
    }
);