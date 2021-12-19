import styled from 'styled-components';

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
