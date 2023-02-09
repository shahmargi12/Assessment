import React from "react"
import styled from 'styled-components';
import { IconType } from '../types/common';
type ColorType = {
    fill: string;
};
const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;
const PlusIcon = ({ width, height, fill, ...props }: IconType) => (
    <svg width={width} height={height} viewBox="0 0 14.1 14.1" xmlSpace="preserve" {...props}>
        <StyledPath
            d="M13.4 6H8.2V.8c0-.4-.4-.8-.8-.8h-.7c-.4 0-.7.4-.7.8V6H.8c-.5 0-.8.3-.8.7v.7c0 .4.3.8.8.8H6v5.2c0 .4.3.8.8.8h.7c.4 0 .8-.3.8-.8V8.2h5.2c.4 0 .8-.3.8-.8v-.7c-.2-.4-.5-.7-.9-.7z"
            fill={fill}
        />
    </svg>
);

PlusIcon.defaultProps = {
    width: 14.123,
    height: 14.127,
};

export default PlusIcon;
