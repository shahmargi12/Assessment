import styled from 'styled-components';
import CreatableSelect from 'react-select/creatable';
import Pagination from '@mui/material/Pagination';

type StyledSelectProps = {
    isFullwidth: boolean;
    isCheckboxList: boolean;
};

export const StyledSelect = styled(CreatableSelect)<StyledSelectProps>`
    width: ${({ isFullwidth }) => (isFullwidth ? '100%' : 'auto')};
    .select {
        &__value-container {
            cursor: pointer;
            font-size: 1.4rem;
        }

        &__control {
            background: ${({ theme }) => theme.colors.white};
            min-height: 35px;
            min-width: 70px;
            width: 70px;
            height: 35px;
            border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
            border-radius: 4px;

            .select__indicator-separator {
                display: none;
            }

            &:hover {
                border: 1px solid ${({ theme }) => theme.colors.primaryBlack};
            }

            &--is-focused {
                background: ${({ theme }) => theme.colors.white};
                border: 1px solid ${({ theme }) => theme.colors.primaryBlack};
                box-shadow: none;

                &__value-container {
                    cursor: text;
                }
            }

            &--is-disabled {
                border: dashed 1px ${({ theme }) => theme.colors.primaryBlack20};
                cursor: not-allowed;
            }
        }

        &__option {
            cursor: pointer;

            &--is-focused {
                background-color: ${({ theme }) => theme.colors.primaryBlack10};
            }

            &:hover {
                background-color: ${({ theme }) => theme.colors.primaryBlack10};
            }

            ${({ isCheckboxList }) =>
                isCheckboxList
                    ? {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                      }
                    : null}
        }
        &__menu {
            border: solid 1px ${({ theme }) => theme.colors.progressBack};
            background-color: ${({ theme }) => theme.colors.white};
            box-shadow: 0 4px 16px 0 ${({ theme }) => theme.colors.blackThemeRgba};
            border-radius: 1rem;
            z-index: 500;
            font-size: 1.4rem;
        }
        &__placeholder {
            color: ${({ theme }) => theme.colors.black};
            opacity: 0.4;
            font-size: 1.4rem;
            font-weight: normal;
        }
        &__multi-value {
            background-color: ${({ theme }) => theme.colors.primaryBlack20};
            border-radius: 4px;
            color: ${({ theme }) => theme.colors.primaryBlack20};

            &__label {
                font-size: 1.4rem;
                color: ${({ theme }) => theme.colors.black};
                border-radius: 4px;
                padding-top: 6px;
                padding-bottom: 6px;
            }
            &__remove {
                color: ${({ theme }) => theme.colors.primaryBlack};
                &:hover {
                    background-color: ${({ theme }) => theme.colors.primaryBlack};
                    color: ${({ theme }) => theme.colors.alertColors.error.primary};
                }
                cursor: pointer;
            }
        }
        &__option {
            &--is-selected {
                background-color: ${({ theme, isCheckboxList }) =>
                    isCheckboxList ? 'transparent' : theme.colors.primaryBlack20};
                color: ${({ theme }) => theme.colors.black};
            }
        }

        &__indicator {
            cursor: pointer;
        }
        &__loading-indicator {
            color: ${({ theme }) => theme.colors.primaryBlack};
        }
    }
`;

export const StyledPaginationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        padding-bottom: 3rem;
    }
`;

export const StyledropdownContainer = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.primaryBlack};
    align-items: center;
    margin-right: 15px;

    .select__control {
        background: ${({ theme }) => theme.colors.primaryBlack10};
        border: none !important;
        border-radius: 1rem;
    }

    .select__placeholder {
        opacity: 1;
        color: ${({ theme }) => theme.colors.primaryBlack};
        font-weight: 600;
        font-family: ${({ theme }) => theme.fontFamily.normal};
        margin: 0px;
    }

    .select__indicator {
        svg {
            fill: ${({ theme }) => theme.colors.primaryBlack};
        }
    }
`;

export const StyledropdownLabel = styled.span`
    color: ${({ theme }) => theme.colors.primaryBlack};
    min-width: 110px;
`;

type StyledPaginationType = {
    iColor: string;
    bColor: string;
};

export const StyledPaginationContainerNew = styled(Pagination)<StyledPaginationType>`
    .MuiPagination-ul {
        justify-content: flex-end;

        @media (max-width: 767px) {
            justify-content: flex-start;
        }

        .MuiPaginationItem-root {
            font-size: 1.4rem;
            line-height: 2rem;
            border-radius: 10px;
        }

        .Mui-selected {
            // background-color: ${({ bColor }) => bColor};
            background-color: ${({ theme }) => theme.colors.primaryBlack};
            color: ${({ iColor }) => iColor};
        }
        .MuiPaginationItem-icon {
            margin: 0px -8px;
            font-size: 2.25rem;
            background: ${({ theme }) => theme.colors.white};
        }
    }
`;
