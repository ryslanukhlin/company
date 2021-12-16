import styled from "styled-components";
import { Wrapper } from "./pages/authorization/style";

type PropsButton = {
    width?: string;
    height?: string;
    mb?: string;
    fs?: string;
    textTransform?: string;
    bgColor?: "primary" | "success" | "danger" | "warning" | "none";
};

export const Button = styled.button<PropsButton>`
    border-radius: 16px;
    background: ${({ bgColor }) =>
        bgColor
            ? bgColor === "danger"
                ? "#E84393"
                : bgColor === "primary"
                ? "#6C5CE7"
                : bgColor === "success"
                ? "#00B894"
                : bgColor === "warning"
                ? "#FDCB6E"
                : "none"
            : "#7db59a"};
    letter-spacing: 0.25px;
    color: ${(props) => (props.bgColor === "none" ? "#858585" : "#fff")};
    font-size: ${(props) => (props.fs ? props.fs : "12px")};
    border: 0;
    margin-bottom: ${(props) => (props.mb ? props.mb : "0px")};
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "100%")};
    text-transform: ${(props) => (props.textTransform ? props.textTransform : "none")};
    border: ${(props) => (props.bgColor === "none" ? "1px solid #adadad" : "none")};

    &:hover {
        background-color: ${({ bgColor }) =>
            bgColor
                ? bgColor === "danger"
                    ? "#B03671"
                    : bgColor === "primary"
                    ? "#5d4fc9"
                    : bgColor === "success"
                    ? "#039b7c"
                    : bgColor === "warning"
                    ? "#f1bb55"
                    : "none"
                : "#5b9479"};
        border: ${(props) => (props.bgColor === "none" ? "1px solid #7DB59A" : "none")};
        color: ${(props) => (props.bgColor === "none" ? "#7DB59A" : "#fff")};
    }

    &:active {
        background-color: ${({ bgColor }) =>
            bgColor
                ? bgColor === "danger"
                    ? "#832552"
                    : bgColor === "primary"
                    ? "#1a134b"
                    : bgColor === "success"
                    ? "#025e4b"
                    : bgColor === "warning"
                    ? "#a17729"
                    : "none"
                : "#4f896c"};
        border: ${(props) => (props.bgColor === "none" ? "1px solid #4F896C" : "none")};
        color: ${(props) => (props.bgColor === "none" ? "#4F896C" : "#fff")};
    }

    ${Wrapper} & {
        @media (max-width: 500px) {
            width: 100%;
        }
    }

    @media (max-width: 430px) {
        padding: 6px 16px;
    }

    @media (max-height: 500px) {
        padding: 4px 16px;
    }

    @media (max-height: 400px) {
        padding: 0px 16px;
    }
`;
