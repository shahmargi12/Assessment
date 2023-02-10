import { Accordion, Typography } from '@mui/material';
import styled from 'styled-components';

export const StyledAccordionContainer = styled.div`
    width: 100%;
`;

export const StyledAccordion = styled(Accordion)`
    margin-bottom: 10px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 10px;
    width: 100%;

    .MuiAccordionSummary-root {
        height: 92px;
        padding: 0 2.6rem 0 1.6rem;
    }

    .MuiPaper-elevation {
        border-radius: 0px;
    }

    &.MuiPaper-elevation.MuiPaper-root.MuiPaper-elevation {
        box-shadow: none;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    & .MuiAccordionDetails-root {
        width: 100%;
        display: block;
        padding: 0px;
    }

    & .MuiCollapse-entered {
        overflow: visible;
        border-radius: 0;
    }
`;

export const StyledAccordionTypography = styled(Typography)`
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    &.email-address-cell {
        width: 49%;
    }

    &.role-cell {
        color: ${({ theme }) => theme.colors.primaryBlack};
        background-color: ${({ theme }) => theme.colors.primaryBlack10};
        text-transform: capitalize;
        text-align: center;
        display: block;
        font-size: 14px;
        border-radius: 16px;
        margin: 14px;
        padding: 5px 10px;
        min-width: 120px;
        font-weight: 500;
    }

    &.status-cell,
    &.disabled {
        color: ${({ theme }) => theme.colors.successGreen};
        font-stretch: normal;
        font-style: normal;
        cursor: default;
        width: 24%;
        font-size: 14px;
        margin-left: 113px;
        font-weight: 500;

        button {
            padding: 0px;
        }
    }

    &.disabled {
        color: ${({ theme }) => theme.colors.errorRed};
        font-stretch: normal;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
    }

    .userNameChar {
        background-color: ${({ theme }) => theme.colors.primaryBlack20};
        color: ${({ theme }) => theme.colors.primaryBlack};
        font-weight: bold;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 1.4rem;
        margin-right: 10px;
        width: 50px;
        height: 50px;

        img {
            height: 100%;
            width: 100%;
        }
    }

    .userDetails {
        label {
            span {
                color: ${({ theme }) => theme.colors.primaryBlack};
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 3px;
                max-width: 80%;
            }
        }

        span {
            color: ${({ theme }) => theme.colors.primaryBlack80};
            font-size: 14px;
        }
    }
`;
export const StyledAccordionDiv = styled.div``;
