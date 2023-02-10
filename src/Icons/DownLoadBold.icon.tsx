import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledSvg = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;
function DownloadBold({ width, height, fill, ...props }: IconType) {
    return (
        <StyledSvg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            width={width}
            height={height}
            fill={fill}
            viewBox="0 0 17.9 19"
            xmlSpace="preserve"
            {...props}
        >
            <path
                id="Path_34842"
                className="st0"
                d="M15.3 7.3c.4.4.4 1 0 1.4L10 14c-.8.8-2 .8-2.8 0L1.9 8.7c-.4-.4-.3-1 .1-1.4.4-.3.9-.3 1.3 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0z"
            />
            <path
                id="Path_34843"
                className="st0"
                d="M8.6 0c.6 0 1 .4 1 1v12c0 .6-.5 1-1.1.9-.5 0-.9-.4-.9-.9V1c0-.5.4-1 1-1z"
            />
            <path
                id="Path_34844"
                className="st0"
                d="M0 18c0-.6.4-1 1-1h15.9c.6 0 1 .4 1.1.9 0 .6-.4 1-.9 1.1H1c-.5 0-1-.4-1-1z"
            />
        </StyledSvg>
    );
}

DownloadBold.defaultProps = {
    width: 13.451,
    height: 20.177,
};

export default DownloadBold;
