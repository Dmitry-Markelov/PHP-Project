export class Store {
    private user = {
        name: '',
        isAuth: false,
        token: '',
        uuid: '',
    }

    setUser(name: string, token: string, uuid: string) {
        this.user.name = name;
        this.user.token = token;
        this.user.uuid = uuid;
        this.user.isAuth = true;
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

    isAuthLogOut() {
        this.user.isAuth = false;
    }
}