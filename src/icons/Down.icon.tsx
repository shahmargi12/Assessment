import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';


const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.darkGreyBlue1)};
`;

const DownIcon = ({ width, height, fill, props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        style={{
            enableBackground: 'new 0 0 12 12',
        }}
        height={height}
        width={width}
        xmlSpace="preserve"
        {...props}
    >
        <StyledPath
            d="M6 9.7c-.2 0-.4-.1-.6-.3L.3 3.8C0 3.4 0 2.9.3 2.5c.3-.3.8-.4 1.1-.1l.1.1 4.5 5 4.5-5c.3-.3.8-.4 1.1-.1l.1.1c.3.4.3.9 0 1.3L6.6 9.5c-.2.1-.4.2-.6.2z"
            fill={fill}
        />
    </svg>
);

DownIcon.defaultProps = {
    width: 17,
    height: 17,
};

export default DownIcon;
