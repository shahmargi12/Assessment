import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const PendingLoadingIcon = ({ width, height, fill, ...props }: IconType) => (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} {...props}>
        <path d="M11 1.945V1.5h.972V0H0v1.5h.972v.449A6.607 6.607 0 0 0 4.264 7.48a6.511 6.511 0 0 0-3.291 5.535v.449H0v1.5h11.968v-1.5H11v-.449A6.607 6.607 0 0 0 7.7 7.48 6.355 6.355 0 0 0 11 1.945ZM9.5 13.016v.449H2.468v-.449A5.148 5.148 0 0 1 5.984 8.3 5.075 5.075 0 0 1 9.5 13.016ZM5.984 6.657a5.075 5.075 0 0 1-3.516-4.712V1.5H9.5v.449a5.075 5.075 0 0 1-3.516 4.708Z" />
    </StyledSVG>
);

PendingLoadingIcon.defaultProps = {
    width: 11.968,
    height: 14.961,
};

export default PendingLoadingIcon;
