import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const LocationSmall = ({ height, width, fill }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <g
            data-name="Group 41421"
            style={{
                opacity: 0.7,
            }}
        >
            <StyledPath
                data-name="Path 28764"
                d="M133.6 107.332a6.367 6.367 0 0 1 4.233-6.359 6.216 6.216 0 0 1 8.208 4.941 6.448 6.448 0 0 1-1.428 5.3c-1.392 1.71-2.8 3.406-4.2 5.106a.629.629 0 0 1-1.089.01c-1.443-1.757-2.9-3.5-4.325-5.275a6.188 6.188 0 0 1-1.399-3.723zm6.262 7.715c.046-.046.077-.077.1-.108 1.243-1.51 2.517-2.99 3.714-4.536a5.217 5.217 0 0 0 .637-5.825 4.643 4.643 0 0 0-3.991-2.676 4.79 4.79 0 0 0-4.484 1.972 5.378 5.378 0 0 0 .221 6.549q1.68 2.05 3.37 4.1c.14.17.284.34.433.525z"
                transform="translate(-133.6 -100.642)"
                style={{
                    fill: fill,
                }}
            />
            <StyledPath
                data-name="Path 28765"
                d="M201.854 163.666a3.077 3.077 0 1 1-3.054-3.066 3.084 3.084 0 0 1 3.054 3.066zm-4.921.005a1.844 1.844 0 1 0 1.844-1.844 1.846 1.846 0 0 0-1.844 1.844z"
                transform="translate(-192.51 -157.52)"
                style={{
                    fill: fill,
                }}
            />
        </g>
    </svg>
);

LocationSmall.defaultProps = {
    width: 13,
    height: 16,
};

export default LocationSmall;
