import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const BlueRibbonIcon = ({ height, width, fill, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g data-name="Group 51266">
            <StyledPath
                data-name="Path 29880"
                d="m7075.1-1167.308 16-8h-16z"
                transform="translate(-6953.096 1214.308)"
                fill={fill}
            />
            <StyledPath data-name="Rectangle 27483" d="M0 0h135a3 3 0 0 1 3 3v36H3a3 3 0 0 1-3-3V0z" fill={fill} />
        </g>
    </svg>
);

BlueRibbonIcon.defaultProps = {
    height: 47,
    width: 138,
};

export default BlueRibbonIcon;