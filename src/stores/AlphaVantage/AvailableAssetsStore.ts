import {defineStore} from "pinia";

import AvailableAssetsService from "@/services/AvaliableAssetsService.ts";
import {ref} from "vue";
import type AssetInterface from "@/types/AssetInterface.ts";

export const useAvailableAssetsStore = defineStore("availableAssets", () => {
    const service = new AvailableAssetsService();

    const availableAssets = ref<AssetInterface[]>([]);
    const fetchAvailableAssets = async () => {
        availableAssets.value = await service.getAvailableAssets();
    }

    const getAssetNameBySymbol = (symbol: string) => {
        const asset = availableAssets.value.find(asset => asset.symbol === symbol)
        return asset?.name ?? 'UNKNOWN'
    }
    return {fetchAvailableAssets, availableAssets, getAssetNameBySymbol};
});