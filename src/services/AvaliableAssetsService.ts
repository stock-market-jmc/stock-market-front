import type AssetInterface from "@/types/AssetInterface.ts";
export default class AvailableAssetsService {

    public async getAvailableAssets(): Promise<AssetInterface[]> {
         return [
            { symbol: 'AAPL', name: 'Apple Inc' },
            { symbol: 'GOOG', name: 'Alphabet Class C' },
        ];
    }
}

