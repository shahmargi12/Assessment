import React from 'react';
import styled from 'styled-components';
import { IconType } from '../types/common';

type ColorType = {
    fill: string;
};

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const InfoIcon = ({ height, width, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            fill={fill}
            data-name="Path 29976"
            d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm0 14.545A6.545 6.545 0 1 1 14.545 8 6.553 6.553 0 0 1 8 14.545z"
        />
        <StyledPath
            fill={fill}
            data-name="Path 29977"
            d="M145.978 70a.976.976 0 1 0 .976.977.978.978 0 0 0-.976-.977z"
            transform="translate(-137.978 -66.609)"
        />
        <StyledPath
            fill={fill}
            data-name="Path 29978"
            d="M150.732 140a.732.732 0 0 0-.732.732v4.394a.732.732 0 1 0 1.465 0v-4.394a.732.732 0 0 0-.733-.732z"
            transform="translate(-142.732 -133.239)"
        />
    </svg>
);

InfoIcon.defaultProps = {
    width: 16,
    height: 16,
};

export default InfoIcon;
