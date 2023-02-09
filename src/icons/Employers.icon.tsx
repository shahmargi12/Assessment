import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const EmployerIcon = ({ height, width, fill, props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 31.2 25.6"
        height={height}
        width={width}
        xmlSpace="preserve"
        {...props}
    >
        <StyledPath
            d="M-15496.7-12052v-19.7c-.1-1.6 1-2.9 2.6-3.1h8.7c1.4 0 2.6.9 2.8 2.3 0 .3.1.5.1.8v4c.1-.1.3-.1.4-.2 1.1-.9 2.6-.9 3.7.1 2.1 1.9 4.3 3.8 6.4 5.7.7.6 1.1 1.5 1.1 2.4v7.8h1.3c.8 0 1.4.7 1.4 1.5s-.6 1.4-1.4 1.4h-28.3c-.8.1-1.4-.5-1.5-1.3 0-.2 0-.3.1-.5.1-.6.5-1 1.1-1 .3-.3.8-.2 1.5-.2zm2.8-19.9v19.8h8.5v-19.8h-8.5zm19.9 19.8v-7.7c0-.2-.1-.3-.2-.4-2-1.8-3.9-3.5-5.9-5.2-.1-.1-.2-.1-.3-.2-.6.6-1.3 1.1-1.9 1.6-.2.1-.3.3-.2.5v11.4h8.5z"
            transform="translate(15499.606 12074.778)"
            fill={fill}
        />
    </svg>
);

EmployerIcon.defaultProps = {
    width: 17,
    height: 17,
};

export default EmployerIcon;
