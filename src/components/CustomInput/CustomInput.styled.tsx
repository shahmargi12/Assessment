import TextField, { TextFieldProps } from '@mui/material/TextField';
import styled from 'styled-components';

interface StatusLabelsProps {
    bgColor: string;
    padding: string;
    onBlur?: () => void;
}

type MinHeightProps = {
    minHeight: boolean;
};

export const StyledInput = styled(TextField)<StatusLabelsProps>`
    .MuiInputLabel-asterisk {
        color: ${({ theme }) => theme.colors.alertColors.error.primary};
        border: 0 !important;
    }

    .MuiInputLabel-root {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 3px;
    }

    .MuiInputBase-input {
        ${({ label }) => (label ? 'padding: 20px 8px 5px 12px;' : 'padding: 5px 8px 5px 12px;')}
        color: ${({ theme }) => theme.colors.primaryBlack};
        opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
        ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : null)}
        font-size: 1.6rem;
        font-family: ${({ theme }) => theme.fontFamily.normal};
        height: 2.5rem;
    }

    .MuiInputBase-root {
        font-family: inherit;
        border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
        background: ${({ theme, bgColor }) => (bgColor ? bgColor : theme.colors.white)};
        padding: 0;
        border-radius: 1rem;
        ${({ disabled }) => (disabled ? { cursor: 'not-allowed' } : null)};
        outline: 1px solid transparent;

        &:hover {
            background: ${({ theme }) => theme.colors.white};
        }

        &.Mui-focused {
            outline-color: ${({ theme }) => theme.colors.primaryBlack};
            border-color: ${({ theme }) => theme.colors.primaryBlack};
            background: ${({ theme }) => theme.colors.white};
        }

        .MuiInputAdornment-positionEnd {
            ${({ label }) => (label ? 'margin-top: 19px;' : null)}
            .MuiButtonBase-root {
                position: relative;
                right: 12px;

                svg {
                    width: 22px;
                    height: 22px;
                }
            }
        }
    }

    .MuiFormLabel-root {
        font-size: 1.6rem;
        color: #717175;

        &.Mui-error {
            border: none;
        }
    }

    .MuiFilledInput-underline:before,
    .MuiFilledInput-underline:after {
        border: 0;
        border-bottom: 1px solid transparent !important;
    }
    .MuiFilledInput-underline:after {
        transform: scaleX(1);
    }

    .MuiInputAdornment-root {
        svg {
            cursor: pointer;
        }
        span {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.colors.primaryBlack80};
        }
    }

    .MuiFormHelperText-root {
        color: ${({ theme }) => theme.colors.primaryBlack40};
        font-family: ${({ theme }) => theme.fontFamily.normal};
        margin: 0;
        margin-top: 3px;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.31;
        text-align: left;
        margin-left: 0 !important;

        &.Mui-error {
            color: ${({ theme }) => theme.colors.alertColors.error.primary};
            border: none;
            margin-left: 0px;
            font-size: 1.4rem;
            line-height: 1.31;
            text-align: left;
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: normal;
            svg {
                width: 2.2rem;
            }
        }
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield;
    }

    .MuiFilledInput-root.Mui-disabled {
        border: dashed 1px ${({ theme }) => theme.colors.primaryBlack20} !important;
        background: ${({ theme }) => theme.colors.white};
        .MuiInputBase-input {
            opacity: 1;
            color: ${({ theme }) => theme.colors.primaryBlack};
        }
    }
`;

export const StyledInputContainer = styled.div<MinHeightProps>`
    position: relative;

    .MuiFormControl-root {
        width: 100%;
        min-height: ${({ minHeight }) => (minHeight ? '0px' : '85px')};

        @media (max-width: 767px) {
            min-height: 60px;
        }
    }

    .suffix {
        position: absolute;
        right: 5px;
        top: 4px;
        padding: 10px;
    }
`;
