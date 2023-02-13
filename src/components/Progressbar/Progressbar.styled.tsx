import styled from 'styled-components';
import { LinearProgress } from '@mui/material';

export const StyledLinearProgress = styled(LinearProgress)`
    &.MuiLinearProgress-root {
        border-radius: 6px;
        height: 10px;
        background: linear-gradient(
            to left,
            ${({ theme }) => theme.colors.primaryBlack10},
            ${({ theme }) => theme.colors.white}
        );
    }
    & .MuiLinearProgress-bar {
        background-color: ${({ theme }) => theme.colors.errorRed};
        border-radius: 6px;
    }
`;
