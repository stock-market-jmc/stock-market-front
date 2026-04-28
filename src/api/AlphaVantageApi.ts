import axios from "axios";

export const alphaVantageApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL+'stocks-market-api/global-quote/'
})

