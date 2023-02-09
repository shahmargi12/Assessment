import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';



const StyledSVG = styled.svg<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack70)};
`;

const SearchIcon = ({ width, height, fill, props }: IconType) => (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={fill} {...props}>
        <g data-name="search filter">
            <g data-name="Group 41397">
                <path
                    data-name="Path 28745"
                    d="M76.9 83.124c.035-.251.063-.505.11-.752a5.738 5.738 0 0 1 8.009-4.142 5.682 5.682 0 0 1 2.367 1.983 5.587 5.587 0 0 1 1 2.935 5.745 5.745 0 0 1-6.552 5.991A5.567 5.567 0 0 1 77.6 86.2a5.316 5.316 0 0 1-.678-2.284 1.031 1.031 0 0 0-.024-.106c.002-.231.002-.458.002-.686zm2 .321a3.748 3.748 0 1 0 3.762-3.738 3.756 3.756 0 0 0-3.756 3.739z"
                    transform="translate(-76.9 -77.713)"
                />
                <path
                    data-name="Path 28746"
                    d="M335.084 336.973a1.508 1.508 0 0 1-.745-.474c-.588-.6-1.183-1.183-1.775-1.779a1 1 0 0 1 1.262-1.544 1.638 1.638 0 0 1 .125.106c.658.654 1.317 1.309 1.971 1.971a.981.981 0 0 1 .176 1.215.957.957 0 0 1-.556.455c-.051.016-.1.035-.153.055-.105-.005-.203-.005-.305-.005z"
                    transform="translate(-322.234 -322.977)"
                />
            </g>
        </g>
    </StyledSVG>
);

SearchIcon.defaultProps = {
    width: 14,
    height: 14,
};

export default SearchIcon;
