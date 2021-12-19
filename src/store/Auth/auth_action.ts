import { Dispatch } from 'react';
import { SERVER_URI } from '../../config';
import { clearMessage, errorLogin, errorPassword, login, setDownloadAuth } from './auth_reducer';
import { IUser, IUserGetTokenRequest, TAuthAction, TErrorMessage } from './auth_type';

export const loginRequest = (email: string, password: string, check: boolean) => {
    return async (dispatch: Dispatch<TAuthAction>) => {
        dispatch(clearMessage());
        const request = await fetch(SERVER_URI + '/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data: TErrorMessage | IUser = await request.json();

        if ((data as TErrorMessage).code) {
            (data as TErrorMessage).message[0] === 'P'
                ? dispatch(errorPassword((data as TErrorMessage).message))
                : dispatch(errorLogin((data as TErrorMessage).message));
        } else {
            if (check) {
                localStorage.setItem('user_id', (data as IUser).user_id);
                localStorage.setItem('token', (data as IUser).token);
            }
            dispatch(login(data as IUser));
        }
    };
};

export const getUser = (user_id: string, token: string) => {
    return async (dispatch: Dispatch<TAuthAction>) => {
        dispatch(setDownloadAuth(true));
        const request = await fetch(SERVER_URI + '/user/' + user_id, {
            method: 'get',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });

        const data: IUserGetTokenRequest = await request.json();
        if (request.status === 200) {
            dispatch(login({ ...data, token, user_id }));
        }
        dispatch(setDownloadAuth(false));
    };
};
