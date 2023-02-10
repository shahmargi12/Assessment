import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack70)};
`;

const ClockIcon = ({ width, height, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g data-name="Pending Request Employers">
            <g data-name="Group 41384">
                <StyledPath
                    data-name="Path 28731"
                    d="M79.8 89.686a9 9 0 1 1 8.895 9.008 9.007 9.007 0 0 1-8.895-9.008zm9.008-7.348a7.359 7.359 0 1 0 7.354 7.348 7.367 7.367 0 0 0-7.355-7.349z"
                    transform="translate(-79.799 -80.698)"
                    fill={fill}
                />
                <StyledPath
                    data-name="Path 28732"
                    d="M239.676 147.949c0-.83-.005-1.659.005-2.489a.789.789 0 0 1 .7-.768.8.8 0 0 1 .9.584 1.4 1.4 0 0 1 .031.358c0 1.413.005 2.822 0 4.235a.43.43 0 0 0 .138.333c.686.676 1.367 1.362 2.048 2.043a.791.791 0 0 1 .23.824.815.815 0 0 1-1.347.369c-.824-.819-1.644-1.644-2.468-2.463a.839.839 0 0 1-.23-.63v-2.4z"
                    transform="translate(-231.488 -141.41)"
                    fill={fill}
                />
            </g>
        </g>
    </svg>
);

ClockIcon.defaultProps = {
    width: 18,
    height: 17.995,
};

export default ClockIcon;
