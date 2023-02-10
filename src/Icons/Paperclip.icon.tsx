import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const PaperclipIcon = ({ height, width, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            data-name="Path 29876"
            d="m16.909 1.468-.085-.08a5.006 5.006 0 0 0-6.762.053L1.448 9.635A4.283 4.283 0 0 0 .1 12.382a3.427 3.427 0 0 0 1.089 2.5 3.794 3.794 0 0 0 2.631 1.037 3.8 3.8 0 0 0 2.631-1.038l7.436-7.072a2.4 2.4 0 0 0 0-3.521 2.714 2.714 0 0 0-3.7 0L4.492 9.704a.724.724 0 0 0-.233.528.761.761 0 0 0 .78.741.8.8 0 0 0 .55-.217l5.7-5.422a1.126 1.126 0 0 1 1.5 0 .971.971 0 0 1 0 1.423L5.35 13.832a2.207 2.207 0 0 1-1.529.6 2.206 2.206 0 0 1-1.529-.6 1.989 1.989 0 0 1-.633-1.45 2.925 2.925 0 0 1 .891-1.7l8.613-8.194a3.387 3.387 0 0 1 4.583-.03l.083.079a3 3 0 0 1-.051 4.341l-7.129 6.783a.723.723 0 0 0-.232.527.761.761 0 0 0 .78.742.8.8 0 0 0 .55-.216l7.133-6.785a4.436 4.436 0 0 0 .029-6.461Z"
            stroke="#1d1d1b"
            strokeWidth={0.2}
            fill={fill}
        />
    </svg>
);

PaperclipIcon.defaultProps = {
    height: 16,
    width: 18.2,
};

export default PaperclipIcon;
