import {defineStore} from "pinia";

import AvailableAssetsService from "@/services/AvaliableAssetsService.ts";
import {ref} from "vue";
import type TickerInterface from "@/types/TickerInterface.ts";

export const useAvailableAssetsStore = defineStore("availableAssetsStore", () => {
    const service = new AvailableAssetsService();

    const availableAssets = ref<TickerInterface[]>([]);
    const fetchAvailableAssets = async () => {
        availableAssets.value = await service.getAvailableAssets();
    }

    return {fetchAvailableAssets, availableAssets};
});