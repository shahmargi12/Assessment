import * as React from 'react';
import styled from 'styled-components';
import { IconType } from '@foster/types/common';
type ColorType = {
    fill: string;
};
const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const ThreeHorizontalBarIcon = ({ height, width, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g data-name="Group 32657">
            <StyledPath data-name="Rectangle 7547" fill={fill} d="M0 0h18v2H0z" />
            <StyledPath data-name="Rectangle 7548" transform="translate(0 6)" fill={fill} d="M0 0h18v2H0z" />
            <StyledPath data-name="Rectangle 7549" transform="translate(7 12)" fill={fill} d="M0 0h11v2H0z" />
        </g>
    </svg>
);

export default ThreeHorizontalBarIcon;
