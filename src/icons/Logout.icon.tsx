import React from "react"
import styled from 'styled-components';
import { IconType } from '../types/common';

type ColorType = {
    fill?: string;
};

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const Logout = ({ width, height, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g
            data-name="Group 51736"
            style={{
                opacity: 0.8,
            }}
        >
            <StyledPath
                data-name="Path 29970"
                d="M6.5 41.012H3.248A3.248 3.248 0 0 1 0 37.764v-8.118A3.248 3.248 0 0 1 3.248 26.4H6.5a3.248 3.248 0 0 1 3.248 3.248v.812a.812.812 0 1 1-1.624 0v-.812A1.624 1.624 0 0 0 6.5 28.022H3.248a1.624 1.624 0 0 0-1.624 1.624v8.119a1.624 1.624 0 0 0 1.624 1.624H6.5a1.624 1.624 0 0 0 1.624-1.624v-.812a.812.812 0 1 1 1.624 0v.812A3.248 3.248 0 0 1 6.5 41.012zm4.668-3.248a.812.812 0 0 1-.574-1.386l1.862-1.862H5.074a.812.812 0 0 1 0-1.624h7.377l-1.862-1.862a.812.812 0 0 1 1.148-1.148l3.247 3.248a.813.813 0 0 1 .168.882.807.807 0 0 1-.142.224l-.025.027-3.248 3.247a.809.809 0 0 1-.574.254z"
                transform="translate(0 -26.398)"
                style={{
                    fill: fill,
                }}
            />
        </g>
    </svg>
);

Logout.defaultProps = {
    width: 15.223,
    height: 14.614,
};

export default Logout;
