import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack60)};
`;

const EmailIcon = ({ width, height, fill, props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 14.4"
        width={width}
        height={height}
        style={{
            enableBackground: 'new 0 0 16 14.4',
        }}
        xmlSpace="preserve"
        {...props}
    >
        <g>
            <StyledPath
                d="M64 94.7v-7.1c0-.2 0-.3.1-.5.4-1.9 2-3.2 4-3.2H76c.2 0 .5 0 .7.1 1.9.3 3.4 2 3.3 4v6.3c0 .3 0 .6-.1.8-.4 1.9-2 3.2-3.9 3.2h-8c-1.7 0-3.3-1.1-3.8-2.8-.1-.2-.1-.5-.2-.8zm14.4-5.3c-.1 0-.1.1-.2.1-1.9 1-3.8 2.1-5.7 3.1-.3.2-.6.2-.9 0-1.9-1-3.8-2.1-5.7-3.1-.1 0-.1-.1-.2-.1v4.9c0 1.3 1 2.4 2.3 2.5h8c.2 0 .4 0 .5-.1 1.1-.2 1.9-1.2 1.9-2.4V89.4zM72 85.6h-4c-1.1 0-2 .8-2.3 1.8 0 .1 0 .2.1.2 2 1.1 4.1 2.2 6.1 3.3.1.1.2.1.3 0 2-1.1 4-2.2 6.1-3.3.1 0 .2-.2.1-.3-.3-1.1-1.2-1.8-2.3-1.8-1.4.1-2.8.1-4.1.1z"
                fill={fill}
                transform="translate(-64 -83.956)"
            />
        </g>
    </svg>
);

EmailIcon.defaultProps = {
    width: 16,
    height: 14.407,
};

export default EmailIcon;