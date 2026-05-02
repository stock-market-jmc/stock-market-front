import {defineStore} from 'pinia'
import type {OperationInterface} from '@/types/OperationInterface'
import GlobalQuoteView from "@/views/GlobalQuoteView.vue";

const operationsList: OperationInterface[] = [
    {slug: 'intraday', name: 'Intraday'},
    {slug: 'daily', name: 'Daily'},
    {slug: 'daily-adjusted', name: 'Daily Adjusted'},
    {slug: 'weekly', name: 'Weekly'},
    {slug: 'weekly-adjusted', name: 'Weekly Adjusted'},
    {slug: 'monthly', name: 'Monthly'},
    {slug: 'monthly-adjusted', name: 'Monthly Adjusted'},
    {slug: 'global-quote', name: 'Global Quote', component: GlobalQuoteView},
    {slug: 'market-status', name: 'Market Status'}
]
export const useOperations = defineStore('operationsStore', () => {

    const operations: OperationInterface[] = operationsList

    const findBySlug = (slug: string): OperationInterface => {

        return operations.find(
            op => op.slug === slug
        ) ?? {slug: 'not-found', name: 'Not Found'}
    }

    return {
        operations,
        findBySlug
    }
})
