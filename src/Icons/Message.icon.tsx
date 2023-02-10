import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const MessageIcon = ({ height, width, fill }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <g data-name="Group 41430">
            <StyledPath
                data-name="Path 28766"
                d="M64 201.781c.038-.164.071-.329.115-.493a3.454 3.454 0 0 1 3.285-2.608c2.4-.022 4.8-.027 7.194 0a3.455 3.455 0 0 1 3.391 3.424q.025 2.161 0 4.323a3.464 3.464 0 0 1-3.479 3.435c-2.186.005-4.372 0-6.558.005a.667.667 0 0 0-.367.121c-.778.57-1.545 1.151-2.318 1.726-.548.411-.964.307-1.26-.3Q64 206.605 64 201.781zm1.4 8.092c.542-.405 1.041-.773 1.529-1.151a1.166 1.166 0 0 1 .756-.252q3.353.008 6.706.005a2.089 2.089 0 0 0 2.2-2.2v-4a2.213 2.213 0 0 0-.027-.427 2.089 2.089 0 0 0-2.153-1.775c-2.159-.005-4.317 0-6.476.005a4.028 4.028 0 0 0-.855.055 2.09 2.09 0 0 0-1.682 2.131c-.005 2.466 0 4.937 0 7.4z"
                transform="translate(-64 -198.661)"
                style={{
                    fill: fill,
                }}
            />
            <StyledPath
                data-name="Path 28768"
                d="M129.583 263.1h2.11a.707.707 0 1 1 .011 1.408h-4.236a.707.707 0 1 1 .006-1.408z"
                transform="translate(-123.284 -259.573)"
                style={{
                    fill: fill,
                }}
            />
            <StyledPath
                data-name="Path 28769"
                d="M128.545 315.508h-1.116a.692.692 0 0 1-.729-.7.7.7 0 0 1 .729-.707h2.193a.7.7 0 0 1 .74.718.693.693 0 0 1-.74.69h-1.077z"
                transform="translate(-123.274 -307.781)"
                style={{
                    fill: fill,
                }}
            />
        </g>
    </svg>
);

MessageIcon.defaultProps = {
    width: 14,
    height: 14,
};

export default MessageIcon;
