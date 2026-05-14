import {defineStore} from 'pinia'
import type {HomeOptionInterface} from "@/types/HomeOptionInterface.ts";
export const useHomeOptionsStore = defineStore('homeOptionsStore', () => {

    const homeOptions: HomeOptionInterface[]= [
        {slug: 'operations', name: 'Operations', description: 'Find different operations in FinnHub API'},
    ]

    return {
        homeOptions
    }
})
