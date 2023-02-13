import styled from 'styled-components';
import Select from 'react-select';

export const StyledManageSelect = styled(Select)`
    .react-select {
        &__control {
            border: none;
            border-radius: 2rem;
            box-shadow: none;
            background-color: ${({ theme }) => theme.colors.primaryBlack10};
            color: #000;
            padding: 0.9rem 1.1rem;
            min-height: 5px;
        }
        &__value-container {
            font-size: 14px;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primaryBlack};
            padding: 0;
        }

        &__indicator-separator {
            display: none;
        }

        &__dropdown-indicator {
            color: ${({ theme }) => theme.colors.primaryBlack};
            padding: 0;
        }
        &__menu {
            width: 35rem;
            border-radius: 2rem;
            border: solid 1px #ebebeb;
            box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.16);
        }
        &__menu-list {
            font-size: 1.6rem;
            font-weight: 500;
            overflow-y: auto;
            max-height: fit-content;
            padding: 0;
        }
        &__option {
            padding: 2rem 3rem;
            &:hover {
                background-color: ${({ theme }) => theme.colors.primaryBlack10};
                border-radius: 0.5rem;
            }
        }
        &__option--is-focused {
            background-color: ${({ theme }) => theme.colors.white};
            border-radius: 0.5rem;
        }
        &__option--is-selected {
            background-color: ${({ theme }) => theme.colors.primaryBlack10};
            border-radius: 0.5rem;
        }
    }
`;

export const StyledOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1.5rem;
    img {
        width: 1.8rem;
    }
`;

export const StyledLabel = styled.div`
    .single-value-label {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.primaryBlack};
        padding: 0;
    }
`;

export const StyledOptionLabel = styled.div`
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primaryBlack};
`;
export const StyledIcon = styled.div``;
