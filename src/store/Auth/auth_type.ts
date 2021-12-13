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

interface Role {
    name: string;
    slug: string;
}

export type TAuthState = {
    isAuth: boolean;
    user?: IUser;
    errorLogin?: string;
    errorPassword?: string;
};

export enum AuthActionEnun {
    AUTH_LOGIN = "AUTH_LOGIN",
    AUTH_ERROR_LOGIN = "AUTH_ERROR",
    AUTH_ERROR_PASSWORD = "AUTH_ERROR_PASSWORD",
    AUTH_CLEAR_MESSAGE = "AUTH_CLEAR_MESSAGE",
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

export type TAuthAction = TAuthLogin | TAuthErrorLogin | TAuthErrorPassword | TAuthClearMessage;
