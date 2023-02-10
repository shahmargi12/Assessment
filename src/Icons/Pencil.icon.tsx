import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const PencilIcon = ({ width, height, fill, props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        style={{
            enableBackground: 'new 0 0 16 16',
        }}
        height={height}
        width={width}
        xmlSpace="preserve"
        {...props}
    >
        <StyledPath
            fill={fill}
            d="M16 3.9c0 1-.4 2-1.1 2.8l-.3.3-7.8 7.8c-.3.3-.7.5-1.1.6-1.5.1-3.1.4-4.7.6-.4.1-.9-.1-1-.6V15c.2-1.7.5-3.4.7-5.1 0-.2.2-.5.3-.6C3.5 6.9 5.9 4.4 8.4 2c.4-.5.9-.9 1.4-1.3 1.8-1.3 4.3-.8 5.5 1 .4.5.6 1.1.7 1.7v.5zM1.7 14.3c1.3-.2 2.5-.4 3.8-.5.1 0 .2-.1.3-.1L11.5 8l.1-.1-3.4-3.4-.1.1-5.7 5.7c-.1.1-.2.3-.2.4-.1.7-.2 1.3-.3 2 0 .5-.1 1-.2 1.6zm11.1-7.7 1-1c.9-1 .8-2.5-.2-3.3-.2-.2-.4-.3-.6-.4-.8-.4-1.8-.3-2.5.3-.4.3-.7.7-1 1.1 1.1 1 2.2 2.1 3.3 3.3z"
        />
    </svg>
);

PencilIcon.defaultProps = {
    width: 16,
    height: 16.003,
};

export default PencilIcon;
