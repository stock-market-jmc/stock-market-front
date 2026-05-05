import type TickerInterface from "@/types/TickerInterface.ts";
import {alphaVantageApi} from "@/api/AlphaVantageApi.ts";
import type QuoteInterface from "@/types/AlphaVantage/QuoteInterface.ts";

const QUOTE_API_URL: string = 'stocks-market-api/quote/';
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
        try {
            const {data} = await alphaVantageApi.get(url)

            if (data.status !== 'SUCCESS' && data.status !== 'UPDATE') {
                return this.getDefaultValue(ticker)
            }

            const quote = data.quote
            return {
                symbol: quote.symbol,
                companyName: quote.company_name,
                currentPrice: quote.current_price,
                priceChange: quote.price_change,
                changePercent: quote.change_percent,
                high: quote.high,
                low: quote.low,
                open: quote.open,
                previousClose: quote.previous_close,
                lastUpdate: quote.last_update,
                fetchedAt: new Date()
            } as QuoteInterface
        } catch (e: unknown) {
            const message = e instanceof Error ? e.message : "Unknown error"
            console.log(message)
            return this.getDefaultValue(ticker)
        }
    }
}

