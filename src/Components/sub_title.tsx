import styled from "styled-components";

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
