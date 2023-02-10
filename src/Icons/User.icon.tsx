import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack70)};
`;

const UserIcon = ({ width, height, fill, props }: IconType) => (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} {...props}>
        <g data-name="Group 41444">
            <path
                data-name="Path 28778"
                d="M131.932 128.442a3.989 3.989 0 1 1-4.1 3.867 3.956 3.956 0 0 1 4.1-3.867zm2.275 3.992a2.39 2.39 0 1 0-2.39 2.385 2.35 2.35 0 0 0 2.391-2.385z"
                transform="translate(-126.249 -128.439)"
            />
            <path
                data-name="Path 28779"
                d="M101.518 304.1a6.992 6.992 0 0 1 4.092 1.158 3.58 3.58 0 0 1 1.562 2.2 3.057 3.057 0 0 1 .06.739.788.788 0 0 1-1.562.015 1.969 1.969 0 0 0-.888-1.582 4.658 4.658 0 0 0-2.2-.858 5.559 5.559 0 0 0-3.513.549 4.715 4.715 0 0 0-.928.709 1.539 1.539 0 0 0-.459 1.093.744.744 0 0 1-.818.768.752.752 0 0 1-.763-.828 3.29 3.29 0 0 1 1.282-2.53 6.07 6.07 0 0 1 3.2-1.347c.356-.051.717-.066.935-.086z"
                transform="translate(-96.099 -295.334)"
            />
            <path
                data-name="Path 28780"
                d="M292.314 132.6a3.956 3.956 0 0 1-3.423 3.827 3.265 3.265 0 0 1-.539.04.8.8 0 1 1-.02-1.6 2.378 2.378 0 0 0 2.256-3.189 2.343 2.343 0 0 0-2.176-1.592c-.479-.01-.744-.18-.848-.549a.784.784 0 0 1 .773-1.048 3.95 3.95 0 0 1 3.952 3.623c.011.163.02.327.025.488z"
                transform="translate(-277.972 -128.489)"
            />
            <path
                data-name="Path 28781"
                d="M325.014 311.941a.868.868 0 0 1-1.123.923.65.65 0 0 1-.524-.609 2.223 2.223 0 0 0-1.4-1.956 6.476 6.476 0 0 0-1.153-.419.788.788 0 0 1 .04-1.547.472.472 0 0 1 .2 0 5.766 5.766 0 0 1 3.184 1.776 3.077 3.077 0 0 1 .776 1.832z"
                transform="translate(-309.016 -299.343)"
            />
        </g>
    </StyledSVG>
);

UserIcon.defaultProps = {
    width: 16,
    height: 13.559,
};

export default UserIcon;
