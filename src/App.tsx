import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./global_style";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Router />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
}
