import styled from 'styled-components';

type ClainTypeProps = {
    type: 'primary' | 'success' | 'danger' | 'warning';
    disabled?: boolean;
};

export const ClaimType = styled.p<ClainTypeProps>`
    padding-left: 40px;
    font-size: 16px;
    line-height: 20px;
    position: relative;
    color: ${({ disabled }) => (disabled ? '#ADADAD' : '#2d3436')};

    &::before {
        content: '';
        display: inline-block;
        border-radius: 50%;
        position: relative;
        width: 16px;
        height: 16px;
        background-color: ${(props) => props.theme.colors[props.type]};
        left: -30px;
        bottom: -2px;
    }
`;
