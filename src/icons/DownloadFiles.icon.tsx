import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};
const StyledRect = styled.rect<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.darkBlueGrey)};
`;

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.darkGreyBlue)};
`;

const DownloadFilesIcon = ({ width, height, fill, fill2, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g data-name="Group 42938" transform="translate(-1198 -767)">
            <StyledRect
                data-name="Rectangle 23181"
                width={40}
                height={40}
                rx={4}
                transform="translate(1198 767)"
                fill={fill}
            />
            <g data-name="Group 41262">
                <g data-name="Group 41261">
                    <StyledPath
                        data-name="Path 28287"
                        d="M39.469 50.331a.98.98 0 0 0-1.391 0L35.27 53.19v-9.711a.979.979 0 1 0-1.958 0v9.608l-2.756-2.731a.984.984 0 1 0-1.391 1.391l3.065 3.091a2.985 2.985 0 0 0 4.225 0l3.065-3.091a1.065 1.065 0 0 0-.051-1.416z"
                        transform="translate(1183.615 742.145)"
                        fill={fill2}
                    />
                </g>
            </g>
            <g data-name="Group 41264">
                <g data-name="Group 41263">
                    <StyledPath
                        data-name="Path 28288"
                        d="M22.941 13.072v-.613A6.351 6.351 0 0 0 16.408 6.3a6.721 6.721 0 0 0-4.264 1.51 6.121 6.121 0 0 0-1.77 2.336A4.506 4.506 0 0 0 8.43 9.7a4.168 4.168 0 0 0-4.264 4.035v.826A4.081 4.081 0 0 0 .8 18.5a3.885 3.885 0 0 0 1.222 2.855 4.263 4.263 0 0 0 3.017 1.18h.3a.9.9 0 1 0 0-1.793h-.325a2.222 2.222 0 0 1-2.294-2.22A2.31 2.31 0 0 1 5.113 16.3a.923.923 0 0 0 .947-.9v-1.62a2.281 2.281 0 0 1 2.34-2.218 2.462 2.462 0 0 1 1.77.755.966.966 0 0 0 1 .26.906.906 0 0 0 .673-.731 4.6 4.6 0 0 1 4.563-3.7 4.5 4.5 0 0 1 4.613 4.365v1.109a.935.935 0 0 0 .5.8 3.336 3.336 0 0 1 1.895 2.973 3.381 3.381 0 0 1-2.743 3.28.9.9 0 0 0-.723 1.085.95.95 0 0 0 1.147.684 5.582 5.582 0 0 0 3.042-1.793 5.1 5.1 0 0 0 1.222-3.256 5.187 5.187 0 0 0-2.418-4.321z"
                        transform="translate(1204.864 770.509)"
                        fill={fill2}
                    />
                </g>
            </g>
        </g>
    </svg>
);

DownloadFilesIcon.defaultProps = {
    width: 40,
    height: 40,
};

export default DownloadFilesIcon;
