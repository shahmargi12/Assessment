import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const RightArrowWithDash = ({ width, height, ...props }: IconType) => (
    <svg
        id="left-arrow"
        xmlns="http://www.w3.org/2000/svg"
        width={height}
        height={width}
        viewBox="0 0 14 13.109"
        {...props}
    >
        <g id="Group_51761" data-name="Group 51761" transform="translate(0)">
            <StyledPath
                id="Path_29975"
                data-name="Path 29975"
                d="M.96,47.683H9.87a.366.366,0,0,0,.256-.623L6.785,43.726a.967.967,0,0,1,0-1.363.982.982,0,0,1,1.363,0l5.605,5.6a.871.871,0,0,1,.117.147,1.7,1.7,0,0,1,.088.161l.037.11a.789.789,0,0,1,0,.081.965.965,0,0,1,0,.183,1,1,0,0,1,0,.191V49a.658.658,0,0,1-.059.117l-.037.073a.928.928,0,0,1-.11.125L8.185,54.922a.982.982,0,0,1-1.363,0,.96.96,0,0,1,0-1.356l3.3-3.341A.366.366,0,0,0,9.87,49.6H.96a.96.96,0,1,1,0-1.92Z"
                transform="translate(0 -42.089)"
            />
        </g>
    </svg>
);

RightArrowWithDash.defaultProps = {
    width: 7.28,
    height: 13.4,
};

export default RightArrowWithDash;
