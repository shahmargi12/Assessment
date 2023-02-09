import React from "react"
import styled from 'styled-components';
import { IconType } from '../types/common';

type ColorType = {
    fill?: string;
};
const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const RadioSelectedIcon = ({ height, width, fill, ...props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        height={height}
        width={width}
        {...props}
    >
        <StyledPath
            d="M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0z"
            style={{
                fill: 'none',
            }}
        />
        <StyledPath
            d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-16c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
            fill={fill}
        />
    </svg>
);

RadioSelectedIcon.defaultProps = {
    width: 22,
    height: 22,
};

export default RadioSelectedIcon;
