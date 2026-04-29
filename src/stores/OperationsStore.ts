import {defineStore} from 'pinia'
import type {OperationInterface} from '@/types/OperationInterface'
import {ref} from "vue";

const operationsList: OperationInterface [] = [
    {type: 'Intraday'},
    {type: 'Daily'},
    {type: 'Daily Adjusted'},
    {type: 'Weekly'},
    {type: 'Weekly Adjusted'},
    {type: 'Monthly'},
    {type: 'Monthly Adjusted'},
    {type: 'Global Quote'},
    {type: 'Market Status'}
]
export const useOperations = defineStore('operations', () => {

    const operations = ref<OperationInterface[]>(operationsList)

    const findByType = (type: string): OperationInterface => {
        const normalizedType = type.replace('-', ' ').toUpperCase()

        return operations.value.find(
            op => op.type.toUpperCase() === normalizedType
        ) ?? { type: 'Not Found' }
    }

    return {
        operations,
        findByType
    }
})
