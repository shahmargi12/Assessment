import React from "react"
import styled from 'styled-components';
import { IconType } from '../types/common';

type ColorType = {
    fill?: string;
};

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack30)};
`;

const Checkbox = ({ height, width, fill, ...props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        height={height}
        width={width}
        {...props}
    >
        <StyledPath
            d="M6 0h12c3.3 0 6 2.7 6 6v12c0 3.3-2.7 6-6 6H6c-3.3 0-6-2.7-6-6V6c0-3.3 2.7-6 6-6z"
            style={{
                fill: 'none',
            }}
        />
        <StyledPath
            d="M18 24H6c-3.3 0-6-2.7-6-6V6c0-3.3 2.7-6 6-6h12c3.3 0 6 2.7 6 6v12c0 3.3-2.7 6-6 6zM6 2C3.8 2 2 3.8 2 6v12c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H6z"
            fill={fill}
        />
    </svg>
);

Checkbox.defaultProps = {
    height: 22,
    width: 22,
};

export default Checkbox;
