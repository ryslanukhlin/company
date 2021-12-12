import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Authorization from "./Components/Pages/Authorization/Authorization";

import Check from "./assets/img/check.svg";

const GlobalStyle = createGlobalStyle`
    * {
        @import url('./assets/fonts/font.css');
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input[type="checkbox"]{
        display: none;
    }

    input[type="checkbox"]:checked + label::before {
        content: "";
        background: url(${Check}) center center/cover no-repeat;
        height: 18px;
        width: 18px;
    }
`;

export interface ITheme {
    colors: {
        primary: string;
        success: string;
        bglight: string;
        bgdark: string;
    };
}

const theme: ITheme = {
    colors: {
        primary: "#6C5CE7",
        success: "#E84393",
        bglight: "#E5E5E5",
        bgdark: "#7DB59A",
    },
};

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Authorization />
        </ThemeProvider>
    );
}
