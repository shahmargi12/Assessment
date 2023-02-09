import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';



const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const ChatIcon = ({ height, width, fill, props }: IconType) => (
    <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        height={height}
        width={width}
        viewBox="0 0 18.9 18"
        style={{
            enableBackground: 'new 0 0 18.9 18',
        }}
        xmlSpace="preserve"
        {...props}
    >
        <g id="chat" transform="translate(-64 -198.662)">
            <StyledPath
                id="Path_28766"
                d="M64 202.9c.1-.2.1-.4.2-.7.5-2 2.3-3.5 4.4-3.5h9.7c2.5 0 4.6 2.1 4.6 4.6v5.8c0 2.6-2.1 4.7-4.7 4.6h-8.9c-.2 0-.4.1-.5.2-1.1.8-2.1 1.6-3.1 2.3-.7.6-1.3.4-1.7-.4v-12.9zm1.9 10.9c.7-.5 1.4-1 2.1-1.6.3-.2.7-.4 1-.3h9.1c1.6.1 2.9-1.1 3-2.7v-6.3c-.2-1.4-1.5-2.5-2.9-2.4h-8.8c-.4 0-.8 0-1.2.1-1.4.3-2.3 1.5-2.3 2.9v10.3z"
                fill={fill}
            />
            <StyledPath
                id="Path_28768"
                d="M72.5 203.4h2.8c.5-.1 1 .3 1 .8s-.3 1-.8 1h-5.9c-.5 0-1-.3-1-.9 0-.5.3-1 .9-1h3z"
                fill={fill}
            />
            <StyledPath
                id="Path_28769"
                d="M71.1 209.1h-1.5c-.5 0-.9-.4-1-.9v-.1c0-.5.4-.9.9-.9h2.9c.5 0 1 .4 1 .9v.1c0 .5-.4.9-.9.9H71.1z"
                fill={fill}
            />
        </g>
    </svg>
);

ChatIcon.defaultProps = {
    width: 20,
    height: 20,
}

export default ChatIcon;
