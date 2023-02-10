import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const DownloadCloudIcon = ({ height, width, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g>
            <StyledPath
                data-name="Path 29541"
                d="M8.261 6.336a1.707 1.707 0 0 1-.184.644l-2.3 2.3a2.475 2.475 0 0 1-1.657.736 2.515 2.515 0 0 1-1.75-.734l-2.3-2.3-.092-.092A.994.994 0 0 1-.3 6.244.836.836 0 0 1-.024 5.6a.9.9 0 0 1 1.289.092l1.749 1.749V.721A.87.87 0 0 1 3.935-.2a.87.87 0 0 1 .921.921v6.812L6.6 5.692a.89.89 0 0 1 1.289 0 .8.8 0 0 1 .372.644z"
                transform="translate(5.345 6.125)"
                fill={fill}
            />
            <StyledPath
                data-name="Path 29542"
                d="M18.58 8.269a4.4 4.4 0 0 1-.921 2.578 4.244 4.244 0 0 1-2.394 1.381 1 1 0 0 1-1.1-.644v-.092a.846.846 0 0 1 .736-1.013 2.364 2.364 0 0 0 1.933-2.3 2.264 2.264 0 0 0-1.289-2.025.939.939 0 0 1-.46-.736v-.739a3.243 3.243 0 0 0-3.222-3.13 3.259 3.259 0 0 0-3.222 2.67c-.276.276-.46.552-.829.644a.833.833 0 0 1-.921-.276 1.939 1.939 0 0 0-1.2-.46H5.6A1.454 1.454 0 0 0 4.127 5.6v1.2a.85.85 0 0 1-.921.829h-.092A1.6 1.6 0 0 0 1.549 9.1a1.478 1.478 0 0 0 .46 1.013 1.184 1.184 0 0 0 1.1.368h.368a.908.908 0 0 1 .829.921.825.825 0 0 1-.829.829h-.363a3.443 3.443 0 0 1-2.3-.921A2.992 2.992 0 0 1-.2 9.006a3.343 3.343 0 0 1 2.486-3.13V5.6A3.408 3.408 0 0 1 5.6 2.377a4.169 4.169 0 0 1 1.473.276A4.5 4.5 0 0 1 8.361 1a5.409 5.409 0 0 1 3.314-1.2 4.992 4.992 0 0 1 5.063 4.787v.368a3.89 3.89 0 0 1 1.842 3.314z"
                transform="translate(.2 .203)"
                fill={fill}
            />
        </g>
    </svg>
);

DownloadCloudIcon.defaultProps = {
    width: 20.4,
    height: 17.536,
};

export default DownloadCloudIcon;
