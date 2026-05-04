import {defineStore} from 'pinia'
import type {OperationInterface} from '@/types/OperationInterface'
import {VALID_OPERATIONS} from "@/constants/operations.ts";

export const useOperations = defineStore('operationsStore', () => {

    const operations: OperationInterface[] = VALID_OPERATIONS

    const findBySlug = (slug: string): OperationInterface => {

        return VALID_OPERATIONS.find(
            op => op.slug === slug
        ) ?? {slug: 'not-found', name: 'Not Found'}
    }

    return {
        operations,
        findBySlug
    }
})
