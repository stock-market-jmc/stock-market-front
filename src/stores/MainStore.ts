import {defineStore} from 'pinia'
import {ref} from "vue";
export const useMainStore = defineStore('mainStore', () => {

    const pageTitle = ref('Unknown')

    const setPageTitle = (title: string) => {
        pageTitle.value = title
    }

    return {pageTitle, setPageTitle}

})
