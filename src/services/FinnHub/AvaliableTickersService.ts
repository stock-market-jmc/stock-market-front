import type TickerInterface from "@/types/TickerInterface.ts";
export default class AvailableTickersService {

    public async getAvailableTickers(): Promise<TickerInterface[]> {
         return [
             { symbol: 'GOOG', companyName: 'Alphabet Class C' },
             { symbol: 'AMZN', companyName: 'Amazon.com Inc' },
             { symbol: 'AAPL', companyName: 'Apple Inc' },
             { symbol: 'KO', companyName: 'Coca-Cola Company' },
             { symbol: 'XOM', companyName: 'Exxon Mobil Corporation' },
             { symbol: 'GS', companyName: 'Goldman Sachs Group Inc' },
             { symbol: 'JPM', companyName: 'JPMorgan Chase & Co' },
             { symbol: 'META', companyName: 'Meta Platforms Inc' },
             { symbol: 'MSFT', companyName: 'Microsoft Corporation' },
             { symbol: 'NVDA', companyName: 'NVIDIA Corporation' },
             { symbol: 'NKE', companyName: 'Nike Inc' },
             { symbol: 'PEP', companyName: 'PepsiCo Inc' },
             { symbol: 'SHEL', companyName: 'Shell plc' },
             { symbol: 'TSLA', companyName: 'Tesla Inc' },
             { symbol: 'TM', companyName: 'Toyota Motor Corporation' },
             { symbol: 'V', companyName: 'Visa Inc' },
             { symbol: 'WMT', companyName: 'Walmart Inc' }
         ];
    }
}

