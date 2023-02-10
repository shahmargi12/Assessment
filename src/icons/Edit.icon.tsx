import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack30)};
`;

const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const EditIcon = ({ width, height, fill, ...props }: IconType) => (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} {...props}>
        <g data-name="Group 51427">
            <StyledPath
                data-name="Path 29534"
                d="M95.3 412.988a.936.936 0 0 1-.676-.651.824.824 0 0 1 .817-1.08h13.253a.876.876 0 0 1 .911.985.816.816 0 0 1-.549.674c-.066.028-.131.047-.192.071z"
                transform="translate(-94.575 -394.988)"
            />
            <StyledPath
                data-name="Path 29535"
                d="M105.641 64.6A3.153 3.153 0 0 1 108 65.623c.2.211.394.418.592.624a3.206 3.206 0 0 1-.052 4.442q-3.894 3.905-7.8 7.8a2.352 2.352 0 0 1-1.272.615q-1.493.288-2.977.6a1.811 1.811 0 0 1-2.122-1.337 2.565 2.565 0 0 1 .042-1.163c.2-.934.394-1.862.587-2.8a2.139 2.139 0 0 1 .592-1.1l7.746-7.754a3.2 3.2 0 0 1 2.305-.95zM96.1 77.946a.659.659 0 0 0 .1 0q1.577-.26 3.15-.53a.329.329 0 0 0 .16-.094q3.88-3.891 7.761-7.792a1.374 1.374 0 0 0 .009-2.022c-.221-.235-.451-.46-.681-.685a1.428 1.428 0 0 0-2.023 0q-3.88 3.877-7.746 7.759a.426.426 0 0 0-.1.211c-.07.319-.131.643-.192.962a96.433 96.433 0 0 0-.438 2.191z"
                transform="translate(-94.313 -64.6)"
            />
        </g>
    </StyledSVG>
);

EditIcon.defaultProps = {
    width: 15.145,
    height: 18,
};

export default EditIcon;
