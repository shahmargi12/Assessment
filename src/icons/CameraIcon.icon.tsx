import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.white)};
`;

const Camera = ({ width, height, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} {...props}>
        <g data-name="Group 40001" transform="translate(-1475 -736)">
            <rect
                data-name="Rectangle 7515"
                width={width}
                height={height}
                rx={20}
                transform="translate(1475 736)"
                style={{
                    fill: '#f0f2f5',
                    opacity: 0.6,
                }}
            />
            <g data-name="camera (3)" transform="translate(1485 745)">
                <StyledPath
                    data-name="Path 27440"
                    d="M17.213 5.461h-2.642l-.308-.923A2.243 2.243 0 0 0 12.131 3h-3.8A2.244 2.244 0 0 0 6.2 4.538l-.308.923H3.247A2.25 2.25 0 0 0 1 7.709v9.046A2.25 2.25 0 0 0 3.247 19h13.969a2.25 2.25 0 0 0 2.245-2.247V7.706a2.25 2.25 0 0 0-2.247-2.245zm1.017 11.29a1.018 1.018 0 0 1-1.017 1.017H3.247a1.018 1.018 0 0 1-1.017-1.017V7.706a1.018 1.018 0 0 1 1.017-1.014h3.086a.615.615 0 0 0 .583-.421l.449-1.346a1.015 1.015 0 0 1 .964-.695h3.8a1.015 1.015 0 0 1 .964.7l.449 1.345a.615.615 0 0 0 .583.421h3.086a1.018 1.018 0 0 1 1.019 1.013z"
                    fill={fill}
                />
                <StyledPath
                    data-name="Path 27441"
                    d="M13.115 10a4.615 4.615 0 1 0 4.615 4.615A4.615 4.615 0 0 0 13.115 10zm0 8a3.384 3.384 0 1 1 3.385-3.385A3.384 3.384 0 0 1 13.115 18z"
                    transform="translate(-2.885 -2.693)"
                    fill={fill}
                />
                <ellipse
                    data-name="Ellipse 1807"
                    cx={0.5}
                    cy={1}
                    rx={0.5}
                    ry={1}
                    transform="translate(16 8)"
                    style={{
                        fill: '#fff',
                    }}
                />
            </g>
        </g>
    </svg>
);

Camera.defaultProps = {
    width: 40,
    height: 40,
};

export default Camera;