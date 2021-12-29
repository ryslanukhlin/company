import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle = styled(LinkRouter)`
    color: #2f80ed;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Link: React.FC<{ to: string }> = ({ to, children }) => {
    return <LinkStyle to={to}>{children}</LinkStyle>;
};

export default Link;
