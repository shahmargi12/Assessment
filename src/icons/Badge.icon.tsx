import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';



const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack70)};
`;

const BadgeIcon = ({ width, height, fill, props }: IconType) => (
    <StyledSVG
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 11.6 17.7"
        width={width}
        height={height}
        xmlSpace="preserve"
        {...props}
        fill={fill}
    >
        <path
            className="st0"
            d="M3.2 6.9zM8.4 6.9l.2-.2 2-1.7c.2-.1.3-.4.3-.6V.6c0-.4-.3-.7-.7-.6H1.3C1.2 0 1 .1.9.2.8.4.7.5.7.7v3.7c0 .2.1.4.3.6 0 .1.1.1.2.2l.3.3.6.5c.3.3.7.6 1.1 1-1 .5-1.9 1.4-2.5 2.5-.7 1.4-.8 2.9-.3 4.4.5 1.5 1.5 2.6 2.9 3.3.8.4 1.7.6 2.6.6.6 0 1.2-.1 1.8-.3 1.5-.5 2.6-1.5 3.3-2.8 1.3-2.9.2-6.3-2.6-7.8zM2.1 4.2 2 4.1V1.4h7.5V4c0 .1 0 .2-.1.2-.8.7-1.5 1.3-2.2 2-.1.1-.2.1-.2.1H4.6c-.1 0-.2 0-.2-.1-.8-.6-1.5-1.3-2.3-2zm1.1 2.7zm2.6 9.4c-2.4 0-4.4-2-4.4-4.4 0-1.2.5-2.3 1.3-3.1.8-.8 1.9-1.3 3.1-1.3 1.2.1 2.2.6 3.1 1.4.8.8 1.3 1.9 1.3 3.1-.1 2.4-2 4.3-4.4 4.3zM3.2 6.9zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0zm0 0z"
        />
        <path
            className="st0"
            d="M5.8 8.2C3.7 8.2 2 9.9 2 12c0 1 .4 2 1.1 2.7.7.7 1.7 1.1 2.7 1.1 1 0 2-.4 2.7-1.1.7-.7 1.1-1.7 1.1-2.7 0-2.1-1.7-3.8-3.8-3.8zm0 6.3c-.7 0-1.3-.2-1.8-.7-.5-.5-.7-1.1-.7-1.7 0-.7.2-1.3.7-1.8.5-.5 1.1-.7 1.7-.7 1.3 0 2.4 1.1 2.5 2.4 0 1.3-1 2.5-2.4 2.5z"
        />
    </StyledSVG>
);
BadgeIcon.defaultProps = {
    width: 10.292,
    height: 16,
};

export default BadgeIcon;
