import {
    AuthActionEnun,
    IUser,
    TAuthAction,
    TAuthClearMessage,
    TAuthErrorLogin,
    TAuthErrorPassword,
    TAuthLogin,
    TAuthState,
} from "./auth_type";

const authState: TAuthState = {
    isAuth: true,
};

const authReducer = (state: TAuthState = authState, action: TAuthAction): TAuthState => {
    switch (action.type) {
        case AuthActionEnun.AUTH_LOGIN:
            return {
                isAuth: true,
                user: action.payload,
                errorLogin: undefined,
                errorPassword: undefined,
            };
        case AuthActionEnun.AUTH_ERROR_LOGIN:
            return { ...state, errorLogin: action.payload };
        case AuthActionEnun.AUTH_ERROR_PASSWORD:
            return { ...state, errorPassword: action.payload };
        case AuthActionEnun.AUTH_CLEAR_MESSAGE:
            return { ...state, errorPassword: undefined, errorLogin: undefined };
        default:
            return state;
    }
};

export default authReducer;

export const login = (user: IUser): TAuthLogin => ({
    type: AuthActionEnun.AUTH_LOGIN,
    payload: user,
});

export const errorLogin = (error: string): TAuthErrorLogin => ({
    type: AuthActionEnun.AUTH_ERROR_LOGIN,
    payload: error,
});

export const errorPassword = (error: string): TAuthErrorPassword => ({
    type: AuthActionEnun.AUTH_ERROR_PASSWORD,
    payload: error,
});

export const clearMessage = (): TAuthClearMessage => ({
    type: AuthActionEnun.AUTH_CLEAR_MESSAGE,
});
