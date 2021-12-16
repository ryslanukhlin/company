export type TErrorMessage = {
    code: number;
    message: string;
};

export interface IUser {
    token: string;
    role: Role;
    user_id: string;
    fullName: string;
    email: string;
}

export interface IUserGetTokenRequest {
    role: Role;
    fullName: string;
    email: string;
}

interface Role {
    name: string;
    slug: string;
}

export type TAuthState = {
    isAuth: boolean;
    user?: IUser;
    errorLogin?: string;
    errorPassword?: string;
    download: boolean;
};

export enum AuthActionEnun {
    AUTH_LOGIN = "AUTH_LOGIN",
    AUTH_ERROR_LOGIN = "AUTH_ERROR",
    AUTH_ERROR_PASSWORD = "AUTH_ERROR_PASSWORD",
    AUTH_CLEAR_MESSAGE = "AUTH_CLEAR_MESSAGE",
    AUTH_SET_DOWNLOAD = "AUTH_SET_DOWNLOAD",
    AUTH_LOGOUT = "AUTH_LOGOUT",
}

export type TAuthLogin = {
    type: AuthActionEnun.AUTH_LOGIN;
    payload: IUser;
};

export type TAuthErrorLogin = {
    type: AuthActionEnun.AUTH_ERROR_LOGIN;
    payload: string;
};

export type TAuthErrorPassword = {
    type: AuthActionEnun.AUTH_ERROR_PASSWORD;
    payload: string;
};

export type TAuthClearMessage = {
    type: AuthActionEnun.AUTH_CLEAR_MESSAGE;
};

export type TAuthSetDonwload = {
    type: AuthActionEnun.AUTH_SET_DOWNLOAD;
    payload: boolean;
};

export type TAuthLogout = {
    type: AuthActionEnun.AUTH_LOGOUT;
};

export type TAuthAction =
    | TAuthLogin
    | TAuthErrorLogin
    | TAuthErrorPassword
    | TAuthClearMessage
    | TAuthSetDonwload
    | TAuthLogout;
