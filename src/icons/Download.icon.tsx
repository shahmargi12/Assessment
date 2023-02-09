import React from "react"
import styled from 'styled-components';
import { IconType } from '../types/common';

type ColorType = {
    fill?: string;
};

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const DownloadIcon = ({ height, width, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g data-name="Group 51718">
            <StyledPath
                data-name="Path 22901"
                d="M0 336.027c.017-.039.035-.077.05-.116a.864.864 0 0 1 .809-.553h12.205a.873.873 0 0 1 .912.632.822.822 0 0 1-.609.987l-.1.031H.738a.932.932 0 0 1-.568-.343 2.876 2.876 0 0 1-.17-.328v-.309"
                transform="translate(0 -323.35)"
                fill={fill}
            />
            <StyledPath
                data-name="Path 22902"
                d="M87.943 7.178a.9.9 0 0 1 .092-.114q.765-.694 1.533-1.385a.941.941 0 0 1 .906-.212.813.813 0 0 1 .633.605.77.77 0 0 1-.274.8q-1.288 1.161-2.573 2.324c-.2.179-.4.36-.6.537a.977.977 0 0 1-1.356 0q-1.588-1.433-3.175-2.87a.757.757 0 0 1-.254-.837.827.827 0 0 1 .67-.572.956.956 0 0 1 .873.239l1.513 1.367a1.363 1.363 0 0 1 .1.11l.041-.014V.864a.918.918 0 0 1 1.824-.08v6.365l.046.028"
                transform="translate(-79.982)"
                fill={fill}
            />
        </g>
    </svg>
);

DownloadIcon.defaultProps = {
    height: 13.657,
    width: 14,
};

export default DownloadIcon;
