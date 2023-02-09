import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const RightArrowIcon = ({ width, height, fill }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <g data-name="Path 11449">
            <StyledPath
                data-name="Path 29380"
                d="M9.735 4.132 5.7.273A1 1 0 0 0 5 0h-.006A1.015 1.015 0 0 0 4.3.273L.274 4.119A.954.954 0 0 0 0 4.805a.945.945 0 0 0 .32.661 1.039 1.039 0 0 0 1.347 0L5 2.282l3.328 3.172a1.026 1.026 0 0 0 1.407-.038.91.91 0 0 0 0-1.284z"
                transform="rotate(90 2.857 2.857)"
                fill={fill}
            />
        </g>
    </svg>
);

RightArrowIcon.defaultProps = {
    width: 7.28,
    height: 13.4,
};

export default RightArrowIcon;