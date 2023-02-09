import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, ribbon }) => !ribbon && theme.colors.gray1};
`;

const StyledRect = styled.rect<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack4)};
`;

const PPOPrize = ({ width, height, ribbon, fill, ...props }: IconType & ColorType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props} viewBox="0 0 464.5 232.5">
        <g id="price" transform="translate(13444.5 -1639)">
            <g id="Group_51269" data-name="Group 51269" transform="translate(-13670 -1357)">
                <StyledRect
                    id="Rectangle_22627"
                    data-name="Rectangle 22
                    627"
                    width={460}
                    height={220}
                    rx={10}
                    transform="translate(230 3003)"
                />
                {ribbon && (
                    <g id="Group_51090" data-name="Group 51090" transform="translate(-3060.096 1353)">
                        <StyledPath
                            id="Path_29885"
                            data-name="Path 29885"
                            d="M3685.9,858.088V805.572h70v52.516l-34.945,17.484Z"
                            transform="translate(-25.802 837.428)"
                        />
                        <StyledPath
                            id="Path_29886"
                            data-name="Path 29886"
                            d="M3626.977,812.4l6-7v7Z"
                            transform="translate(27.119 837.604)"
                        />
                    </g>
                )}
            </g>
            <g id="Layer_1-2" transform="translate(-13070 1756)">
                <g id="Group_51110" data-name="Group 51110" transform="translate(0)">
                    <path
                        data-name="Path 29960"
                        d="M51.942 129.64H18.92c-.353 0-.611-.264-.519-.533l.938-11.752a2.836 2.836 0 0 1 2.765-1.673h26.654a2.835 2.835 0 0 1 2.765 1.673l.938 11.752c.091.269-.166.533-.519.533z"
                        transform="translate(-9.388 -61.785)"
                        style={{
                            fill: '#1d1d1b',
                        }}
                    />
                    <rect
                        data-name="Rectangle 27498"
                        width={39.714}
                        height={3.697}
                        rx={1.849}
                        transform="translate(6.186 66.012)"
                        style={{
                            fill: '#1d1d1b',
                        }}
                    />
                    <g data-name="Group 51109">
                        <path
                            data-name="Path 29961"
                            d="m62.693 40.515-1.392-2.8c6.339-3.15 10.2-5.142 16.327-8.616a6.985 6.985 0 0 0 3.817-5.031 4.69 4.69 0 0 0-1.272-3.968c-1.87-1.816-5.369-2.618-8.509-1.951a11.808 11.808 0 0 0-3.241 1.176l-1.507-2.739a14.935 14.935 0 0 1 4.1-1.495c4.232-.9 8.681.187 11.337 2.767a7.828 7.828 0 0 1 2.195 6.609 10.018 10.018 0 0 1-5.376 7.353c-6.19 3.51-10.086 5.519-16.478 8.7z"
                            transform="translate(-32.331 -7.548)"
                            style={{
                                fill: '#686865',
                            }}
                        />
                        <path
                            data-name="Path 29962"
                            d="M21.921 40.515c-6.392-3.177-10.288-5.186-16.478-8.7a10.016 10.016 0 0 1-5.375-7.349 7.828 7.828 0 0 1 2.195-6.609c2.656-2.58 7.105-3.666 11.337-2.767a14.929 14.929 0 0 1 4.1 1.495l-1.507 2.739a11.8 11.8 0 0 0-3.241-1.176c-3.14-.667-6.639.135-8.509 1.951a4.693 4.693 0 0 0-1.272 3.969A6.985 6.985 0 0 0 6.985 29.1c6.126 3.474 9.988 5.465 16.327 8.616l-1.392 2.8z"
                            transform="translate(0 -7.548)"
                            style={{
                                fill: '#686865',
                            }}
                        />
                        <path
                            data-name="Path 29963"
                            d="M37.938 41.809a11.05 11.05 0 0 1 3.644-7.489 27.516 27.516 0 0 0 8.838-16.493l2.017-14.012a1.364 1.364 0 0 0-1.372-1.541H18.4a1.364 1.364 0 0 0-1.372 1.541l2.017 14.011A27.516 27.516 0 0 0 27.88 34.32a11.047 11.047 0 0 1 3.644 7.489v.542a11.4 11.4 0 0 1-7.387 10.6h21.188a11.4 11.4 0 0 1-7.387-10.6v-.54z"
                            transform="translate(-8.688 -1.161)"
                            style={{
                                fill: '#b7b7b7',
                            }}
                        />
                        <rect
                            data-name="Rectangle 27499"
                            width={26.362}
                            height={2.664}
                            rx={1.332}
                            transform="translate(12.862 51.233)"
                            style={{
                                fill: '#939393',
                            }}
                        />
                        <path
                            data-name="Path 29964"
                            d="m47.7 19.969 1.478 3a.918.918 0 0 0 .692.5l3.305.48a.918.918 0 0 1 .509 1.566l-2.392 2.331a.918.918 0 0 0-.264.813l.565 3.292a.918.918 0 0 1-1.333.968l-2.956-1.554a.919.919 0 0 0-.855 0l-2.956 1.554a.918.918 0 0 1-1.333-.968l.565-3.292a.918.918 0 0 0-.264-.813l-2.392-2.331a.918.918 0 0 1 .509-1.566l3.305-.48a.919.919 0 0 0 .692-.5l1.478-3a.918.918 0 0 1 1.647 0z"
                            transform="translate(-20.832 -10.535)"
                            style={{
                                fill: '#fff',
                            }}
                        />
                        <rect
                            data-name="Rectangle 27500"
                            width={39.714}
                            height={3.301}
                            rx={1.651}
                            transform="translate(6.186)"
                            style={{
                                fill: '#686865',
                            }}
                        />
                        <rect
                            data-name="Rectangle 27501"
                            width={8.618}
                            height={2.426}
                            rx={1.213}
                            transform="translate(21.736 39.73)"
                            style={{
                                fill: '#939393',
                            }}
                        />
                        <path
                            data-name="Path 29965"
                            d="M27.138 10.6h-3.483a.824.824 0 0 0-.823.871c.2 3.395 1.229 15.868 5.957 22.237a.825.825 0 0 0 1.448-.737c-1.107-3.556-2.415-10.2-2.276-21.537a.824.824 0 0 0-.824-.834z"
                            transform="translate(-11.909 -5.412)"
                            style={{
                                fill: '#dadada',
                            }}
                        />
                        <path
                            data-name="Path 29966"
                            d="M46.124 97.023a10.845 10.845 0 0 1-2.641 4.944.309.309 0 0 0 .207.539h1.11a1.4 1.4 0 0 0 1.372-1.09 14.829 14.829 0 0 0 .212-4.366.131.131 0 0 0-.258-.027z"
                            transform="translate(-22.587 -52.207)"
                            style={{
                                fill: '#dadada',
                            }}
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

PPOPrize.defaultProps = {
    width: 360,
    height: 180,
    leftBorder: '#ffe4b8',
};

export default PPOPrize;