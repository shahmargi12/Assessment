import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';
type ColorType = {
    fill: string;
};
const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const EditWihtoutLine = ({ height, width, fill, ...props }: IconType) => (
    <svg data-name="pencil (1)" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g data-name="Group 51038">
            <StyledPath
                data-name="Path 29368"
                d="M112.162 100.545a4.006 4.006 0 0 1-1.063 2.782c-.09.1-.18.19-.276.281q-3.894 3.894-7.779 7.794a1.824 1.824 0 0 1-1.118.566c-1.594.21-3.178.446-4.766.672a.8.8 0 0 1-.987-.947c.236-1.7.486-3.4.727-5.1a1.066 1.066 0 0 1 .331-.632q3.654-3.654 7.312-7.3a11.176 11.176 0 0 1 1.388-1.283 3.963 3.963 0 0 1 6.195 2.691c.021.175.026.366.036.476zM97.9 110.915c1.283-.185 2.531-.361 3.779-.546a.517.517 0 0 0 .266-.145q2.864-2.857 5.724-5.714a.612.612 0 0 1 .125-.09c-1.143-1.143-2.255-2.26-3.388-3.393a1.719 1.719 0 0 1-.105.13q-2.834 2.834-5.669 5.663a.717.717 0 0 0-.211.436c-.09.667-.19 1.338-.286 2-.081.544-.157 1.088-.235 1.659zm11.041-7.708c.336-.331.687-.652 1.012-1a2.354 2.354 0 0 0-.747-3.709 2.3 2.3 0 0 0-2.531.311 10.619 10.619 0 0 0-1.037 1.088 1135.86 1135.86 0 0 0 3.302 3.309z"
                transform="translate(-96.162 -96.648)"
                fill={fill}
            />
        </g>
    </svg>
);

EditWihtoutLine.defaultProps = {
    width: 16,
    height: 16,
};

export default EditWihtoutLine;
