import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};
const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const LinkedInIcon = ({ height, width, fill, ...props }: IconType) => (
    <svg data-name="Group 51711" xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            data-name="Path 11733"
            d="M15.814 15.818V9.884c0-2.9-.625-5.139-4.019-5.139a3.523 3.523 0 0 0-3.173 1.744h-.047V5.016H5.362v10.8h3.35v-5.345c0-1.408.267-2.77 2.011-2.77 1.718 0 1.744 1.607 1.744 2.86v5.259Z"
            fill={fill}
        />
        <StyledPath data-name="Path 11734" d="M.271 5.017h3.35v10.8H.271Z" fill={fill} />
        <StyledPath
            data-name="Path 11735"
            d="M1.943 0a1.952 1.952 0 1 0 1.943 1.943A1.943 1.943 0 0 0 1.943 0Z"
            fill={fill}
        />
    </svg>
);

LinkedInIcon.defaultProps = {
    height: 16,
    width: 16,
};

export default LinkedInIcon;
