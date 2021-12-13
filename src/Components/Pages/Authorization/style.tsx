import styled from "styled-components";
import { InputIconImg } from "../../input";

export const Wrapper = styled.div`
    display: flex;
    height: calc(100vh - 100px);

    @media (max-height: 660px) {
        height: calc(100vh - 64px);
    }

    @media (max-height: 500px) {
        height: 100vh;
    }
`;

export const ContainerImg = styled.div`
    padding: 100px 130px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(211, 237, 225, 0.969);

    @media (max-width: 1200px) {
        display: none;
    }
`;

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 100 130px;

    @media (max-width: 1200px) {
        width: 100%;
    }

    @media (max-width: 750px) {
        & > img {
            height: 60px;
            width: 60px;
        }
    }

    @media (max-height: 600px) {
        & img {
            height: 50px;
        }

        ${InputIconImg} {
            height: auto;
        }
    }

    @media (max-height: 350px) {
        & img {
            margin-top: 80px;
        }

        ${InputIconImg} {
            margin-top: 0;
        }
    }
`;

type propsTitle = {
    color?: string;
    fs?: string;
};

export const Title = styled.h1<propsTitle>`
    color: ${(props) => (props.color ? props.color : "white")};
    text-transform: uppercase;
    font-size: ${(props) => (props.fs ? props.fs : "14px")};

    @media (max-height: 600px) {
        font-size: 14px;
    }

    @media (max-width: 750px) {
        font-size: 16px;
    }
`;

type propsSubTitle = {
    color?: string;
    mb?: string;
    fs?: string;
};

export const SubTitle = styled.h2<propsSubTitle>`
    color: ${(props) => (props.color ? props.color : "white")};
    text-transform: uppercase;
    font-size: ${(props) => (props.fs ? props.fs : "10px")};
    margin-bottom: ${(props) => (props.mb ? props.mb : "0")};

    @media (max-height: 600px) {
        margin-bottom: 20px;
    }

    @media (max-height: 600px) {
        font-size: 10px;
    }

    @media (max-width: 750px) {
        font-size: 12px;
    }
`;

type propsForm = {
    width?: string;
};

export const Form = styled.form<propsForm>`
    width: ${(props) => (props.width ? props.width : "589px")};
    @media (max-width: 500px) {
        width: 100%;
        padding: 0 16px;
    }
`;

export const ErrorInputMessage = styled.div`
    color: #cc1f1f;
    display: block;
    font-size: 18px;
    line-height: 32px;
    margin-top: 2px;
    margin-bottom: 8px;
    min-height: 32px;

    @media (max-width: 430px) {
        margin-top: 0px;
    }

    @media (max-height: 500px) {
        margin-top: 0px;
        font-size: 12px;
    }
`;

export const CheckBoxLabel = styled.label`
    line-height: 17px;
    font-size: 12px;
    color: "#2d343";
    margin-left: 14px;

    &:before {
        content: "";
        display: inline-block;
        height: 18px;
        width: 18px;
        border: 2px solid #5c5c5c;
        border-radius: 4px;
        vertical-align: middle;
        transition: 0.2ms;
        margin-right: 18px;
    }
`;

export const Button = styled.button`
    border-radius: 16px;
    background: #7db59a;
    padding: 8px 16px;
    letter-spacing: 0.25px;
    color: #fff;
    font-size: 18px;
    line-height: 36px;
    border: 0;
    margin-bottom: 16px;
    width: 100%;

    &:hover {
        background-color: #5b9479;
    }

    &:active {
        background-color: #4f896c;
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

export const Footer = styled.div`
    height: 100px;
    background-color: ${(props) => props.theme.colors.bgdark};

    @media (max-height: 660px) {
        height: 64px;
    }

    @media (max-height: 500px) {
        display: none;
    }
`;

export const FooterWrapper = styled.div`
    padding-top: 16px;
    margin-left: 30px;
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 900px) {
        display: none;
    }
`;

export const HelpText = styled.div`
    font-size: 14px;
    text-align: center;
    line-height: 17px;
    color: #2d3436;

    & span {
        color: #2f80ed;
    }
`;
