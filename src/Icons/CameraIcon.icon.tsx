import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.white)};
`;

const CameraIcon = ({ width, height, fill, props }: IconType) => (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} {...props}>
        <path
            data-name="Path 29351"
            d="M63.905 158.924c.026-.121.052-.241.083-.362a2.633 2.633 0 0 1 2.483-1.966.98.98 0 0 1 .136 1.955c-.569.068-.751.278-.751.854v8.241c0 .561.25.813.809.813h14.471c.558 0 .814-.252.814-.813v-8.3a.689.689 0 0 0-.715-.792.969.969 0 0 1-.929-.87.921.921 0 0 1 .715-1.043 2.561 2.561 0 0 1 1 .068A2.587 2.587 0 0 1 83.9 159.2q.008 4.309 0 8.618a2.619 2.619 0 0 1-2.6 2.602q-7.4.008-14.8 0a2.625 2.625 0 0 1-2.567-2.207.908.908 0 0 0-.037-.11q.012-4.584.009-9.179z"
            transform="translate(-63.9 -153.225)"
        />
        <path
            data-name="Path 29352"
            d="M186.521 205.8a3.827 3.827 0 1 1-3.822 3.822 3.837 3.837 0 0 1 3.822-3.822zm1.866 3.822a1.861 1.861 0 1 0-1.851 1.861 1.865 1.865 0 0 0 1.852-1.861z"
            transform="translate(-176.521 -199.85)"
        />
        <path
            data-name="Path 29353"
            d="M168.274 92.305c.64 0 1.284-.005 1.924 0a2.447 2.447 0 0 1 2.39 1.871c.189.734.351 1.473.519 2.212a.982.982 0 1 1-1.919.414l-.472-2.044a.541.541 0 0 0-.634-.5h-3.591c-.393 0-.545.126-.64.519a243.31 243.31 0 0 1-.477 2.039.977.977 0 0 1-.944.8.928.928 0 0 1-.938-.661 1.332 1.332 0 0 1-.021-.592c.147-.718.32-1.426.493-2.139a2.442 2.442 0 0 1 2.406-1.924c.636 0 1.27.005 1.904.005z"
            transform="translate(-158.279 -92.3)"
        />
    </StyledSVG>
);

CameraIcon.defaultProps = {
    width: 20,
    height: 17.199,
};

export default CameraIcon;
