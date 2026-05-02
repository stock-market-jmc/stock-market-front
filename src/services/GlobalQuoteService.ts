import type AssetInterface from "@/types/AssetInterface.ts";
import {alphaVantageApi} from "@/api/AlphaVantageApi.ts";
import type GlobalQuoteInterface from "@/types/AlphaVantage/GlobalQuoteInterface.ts";

const GLOBAL_QUOTE_API_URL: string = 'stocks-market-api/global-quote/';
export default class GlobalQuoteService {
    private getDefaultValue = (symbol: string): GlobalQuoteInterface => ({
        symbol,
        open: 0,
        high: 0,
        low: 0,
        price: 0,
        volume: 0,
        latestTradingDay: '',
        previousClose: 0,
        change: 0,
        changePercent: 0,
    })
    public getGlobalQuote: (option: AssetInterface) => Promise<GlobalQuoteInterface> = async (option: AssetInterface) => {

        const url = GLOBAL_QUOTE_API_URL + option.symbol
        try {
            const {data} = await alphaVantageApi.get(url)

            if (data.status !== 'SUCCESS') {
                console.log(data)
                return this.getDefaultValue(option.symbol)
            }

            const globalQuote = data.globalQuote
            return {
                symbol: globalQuote.symbol,
                open: globalQuote.open,
                high: globalQuote.high,
                low: globalQuote.low,
                price: globalQuote.price,
                volume: globalQuote.volume,
                latestTradingDay: globalQuote.latestTradingDay,
                previousClose: globalQuote.previousClose,
                change: globalQuote.change,
                changePercent: globalQuote.changePercent,
            } as GlobalQuoteInterface
        } catch (e: unknown) {
            const message = e instanceof Error ? e.message : "Unknown error"
            console.log(message)
            return this.getDefaultValue(option.symbol)
        }
    }
}

