import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const StyledInput = styled(TextField)`
    .MuiInputLabel-asterisk {
        color: #f00;
    }

    .MuiInputLabel-root {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 3px;
    }

    .MuiInputBase-input {
        padding: 0px 8px 5px 8px;
        color: ${({ theme }) => theme.colors.primaryBlack};
        opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
        ${({ disabled }) => (disabled ? 'cursor: not-allowed;' : null)};
        font-size: 1.6rem;
        line-height: 1.2;
        font-family: ${({ theme }) => theme.fontFamily.normal};
    }

    .MuiInputBase-root {
        font-family: inherit;
        border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
        background: ${({ theme }) => theme.colors.white};
        padding: 24px 8px 9px 4px;
        ${({ disabled }) => (disabled ? { cursor: 'not-allowed' } : null)};
        border-radius: 1rem;
        outline: 1px solid transparent;

        &:hover {
            background: ${({ theme }) => theme.colors.white};
        }

        &.Mui-focused {
            outline-color: ${({ theme }) => theme.colors.primaryBlack};
            border-color: ${({ theme }) => theme.colors.primaryBlack};
            background: ${({ theme }) => theme.colors.white};
        }
    }

    .MuiFormLabel-root {
        font-size: 1.6rem;
        color: #717175;
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
    }
    .Mui-error {
        border: 1px solid ${({ theme }) => theme.colors.alertColors.error.primary};
    }
    .MuiFormHelperText-root.Mui-error {
        color: ${({ theme }) => theme.colors.alertColors.error.primary};
        border: none;
        margin-left: 0px;
        font-size: 1.4rem;
        line-height: 1.31;
        text-align: left;
        font-family: ${({ theme }) => theme.fontFamily.normal};
        font-weight: normal;
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
        .MuiInputBase-input {
            opacity: 1;
            color: ${({ theme }) => theme.colors.primaryBlack};
        }
    }
`;

export const StyledInputContainer = styled.div`
    position: relative;

    .MuiFormControl-root {
        min-height: 75px;
    }

    .suffix {
        position: absolute;
        right: 5px;
        top: 4px;
        padding: 10px;
        border-radius: 6px;
        background: ${({ theme }) => theme.colors.white};
    }
`;

export const StyledRichContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const StyleCountText = styled.p`
    position: absolute;
    text-align: right;
    font-size: 1.2rem;
    line-height: 2.5rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.primaryBlack40};
    right: 10px;
    top: 5px;
`;
