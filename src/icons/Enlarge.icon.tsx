import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.white)};
`;

const EnlargeIcon = ({ width, height, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            data-name="Path 29380"
            d="M256.807 6.418a.8.8 0 0 0 .567-.235l3.444-3.444v2.074a.8.8 0 1 0 1.6 0V.8a.8.8 0 0 0-.8-.8h-4.011a.8.8 0 1 0 0 1.6h2.075l-3.442 3.449a.8.8 0 0 0 .567 1.369z"
            transform="translate(-246.423)"
            fill={fill}
        />
        <StyledPath
            data-name="Path 29381"
            d="M.8 262.67h4.013a.8.8 0 1 0 0-1.6H2.739l3.444-3.444a.8.8 0 0 0-1.134-1.134l-3.449 3.44v-2.075a.8.8 0 0 0-1.6 0v4.011a.8.8 0 0 0 .8.8z"
            transform="translate(0 -246.67)"
            fill={fill}
        />
    </svg>
);

EnlargeIcon.defaultProps = {
    width: 16,
    height: 16,
};

export default EnlargeIcon;