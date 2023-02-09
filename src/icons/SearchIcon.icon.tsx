import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};
const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.bluishGrey1)};
`;

const SearchIcon = ({ width, height, fill, props }: IconType) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
        style={{
            enableBackground: 'new 0 0 18 18',
        }}
        height={height}
        width={width}
        xmlSpace="preserve"
        {...props}
    >
        <StyledPath
            d="m17.8 16.4-3.6-3.6c1.1-1.4 1.7-3.1 1.7-4.9 0-4.4-3.6-7.9-8-7.9-2.1 0-4.1.8-5.6 2.3C.8 3.8 0 5.8 0 7.9c0 2.1.8 4.1 2.3 5.6 1.5 1.5 3.5 2.3 5.6 2.3 1.8 0 3.5-.6 4.9-1.7l3.6 3.6c.2.2.4.3.6.2.2 0 .5-.1.6-.3.5-.2.5-.8.2-1.2zM7.9 1.8c3.4 0 6.1 2.7 6.1 6.1 0 3.4-2.7 6.1-6.1 6.1-1.6 0-3.2-.6-4.3-1.8C2.4 11 1.8 9.5 1.8 7.9c0-1.6.6-3.2 1.8-4.3 1.1-1.2 2.7-1.8 4.3-1.8z"
            fill={fill}
        />
    </svg>
);

SearchIcon.defaultProps = {
    width: 17,
    height: 17,
};

export default SearchIcon;
