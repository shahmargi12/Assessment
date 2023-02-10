import styled from 'styled-components';

const StyledRequiredSpan = styled('span')`
    color: ${({ theme }) => theme.colors.alertColors.error.primary};
    margin-right: 0.3rem;
`;

const StyledPlaceholder = styled('p')`
    font-size: 1.6rem;
`;
export { StyledPlaceholder, StyledRequiredSpan };
