import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.darkGreyBlue1)};
`;

const PhoneIcon = ({ width, height, fill, props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
        style={{
            enableBackground: 'new 0 0 14 14',
        }}
        height={height}
        width={width}
        xmlSpace="preserve"
        {...props}
    >
        <StyledPath
            d="m13.6 10.3-1.9-1.9c-.5-.5-1.3-.5-1.8 0-.2 0-.3.2-.4.4-.2.6-.9 1-1.5.8C6.3 9 5 7.7 4.4 6c-.2-.6.2-1.3.8-1.5.7-.2 1-1 .8-1.6l-.3-.6-2-1.9c-.5-.5-1.3-.5-1.9 0L.5 1.7C-.8 3.1.7 6.8 3.9 10s6.9 4.8 8.3 3.4l1.3-1.3c.6-.5.6-1.3.1-1.8z"
            style={{
                fill: fill,
            }}
        />
    </svg>
);

PhoneIcon.defaultProps = {
    width: 17,
    height: 17,
};

export default PhoneIcon;
