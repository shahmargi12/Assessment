import styled from 'styled-components';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from '@mui/material';

const StyledMenuButton = styled(Button)`
    &.MuiButton-root {
        min-width: 39px;
        border-radius: 6px;
        background-color: ${({ theme }) => theme.colors.primaryBlack5};
        color: ${({ theme }) => theme.colors.black};
        height: 100%;
        font-size: 1.4rem;
        font-weight: 500;

        &:hover: {
            background-color: ${({ theme }) => theme.colors.primaryBlack5};
        }
    }
`;

const StyledMenu = styled(Menu)`
    .MuiPaper-root {
        max-width: 332px;
        min-width: 270px;
        max-height: 222px;
        padding: 20px 0 22px;
        border-radius: 20px;
        box-shadow: 0 4px 16px 0 ${({ theme }) => theme.colors.boxShadowColor};
        border: solid 1px ${({ theme }) => theme.colors.progressBack};
        background-color: ${({ theme }) => theme.colors.white};
        font-size: 1.4rem;
        font-weight: 500;
    }
`;

const StyledMenuItem = styled(MenuItem)({});

const StyledListItemText = styled(ListItemText)`
    &.MuiListItemText-root {
        & span {
            font-size: 1.5rem;
        },
    },
`;

const StyledListItemIcon = styled(ListItemIcon)`
    &.MuiListItemIcon-root {
        justify-content: center;
    }
`;

const StyledResetButton = styled(Button)`
    &.MuiButton-root {
        min-width: 39px;
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.black};
        text-underline-offset: 2px;
        height: 100%;
        font-size: 1.4rem;
        font-weight: 500;

        &:hover {
            background-color: transparent;
            text-decoration: underline;
        }
    }
`;
export { StyledMenuButton, StyledMenu, StyledMenuItem, StyledListItemText, StyledListItemIcon, StyledResetButton };
