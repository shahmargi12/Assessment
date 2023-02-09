import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.white)};
`;

const GraphIcon = ({ height, width, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 18 18">
        <defs>
            <clipPath id="pfnetmf9sa">
                <StyledPath
                    data-name="Rectangle 27469"
                    transform="translate(1512 2254)"
                    fill={fill}
                    d="M0 0h18v18H0z"
                />
            </clipPath>
        </defs>
        <g data-name="Mask Group 54" transform="translate(-1512 -2254)" style={{ clipPath: 'url(#pfnetmf9sa)' }}>
            <g data-name="Group 50919">
                <StyledPath
                    data-name="Path 29870"
                    d="M18 17.331v.281a.817.817 0 0 1-.387.387H.387c-.028-.018-.056-.037-.085-.053a.526.526 0 0 1 .23-1h.558v-3.6a.545.545 0 0 1 .625-.622h1.951a.534.534 0 0 1 .588.589v3.616h1.055v-4.84c0-.433.2-.628.636-.629h1.933a.537.537 0 0 1 .594.6v4.874h1.055v-6.772c0-.437.2-.635.629-.635h1.881c.462 0 .654.19.654.647v6.759h1.055V6.654c0-.448.193-.642.64-.642h1.9a.546.546 0 0 1 .626.622V16.94c.411.027.874-.117 1.09.391z"
                    fill={fill}
                    transform="translate(1512 2254.001)"
                />
                <StyledPath
                    data-name="Path 29871"
                    d="M18 3.621v.246c-.2.413-.545.529-.851.271a.686.686 0 0 1-.2-.318c-.161-.556-.305-1.117-.456-1.676-.012-.044-.028-.087-.042-.131-.3.438-.577.88-.891 1.293a20.859 20.859 0 0 1-8.84 6.747A16.516 16.516 0 0 1 2.428 11.2c-.62.076-1.249.094-1.874.123A.512.512 0 0 1 0 10.812a.534.534 0 0 1 .535-.538c.31-.015.62-.016.93-.037a15.218 15.218 0 0 0 4.617-1.065 19.841 19.841 0 0 0 8.43-6.227c.387-.49.721-1.021 1.079-1.533l-.037-.047c-.08.018-.161.034-.24.055-.582.156-1.162.316-1.745.469a.527.527 0 0 1-.7-.541.516.516 0 0 1 .391-.466Q14.864.447 16.475.02a.516.516 0 0 1 .65.407c.258.954.512 1.909.77 2.863.031.112.07.221.1.331z"
                    fill={fill}
                    transform="translate(1512 2254.001)"
                />
                <StyledPath
                    data-name="Path 29872"
                    d="M17.613 18a.815.815 0 0 0 .387-.388V18z"
                    fill={fill}
                    transform="translate(1512 2254.001)"
                />
            </g>
        </g>
    </svg>
);

GraphIcon.defaultProps = {
    width: 18,
    height: 18,
};

export default GraphIcon;