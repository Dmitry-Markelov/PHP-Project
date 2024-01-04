import { getToken, getUuid, setToken, setUuid } from "../../Hooks/useToken";
import { Store } from "../Store/Store";
import {
    TUser,
    TError,
    TAutoLogin,
} from "./types";

export default class Server {
    private HOST: string;
    private store: Store;
    private token: string | null;
    private uuid: string | null;

    constructor(HOST: string, store: Store) {
        this.HOST = HOST;
        this.store = store;
        this.token = getToken();
        this.uuid = getUuid();
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
        if (result?.token && result?.uuid) {
            setToken(result.token);
            setUuid(result.uuid);
            this.token = result.token;
            this.store.setUser(result.name, result.token, result.uuid);
            return result;
        }
        return null;
    }
    async autoLogin() {
        const result = await this.request<TAutoLogin>('autoLogin', { token: getToken(), uuid: this.uuid });
        if (result?.newToken) {
            setToken(result.newToken);
            this.token = result.newToken;
            this.store.setUser(result.name, result.newToken, result.uuid);
            return result;
        }
        return result;
    }
    getRndSalt(login: string) {
        return this.request('getRndSalt', { login })
    }
}