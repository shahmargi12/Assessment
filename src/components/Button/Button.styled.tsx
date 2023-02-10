import styled from 'styled-components';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

export const StyledButton = styled(Button)`
    font-size: 15px;

    &.MuiButtonBase-root {
        box-shadow: none;
        text-transform: none;
    }

    &.MuiButton-contained {
        &:hover {
            box-shadow: 0 0 20px 0 ${({ theme }) => theme.colors.primaryBlack10};
        }
    }

    &.contained-disabled {
        background-color: ${({ theme }) => theme.colors.primaryBlack20};
        color: ${({ theme }) => theme.colors.white};
    }

    &.MuiButton-secondary {
        background: ${({ theme }) => theme.colors.primaryBlack10};
        color: ${({ theme }) => theme.colors.primaryBlack};
        &:hover {
            box-shadow: 0 0 20px 0 ${({ theme }) => theme.colors.primaryBlack10};
        }
    }

    &.primaryBlack-disabled {
        background-color: ${({ theme }) => theme.colors.primaryBlack10};
        color: ${({ theme }) => theme.colors.primaryBlack30};
    }

    &.MuiButton-outlined {
        background: ${({ theme }) => theme.colors.white};
        border: solid 2px ${({ theme }) => theme.colors.primaryBlack};
        &:hover {
            box-shadow: 0 0 20px 0 ${({ theme }) => theme.colors.primaryBlack20};
        }
    }

    &.outlined-disabled {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.primaryBlack30};
        border: solid 2px ${({ theme }) => theme.colors.primaryBlack40};
    }

    &.MuiButton-outlined_secondary {
        background: ${({ theme }) => theme.colors.white};
        border: solid 1px ${({ theme }) => theme.colors.primaryBlack20};
        color: ${({ theme }) => theme.colors.primaryBlack};
        &:hover {
            box-shadow: 0 0 20px 0 ${({ theme }) => theme.colors.primaryBlack10};
        }
    }

    &.outlined_secondary-disabled {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.primaryBlack30};
        border: solid 1px ${({ theme }) => theme.colors.primaryBlack20};
    }

    &.MuiButton-text {
        color: ${({ theme }) => theme.colors.primaryBlack};
        &:hover {
            text-decoration: underline;
            background: transparent;
        }
    }

    &.text-disabled {
        color: ${({ theme }) => theme.colors.primaryBlack30};
    }

    &.MuiButton-closed {
        background: ${({ theme }) => theme.colors.errorRed10};
        color: ${({ theme }) => theme.colors.errorRed50};
        cursor: not-allowed;
        &:hover {
            background: ${({ theme }) => theme.colors.errorRed10};
            color: ${({ theme }) => theme.colors.errorRed50};
        }
    }

    &.MuiButton-sizeMini {
        font-size: 12px;
        font-weight: 600;

        border-radius: 4px;
        height: 26px;
        padding: 0 8px;
    }

    &.MuiButton-sizeCompact {
        padding: 8px 20px;
        border-radius: 8px;
        height: 35px;
    }

    &.MuiButton-sizeSmall {
        padding: 10px 22px;
        border-radius: 10px;
        height: 39px;
    }

    &.MuiButton-sizeRegular {
        padding: 12px 24px;
        border-radius: 10px;
        height: 43px;
    }

    &.MuiButton-sizeMedium {
        padding: 14px 28px;
        border-radius: 12px;
        height: 47px;
    }

    &.MuiButton-sizeLarge {
        padding: 16px 32px;
        border-radius: 12px;
        height: 52px;
    }
`;

export const StyledLoadingController = styled(CircularProgress)``;
