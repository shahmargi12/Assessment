import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.squirilText)};
`;

const SquirilIcon = ({ height, width, fill, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            data-name="Path 30505"
            d="M8.069 0A8.069 8.069 0 1 1 0 8.069 8.069 8.069 0 0 1 8.069 0"
            style={{
                fill,
            }}
        />
        <StyledPath
            data-name="Path 30506"
            d="M29.345 17.931a3.138 3.138 0 1 1-3.138 3.138 3.139 3.139 0 0 1 3.138-3.138"
            transform="translate(-9.172 -6.275)"
            style={{
                fill,
            }}
        />
        <StyledPath
            data-name="Path 30507"
            d="M32.62 30.345a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9"
            transform="translate(-11.104 -10.621)"
            style={{
                fill,
            }}
        />
        <StyledPath
            data-name="Path 30508"
            d="M18.724 24.828a4.931 4.931 0 1 1-4.931 4.931 4.931 4.931 0 0 1 4.931-4.931"
            transform="translate(-4.828 -8.689)"
            style={{
                fill,
            }}
        />
    </svg>
);

SquirilIcon.defaultProps = {
    width: 23.312,
    height: 26,
};

export default SquirilIcon;
