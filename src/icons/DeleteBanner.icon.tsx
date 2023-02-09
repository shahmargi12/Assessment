import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};
const StyledCirlce = styled.circle<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.white)};
`;

const DeleteBannerIcon = ({ width, height, fill, props }: IconType) => (
    <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x={0}
        y={0}
        viewBox="0 0 40 40"
        style={{
            enableBackground: 'new 0 0 40 40',
        }}
        xmlSpace="preserve"
        {...props}
        width={width}
        height={height}
    >
        <g id="delete" transform="translate(-1569 -160)">
            <StyledCirlce id="Ellipse_1820" cx={1589} cy={180} r={20} fill={fill} />
            <g id="delete-2" transform="translate(1580.75 171)">
                <g id="Group_24553" transform="translate(.001)">
                    <g id="Group_24552">
                        <path
                            id="Path_18141"
                            d="M15.7 3H12V.8c0-.5-.3-.8-.8-.8h-6c-.4 0-.7.3-.7.8V3H.7c-.4 0-.7.3-.7.8s.3.8.8.8h.8v11.2c0 1.2 1 2.2 2.3 2.2h9c1.2 0 2.2-1 2.2-2.2V4.5h.8c.4 0 .8-.3.8-.8s-.5-.7-1-.7zM6 1.5h4.5V3H6V1.5zm7.5 14.3c0 .4-.3.7-.8.8h-9c-.4 0-.7-.3-.8-.8V4.5h10.5v11.3z"
                        />
                    </g>
                </g>
                <g id="Group_24555" transform="translate(5.251 6)">
                    <g id="Group_24554">
                        <path
                            id="Path_18142"
                            d="M.7 0C.3 0 0 .3 0 .8v6.8c0 .4.3.8.8.8s.7-.3.7-.8V.8c0-.5-.3-.8-.8-.8z"
                        />
                    </g>
                </g>
                <g id="Group_24557" transform="translate(9.751 6)">
                    <g id="Group_24556">
                        <path
                            id="Path_18143"
                            d="M.8 0C.3 0 0 .3 0 .8v6.8c0 .4.3.8.8.8s.7-.3.7-.8V.8c0-.5-.3-.8-.7-.8z"
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

DeleteBannerIcon.defaultProps = {
    width: 17,
    height: 17,
};

export default DeleteBannerIcon;
