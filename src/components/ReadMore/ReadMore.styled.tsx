import styled, { css } from 'styled-components';

type StyledColorSelect = {
    color: string;
};

export const ReadMoreCommonStyle = css<StyledColorSelect>`
    font-family: ${({ theme }) => theme.fontFamily.normal};
    white-space: pre-wrap !important;
    word-break: break-word;
    font-weight: normal;
    display: inline;
    width: 100%;
    font-size: 1.5rem;
    line-height: 1.88;

    ${({ color }) => {
        if (color) {
            return {
                color: color,
            };
        }
    }}
`;

export const StyledTextContainer = styled.p<StyledColorSelect>`
    ${ReadMoreCommonStyle}

    .text {
        ${ReadMoreCommonStyle};
        line-height: 24px;
    }
`;

export const StyledReadMoreSpan = styled.span`
    font-family: ${({ theme }) => theme.fontFamily.normal};
    color: ${({ theme }) => theme.colors.primaryBlack};
    text-decoration: underline;
    cursor: pointer;
    font-size: 1.4rem;
    line-height: 2.2rem;
    word-break: break-word;
    opacity: 0.8;
    font-size: 1.5rem;
    line-height: 1.88;
    font-weight: 600;
    margin-left: 0.8rem;
`;
