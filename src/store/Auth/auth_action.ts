import { Dispatch } from "react";
import { SERVER_URI } from "../../config";
import { clearMessage, errorLogin, errorPassword, login } from "./auth_reducer";
import { IUser, TAuthAction, TErrorMessage } from "./auth_type";

export const loginRequest = (email: string, password: string) => {
    return async (dispatch: Dispatch<TAuthAction>) => {
        dispatch(clearMessage());
        const request = await fetch(SERVER_URI + "/auth/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data: TErrorMessage | IUser = await request.json();

        console.log(data);

        if ((data as TErrorMessage).code) {
            (data as TErrorMessage).message[0] === "P"
                ? dispatch(errorPassword((data as TErrorMessage).message))
                : dispatch(errorLogin((data as TErrorMessage).message));
        } else {
            dispatch(login(data as IUser));
        }
    };
};
