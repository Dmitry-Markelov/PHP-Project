import {
    TUser,
    TError,
} from "./types";

export default class Server {
    private HOST: string;

    constructor(HOST: string) {
        this.HOST = HOST;
    }

    async request<T>(method: string, params: any = {}): Promise<T | null> {
        try {
            const str = Object.keys(params)
                .map(key => `${key}=${params[key]}`)
                .join('&');
            const res = await fetch(`${this.HOST}/?method=${method}&${str}`);
            const answer = await res.json();
            if (answer.result === 'ok') {
                return answer.data;
            }
            //error
            return null;
        } catch(e) {
            return null
        }
    }
    async login(login: string, hash: string): Promise<TUser | null> {
        const result = await this.request<TUser>('login', { login, hash });
        if (result) {
            return result;
        }
        return null;
    }
    getRndSalt(login: string) {
        return this.request('getRndSalt', { login })
    }
}