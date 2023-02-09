import React from "react"
import styled from 'styled-components';
import { IconType } from '../types/common';

type ColorType = {
    fill?: string;
};

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const Account = ({ height, width, fill, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g
            data-name="Layer 2"
            style={{
                opacity: 0.8,
            }}
        >
            <StyledPath
                data-name="Path 29971"
                d="M9.43 9.936A4.468 4.468 0 1 0 5 5.468a4.449 4.449 0 0 0 4.43 4.468zm0-7.148a2.681 2.681 0 1 1-2.658 2.68A2.67 2.67 0 0 1 9.43 2.787z"
                transform="translate(-2.319 -1)"
                style={{
                    fill: fill,
                }}
            />
            <StyledPath
                data-name="Path 29972"
                d="M13.111 12h-8a3.127 3.127 0 0 0 0 6.255h8a3.127 3.127 0 0 0 0-6.255zm0 4.468h-8a1.34 1.34 0 0 1 0-2.681h8a1.34 1.34 0 0 1 0 2.681z"
                transform="translate(-2 -2.255)"
                style={{
                    fill: fill,
                }}
            />
        </g>
    </svg>
);

Account.defaultProps = {
    width: 14.222,
    height: 16,
};

export default Account;
