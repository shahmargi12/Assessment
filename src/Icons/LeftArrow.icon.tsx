import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const LeftArrowIcon = ({ width, height, fill, props }: IconType) => (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} {...props}>
        <g data-name="Pagination Left Disable">
            <path
                data-name="Path 29543"
                d="M6.311 13.73a.989.989 0 0 0 .67.27.907.907 0 0 0 .66-.28 1.154 1.154 0 0 0 .05-1.56L3.13 7.3 7.7 2.44a1.176 1.176 0 0 0 0-1.5L7.621.86a.959.959 0 0 0-.65-.26.939.939 0 0 0-.68.29L.99 6.52a1.168 1.168 0 0 0-.3.78 1.121 1.121 0 0 0 .3.78l5.321 5.64-.22.21z"
                transform="translate(-.69 -.6)"
            />
        </g>
    </StyledSVG>
);

LeftArrowIcon.defaultProps = {
    width: 7.281,
    height: 13.4,
};

export default LeftArrowIcon;