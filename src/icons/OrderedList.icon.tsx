import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.darkGreyBlue)};
`;

const OrderedList = ({ width, height, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            data-name="Path 8544"
            d="M.9 92.464a.689.689 0 0 1 .1-.374.312.312 0 0 1 .274-.146.363.363 0 0 1 .293.115.461.461 0 0 1 .1.308.711.711 0 0 1-.1.319 2.411 2.411 0 0 1-.313.418L.165 94.232v.479h2.316v-.545H1.225l-.007-.027.452-.49a7.035 7.035 0 0 0 .6-.726.983.983 0 0 0 .164-.561.937.937 0 0 0-.309-.742 1.26 1.26 0 0 0-.859-.271 1.11 1.11 0 0 0-.833.322 1.036 1.036 0 0 0-.3.782v.01H.9z"
            transform="translate(-.126 -86.295)"
            style={{
                fill: fill,
            }}
        />
        <StyledPath
            data-name="Path 8545"
            d="M1.331 19.9H.582v.613H2.9V19.9h-.752v-2.764l-1.566.234v.555h.749z"
            transform="translate(-.544 -17.136)"
            style={{
                fill: fill,
            }}
        />
        <StyledPath
            data-name="Path 8546"
            d="M1.841 166.707a.945.945 0 0 0 .377-.3.691.691 0 0 0 .141-.419.836.836 0 0 0-.326-.705 1.4 1.4 0 0 0-.87-.249 1.283 1.283 0 0 0-.8.248.759.759 0 0 0-.314.659v.026h.762a.241.241 0 0 1 .115-.237.432.432 0 0 1 .266-.093.382.382 0 0 1 .294.1.371.371 0 0 1 .1.265.437.437 0 0 1-.112.318.437.437 0 0 1-.321.119H.789v.545h.363a.531.531 0 0 1 .359.12.457.457 0 0 1 .127.359.385.385 0 0 1-.122.291.473.473 0 0 1-.63-.008.334.334 0 0 1-.125-.285H.006v.029a.806.806 0 0 0 .341.723 1.4 1.4 0 0 0 .822.251 1.456 1.456 0 0 0 .9-.261.85.85 0 0 0 .351-.721.774.774 0 0 0-.151-.48.9.9 0 0 0-.428-.295z"
            transform="translate(-.001 -154.964)"
            style={{
                fill: fill,
            }}
        />
        <StyledPath
            data-name="Rectangle 507"
            transform="translate(3.511 10.05)"
            style={{
                fill: fill,
            }}
            d="M0 0h12.325v2.247H0z"
        />
        <StyledPath
            data-name="Rectangle 508"
            transform="translate(3.511 5.624)"
            style={{
                fill: fill,
            }}
            d="M0 0h12.325v2.247H0z"
        />
        <StyledPath
            data-name="Rectangle 509"
            transform="translate(3.511 1.061)"
            style={{
                fill: fill,
            }}
            d="M0 0h12.325v2.247H0z"
        />
    </svg>
);

OrderedList.defaultProps = {
    width: 15.836,
    height: 13.504,
};

export default OrderedList;