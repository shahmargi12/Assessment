import styled from 'styled-components';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const StyledTabs = styled(Tabs)`
    .MuiTabs-indicator {
        background: ${({ theme }) => theme.colors.transparent};
    }
    .MuiTabs-flexContainer {
        button:not(:last-child) {
            margin-right: 10px;
        }
    }
`;

export const StyledTab = styled(Tab)`
    &.customSelected {
        background-color: ${({ theme }) => theme.colors.primaryBlack20};
        color: ${({ theme }) => theme.colors.primaryBlack};
    }
    &.customSelectedCircle {
        background-color: ${({ theme }) => theme.colors.primaryBlack} !important;
        color: ${({ theme }) => theme.colors.white} !important;
        font-weight: 600;
    }
    &.customRoot {
        font-size: 1.4rem;
        font-weight: normal;
        text-transform: none;
        border-radius: 8px;
        font-family: ${({ theme }) => theme.fontFamily.normal};
    }
    &.customRootCircle {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.primaryBlack};
        border-radius: 4px;
        height: 44px;
        font-weight: 600;
        text-transform: none;
        min-width: 100px;
        border: 1px solid ${({ theme }) => theme.colors.primaryBlack};
        background-color: ${({ theme }) => theme.colors.primaryBlack10};
        opacity: 1;
        font-family: ${({ theme }) => theme.fontFamily.normal};
    }
    &.customNormal {
        border-bottom: 3px solid ${({ theme }) => theme.colors.primaryBlack} !important;
        font-weight: bold !important;
        min-width: 110px !important;
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fontFamily.normal};
    }
    &.customRootNormal {
        color: ${({ theme }) => theme.colors.primaryBlack};
        text-transform: none;
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.35;
        min-width: 110px;
        margin-right: 0 !important;
        font-family: ${({ theme }) => theme.fontFamily.normal};

        @media (min-width: 1200px) and (max-width: 1366px) {
            min-width: 96px;
        }
    }
    &.customIndicator {
        background-color: ${({ theme }) => theme.colors.redColor};
    }
    &.MuiTabs-indicator {
        background-color: ${({ theme }) => theme.colors.redColor};
    }
`;
