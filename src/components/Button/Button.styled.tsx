import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
    font-size: 16px;

    &.MuiButtonBase-root {
        box-shadow: none;
        text-transform: none;
    }

    &.contained-disabled {
        background-color: black;
        color: white;
    }

    &.MuiButton-secondary {
        background: black;
        color: black;
        &:hover {
            box-shadow: 0 0 20px 0 black;
        }
    }

    &.primaryBlack-disabled {
        background-color: black;
        color: black;
    }

    &.MuiButton-outlined {
        background: white;
        border: solid 2px black;
        &:hover {
            box-shadow: 0 0 20px 0 black20;
        }
    }

    &.outlined-disabled {
        background-color: white;
        color: black;
        border: solid 2px black;
    }

    &.MuiButton-outlined_secondary {
        background: white;
        border: solid 1px black;
        color: black;
        &:hover {
            box-shadow: 0 0 20px 0 black;
        }
    }

    &.outlined_secondary-disabled {
        background-color: white;
        color: black;
        border: solid 1px black;
    }

    &.MuiButton-text {
        color: black;
        &:hover {
            text-decoration: underline;
            background: transparent;
        }
    }

    &.text-disabled {
        color: black30};
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

