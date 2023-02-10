import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.darkGreyBlue)};
`;

const Italic = ({ height, width, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            d="M20.333.1a.268.268 0 0 0-.211-.1h-7.171a.268.268 0 0 0-.261.205l-.3 1.222a.268.268 0 0 0 .261.331h2.52l-2.305 9.6H10.5a.268.268 0 0 0-.261.2l-.3 1.222a.268.268 0 0 0 .261.331h7.171a.268.268 0 0 0 .26-.205l.3-1.221a.268.268 0 0 0-.261-.331h-2.478l2.3-9.6h2.33a.268.268 0 0 0 .26-.2l.3-1.222A.268.268 0 0 0 20.333.1z"
            transform="translate(-9.94)"
            style={{
                fill: fill,
            }}
        />
    </svg>
);

Italic.defaultProps = {
    height: 13.115,
    width: 10.451,
};

export default Italic;