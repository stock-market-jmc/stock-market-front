import type TickerInterface from "@/types/TickerInterface.ts";
export default class AvailableAssetsService {

    public async getAvailableAssets(): Promise<TickerInterface[]> {
         return [
             { symbol: 'AAPL', companyName: 'Apple Inc' },
             { symbol: 'MSFT', companyName: 'Microsoft Corporation' },
             { symbol: 'GOOG', companyName: 'Alphabet Class C' },
             { symbol: 'AMZN', companyName: 'Amazon.com Inc' },
             { symbol: 'NVDA', companyName: 'NVIDIA Corporation' },
             { symbol: 'META', companyName: 'Meta Platforms Inc' },
             { symbol: 'TSLA', companyName: 'Tesla Inc' },
             { symbol: 'TM', companyName: 'Toyota Motor Corporation' },
             { symbol: 'XOM', companyName: 'Exxon Mobil Corporation' },
             { symbol: 'SHEL', companyName: 'Shell plc' },
             { symbol: 'JPM', companyName: 'JPMorgan Chase & Co' },
             { symbol: 'GS', companyName: 'Goldman Sachs Group Inc' },
             { symbol: 'V', companyName: 'Visa Inc' },
             { symbol: 'KO', companyName: 'Coca-Cola Company' },
             { symbol: 'PEP', companyName: 'PepsiCo Inc' },
             { symbol: 'WMT', companyName: 'Walmart Inc' },
             { symbol: 'NKE', companyName: 'Nike Inc' },
        ];
    }
}

