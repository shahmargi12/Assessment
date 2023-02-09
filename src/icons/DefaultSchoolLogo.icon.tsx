import React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const DefaultSchoolLogoIcon = ({ height, width, fill, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g>
            <StyledPath
                d="M8.45 291.181a.8.8 0 0 0-.722.8V294l-3.7 2.958a.8.8 0 0 0-.3.62v1.6h-2.4a.8.8 0 0 0-.8.8v6.4a.8.8 0 0 0 .8.8h14.404a.8.8 0 0 0 .8-.8v-6.4a.8.8 0 0 0-.8-.8h-2.4v-1.6a.8.8 0 0 0-.294-.62L9.33 294v-1.216h.8a.8.8 0 0 0 0-1.6h-1.6a.815.815 0 0 0-.083 0zm.083 4.222 3.194 2.564v7.613H9.33v-2.4a.8.8 0 1 0-1.6 0v2.4h-2.4v-7.619zm-6.4 5.375h1.6v4.8h-1.6zm11.2 0h1.6v4.8h-1.6z"
                transform="translate(-.529 -291.18)"
                fill={fill}
            />
        </g>
    </svg>
);

DefaultSchoolLogoIcon.defaultProps = {
    height: 16,
    width: 16,
};

export default DefaultSchoolLogoIcon;
