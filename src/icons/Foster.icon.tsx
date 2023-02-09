import React from 'react';
import styled from 'styled-components';

const StyledPathF = styled.path`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const StyledPathBackground = styled.path`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.white)};
`;

type FosterIconProp = {
    height: number;
    width: number;
    backgroundFill?: string;
    textFill?: string;
};

const Foster = ({ height, width, backgroundFill, textFill, ...props }: FosterIconProp) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        height={height}
        viewBox="0 0 40 40"
        width={width}
        {...props}
    >
        <StyledPathF d="M0 0h40v40H0z" className="path1" fill={textFill} />
        <StyledPathBackground
            d="M13.9 28.9V11.1h12.2v3.5h-7.8v3.7h7v3.5h-7v7.1h-4.4z"
            fill={backgroundFill}
            className="path2"
        />
    </svg>
);

Foster.defaultProps = {
    width: 50,
    height: 50,
}

export default Foster;
