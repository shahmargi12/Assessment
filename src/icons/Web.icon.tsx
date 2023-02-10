import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack70)};
`;

const WebIcon = ({ width, height, fill, props }: IconType) => (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} {...props}>
        <g data-name="Group 41443">
            <path
                data-name="Path 28777"
                d="M75.985 68.5a7.987 7.987 0 1 1-.009 15.974 7.987 7.987 0 0 1 .009-15.974zm2.289 7.3v-.179a14.223 14.223 0 0 0-.413-2.842 6.837 6.837 0 0 0-.9-2.178 3.1 3.1 0 0 0-.591-.634.6.6 0 0 0-.779 0 2.25 2.25 0 0 0-.413.391 4.686 4.686 0 0 0-.723 1.319 11.869 11.869 0 0 0-.7 3.089c-.034.34-.051.685-.077 1.038zm.017 1.378h-4.6v.2a14.817 14.817 0 0 0 .353 2.6 7.847 7.847 0 0 0 .859 2.263 2.307 2.307 0 0 0 .676.77.645.645 0 0 0 .8 0 2.28 2.28 0 0 0 .391-.366 4.3 4.3 0 0 0 .668-1.166 11.138 11.138 0 0 0 .736-3.016c.053-.425.079-.846.117-1.28zm.047-6.9A13.645 13.645 0 0 1 79.61 75.8h2.99a6.644 6.644 0 0 0-4.262-5.522zm1.268 6.9a16.961 16.961 0 0 1-.345 2.838 10.262 10.262 0 0 1-.94 2.71 6.707 6.707 0 0 0 3.127-2.442 6.512 6.512 0 0 0 1.152-3.105zm-5.981-6.892a6.608 6.608 0 0 0-4.25 5.522h2.982a13.663 13.663 0 0 1 1.267-5.521zm-4.263 6.892a6.689 6.689 0 0 0 4.275 5.539 13.643 13.643 0 0 1-1.281-5.539z"
                transform="translate(-68 -68.5)"
            />
        </g>
    </StyledSVG>
);

WebIcon.defaultProps = {
    width: 16,
    height: 15.974,
};

export default WebIcon;
