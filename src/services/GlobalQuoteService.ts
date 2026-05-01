import type AssetInterface from "@/types/AssetInterface.ts";
import {alphaVantageApi} from "@/api/AlphaVantageApi.ts";
import type GlobalQuoteInterface from "@/types/AlphaVantage/GlobalQuoteInterface.ts";

const GLOBAL_QUOTE_API_URL: string = 'stocks-market-api/global-quote/';
export default class GlobalQuoteService {

    public getGlobalQuote: (option: AssetInterface) => Promise<GlobalQuoteInterface> = async (option: AssetInterface) => {

        const url = GLOBAL_QUOTE_API_URL + option.symbol
        try {
            const {data} = await alphaVantageApi.get(url)

            if (data.status !== 'SUCCESS') {
                throw new Error(data.status)
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
            alert(message)
            throw new Error(message)
        }
    }
}

