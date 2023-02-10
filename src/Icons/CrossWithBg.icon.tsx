import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const CrossWithBigIcon = ({ height, width, fill, props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g
            data-name="Group 42990"
            style={{
                opacity: 0.2,
            }}
        >
            <StyledPath
                data-name="Path 29344"
                d="M86.9 94.6a7 7 0 1 1 7-7.016 7.009 7.009 0 0 1-7 7.016zm0-7.9c-.044-.044-.088-.08-.123-.116-.553-.55-1.1-1.1-1.652-1.653a.631.631 0 0 0-.609-.2.6.6 0 0 0-.478.442.62.62 0 0 0 .179.653l1.664 1.665c.036.036.072.076.135.143a1.23 1.23 0 0 0-.143.1q-.818.813-1.633 1.633a.636.636 0 1 0 .892.9c.549-.546 1.1-1.1 1.644-1.645.04-.036.08-.072.123-.116l.111.1 1 1c.231.231.462.466.7.693a.637.637 0 0 0 1.071-.327.649.649 0 0 0-.215-.618c-.549-.546-1.1-1.1-1.644-1.645-.036-.036-.072-.076-.127-.135.056-.044.1-.076.139-.112.546-.546 1.087-1.092 1.633-1.633a.641.641 0 0 0 .215-.618.634.634 0 0 0-1.087-.307c-.557.554-1.111 1.112-1.664 1.665a1.667 1.667 0 0 0-.131.124z"
                transform="translate(-79.899 -80.598)"
                style={{
                    fill,
                }}
            />
        </g>
    </svg>
);

CrossWithBigIcon.defaultProps = {
    height: 14,
    width: 14,
};

export default CrossWithBigIcon;
