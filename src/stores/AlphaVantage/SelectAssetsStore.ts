import {defineStore} from "pinia";

import {ref} from "vue";
import type TickerInterface from "@/types/TickerInterface.ts";
import type {SelectOption} from "@/types/SelectOption.ts";

const EMPTY_ASSET = {symbol: '', companyName: 'Select an asset'} as TickerInterface
const EMPTY_SELECT_OPTION = {label: 'Select an asset', value: EMPTY_ASSET, selected: false} as SelectOption<TickerInterface>


export const useSelectAssetsStore = defineStore("selectAssetsStore", () => {

    const selectedAsset = ref<SelectOption<TickerInterface>>(EMPTY_SELECT_OPTION)
    const selectAssets = ref<SelectOption<TickerInterface>[]>([]);

    const fetchSelectAssets = async (availableAssets: TickerInterface[]) => {
        selectAssets.value = availableAssets.map(asset => ({
            label: asset.companyName,
            value: asset,
            selected: false
        }))
    }

    const changeStatus = (assetSelected: SelectOption<TickerInterface>) => {
        const option = selectAssets.value.find(
            o => o.value.symbol === assetSelected.value.symbol
        )

        if (!option) return
        selectedAsset.value = option
        option.selected = !option.selected
    }
    return {selectAssets, fetchSelectAssets, changeStatus, selectedAsset};
});