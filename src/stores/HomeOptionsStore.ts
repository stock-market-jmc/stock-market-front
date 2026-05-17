import {defineStore} from 'pinia'
import type {HomeOptionInterface} from "@/types/HomeOptionInterface.ts";

export const useHomeOptionsStore = defineStore('homeOptionsStore', () => {

    const homeOptions: HomeOptionInterface[]= [
        {slug: 'operations', name: 'Operations', description: 'Find different operations in FinnHub API'},
        {slug: 'investments', name: 'Investments', description: 'Track your earnings and losses'},
        {slug: 'profile', name: 'Profile', description: 'Manage your personal information and account settings'}
    ]

    return {
        homeOptions
    }
})
