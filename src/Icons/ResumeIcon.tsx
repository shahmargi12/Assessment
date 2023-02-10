import React from 'react';
import styled from 'styled-components';
import { IconType, ColorType } from '../types/common';

const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.primaryBlack)};
`;

const ResumeIcon = ({ height, width, fill }: IconType) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <g data-name="Group 42617">
            <StyledPath
                data-name="Path 29183"
                d="M113.916 82.72a1 1 0 0 1-.732-.418q-1.62-1.627-3.244-3.24a.746.746 0 0 1-.239-.559V66.484a1.729 1.729 0 0 1 1.765-1.756q5.085-.007 10.174 0a1.734 1.734 0 0 1 1.77 1.77q.007 7.212 0 14.428a1.731 1.731 0 0 1-1.488 1.77.353.353 0 0 0-.061.028q-3.973-.006-7.945-.004zm.5-1.164h7.155a.6.6 0 0 0 .681-.681v-14.3a.6.6 0 0 0-.686-.69H111.55a.6.6 0 0 0-.69.685V78h2.9a.584.584 0 0 1 .653.648v2.911zm-1.174-.887v-1.494h-1.488q.737.747 1.486 1.494z"
                transform="translate(-109.7 -64.725)"
                style={{
                    fill: fill,
                }}
            />
            <StyledPath
                data-name="Path 29184"
                d="M215.574 115.168a1.984 1.984 0 1 1 1.989-1.979 1.977 1.977 0 0 1-1.989 1.979zm-.792-1.979a.794.794 0 0 0 .8.8.8.8 0 0 0 .806-.8.8.8 0 1 0-1.607 0z"
                transform="translate(-208.752 -108.983)"
                style={{
                    fill: fill,
                }}
            />
            <StyledPath
                data-name="Path 29185"
                d="M195.524 204.535h-.162a2.415 2.415 0 0 0-1.483.334.22.22 0 0 0-.143.215v.7a.6.6 0 0 1-.6.625.586.586 0 0 1-.582-.634v-.787a1.238 1.238 0 0 1 .725-1.14 10.522 10.522 0 0 1 .978-.434 1.119 1.119 0 0 1 .42-.057h1.841a.357.357 0 0 1 .143.01 13.337 13.337 0 0 1 1.393.668 1.11 1.11 0 0 1 .463.978v.768a.59.59 0 1 1-1.178-.01c0-.219-.01-.439 0-.658a.238.238 0 0 0-.172-.258c-.186-.076-.367-.172-.553-.243a1.235 1.235 0 0 0-.343-.076c-.246-.006-.499-.001-.747-.001z"
                transform="translate(-188.712 -196.862)"
                style={{
                    fill: fill,
                }}
            />
            <StyledPath
                data-name="Path 29186"
                d="M176.929 301.858h3.19a.587.587 0 0 1 .144 1.159 1.173 1.173 0 0 1-.26.019h-6.33a.581.581 0 0 1-.575-.606.566.566 0 0 1 .584-.572c1.086-.005 2.167 0 3.247 0z"
                transform="translate(-170.075 -290.734)"
                style={{
                    fill: fill,
                }}
            />
            <StyledPath
                data-name="Path 29187"
                d="M235.732 366.207h-1.927a.568.568 0 0 1-.549-.491.585.585 0 0 1 .362-.63 1.011 1.011 0 0 1 .3-.052h3.639a.768.768 0 0 1 .21.024.584.584 0 0 1 .048 1.126 1.105 1.105 0 0 1-.281.029h-1.8z"
                transform="translate(-227.499 -350.941)"
                style={{
                    fill: fill,
                }}
            />
        </g>
    </svg>
);

ResumeIcon.defaultProps = {
    height: 18,
    width: 13.712,
};

export default ResumeIcon;
