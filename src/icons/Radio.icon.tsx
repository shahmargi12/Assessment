import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';


const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack30)};
`;

const RadioButton = ({ height, width, fill, ...props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        height={height}
        width={width}
        {...props}
    >
        <StyledPath
            d="M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0z"
            style={{
                fill: 'none',
            }}
        />
        <StyledPath
            d="M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-22C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
            fill={fill}
        />
    </svg>
);

RadioButton.defaultProps = {
    width: 22,
    height: 22,
};

export default RadioButton;
