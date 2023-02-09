import * as React from 'react';
import styled from 'styled-components';
import { IconType } from '@foster/types/common';
type ColorType = {
    fill: string;
};
const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const SchoolIcon = ({ height, width, fill, ...props }: IconType) => (
    <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 20 20"
        xmlSpace="preserve"
        height={height}
        width={width}
        {...props}
    >
        <StyledPath
            fill={fill}
            d="M9.9,0C9.4,0.1,9,0.5,9,1v2.5L4.4,7.2C4.1,7.4,4,7.7,4,8v2H1c-0.6,0-1,0.4-1,1v8c0,0.6,0.4,1,1,1 h18c0.6,0,1-0.4,1-1v-8c0-0.6-0.4-1-1-1h-3V8c0-0.3-0.1-0.6-0.4-0.8L11,3.5V2h1c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2C10,0,9.9,0,9.9,0 L9.9,0z M10,5.3l4,3.2V18h-3v-3c0-0.6-0.4-1-1-1s-1,0.4-1,1v3H6V8.5L10,5.3z M2,12h2v6H2V12z M16,12h2v6h-2V12z"
        />
    </svg>
);

SchoolIcon.defaultProps = {
    height: 16,
    width: 16,
};

export default SchoolIcon;
