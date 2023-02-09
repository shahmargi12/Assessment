import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';



const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const ThreeDotIcon = ({ width, height, fill, props }: IconType) => (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} {...props}>
        <g transform="rotate(90 10 10)">
            <circle data-name="Ellipse 66" cx={2} cy={2} r={2} />
            <circle data-name="Ellipse 67" cx={2} cy={2} r={2} transform="translate(0 8)" />
            <circle data-name="Ellipse 68" cx={2} cy={2} r={2} transform="translate(0 16)" />
        </g>
    </StyledSVG>
);

ThreeDotIcon.defaultProps = {
    width: 20,
    height: 4,
};

export default ThreeDotIcon;
