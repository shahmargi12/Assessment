import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;
const TimeIcon = ({ width, height, fill, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={width} height={height} {...props}>
        <g data-name="Job Time">
            <g data-name="Group 41384">
                <StyledPath
                    data-name="Path 28731"
                    d="M79.8 88.689a8 8 0 1 1 7.908 8.011 8.009 8.009 0 0 1-7.908-8.011zm8.009-6.534a6.543 6.543 0 1 0 6.538 6.534 6.551 6.551 0 0 0-6.539-6.533z"
                    transform="translate(-79.799 -80.698)"
                    fill={fill}
                />
                <StyledPath
                    data-name="Path 28732"
                    d="M239.676 147.587v-2.213a.7.7 0 0 1 .619-.683.714.714 0 0 1 .8.519 1.24 1.24 0 0 1 .027.319v3.765a.382.382 0 0 0 .123.3c.61.6 1.216 1.211 1.821 1.817a.7.7 0 0 1 .2.733.725.725 0 0 1-1.2.328c-.733-.729-1.462-1.462-2.195-2.19a.746.746 0 0 1-.2-.56v-2.131z"
                    transform="translate(-232.396 -141.773)"
                    fill={fill}
                />
            </g>
        </g>
    </svg>
);

TimeIcon.defaultProps = {
    width: 16,
    height: 16,
};

export default TimeIcon;
