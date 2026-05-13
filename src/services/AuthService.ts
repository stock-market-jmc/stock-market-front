import {stockMarket} from "@/api/StockMarket.ts";

const LOGIN_URL = 'stock-market-api/login'

interface LoginResponse {
    token: string
}
export default class AuthService {

    async login(email: string, password: string):Promise<LoginResponse>{

        const body = {
            username: email,
            password: password
        }
        const response = await stockMarket.post(LOGIN_URL, body)
        return response.data
    }
}