import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack70)};
`;

const StudentIcon = ({ width, height, fill, ...props }: IconType) => (
    <svg
        width={width}
        height={height}
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 13.3 16"
        xmlSpace="preserve"
        {...props}
    >
        <style>{`.st0{fill:${fill}}`}</style>
        <path
            id="Path_28753"
            className="st0"
            d="M0 13.4V5.2c2.5 0 4.9.9 6.7 2.6.9-.8 1.9-1.5 3-1.9 1.1-.5 2.4-.7 3.6-.7v8.2c-2.5 0-4.9 1-6.7 2.6-1.7-1.7-4.1-2.6-6.6-2.6zm1.5-6.6c0 .1 0 .1 0 0v5c0 .2 0 .2.1.2 1.8.3 3.5.9 4.9 2 .1.1.2.1.3 0 1.4-1 3.1-1.7 4.9-2 .2 0 .2-.1.2-.2v-5c-.5.2-1 .3-1.5.5-1 .4-2 1-2.8 1.7l-.9.9C5.3 8.3 3.5 7.2 1.5 6.8z"
        />
        <path
            id="Path_28754"
            className="st0"
            d="M9.6 3c0 1.6-1.3 3-3 2.9-1.6 0-3-1.3-2.9-3 0-1.6 1.3-3 3-2.9.8 0 1.5.3 2.1.9.5.5.8 1.3.8 2.1zM6.7 4.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5z"
        />
    </svg>
);

StudentIcon.defaultProps = {
    width: 15.009,
    height: 18,
};

export default StudentIcon;
