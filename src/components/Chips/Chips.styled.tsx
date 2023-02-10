import styled from 'styled-components';

export const StyleChipsContainer = styled.div`
    .customChipRoot {
        background: ${({ theme }) => theme.colors.primaryBlack5};
        display: flex;
        align-items: center;
        border: none;
        border-radius: 0.6rem;
        gap: 0.8rem;
        padding: 0 0.4rem 0 1.2rem;
    }

    .MuiChip-deleteIcon {
        margin-right: 0;
    }

    .MuiChip-label {
        color: ${({ theme }) => theme.colors.primaryBlack};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 15rem;
        font-size: 1.4rem;
        line-height: 1.9rem;
        font-weight: 500;
        padding: 0;
    }
`;

export const StyledIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryBlack20};
    }
`;
