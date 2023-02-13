import styled from 'styled-components';

export const StyledMenuContainer = styled.div`
    min-width: 52rem;
    min-height: 16px;
    max-width: 52rem;
    max-height: 25rem;
    background: white;

    @media (max-width: 767px) {
        min-width: 100%;
    }
`;

export const StyledSearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    .MuiFormControl-root {
        min-height: unset !important;
    }
    padding: 10px 10px 15px 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
`;

export const StyledCheckboxContainer = styled.div`
    display: flex;
    overflow: scroll;
    flex-direction: row;
    flex-wrap: wrap;
    max-height: 18rem;
    padding: 15px 10px;

    .item {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .label {
        line-height: 1.6;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export const StyledMenuParent = styled.div`
    position: relative;

    .MuiButton-text {
        color: ${({ theme }) => theme.colors.primaryBlack};
        text-decoration: underline;
        font-size: 1.6rem;
        line-height: 2rem;
    }
    .MuiButton-textPrimary:hover {
        background: none;
    }
`;

export const StyledInput = styled.input`
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
    border-radius: 4px;
`;
