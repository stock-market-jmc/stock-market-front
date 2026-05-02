import {defineStore} from "pinia";

import AvailableAssetsService from "@/services/AvaliableAssetsService.ts";
import {ref} from "vue";
import type AssetInterface from "@/types/AssetInterface.ts";

export const useAvailableAssetsStore = defineStore("availableAssetsStore", () => {
    const service = new AvailableAssetsService();

    const availableAssets = ref<AssetInterface[]>([]);
    const fetchAvailableAssets = async () => {
        availableAssets.value = await service.getAvailableAssets();
    }

    return {fetchAvailableAssets, availableAssets};
});