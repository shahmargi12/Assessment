import { Button, Menu, MenuItem } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled.div`
    margin-left: 10px;

    @media (max-width: 767px) {
        margin-left: 0;
    }
`;

export const StyledBtnContainer = styled(Button)`
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
`;

export const StyledMenu = styled(Menu)`
    /* width: 115px !important; */

    .MuiMenu-paper {
        border-radius: 1rem;
    }
`;

export const StyledMenuItem = styled(MenuItem)`
    font-size: 1.6rem !important;
    color: ${({ theme }) => theme.colors.primaryBlack80} !important;
    padding: 10px 20px;
`;
