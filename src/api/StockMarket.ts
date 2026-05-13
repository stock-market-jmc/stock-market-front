import axios from "axios";

export const stockMarket = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

