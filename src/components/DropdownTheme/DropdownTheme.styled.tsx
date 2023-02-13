import { Checkbox } from '@mui/material';
import Select from 'react-select';
import { AsyncPaginate } from 'react-select-async-paginate';
import CreatableSelect from 'react-select/creatable';
import styled, { css } from 'styled-components';

const SEARCH_MENU_BORDER_RADIUS = '0.6rem';
const MENU_BOX_SHADOW = '0 0.2rem 0.6rem 0 rgba(29, 29, 27, 0.08)';

// Start :: DropdownTheme Component Style

type DropdownParamType = { isCheckboxList: boolean; isSearchable: boolean };

type StyledAvatarSelectAsyncProps = {
    minWidth: string;
};

type StyledAvatarSelectProps = {
    minWidth: string;
};

export const DropdownStyle = css<DropdownParamType>`
    .select {
        &__control {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            background-color: ${({ theme }) => theme.colors.primaryBlack4};
            color: ${({ theme }) => theme.colors.primaryBlack};
            border-radius: ${SEARCH_MENU_BORDER_RADIUS} ${SEARCH_MENU_BORDER_RADIUS} 0 0;
            box-shadow: ${MENU_BOX_SHADOW};
            border: 1px solid rgba(29, 29, 27, 0.08);
            border-bottom: none;
            font-weight: normal;
            position: absolute;
            z-index: 6;
            top: 100%;
            width: 100%;
            margin-top: 0.5rem;
        }

        &__menu {
            border-radius: 0 0 ${SEARCH_MENU_BORDER_RADIUS} ${SEARCH_MENU_BORDER_RADIUS};
            box-shadow: ${MENU_BOX_SHADOW};
            border: 0.1rem solid rgba(29, 29, 27, 0.08);
            padding-right: 0.6rem;
            margin-top: 0;
            z-index: 6;
            top: 4rem;

            ${({ isSearchable }) => {
                if (!isSearchable) {
                    return {
                        top: 5,
                    };
                }
            }}

            &-list {
                padding-right: 0.6rem;

                &::-webkit-scrollbar {
                    width: 0.6rem;
                }

                &::-webkit-scrollbar-track {
                    background-color: ${({ theme }) => theme.colors.primaryBlack10};
                }

                &::-webkit-scrollbar-thumb {
                    background-color: ${({ theme }) => theme.colors.primaryBlack};
                }
            }
        }

        &__option {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            color: ${({ theme }) => theme.colors.primaryBlack};
            display: flex;
            align-items: center;
            position: relative;
            font-weight: normal;
            font-size: 1.4rem;
            margin-bottom: 0.3rem;
            border-radius: 0.6rem;

            ${({ isCheckboxList }) => {
                if (!isCheckboxList) {
                    return {
                        marginLeft: '0.8rem',
                        width: 'calc(100% - 0.8rem)',
                    };
                }
            }}

            &::before {
                position: absolute;
                background-color: transparent;
                content: '';
                width: 0.4rem;
                height: 100%;
                border-radius: 0 0.4rem 0.4rem 0;
            }

            &--is-focused {
                background-color: transparent;
            }

            &--is-selected {
                background-color: ${({ theme }) => theme.colors.primaryBlack5};

                &::before {
                    ${({ isCheckboxList, theme }) => {
                        if (!isCheckboxList) {
                            return { backgroundColor: theme.colors.primaryBlack, left: '-0.8rem' };
                        }
                    }}
                }
            }

            &:hover {
                background-color: ${({ theme }) => theme.colors.primaryBlack5};
            }
        }

        &__placeholder {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            color: ${({ theme }) => theme.colors.primaryBlack50};
            font-weight: normal;
            font-size: 1.4rem;
        }

        &__value-container {
            padding: 0.2rem 0.8rem 0.2rem 0;
        }

        &__input {
            &-container {
                padding: 0.2rem 0 0.6rem 0;
            }
        }
    }
`;

export const OneLineOverFlow = css`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledCreatableSelect = styled(CreatableSelect)`
    ${DropdownStyle}
`;

export const StyledSelect = styled(Select)`
    ${DropdownStyle}
`;
// End :: DropdownTheme Component Style

// Start :: DropdownThemeWrapper Component Style

export const StyledDropdownThemeContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledMenuContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    z-index: 99;
`;

type StyledDropdownSelectorProps = {
    isCheckboxList: boolean;
    disable: boolean;
    isOpen: boolean;
};

export const StyledDropdownSelector = styled.button.attrs({ type: 'button' })<StyledDropdownSelectorProps>`
    border: 0.1rem solid ${({ theme }) => theme.colors.primaryBlack20};
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    flex-wrap: wrap;
    background: transparent;
    outline: 0.1rem solid transparent;
    min-height: 5.2rem;
    padding: 0 0.8rem;
    width: 100%;
    border-radius: 1rem;

    ${({ isOpen, theme }) => {
        if (isOpen) {
            return {
                outlineColor: `${theme.colors.primaryBlack}`,
                borderColor: `${theme.colors.primaryBlack}`,
            };
        }
    }}
    &:focus {
        outline-color: ${({ theme }) => theme.colors.primaryBlack};
        border-color: ${({ theme }) => theme.colors.primaryBlack};
    }

    ${({ disable }) => {
        if (disable) {
            return {
                borderStyle: 'dashed',
                cursor: 'not-allowed',
            };
        }
    }}

    .selectContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        width: 100%;
        padding-top: 0.3rem;

        ${({ disable }) => {
            if (disable) {
                return {
                    cursor: 'not-allowed',
                };
            }
        }}

        .labelContainer {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            > span {
                ${OneLineOverFlow};
                font-family: ${({ theme }) => theme.fontFamily.normal};
                color: ${({ theme }) => theme.colors.primaryBlack60};
                text-align: start;
                font-weight: normal;
                font-size: 1.6rem;
                margin: 0 0.2rem;

                &.value {
                    color: ${({ theme }) => theme.colors.primaryBlack};
                    transform: translateY(0px);
                    font-size: 1.6rem;
                    padding-bottom: 0.4rem;

                    ${({ disable, theme }) => {
                        if (disable) {
                            return {
                                color: theme.colors.primaryBlack,
                            };
                        }
                    }}
                }

                &.placeholder {
                    color: ${({ theme }) => theme.colors.primaryBlack60};
                    font-size: 1.6rem;
                    transform: translateY(30px);
                    transition: all 0.2s;
                    padding-bottom: 0.2rem;
                }

                &.label {
                    transform: translateY(11px);
                    transition: all 0.2s;
                    font-size: 1.6rem;
                    line-height: 1.43;
                    margin-bottom: 0.2rem;

                    .requiredIcon {
                        color: ${({ theme }) => theme.colors.alertColors.error.primary};
                        padding-right: 0.3rem;
                    }
                }
            }
        }

        .labelTransition {
            > span.label,
            > span.placeholder {
                transition: all 0.2s;
                transform: translateY(0px);
            }

            > span.label {
                font-size: 1.2rem;
            }
        }
    }

    .iconContainer {
        display: flex;
        align-items: center;
        cursor: pointer;
        gap: 2rem;
        margin: 0 0.5rem;

        ${({ disable, theme }) => {
            if (disable) {
                return {
                    cursor: 'not-allowed',
                    color: theme.colors.primaryBlack20,
                };
            }
        }}

        svg {
            fill: ${({ theme }) => theme.colors.primaryBlack80};

            ${({ disable, theme }) => {
                if (disable) {
                    return {
                        fill: theme.colors.primaryBlack20,
                    };
                }
            }}
        }

        .downIconContainerTransition {
            transform: rotate(180deg);
        }

        .downIconContainer {
            transition: all 0.3s;
        }
    }
`;

// End :: DropdownThemeWrapper Component Style

// Start :: DropdownThemeSubComponent Style

export const StyledOptionCheckbox = styled(Checkbox)`
    padding: 0;
    margin-right: 1rem;
`;

export const StyleClearSelectionContainer = styled.div`
    display: flex;
    align-items: center;
    min-height: 4rem;
    padding-left: 20px;

    a {
        color: ${({ theme }) => theme.colors.primaryBlack80};
    }
`;

export const StyledDataGridMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    padding: 0.5rem 1rem;

    div {
        width: 30%;
        font-weight: 500;
        font-size: 1.4rem;
    }
`;

export const StyledDataGridOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
// End :: DropdownThemeSubComponent Style

// Start :: avatar dropdown

export const StyledTagContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.5rem;
`;

export const StyledOptionContainerWithAvatar = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledOptionContainerWithCross = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    width: 11rem;
`;

export const StyledAvatarSelect = styled(Select)<StyledAvatarSelectProps>`
    width: ${({ isFullwidth }) => (isFullwidth ? '100%' : 'auto')};

    .select {
        &__value-container {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            cursor: pointer;
            flex-wrap: nowrap;
            font-size: 1.4rem;
            padding: 0.8rem;

            ${({ isMulti }) => {
                if (!isMulti) {
                    return {
                        padding: '0.8rem 0.8rem',
                    };
                }
            }}

            div {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 0;
            }
        }

        &__control {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            background: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
            min-height: 5.2rem;
            min-width: 18.6rem;
            border-radius: 1rem;

            ${({ minWidth }) => {
                if (minWidth) {
                    return { minWidth: minWidth };
                }
            }}

            &--is-focused {
                background: ${({ theme }) => theme.colors.white};
                border: 0.2rem solid ${({ theme }) => theme.colors.primaryBlack};
                box-shadow: none;
            }

            .select__indicator-separator {
                display: none;
            }

            &--is-disabled {
                border: dashed 0.1rem ${({ theme }) => theme.colors.primaryBlack20};
                cursor: not-allowed;
            }
        }

        &__menu {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            background-color: ${({ theme }) => theme.colors.white};
            border: 0.1rem solid ${({ theme }) => theme.colors.primaryBlack10};
            box-shadow: 0px 0.3rem 0.6rem ${({ theme }) => theme.colors.boxShadowColor};
            z-index: 500;
            font-size: 1.4rem;
            border-radius: 0.4rem;
        }

        &__placeholder {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            color: ${({ theme }) => theme.colors.primaryBlack60};
            font-weight: normal;
            font-size: 1.6rem;
        }

        &__multi-value {
            background: ${({ theme }) => theme.colors.transparent};

            &__remove {
                color: ${({ theme }) => theme.colors.primaryBlack};
                visibility: hidden;

                &:hover {
                    background-color: ${({ theme }) => theme.colors.primaryBlack};
                    color: ${({ theme }) => theme.colors.alertColors.error.primary};
                }
            }
        }

        &__option {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            background-color: transparent;
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.colors.primaryBlack5};
            }

            ${({ isCheckboxList }) =>
                isCheckboxList
                    ? {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                      }
                    : null}

            &--is-selected {
                color: ${({ theme }) => theme.colors.primaryBlack};
                background-color: transparent;
                font-weight: 600;

                ${({ isCheckboxList, isMulti, theme }) => {
                    if (!isCheckboxList && !isMulti) {
                        return {
                            'background-color': `${theme.colors.primaryBlack20}`,
                        };
                    }
                }}
            }
        }

        &__indicator {
            cursor: pointer;
            font-size: 2rem;

            svg {
                fill: ${({ theme }) => theme.colors.primaryBlack};
            }
        }

        &__loading-indicator {
            color: ${({ theme }) => theme.colors.primaryBlack};
        }
    }
`;

export const StyledMultiAvatar = styled.div`
    color: ${({ theme }) => theme.colors.primaryBlack};
    background: ${({ theme }) => theme.colors.primaryBlack10};
    justify-content: center;
    text-align: center;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 50%;
`;

export const StyledItemShort = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 17rem;
    font-size: 1.4rem;
    padding-right: 0.5rem;
`;

export const StyledAvatarOptionsContainer = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 2.5rem;
        width: 3.5rem;
        padding-right: 1rem;
    }
`;

export const StyledItemEmail = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 17rem;
    font-size: 1.2rem;
    padding-right: 0.5rem;
`;

export const StyledAvatarOptionWithEmail = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.5rem;

    img {
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 50%;
    }
    .initials {
        color: ${({ theme }) => theme.colors.primaryBlack};
        background: ${({ theme }) => theme.colors.primaryBlack10};
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-weight: bold;
        font-size: 1rem;
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 50%;
    }
`;

export const StyledOptionContainerWithAvatarEmail = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
    }
    .initials {
        background: ${({ theme }) => theme.colors.primaryBlack10};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        text-align: center;
        font-size: 1rem;
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 50%;
    }
`;

export const StyledAvatarSelectAsync = styled(AsyncPaginate)<StyledAvatarSelectAsyncProps>`
    width: ${({ isFullwidth }) => (isFullwidth ? '100%' : 'auto')};

    .select {
        &__value-container {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            cursor: pointer;
            flex-wrap: nowrap;
            font-size: 1.4rem;
            padding: 0.8rem;

            ${({ isMulti }) => {
                if (!isMulti) {
                    return {
                        padding: '0.8rem 0.8rem',
                    };
                }
            }}

            div {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 0;
            }
        }

        &__control {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            background: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
            min-height: 5.2rem;
            min-width: 18.6rem;
            border-radius: 1rem;

            ${({ minWidth }) => {
                if (minWidth) {
                    return { minWidth: minWidth };
                }
            }}

            &--is-focused {
                background: ${({ theme }) => theme.colors.white};
                border: 0.2rem solid ${({ theme }) => theme.colors.primaryBlack};
                box-shadow: none;
            }

            .select__indicator-separator {
                display: none;
            }

            &--is-disabled {
                border: dashed 0.1rem ${({ theme }) => theme.colors.primaryBlack20};
                cursor: not-allowed;
            }
        }

        &__menu {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            background-color: ${({ theme }) => theme.colors.white};
            border: 0.1rem solid ${({ theme }) => theme.colors.primaryBlack10};
            box-shadow: 0 0.3rem 0.6rem ${({ theme }) => theme.colors.boxShadowColor};
            z-index: 500;
            font-size: 1.4rem;
            border-radius: 0.4rem;
        }

        &__placeholder {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            color: ${({ theme }) => theme.colors.primaryBlack60};
            font-weight: normal;
            font-size: 1.4rem;
            opacity: 0.4;
        }

        &__multi-value {
            background: ${({ theme }) => theme.colors.transparent};

            &__remove {
                color: ${({ theme }) => theme.colors.primaryBlack};
                visibility: hidden;

                &:hover {
                    color: ${({ theme }) => theme.colors.alertColors.error.primary};
                    background-color: ${({ theme }) => theme.colors.primaryBlack};
                }
            }
        }

        &__option {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            cursor: pointer;

            &--is-focused {
                background-color: transparent;
            }

            &:hover {
                background-color: ${({ theme }) => theme.colors.primaryBlack5};
            }

            ${({ isCheckboxList }) =>
                isCheckboxList
                    ? {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                      }
                    : null}

            &--is-selected {
                color: ${({ theme }) => theme.colors.primaryBlack};
                background-color: transparent;
                font-weight: 600;

                ${({ isCheckboxList, isMulti, theme }) => {
                    if (!isCheckboxList && !isMulti) {
                        return {
                            'background-color': `${theme.colors.primaryBlack20}`,
                        };
                    }
                }}
            }
        }

        &__indicator {
            cursor: pointer;
            svg {
                fill: ${({ theme }) => theme.colors.primaryBlack};
            }
        }

        &__clear-indicator {
            visibility: hidden;
        }

        &__loading-indicator {
            color: ${({ theme }) => theme.colors.primaryBlack};
        }
    }
`;

export const StyledItemName = styled.span`
    color: ${({ theme }) => theme.colors.primaryBlack};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 17rem;
    font-weight: 600;
    font-size: 1.4rem;
    padding-right: 0.5rem;
`;

export const StyledPlaceholderText = styled.div`
    color: ${({ theme }) => theme.colors.primaryBlack60};
    font-family: ${({ theme }) => theme.fontFamily.normal};
    font-weight: normal;
    font-size: 1.6rem;

    span {
        color: ${({ theme }) => theme.colors.errorRed};
    }
`;

// End :: avatar dropdown
