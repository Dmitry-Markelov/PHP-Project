const TOKEN_KEY = 'token';
const UUID_KEY = 'uuid';

const setToken = (token: string) => {
    localStorage.setItem(
        TOKEN_KEY,
        token
    );
}

const setUuid = (uuid: string) => {
    localStorage.setItem(
        UUID_KEY,
        uuid
    )
}

const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
}

const removeUuid = () => {
    localStorage.removeItem(UUID_KEY);
}

const getToken = () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) return token;
    return null;
}

const getUuid = () => {
    const uuid = localStorage.getItem(UUID_KEY);
    if (uuid) return uuid;
    return null;
}

export { setToken, setUuid, removeToken, removeUuid, getToken, getUuid }