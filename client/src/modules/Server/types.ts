export type TError = {
    code: number;
    text: string;
}

export type TUser = {
    name: string;
    token: string;
    uuid: string;
}

export type TAutoLogin = {
    name: string;
    newToken: string;
    uuid: string;
}

export type TPlayer = {
    name: string;
    score: number;
    factor?: number;
}

export type TPlayers = TPlayer[];

export type TGetScene = {
    myScore: number;
    player: TPlayer;
    players: TPlayer[];
}