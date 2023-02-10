import styled from 'styled-components';

export const StyledCheckbox = styled.div`
    .MuiSvgIcon-root {
        font-size: 2rem;
    }
    .MuiCheckbox-root {
        color: ${({ theme }) => theme.colors.primaryBlack40};
    }
    .Mui-checked {
        color: ${({ theme }) => theme.colors.errorRed};
    }
    .MuiTouchRipple-root {
        color: ${({ theme }) => theme.colors.primaryBlack};
    }
`;
