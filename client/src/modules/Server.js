export default class Server {
    constructor(HOST) {
        this.HOST = HOST;
    }

    async request(method, params) {
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
            return false;
        } catch(e) {
            return null
        }
    }
    login(login, hash) {
        return this.request('login', { login, hash })
    }
    getRndSalt(login) {
        return this.request('getRndSalt', { login })
    }
}