import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';


const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.bluishGrey1)};
`;

const UploadIcon = ({ width, height, fill, props }: IconType) => (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} {...props}>
        <g data-name="Group 51002">
            <path
                data-name="Path 22901"
                d="M0 336.233c.022-.051.045-.1.064-.152a1.112 1.112 0 0 1 1.041-.723c.363-.005.726 0 1.089 0H16.8a1.125 1.125 0 0 1 1.172.826 1.075 1.075 0 0 1-.783 1.291l-.132.041H.949a1.2 1.2 0 0 1-.73-.448 3.786 3.786 0 0 1-.219-.43v-.4"
                transform="translate(0 -335.356)"
            />
            <path
                data-name="Path 22902"
                d="M89.324 3.7a1.175 1.175 0 0 0 .117.149q.972.908 1.948 1.812a1.171 1.171 0 0 0 1.151.277 1.047 1.047 0 0 0 .8-.792A1.024 1.024 0 0 0 93 4.1q-1.636-1.518-3.269-3.039c-.252-.234-.5-.47-.757-.7a1.216 1.216 0 0 0-1.723 0q-2.026 1.87-4.042 3.749a1.008 1.008 0 0 0-.323 1.095 1.061 1.061 0 0 0 .852.748 1.191 1.191 0 0 0 1.109-.312q.96-.895 1.922-1.789a1.763 1.763 0 0 0 .126-.144l.052.018v8.23a1.163 1.163 0 0 0 2.317.1c.006-.135 0-.27 0-.4v-7.92l.058-.037"
                transform="translate(-79.104 4.915)"
            />
        </g>
    </StyledSVG>
);

UploadIcon.defaultProps = {
    width: 18,
    height: 18,
};

export default UploadIcon;
