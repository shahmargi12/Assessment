import LinearProgress from '@mui/material/LinearProgress';
import styled from 'styled-components';

export const StyledLinearLoaderContainer = styled(LinearProgress)`
    &.MuiLinearProgress-root {
        background-color: ${({ theme }) => theme.colors.errorRed};
        z-index: 1400;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        .MuiLinearProgress-bar {
            background-color: ${({ theme }) => theme.colors.white};
        }
    }
`;
