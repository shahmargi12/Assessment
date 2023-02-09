import React from 'react';
import styled from 'styled-components';
import { IconType } from '../types/common';
const StyledPath = styled.path`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const TeamGroup = ({ width, height, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <g
            style={{
                opacity: 0.8,
            }}
        >
            <StyledPath
                data-name="users-three-Bold"
                d="M50.667 93.333a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6.4a2.4 2.4 0 1 1-2.4 2.4 2.4 2.4 0 0 1 2.4-2.4zm5.6 9.92v.693a2.875 2.875 0 0 1-.732 1.92.8.8 0 1 1-1.192-1.066 1.276 1.276 0 0 0 .324-.853v-.693a1.95 1.95 0 0 0-1.459-1.907.413.413 0 0 0-.3.036 4.609 4.609 0 0 1-4.475.005.406.406 0 0 0-.306-.041 1.949 1.949 0 0 0-1.461 1.907v.693a1.276 1.276 0 0 0 .324.853.8.8 0 1 1-1.19 1.067 2.875 2.875 0 0 1-.732-1.92v-.693a3.546 3.546 0 0 1 2.67-3.459 2 2 0 0 1 1.484.2 3.009 3.009 0 0 0 2.9-.005 2.023 2.023 0 0 1 1.477-.195 3.547 3.547 0 0 1 2.668 3.458zM54.713 86a.8.8 0 0 1 1.02-.487 3.2 3.2 0 0 1 1.067 5.4.8.8 0 0 1-1.067-1.192 1.6 1.6 0 0 0-.533-2.7.8.8 0 0 1-.487-1.021zm3.954 8.8v.577a.8.8 0 0 1-1.6 0V94.8a1.492 1.492 0 0 0-1.115-1.46.8.8 0 1 1 .389-1.552 3.089 3.089 0 0 1 2.326 3.012zm-14.134-3.526a3.2 3.2 0 0 1 1.067-5.4.8.8 0 1 1 .532 1.508 1.6 1.6 0 0 0-.532 2.7.8.8 0 1 1-1.067 1.192zm.849 2.422a1.492 1.492 0 0 0-1.116 1.46v.577a.8.8 0 0 1-1.6 0v-.577a3.09 3.09 0 0 1 2.325-3.012.8.8 0 0 1 .39 1.552z"
                transform="translate(-42.667 -85.333)"
                fill={fill}
            />
        </g>
    </svg>
);
TeamGroup.defaultProps = {
    width: 16,
    height: 14.4,
};

export default TeamGroup;
