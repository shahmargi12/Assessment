import React from 'react';
import styled from 'styled-components';
import { IconType } from '../types/common';

type ColorType = {
    fill?: string;
};
const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const CloseIcon = ({ width, height, fill, props }: IconType) => (
    <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        style={{
            enableBackground: 'new 0 0 14 14',
        }}
        height={height}
        width={width}
        fill={fill}
        xmlSpace="preserve"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 12 12"
        {...props}
    >
        <g id="close">
            <path
                className="close_1"
                d="M11.9,10.9c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.5,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3L6,7.4l-4.2,4.2
		c-0.2,0.2-0.4,0.3-0.7,0.3c0,0,0,0,0,0c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.3-1,0.1-1.4L4.6,6L0.4,1.8c-0.4-0.4-0.4-1,0-1.4
		c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3L6,4.6l4.2-4.2c0.4-0.4,1-0.4,1.4,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7
		L7.4,6l4.2,4.2C11.8,10.4,11.9,10.7,11.9,10.9z"
            />
        </g>
    </StyledSVG>
);

CloseIcon.defaultProps = {
    width: 15.3,
    height: 15.3,
};

export default CloseIcon;
