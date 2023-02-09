import React from "react"
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';



const StyledRect = styled.rect<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack30)};
`;

const CloseSquareBackground = ({ width, height, fill }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20}>
        <g data-name="Group 51497" transform="translate(-426 -16)">
            <StyledRect
                data-name="Rectangle 537"
                width={20}
                height={20}
                rx={4}
                transform="translate(426 16)"
                style={{
                    fill,
                }}
            />
            <path
                data-name="Path 29547"
                d="m23.427 22.388 2.746-2.746a.735.735 0 1 0-1.039-1.042l-2.746 2.746-2.746-2.746a.735.735 0 0 0-1.042 1.042l2.746 2.746-2.746 2.746a.735.735 0 0 0 1.039 1.039l2.746-2.746 2.746 2.746a.735.735 0 1 0 1.039-1.039z"
                transform="translate(413.643 3.612)"
                style={{
                    fill: '#fff',
                }}
            />
        </g>
    </svg>
);

CloseSquareBackground.defaultProps = {
    width: 20,
    height: 20,
};

export default CloseSquareBackground;
