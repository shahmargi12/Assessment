import styled from 'styled-components';

type StyledInputContainerType = {
    error: boolean;
    focus: boolean;
    inputOneWidth: string;
    inputTwoWidth: string;
};

export const StyledInputContainer = styled.div<StyledInputContainerType>`
    border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
    outline: 1px solid transparent;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 52px;
    padding: 0px 8px;

    ${({ error, theme, focus }) => {
        if (error) {
            return {
                borderColor: theme.colors.alertColors.error.primary,
            };
        }
        if (focus) {
            return {
                borderColor: theme.colors.primaryBlack,
                outlineColor: theme.colors.primaryBlack,
            };
        }
    }}

    input {
        border: none;
        height: 41px;
        padding: 3px 10px;
        font-size: 1.4rem;

        &::placeholder {
            color: ${({ theme }) => theme.colors.primaryBlack80};
            opacity: 0.4;
            font-size: 1.4rem;
            font-weight: normal;
            font-family: ${({ theme }) => theme.fontFamily.normal};
            margin: 0 2px;
        }

        /* Chrome, Safari, Edge, Opera */
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        &:nth-child(1) {
            ${({ inputOneWidth }) => {
                if (inputOneWidth) {
                    return { width: inputOneWidth };
                }
            }}
        }

        &:last-child {
            ${({ inputTwoWidth }) => {
                if (inputTwoWidth) {
                    return { width: inputTwoWidth };
                }
            }}
        }
    }

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield;
    }
`;
