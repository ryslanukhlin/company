import styled from 'styled-components';

type propsTitle = {
    color?: string;
    fs?: string;
};

export const Title = styled.h1<propsTitle>`
    color: ${(props) => (props.color ? props.color : 'white')};
    text-transform: uppercase;
    font-size: ${(props) => (props.fs ? props.fs : '14px')};

    @media (max-height: 600px) {
        font-size: 14px;
    }

    @media (max-width: 750px) {
        font-size: 16px;
    }
`;
