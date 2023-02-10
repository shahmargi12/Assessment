import styled from 'styled-components';

export const StyledChip = styled.div`
    display: flex;
    align-items: center;

    .menu {
        padding: 5px;

        &__item {
            background-color: ${({ theme }) => theme.colors.primaryBlack10};
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 3px 7px;
            border-radius: 40px;

            &__text {
                display: flex;
                align-items: center;
                gap: 20px;
                margin: 0 3px;

                span {
                    font-size: 1.6rem;
                    color: ${({ theme }) => theme.colors.primaryBlack};
                    opacity: 1;
                }
            }

            &__icon {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 25px;
                height: 25px;
                border-radius: 50%;
                cursor: pointer;

                &:hover {
                    svg {
                        fill: ${({ theme }) => theme.colors.alertColors.error.primary};
                    }
                }
            }
        }
    }
`;

type StyledInputContainerType = {
    error: boolean;
};

export const StyledInputContainer = styled.div<StyledInputContainerType>`
    border: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
    cursor: text;
    border-radius: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 50px;
    padding: 0px 8px;

    ${({ error, theme }) => {
        if (error) {
            return {
                borderColor: theme.colors.alertColors.error.primary,
            };
        }
    }}

    .selectContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        width: 100%;
    }

    .input {
        border: none;
        height: 41px;
        padding: 3px 10px;
        font-size: 1.6rem;
    }
`;

export const StyledErrorContainer = styled.p`
    font-family: ${({ theme }) => theme.fontFamily.normal};
    color: ${({ theme }) => theme.colors.alertColors.error.primary};
    font-size: 1.5rem;
    line-height: 1.31;
    text-align: left;
`;

export const StyleMinHeight = styled.div`
    margin-bottom: 25px;
`;
