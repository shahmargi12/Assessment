import styled from 'styled-components';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';

export const StyledMenu = styled(Menu)<MenuProps>`
    .MuiMenu-paper {
        border: solid 1px ${({ theme }) => theme.colors.progressBack};
        min-width: fit-content;
        box-shadow: 0 4px 16px 0 ${({ theme }) => theme.colors.blackThemeRgba};
        border-radius: 1rem;
    }
`;
interface StyledMenuItemType extends MenuItemProps {
    width: string;
}

export const StyledMenuItem = styled(MenuItem)<StyledMenuItemType>`
    &.MuiMenuItem-root {
        color: ${({ theme }) => theme.colors.primaryBlack};
        font-size: 1.5rem;
        line-height: 1.35;
        min-width: fit-content;
        ${({ width }) => {
            if (width) {
                return {
                    width: width,
                    'max-width': width,
                    'min-width': width,
                };
            }
        }}
    }
    .listItem {
        position: relative;
    }
    .infoIcon {
        position: absolute;
        top: -5px;
    }
`;

type StyledIconType = {
    iconDir: 'horizontal' | 'vertical';
};

export const StyledIconContainer = styled.span<StyledIconType>`
    ${({ iconDir }) => {
        if (iconDir === 'horizontal') {
            return {
                transform: 'rotate(90deg)',
            };
        }
    }}
`;
