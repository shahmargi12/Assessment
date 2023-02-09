import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const GraduationCapIcon = ({ height, width, fill, ...props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 12.5"
        xmlSpace="preserve"
        width={width}
        height={height}
        {...props}
    >
        <StyledPath
            d="M14.8 5.5c-.4.2-.7.4-1.1.6 0 0-.1.1-.1.2v3.8c0 .3-.1.5-.3.7-.9.7-2 1.2-3.1 1.5-2 .5-4.1.3-6-.4-.6-.3-1.2-.6-1.7-1-.2-.2-.3-.4-.3-.7V6.4c0-.1 0-.2-.1-.2C1.6 5.7 1 5.4.4 5.1.2 5 0 4.8 0 4.5c0-.2.2-.4.4-.5L7.6.1c.2-.1.5-.1.8 0L15.6 4c.2.1.4.4.4.7V8c0 .3-.2.6-.5.6h-.3c-.2-.1-.4-.3-.4-.6V5.5zm-13-1c0 .1.1.1 0 0 2.1 1.1 4.1 2.2 6.1 3.3h.2c2-1.1 4-2.1 5.9-3.2 0 0 .1 0 .1-.1-2-1.1-4-2.2-6-3.2h-.2C6.2 2.2 4.4 3.1 2.7 4c-.3.2-.6.4-.9.5zm1.6 2.2v3.2c0 .1.1.1.1.2.5.4 1.1.7 1.8.9 1.2.4 2.6.5 3.9.3 1.2-.1 2.3-.6 3.2-1.2.1-.1.1-.1.1-.2V6.8c-.1 0-.1.1-.2.1-1.3.7-2.6 1.4-4 2.1-.2.1-.4.1-.7 0-1-.6-2.1-1.1-3.1-1.7-.4-.2-.7-.4-1.1-.6z"
            fill={fill}
        />
    </svg>
);

GraduationCapIcon.defaultProps = {
    width: 15,
    height: 11.782,
};

export default GraduationCapIcon;