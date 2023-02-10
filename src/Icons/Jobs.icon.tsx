import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const JobsIcon = ({ height, width, fill, props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        style={{
            enableBackground: 'new 0 0 16 16',
        }}
        xmlSpace="preserve"
        height={height}
        width={width}
        {...props}
    >
        <StyledPath
            d="M16 6.1c-.1-1.3-1.1-2.4-2.4-2.6h-2.1V1.8c0-1-.8-1.8-1.8-1.8H6.4c-.5 0-1 .3-1.4.7-.3.4-.4.8-.4 1.2v1.6H2.2C.9 3.8 0 4.9 0 6.2v7.4c.2 1.3 1.4 2.3 2.8 2.4h10.3c.2 0 .4 0 .6-.1C15 15.6 16 14.4 16 13V6.1c.1-.1 0 0 0 0zM6 1.9c0-.1 0-.3.1-.4.1-.1.1-.1.4-.1h2.9c.2 0 .3 0 .4.1.1.1.2.3.2.4v1.6H6V1.9zM1.4 7c0-.3 0-.7.1-1 .2-.6.7-1 1.3-1h10.5c.6 0 1.2.5 1.3 1.1v1.1H1.4V7zm13.1 6c0 .4-.1.8-.4 1-.3.3-.6.4-1 .4H2.9c-.8 0-1.4-.6-1.4-1.4V8.5h13.1l-.1 4.5z"
            fill={fill}
        />
    </svg>
);

JobsIcon.defaultProps = {
    width: 16,
    height: 16,
};

export default JobsIcon;