import type TickerInterface from "@/types/TickerInterface.ts";
import {stockMarket} from "@/api/StockMarket.ts";
import type QuoteInterface from "@/types/FinnHub/QuoteInterface.ts";
import {useAuthStore} from "@/stores/AuthStore.ts";

const QUOTE_API_URL: string = 'stock-market-api/quote/';
export default class QuoteService {
    private getDefaultValue = (ticker: TickerInterface): QuoteInterface => ({
        symbol: ticker.symbol,
        companyName: ticker.companyName,
        currentPrice: 0,
        priceChange: 0,
        changePercent: 0,
        high: 0,
        low: 0,
        open: 0,
        previousClose: 0,
        lastUpdate: 'UNKNOWN',
        fetchedAt: new Date()
    })
    public getQuote: (ticker: TickerInterface) => Promise<QuoteInterface> = async (ticker: TickerInterface) => {

        const url = QUOTE_API_URL + ticker.symbol
        const authStore = useAuthStore()
        try {
            stockMarket.defaults.headers.common['Authorization'] = `Bearer ${authStore.token}`
            const {data} = await stockMarket.get(url)

            if (data.status !== 'SUCCESS') {
                return this.getDefaultValue(ticker)
            }

            const quote = data.quote
            return {
                symbol: quote.symbol,
                companyName: quote.companyName,
                currentPrice: quote.currentPrice,
                priceChange: quote.priceChange,
                changePercent: quote.changePercent,
                high: quote.high,
                low: quote.low,
                open: quote.open,
                previousClose: quote.previousClose,
                lastUpdate: quote.lastUpdate,
                fetchedAt: quote.fetchedAt
            } as QuoteInterface
        } catch (e: unknown) {
            const message = e instanceof Error ? e.message : "Unknown error"
            console.log(message)
            return this.getDefaultValue(ticker)
        }
    }
}

