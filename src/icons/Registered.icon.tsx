import React, { FC } from 'react';
import styled from 'styled-components';
import { IconType } from '../types/common';
const StyledPath = styled.path`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
    fill-rule: evenodd;
`;

const RegisteredIcon = ({ width, height, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g
            style={{
                opacity: 0.8,
            }}
        >
            <StyledPath
                data-name="Path 30146"
                d="m337.481 225.028-2.913 5.046a1.5 1.5 0 0 0-.2.66c-.02.318-.062 1.015-.1 1.675a1.5 1.5 0 0 0 2.325 1.342l1.4-.924a1.5 1.5 0 0 0 .473-.5l2.913-5.046a1.5 1.5 0 0 0-.549-2.05l-1.3-.75a1.5 1.5 0 0 0-2.049.547zm2.526-2.54v-2.237a2.251 2.251 0 0 0-2.252-2.251h-7.5a2.252 2.252 0 0 0-2.255 2.251v10.506a2.251 2.251 0 0 0 2.251 2.251h2.206a.75.75 0 1 0 0-1.5h-2.206a.751.751 0 0 1-.75-.75v-10.507a.751.751 0 0 1 .75-.75h7.5a.751.751 0 0 1 .75.75v2.237a.75.75 0 1 0 1.5 0zm-1.226 3.291 1.3.75-2.913 5.046-1.4.924.1-1.675zm-7.028 3.477h1.632a.75.75 0 0 0 0-1.5h-1.632a.75.75 0 0 0 0 1.5zm0-3h3.264a.75.75 0 1 0 0-1.5h-3.264a.75.75 0 0 0 0 1.5zm0-3h4.5a.75.75 0 1 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5z"
                transform="translate(-328 -218)"
                fill={fill}
            />
        </g>
    </svg>
);
RegisteredIcon.defaultProps = {
    width: 13.581,
    height: 16,
};

export default RegisteredIcon;
