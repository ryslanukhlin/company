import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/auth_reducer";

const combineReducer = combineReducers({
    authReducer,
});

export type TRootState = ReturnType<typeof combineReducer>;

const enhancers: Array<any> = [];

if (process.env.NODE_ENV === "development") {
    const devToolsExtension =
        ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
        compose;
    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension);
    }
}

const composedEnhancers = compose(applyMiddleware(thunk), ...enhancers);

export const store = createStore(combineReducer, composedEnhancers);
