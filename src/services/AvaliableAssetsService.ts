import type AssetInterface from "@/types/AssetInterface.ts";
export default class AvailableAssetsService {

    public async getAvailableAssets(): Promise<AssetInterface[]> {
         return [
             { symbol: 'AAPL', name: 'Apple Inc' },
             { symbol: 'MSFT', name: 'Microsoft Corporation' },
             { symbol: 'GOOG', name: 'Alphabet Class C' },
             { symbol: 'AMZN', name: 'Amazon.com Inc' },
             { symbol: 'NVDA', name: 'NVIDIA Corporation' },
             { symbol: 'META', name: 'Meta Platforms Inc' },
             { symbol: 'TSLA', name: 'Tesla Inc' },
             { symbol: 'TM', name: 'Toyota Motor Corporation' },
             { symbol: 'XOM', name: 'Exxon Mobil Corporation' },
             { symbol: 'SHEL', name: 'Shell plc' },
             { symbol: 'JPM', name: 'JPMorgan Chase & Co' },
             { symbol: 'GS', name: 'Goldman Sachs Group Inc' },
             { symbol: 'V', name: 'Visa Inc' },
             { symbol: 'KO', name: 'Coca-Cola Company' },
             { symbol: 'PEP', name: 'PepsiCo Inc' },
             { symbol: 'WMT', name: 'Walmart Inc' },
             { symbol: 'NKE', name: 'Nike Inc' },

            // Spain
             { symbol: 'ITX.MC', name: 'Inditex' },
             { symbol: 'SAN.MC', name: 'Banco Santander' },
             { symbol: 'BBVA.MC', name: 'BBVA' },
             { symbol: 'IBE.MC', name: 'Iberdrola' },
        ];
    }
}

