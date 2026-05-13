import {defineStore} from "pinia";

import {ref} from "vue";
import type TickerInterface from "@/types/TickerInterface.ts";
import type {SelectOption} from "@/types/SelectOption.ts";

const EMPTY_TICKER = {symbol: '', companyName: 'Select a company'} as TickerInterface
const EMPTY_SELECT_OPTION = {label: 'Select an company', value: EMPTY_TICKER, selected: false} as SelectOption<TickerInterface>


export const useSelectTickersStore = defineStore("selectTickersStore", () => {

    const selectedTicker = ref<SelectOption<TickerInterface>>(EMPTY_SELECT_OPTION)
    const selectTickers = ref<SelectOption<TickerInterface>[]>([]);

    const buildSelectTickers = async (availableTickers: TickerInterface[]) => {
        selectTickers.value = availableTickers.map(ticker => ({
            label: ticker.companyName,
            value: ticker,
            selected: false
        }))
    }

    const changeStatus = (tickerSelected: SelectOption<TickerInterface>) => {
        const option = selectTickers.value.find(
            o => o.value.symbol === tickerSelected.value.symbol
        )

        if (!option) return
        selectedTicker.value = option
        option.selected = !option.selected
    }
    return {selectTickers, buildSelectTickers , changeStatus, selectedTicker};
});