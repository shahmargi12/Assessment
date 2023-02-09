import * as React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const DownArrowCircle = ({ height, width, fill }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <defs>
            <filter id="a" x={0} y={0} width={width} height={height} filterUnits="userSpaceOnUse">
                <feOffset dy={1} />
                <feGaussianBlur stdDeviation={1} result="blur" />
                <feFlood floodOpacity={0.161} />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
            </filter>
        </defs>
        <g data-name="Group 51588">
            <g
                style={{
                    filter: 'url(#a)',
                }}
            >
                <g
                    data-name="Ellipse 1905"
                    transform="translate(3 2)"
                    style={{
                        fill: '#fff',
                        stroke: '#ebebeb',
                    }}
                >
                    <circle
                        cx={11.5}
                        cy={11.5}
                        r={11.5}
                        style={{
                            stroke: 'none',
                        }}
                        stroke="none"
                    />
                    <circle
                        cx={11.5}
                        cy={11.5}
                        r={11}
                        style={{
                            fill: 'none',
                        }}
                    />
                </g>
            </g>
            <path
                data-name="Path 11397"
                d="M5.379 103.862a.718.718 0 0 1-.538-.242L.222 98.551a.878.878 0 0 1 0-1.168.707.707 0 0 1 1.069 0l4.088 4.491 4.089-4.486a.707.707 0 0 1 1.069 0 .878.878 0 0 1 0 1.168l-4.621 5.07a.718.718 0 0 1-.538.236z"
                transform="translate(9.001 -87.139)"
                style={{
                    fill: '',
                }}
            />
        </g>
    </svg>
);

DownArrowCircle.defaultProps = {
    height: 29,
    width: 29,
};

export default DownArrowCircle;
