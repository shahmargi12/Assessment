import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const CheckboxSelected = ({ height, width, fill, ...props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        height={height}
        width={width}
        {...props}
    >
        <StyledPath
            d="M156 885h12c3.3 0 6 2.7 6 6v12c0 3.3-2.7 6-6 6h-12c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6z"
            fill={fill}
            transform="translate(-150 -885)"
        />
        <StyledPath
            d="M12 1c0 .3-.1.5-.3.7L5.1 8.3c-.4.4-1.1.4-1.5 0L.3 5c-.4-.4-.4-1 0-1.4.2-.2.4-.3.7-.3.3 0 .5.1.7.3l2.6 2.6L10.2.4c.4-.4 1-.4 1.4 0 .3 0 .4.3.4.6z"
            style={{
                fill: '#fff',
            }}
            transform="translate(5.999 7.68)"
        />
    </svg>
);

CheckboxSelected.defaultProps = {
    height: 22,
    width: 22,
};

export default CheckboxSelected;
