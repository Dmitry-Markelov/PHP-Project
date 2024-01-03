export class Store {
    private user = {
        name: '',
        isAuth: false,
        token: '',
    }

    setUser(name: string, token: string) {
        this.user.name = name;
        this.user.token = token;
    }

    getUser() {
        return this.user;
    }

    setAuth() {
        this.user.isAuth = true;
    }

    isAuth() {
        return this.user.isAuth;
    }
}