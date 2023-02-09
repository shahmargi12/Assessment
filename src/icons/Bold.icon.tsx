import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.darkGreyBlue)};
`;

const Bold = ({ height, width, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            d="M18.038 6.333a2.671 2.671 0 0 0 1.7-2.529C19.743 1.351 18.2 0 15.4 0H9.893a.27.27 0 0 0-.27.27v12.574a.27.27 0 0 0 .27.27H15.4c3.185 0 4.733-1.263 4.733-3.86a3.211 3.211 0 0 0-2.095-2.921zM15.4 10.81h-3.341V7.438H15.4c1.1 0 2.279.6 2.279 1.71.003 1.152-1.141 1.662-2.279 1.662zm0-5.546h-3.341V2.248H15.4c1.749 0 1.885 1.233 1.885 1.611.003.655-.211 1.406-1.885 1.406z"
            transform="translate(-9.623)"
            fill={fill}
        />
    </svg>
);

Bold.defaultProps = {
    height: 13.115,
    width: 10.513,
};

export default Bold;