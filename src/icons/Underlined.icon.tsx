import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.darkGreyBlue)};
`;

const SvgComponent = ({ fill, height, width, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            data-name="Path 8542"
            d="M2 15h9.836v.82H2z"
            transform="translate(-2 -2.705)"
            style={{
                fill: fill,
            }}
        />
        <StyledPath
            data-name="Path 8543"
            d="M9.377 0v6.885a2.067 2.067 0 0 1-2.131 2.131H6.59a2.067 2.067 0 0 1-2.131-2.131V0H2v6.885a4.583 4.583 0 0 0 4.59 4.59h.738a4.583 4.583 0 0 0 4.59-4.59V0H9.377z"
            transform="translate(-2)"
            style={{
                fill: fill,
            }}
        />
    </svg>
);

SvgComponent.defaultProps = {
    height: 13.115,
    width: 9.918,
};

export default SvgComponent;