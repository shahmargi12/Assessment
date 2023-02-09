import * as React from "react"
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

const StyledIcon = styled.path`
    fill: ${({ theme }) => theme.colors.primaryBlack};
`;

const DownArrowIcon = ({ width, height, fill, ...props }: IconType) => (
    <svg
        height={height}
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 8"
        {...props}
        xmlSpace="preserve"
    >
        <StyledIcon d="M13.6 2.2 8 7.6c-.3.3-.6.4-1 .4s-.7-.1-1-.4L.4 2.2C.1 2 0 1.6 0 1.3 0 .9.2.6.4.4c.5-.5 1.3-.5 1.9 0L7 4.8 11.7.4c.6-.5 1.4-.5 2 .1.4.4.4 1.2-.1 1.7z" />
    </svg>
);

DownArrowIcon.defaultProps = {
    width: 12,
    height: 6.75,
};

export default DownArrowIcon
