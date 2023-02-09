import React from "react"
import styled from 'styled-components';
import { IconType } from '../types/common';

type ColorType = {
    fill?: string;
};
const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.darkGreyBlue)};
`;

const UnorderedList = ({ width, height, fill, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            data-name="Rectangle 516"
            transform="translate(3.428 9.049)"
            style={{
                fill: fill,
            }}
            d="M0 0h12.409v2.262H0z"
        />
        <StyledPath
            data-name="Rectangle 517"
            transform="translate(3.428 4.593)"
            style={{
                fill: fill,
            }}
            d="M0 0h12.409v2.262H0z"
        />
        <StyledPath
            data-name="Rectangle 518"
            transform="translate(3.428)"
            style={{
                fill: fill,
            }}
            d="M0 0h12.409v2.262H0z"
        />
        <StyledPath
            data-name="Rectangle 519"
            transform="translate(0 9.117)"
            style={{
                fill: fill,
            }}
            d="M0 0h2.262v2.262H0z"
        />
        <StyledPath
            data-name="Rectangle 520"
            transform="translate(0 4.593)"
            style={{
                fill: fill,
            }}
            d="M0 0h2.262v2.262H0z"
        />
        <StyledPath
            data-name="Rectangle 521"
            style={{
                fill: fill,
            }}
            d="M0 0h2.262v2.262H0z"
        />
    </svg>
);

UnorderedList.defaultProps = {
    width: 15.837,
    height: 11.38,
};

export default UnorderedList;
