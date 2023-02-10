import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.blackColor)};
`;

const BackArrowIcon = ({ width, height, fill, props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        style={{
            enableBackground: 'new 0 0 20 20',
        }}
        xmlSpace="preserve"
        height={height}
        width={width}
        {...props}
    >
        <StyledPath fill={fill} d="M19.8 11.5H5.5l4.7 4.7-1.9 1.9L.2 10l8.1-8.1 1.9 1.9-4.4 4.5h14z" />
    </svg>
);

BackArrowIcon.defaultProps = {
    width: 14,
    height: 14,
};

export default BackArrowIcon;