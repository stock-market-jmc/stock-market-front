import {defineStore} from "pinia";

import {ref} from "vue";
import type AssetInterface from "@/types/AssetInterface.ts";
import type {SelectOption} from "@/types/SelectOption.ts";

const EMPTY_ASSET = {symbol: '', name: 'Select an asset'} as AssetInterface
const EMPTY_SELECT_OPTION = {label: 'Select an asset', value: EMPTY_ASSET, selected: false} as SelectOption<AssetInterface>


export const useSelectAssetsStore = defineStore("selectAssets", () => {

    const selectedAsset = ref<SelectOption<AssetInterface>>(EMPTY_SELECT_OPTION)
    const selectAssets = ref<SelectOption<AssetInterface>[]>([]);

    const fetchSelectAssets = async (availableAssets: AssetInterface[]) => {
        selectAssets.value = availableAssets.map(asset => ({
            label: asset.name,
            value: asset,
            selected: false
        }))
    }

    const changeStatus = (assetSelected: SelectOption<AssetInterface>) => {
        const option = selectAssets.value.find(
            o => o.value.symbol === assetSelected.value.symbol
        )

        if (!option) return
        selectedAsset.value = option
        option.selected = !option.selected
    }
    return {selectAssets, fetchSelectAssets, changeStatus, selectedAsset};
});