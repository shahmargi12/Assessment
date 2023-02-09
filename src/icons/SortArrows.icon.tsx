import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};
const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack30)};
`;

const SortIcon = ({ width, height, fill }: IconType) => (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} viewBox="0 0 10.102 14.123">
        <path
            data-name="Path 27652"
            d="M6.5 7.546h9.08a.5.5 0 0 0 .356-.861L11.4 2.148a.5.5 0 0 0-.713 0L6.148 6.686a.5.5 0 0 0 .356.861z"
            transform="translate(-5.99 -1.999)"
        />
        <path
            data-name="Path 27653"
            d="M15.58 19H6.5a.5.5 0 0 0-.356.861l4.542 4.539a.5.5 0 0 0 .713 0l4.538-4.538A.5.5 0 0 0 15.58 19z"
            transform="translate(-5.99 -10.427)"
        />
    </StyledSVG>
);

SortIcon.defaultProps = {
    width: 17,
    height: 17,
};

export default SortIcon;
