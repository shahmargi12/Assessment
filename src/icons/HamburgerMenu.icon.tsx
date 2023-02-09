import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const SvgComponent = ({ width, height, fill, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g data-name="Group 48939">
            <StyledPath
                data-name="Rectangle 7810"
                style={{
                    fill: fill,
                }}
                d="M0 0h16v1.5H0z"
            />
            <StyledPath
                data-name="Rectangle 7811"
                transform="translate(0 5)"
                style={{
                    fill: fill,
                }}
                d="M0 0h16v1.5H0z"
            />
            <StyledPath
                data-name="Rectangle 7812"
                transform="translate(0 10)"
                style={{
                    fill: fill,
                }}
                d="M0 0h16v1.5H0z"
            />
        </g>
    </svg>
);

SvgComponent.defaultProps = {
    height: 11.5,
    width: 16,
};

export default SvgComponent;
