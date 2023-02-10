import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const LocationIcon = ({ width, height, fill, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.538 16" width={width} height={height} {...props}>
        <g data-name="Group 41421">
            <StyledPath
                fill={fill}
                data-name="Path 28764"
                d="M0 6.69A6.367 6.367 0 0 1 4.233.331a6.216 6.216 0 0 1 8.208 4.941 6.448 6.448 0 0 1-1.428 5.3c-1.392 1.71-2.8 3.406-4.2 5.106a.629.629 0 0 1-1.089.01c-1.443-1.757-2.9-3.5-4.325-5.275A6.188 6.188 0 0 1 0 6.69Zm6.262 7.715c.046-.046.077-.077.1-.108 1.243-1.51 2.517-2.99 3.714-4.536a5.217 5.217 0 0 0 .637-5.825A4.643 4.643 0 0 0 6.722 1.26a4.79 4.79 0 0 0-4.484 1.972 5.378 5.378 0 0 0 .221 6.549q1.68 2.05 3.37 4.1c.14.17.284.34.433.525Z"
            />
            <StyledPath
                fill={fill}
                data-name="Path 28765"
                d="M9.344 6.146A3.077 3.077 0 1 1 6.29 3.08a3.084 3.084 0 0 1 3.054 3.066Zm-4.921.005a1.844 1.844 0 1 0 1.844-1.844 1.846 1.846 0 0 0-1.844 1.844Z"
            />
        </g>
    </svg>
);

LocationIcon.defaultProps = {
    width: 12.538,
    height: 16,
};

export default LocationIcon;
