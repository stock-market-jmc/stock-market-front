import {defineStore} from 'pinia'
import type {OperationInterface} from '@/types/OperationInterface'

const operations: OperationInterface [] = [
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
export const useOperations = defineStore('operations', {
    state: () => ({
        operations: operations,
    }),
    actions: {},
    getters: {
        findByType: (state) => {
            return (type: string) => {
                const normalizedType = type.replace('-', ' ').toUpperCase()
                return state.operations.find(
                    op => op.type.toUpperCase() === normalizedType
                )?? {type: 'Not Found'}
            }
        }
    },
    persist: true
})
