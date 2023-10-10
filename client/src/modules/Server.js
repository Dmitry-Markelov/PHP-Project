export default class Server {
    constructor(HOST) {
        this.HOST = HOST;
    }

    async request() {
        try {
            const str = Object.keys(params)
                .map(key => `${key}=${params[key]}`)
                .join('&');
                const res = await fetch(`${this.HOST}/?method=${mthod}&${str}`);
                const answer = await res.json();
                if (answer.result === 'ok') {
                    return answer.data;
                }
                //error
                return null;
        } catch(e) {
            return null
        }
        function login() {
            return this.request('login', { login, password })
        }
    }
}