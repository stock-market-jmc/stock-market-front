import {defineStore} from "pinia";
import QuoteService from "@/services/FinnHub/QuoteService.ts";
import {ref} from "vue";
import type QuoteInterface from "@/types/FinnHub/QuoteInterface.ts";
import type TickerInterface from "@/types/TickerInterface.ts";

export const useQuoteStore = defineStore("quoteStore", () => {
        const service = new QuoteService();

        const quotes = ref<Record<string, QuoteInterface>>({});
        const loadings = ref<Record<string, boolean>>({});

        const orderedQuotes = ref<TickerInterface[]>([]);

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

            return fetchedAt.getTime() >= new Date().getTime() - 1000 * 60 * 15;

        }

        const addToOrder = (ticker: TickerInterface) => {
            if (!orderedQuotes.value.includes(ticker)) {
                orderedQuotes.value.push(ticker);
            }
        };

        const removeFromOrder = (ticker: TickerInterface) => {
            orderedQuotes.value = orderedQuotes.value.filter(sym => sym !== ticker);
        };
        return {quotes, loadings, fetchQuote, addToOrder, removeFromOrder, orderedQuotes};
    },
    {
        persist: {
            key: 'quote-store',
            storage: localStorage,
            pick: ['quotes', 'orderedQuotes'],
        }
    }
);