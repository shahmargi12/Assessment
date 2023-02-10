import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledSvg = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const Print = ({ width, height, fill, props }: IconType) => {
    return (
        <StyledSvg
            id="printer"
            xmlns="http://www.w3.org/2000/svg"
            x={0}
            y={0}
            viewBox="0 0 19.2 19"
            width={width}
            height={height}
            fill={fill}
            xmlSpace="preserve"
            {...props}
        >
            <path
                id="Path_34837"
                className="st0"
                d="M2 15.1h1.3v2.2c0 1 .8 1.7 1.7 1.7h9.3c.9 0 1.6-.7 1.7-1.6v-2.2h1.3c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2H16V1.6c0-.9-.7-1.6-1.7-1.6H5c-.9 0-1.7.7-1.7 1.6v2.5H2c-1.1 0-2 .9-2 2v7c0 1.2.9 2 2 2zm12.1 2.1h-9v-5.9h9v5.9zm-9-15.4h9v2.4h-9V1.8zM1.8 6.2c0-.2.1-.3.2-.3h15.2c.1 0 .2.1.2.2v7c0 .1-.1.2-.2.2h-1.3v-3c0-.5-.4-.9-.9-.9H4.2c-.5 0-.9.4-.9.9v3H2c-.1 0-.2-.1-.2-.2V6.2z"
            />
            <path id="Path_34838" className="st0" d="M3.6 8.6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9-.9.4-.9.9.4.9.9.9z" />
        </StyledSvg>
    );
};

Print.defaultProps = {
    width: 20.177,
    height: 20.177,
};

export default Print;
