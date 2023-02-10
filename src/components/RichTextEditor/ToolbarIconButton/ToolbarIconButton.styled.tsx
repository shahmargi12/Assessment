import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';

export const StyledIconButton = styled(IconButton)<{ isActive: boolean }>`
    &.MuiIconButton-root {
        ${({ isActive, theme }) => {
            if (isActive === true) {
                return {
                    background: theme.colors.lightBlue,
                };
            }
        }}
    }
`;
