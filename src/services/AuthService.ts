import {stockMarket} from "@/api/StockMarket.ts";
import type UserInterface from "@/types/UserInterface.ts";
import {jwtDecode} from "jwt-decode";

const LOGIN_URL = 'stock-market-api/login'

interface LoginResponse {
    token: string
}

interface DecodedToken {
    exp: number;
    iat: number;
    roles: string[];
    username: string;
}
export default class AuthService {

    async login(email: string, password: string):Promise<LoginResponse>{

        const body = {
            username: email,
            password: password
        }
        try {
        const response = await stockMarket.post(LOGIN_URL, body)
        return response.data
        } catch (e: unknown) {
            console.log(e)
            return {token: ''}
        }
    }

    getUser(token: string): UserInterface {

        try {
            const decodedToken: DecodedToken = jwtDecode(token)
            const expirationDate = decodedToken.exp * 1000
            const issuedDate = decodedToken.iat
            const email = decodedToken.username
            const roles = decodedToken.roles

            return {expirationDate, issuedDate, email, roles}
        } catch (e: unknown) {
            console.log(e)
            return this.getDefaultUser()
        }
    }

    getDefaultUser(): UserInterface {
        return {
            expirationDate: 0,
            issuedDate: 0,
            email: '',
            roles: []
        }
    }
}