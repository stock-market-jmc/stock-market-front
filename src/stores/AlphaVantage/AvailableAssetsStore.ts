import {defineStore} from "pinia";

import AvailableTickersService from "@/services/AvaliableTickersService.ts";
import {ref} from "vue";
import type TickerInterface from "@/types/TickerInterface.ts";

export const useAvailableTickersStore = defineStore("availableAssetsStore", () => {
    const service = new AvailableTickersService();

    const availableTickers = ref<TickerInterface[]>([]);
    const fetchAvailableAssets = async () => {
        availableTickers.value = await service.getAvailableTickers();
    }

    return {fetchAvailableTickers: fetchAvailableAssets, availableTickers};
});