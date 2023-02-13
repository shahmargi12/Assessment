import { Menu } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    margin-left: 1rem;

    @media (max-width: 767px) {
        margin-left: 0;
    }
`;

export const StyledBtnContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    font-weight: 600;
`;

export const StyledMenu = styled(Menu)`
    .MuiPaper-root {
        box-shadow: 0 4px 16px 0 ${({ theme }) => theme.colors.blackThemeRgba};
        border-radius: 1rem;
    }

    .MuiList-root {
        padding: 2.5rem;

        h2 {
            color: ${({ theme }) => theme.colors.primaryBlack};
            font-family: ${({ theme }) => theme.fontFamily.secondary};
            font-size: 2rem;
            font-weight: 800;
            line-height: 1.2;
        }
        .content {
            color: ${({ theme }) => theme.colors.primaryBlack70};
            font-weight: normal;
            margin: 0.5rem 0 0;
            font-size: 1.5rem;
            line-height: 1.27;
        }
    }
`;

export const StyledMenuItem = styled.div`
    padding: 1.5rem 0;

    span {
        color: ${({ theme }) => theme.colors.primaryBlack80};
        font-weight: normal;
        font-size: 1.6rem;
        line-height: 1.38;
    }
`;

export const StyledMenuItemBtn = styled.div`
    display: flex;
`;
