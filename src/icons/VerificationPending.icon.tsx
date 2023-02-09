import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};
const StyledG = styled.g<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.white)};
`;

const VerificationIcon = ({ width, height, fill, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <path
            data-name="Path 29355"
            d="M2.2 12.108c-.983.746-2.2 1.675-2.2 3.116s1.217 2.366 2.2 3.112a5.365 5.365 0 0 1 1.094.976 5.012 5.012 0 0 1-.31 1.522c-.342 1.157-.767 2.6.053 3.723s2.336 1.174 3.548 1.2a5.2 5.2 0 0 1 1.515.167 5.15 5.15 0 0 1 .616 1.377c.405 1.152.909 2.586 2.259 3.025a2.377 2.377 0 0 0 .741.118 5.237 5.237 0 0 0 2.775-1.22 4.935 4.935 0 0 1 1.385-.779 4.93 4.93 0 0 1 1.385.778c1.036.712 2.212 1.517 3.522 1.094 1.349-.439 1.853-1.872 2.258-3.025a5.248 5.248 0 0 1 .609-1.372 5.081 5.081 0 0 1 1.521-.167c1.213-.031 2.722-.069 3.548-1.2s.395-2.567.053-3.724a5.154 5.154 0 0 1-.313-1.512 5.178 5.178 0 0 1 1.1-.985c.978-.746 2.2-1.675 2.2-3.112s-1.217-2.366-2.2-3.112a5.365 5.365 0 0 1-1.094-.976 5.012 5.012 0 0 1 .31-1.522c.342-1.157.767-2.6-.053-3.723s-2.336-1.174-3.548-1.2a5.2 5.2 0 0 1-1.514-.163 5.15 5.15 0 0 1-.616-1.377c-.4-1.152-.909-2.586-2.258-3.025-1.31-.426-2.485.383-3.522 1.094a4.935 4.935 0 0 1-1.385.778 4.926 4.926 0 0 1-1.385-.778C13.457.504 12.282-.302 10.972.122 9.623.561 9.119 1.994 8.714 3.147A5.248 5.248 0 0 1 8.1 4.514a5.081 5.081 0 0 1-1.521.167c-1.213.031-2.722.069-3.548 1.2s-.395 2.567-.053 3.724a5.154 5.154 0 0 1 .315 1.519 5.178 5.178 0 0 1-1.1.985Z"
            fill="#f8ad3d"
        />
        <StyledG fill={fill}>
            <path
                data-name="Path 29900"
                d="M25.371 13.072a.975.975 0 0 0-1.9.425c.031.141.059.283.084.426a7.973 7.973 0 0 1 .108 1.3 7.8 7.8 0 1 1-7.8-7.8A7.715 7.715 0 0 1 19.821 8.5a.975.975 0 0 0 .988-1.681 9.734 9.734 0 1 0 4.564 6.249Z"
            />
            <path
                data-name="Path 29901"
                d="M22.419 11.001a.975.975 0 1 0 1.636-1.061 9.856 9.856 0 0 0-.669-.913.975.975 0 0 0-1.5 1.239 8.026 8.026 0 0 1 .538.734Z"
            />
            <path
                data-name="Path 29902"
                d="M14.888 11.043v4.874a.975.975 0 0 0 .539.872l3.9 1.949a.975.975 0 1 0 .872-1.744l-3.36-1.68v-4.271a.975.975 0 1 0-1.95 0Z"
                stroke="#fff"
                strokeWidth={0.5}
            />
        </StyledG>
    </svg>
);

VerificationIcon.defaultProps = {
    width: 31.752,
    height: 30.442,
};

export default VerificationIcon;
