import React from 'react';
import styled from 'styled-components';
import { IconType } from '../types/common';

const StyledPath = styled.path`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
    fill-rule: evenodd;
    opacity: 0.8;
`;

const GiftIcon = ({ width, height, fill, ...props }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
        <StyledPath
            d="M7.171 3.6a.757.757 0 0 0-.54.229.821.821 0 0 0 0 1.142.757.757 0 0 0 .54.229h1.736a5.294 5.294 0 0 0-.2-.42A1.841 1.841 0 0 0 7.171 3.6zm3.921 1.6c.058-.137.124-.279.2-.42a1.841 1.841 0 0 1 1.537-1.18.757.757 0 0 1 .54.229.821.821 0 0 1 0 1.142.757.757 0 0 1-.54.229zM10.8 6.8v2.4h5.12c.237 0 .367 0 .46-.008h.011V9.18c.008-.093.008-.223.008-.46V7.28c0-.237 0-.367-.008-.46v-.011h-.01c-.093-.008-.223-.008-.46-.008zm5.6 3.993.111-.007a1.618 1.618 0 0 0 .616-.161 1.6 1.6 0 0 0 .7-.7 1.618 1.618 0 0 0 .161-.616C18 9.144 18 8.947 18 8.746V7.254c0-.2 0-.4-.014-.565a1.618 1.618 0 0 0-.161-.616 1.6 1.6 0 0 0-.7-.7 1.617 1.617 0 0 0-.616-.161c-.166-.014-.363-.014-.565-.014h-.881a2.423 2.423 0 0 0-.554-2.492A2.357 2.357 0 0 0 12.829 2 3.317 3.317 0 0 0 10 3.818 3.317 3.317 0 0 0 7.171 2a2.357 2.357 0 0 0-1.682.708A2.423 2.423 0 0 0 4.936 5.2h-.882c-.2 0-.4 0-.565.014a1.617 1.617 0 0 0-.616.161 1.6 1.6 0 0 0-.7.7 1.617 1.617 0 0 0-.161.616C2 6.856 2 7.053 2 7.254v1.492c0 .2 0 .4.014.565a1.617 1.617 0 0 0 .161.616 1.6 1.6 0 0 0 .7.7 1.618 1.618 0 0 0 .616.161l.111.007v3.877c0 .422 0 .786.024 1.085a2.444 2.444 0 0 0 .237.934 2.4 2.4 0 0 0 1.047 1.047 2.443 2.443 0 0 0 .934.237c.3.024.663.024 1.085.024h6.142c.422 0 .786 0 1.085-.024a2.444 2.444 0 0 0 .934-.237 2.4 2.4 0 0 0 1.049-1.049 2.444 2.444 0 0 0 .237-.934c.024-.3.024-.663.024-1.085zm-1.6.007h-4v5.6h2.24c.461 0 .759 0 .986-.019a.912.912 0 0 0 .337-.068.8.8 0 0 0 .35-.35.912.912 0 0 0 .068-.337c.018-.227.019-.524.019-.986zm-5.6 5.6v-5.6h-4v3.84c0 .461 0 .759.019.986a.912.912 0 0 0 .068.337.8.8 0 0 0 .35.35.912.912 0 0 0 .337.068c.227.018.524.019.986.019zm0-7.2V6.8H4.08c-.237 0-.367 0-.46.008h-.011v.012c-.008.093-.008.223-.008.46v1.44c0 .237 0 .367.008.46v.011h.011c.093.008.223.008.46.008z"
            transform="translate(-2 -2)"
            fill={fill}
        />
    </svg>
);

GiftIcon.defaultProps = {
    width: 16,
    height: 16,
};

export default GiftIcon;
