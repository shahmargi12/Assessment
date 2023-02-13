import styled from 'styled-components';

type DropdownThemeChipsProps = {
    isCheckboxList: boolean;
};

export const StyleDropdownThemeChips = styled.div<DropdownThemeChipsProps>`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .menu {
        margin: 0 5px 4px 0;

        &__item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 3px 5px;
            border-radius: 4px;
            background-color: ${({ theme }) => theme.colors.primaryBlack};

            &__text {
                display: flex;
                align-items: center;
                gap: 20px;
                margin: 0 3px;

                &__label {
                    color: ${({ theme }) => theme.colors.white};
                    font-size: 1.3rem;
                }
            }

            &__icon {
                display: flex;
                cursor: pointer;
                margin-right: 2px;
            }
        }
    }

    .extraChips {
        padding: 0px 8px 4px 8px;
        white-space: nowrap;
    }
`;
