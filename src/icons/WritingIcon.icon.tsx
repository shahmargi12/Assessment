import React from 'react';
import { IconType } from '@foster/types/common';
import styled from 'styled-components';

type ColorType = {
    fill?: string;
};
const StyledPath = styled.path<ColorType>`
    fill: ${({ theme, fill }) => (fill ? fill : theme.colors.darkGreyBlue)};
`;

const WritingIcon = ({ width, height, fill }: IconType) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 40 40">
            <defs>
                <clipPath id="s7jemi0cqa">
                    <StyledPath
                        data-name="Rectangle 27472"
                        transform="translate(260 659)"
                        style={{ fill: fill }}
                        d="M0 0h40v40H0z"
                    />
                </clipPath>
            </defs>
            <g data-name="Mask Group 55" transform="translate(-260 -659)" style={{ clipPath: 'url(#s7jemi0cqa)' }}>
                <g data-name="Group 50942">
                    <StyledPath
                        data-name="Path 29873"
                        d="M39.713 13.879a3.474 3.474 0 0 0-5.393-1.62c-.984.82-1.852 1.781-2.769 2.682-.358.352-.711.709-1.142 1.14v-.5c0-2.832-.016-5.663.008-8.494a3.9 3.9 0 0 0-1.23-2.958 97.74 97.74 0 0 1-2.45-2.454A5 5 0 0 0 24.094 0H3.041L0 3.041v33.84a10.427 10.427 0 0 0 .662 1.547 3.308 3.308 0 0 0 2.058 1.41 1.626 1.626 0 0 1 .321.162h24.328a1.3 1.3 0 0 1 .285-.156 3.514 3.514 0 0 0 2.754-3.544q.01-4.929 0-9.858a.91.91 0 0 1 .289-.714q4.033-4.012 8.047-8.044a3.5 3.5 0 0 0 .973-3.8zM23.406 2.355a1.185 1.185 0 0 1 1.024.355c1.1 1.085 2.2 2.165 3.266 3.281a4.038 4.038 0 0 1 .5 1h-4.79zM28.072 28.8v7.366a1.231 1.231 0 0 1-1.4 1.415H3.752a1.231 1.231 0 0 1-1.411-1.405V3.746c0-.923.451-1.408 1.328-1.409H20.78c.076 0 .152.007.274.013 0 1.874.033 3.706-.014 5.535a1.319 1.319 0 0 0 1.5 1.483c1.688-.05 3.378-.014 5.067-.014h.449c.007.152.019.278.019.4 0 2.768.006 5.535-.01 8.3a.944.944 0 0 1-.247.6c-1.53 1.557-3.087 3.087-4.612 4.648a2.85 2.85 0 0 0-.621 1c-.519 1.464-.986 2.947-1.487 4.418a1.216 1.216 0 0 0 1.629 1.642c1.521-.516 3.047-1.014 4.566-1.532a6.768 6.768 0 0 0 .783-.384v.354zm-1.016-2.77c-.736 1.012-2 .913-3.072 1.482.3-.9.532-1.689.836-2.452.1-.258.384-.443.6-.676zm1.7-1.791-1.55-1.562 5.516-5.49 1.557 1.555-5.522 5.5zm8.536-8.456c-.057.07-.119.137-.183.2l-1 1.03c-.565-.563-1.1-1.1-1.624-1.62.374-.392.761-.847 1.2-1.243a1.1 1.1 0 0 1 1.547.077 1.141 1.141 0 0 1 .058 1.554z"
                        style={{ fill: fill }}
                        transform="translate(260.041 659)"
                    />
                    <StyledPath
                        data-name="Path 29874"
                        d="M22.523 14a1.7 1.7 0 0 1-.423.037H5.974a1.174 1.174 0 1 1 0-2.336h16.2a1.168 1.168 0 0 1 .347 2.3z"
                        style={{ fill: fill }}
                        transform="translate(260.041 659)"
                    />
                    <StyledPath
                        data-name="Path 29875"
                        d="M18.712 17.526a1.164 1.164 0 0 1-1.292 1.185H5.856a1.156 1.156 0 0 1-1.167-.992 1.172 1.172 0 0 1 .864-1.3 1.655 1.655 0 0 1 .424-.036h11.448a1.163 1.163 0 0 1 1.287 1.143z"
                        style={{ fill: fill }}
                        transform="translate(260.041 659)"
                    />
                    <StyledPath
                        data-name="Path 29876"
                        d="M18.712 22.241a1.164 1.164 0 0 1-1.29 1.148H5.856a1.157 1.157 0 0 1-1.169-.99 1.174 1.174 0 0 1 .862-1.306 1.693 1.693 0 0 1 .423-.036h11.449a1.163 1.163 0 0 1 1.291 1.184z"
                        style={{ fill: fill }}
                        transform="translate(260.041 659)"
                    />
                    <StyledPath
                        data-name="Path 29877"
                        d="M18.712 26.9a1.16 1.16 0 0 1-1.273 1.164H5.834a1.152 1.152 0 0 1-1.148-1.012 1.164 1.164 0 0 1 .849-1.276 1.565 1.565 0 0 1 .422-.043h11.488a1.158 1.158 0 0 1 1.268 1.17z"
                        style={{ fill: fill }}
                        transform="translate(260.041 659)"
                    />
                    <StyledPath
                        data-name="Path 29878"
                        d="M23.391 34.092a1.158 1.158 0 0 1-1.249 1.149h-6.85a1.17 1.17 0 1 1 0-2.335h6.851a1.157 1.157 0 0 1 1.252 1.186z"
                        style={{ fill: fill }}
                        transform="translate(260.041 659)"
                    />
                </g>
            </g>
        </svg>
    );
};

WritingIcon.defaultProps = {
    width: 40,
    height: 40,
};
export default WritingIcon;