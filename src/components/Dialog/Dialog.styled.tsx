import styled from 'styled-components';
import Modal from '@mui/material/Modal';

export const StyledDialogContainer = styled.div``;
type DialogProps = {
    width: string;
    height: string;
    isTitle: boolean;
    top: string;
};

export const StyledModelContainer = styled(Modal)<DialogProps>`
    top: ${({ top }) => top + '!important'};
    display: flex;
    justify-content: center;
    align-items: center;

    .dialogTop {
        top: ${({ top }) => top + '!important'};
    }

    .dialog-containerBg {
        outline: none;
        max-height: 100%;

        @media (max-width: 767px) {
            width: 100%;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
            width: 90%;
        }

        .dialogBg {
            background-color: ${({ theme }) => theme.colors.white};
            width: ${({ width }) => width};
            height: ${({ height }) => height};
            border-radius: 2rem;

            @media (max-width: 767px) {
                width: 100%;
                height: 100vh;
                border-radius: 0px;
            }

            @media (min-width: 768px) and (max-width: 1024px) {
                width: 100%;
            }

            &__headerBg {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #e7e7e7;
                padding: 18px 25px 20px 25px;

                h2 {
                    font-family: ${({ theme }) => theme.fontFamily.secondary};
                    color: ${({ theme }) => theme.colors.primaryBlack};
                    text-align: left;
                    font-weight: bold;
                    font-size: 2rem;
                    line-height: 1.5;
                }

                h3 {
                    font-family: ${({ theme }) => theme.fontFamily.secondary};
                    color: ${({ theme }) => theme.colors.primaryBlack};
                    text-align: left;
                    font-weight: normal;
                    opacity: 0.8;
                    font-size: 1.4rem;
                    line-height: 1.4;
                }

                &--rightSection {
                    display: flex;
                    align-items: center;

                    a {
                        font-family: ${({ theme }) => theme.fontFamily.normal};
                        color: ${({ theme }) => theme.colors.white};
                        display: inline-block;
                        cursor: pointer;
                        padding-left: 10px;
                    }
                }
                .title_section {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    h2 {
                        margin-right: 0.6rem;
                    }
                }
            }

            &__body {
                overflow: auto;
                max-height: calc(100vh - 100px);

                @media (max-width: 767px) {
                    max-height: calc(100vh - 70px);
                }
            }
        }
    }

    .dialog-container {
        max-width: 96%;
        width: ${({ width }) => width};
        outline: none;
        max-height: 100%;

        .dialog {
            background-color: ${({ theme }) => theme.colors.white};
            height: ${({ height }) => height};
            position: relative;
            padding: 15px 0px;
            border-radius: 2rem;

            &__header {
                display: flex;
                justify-content: space-between;
                padding: 0 25px 15px;

                h2 {
                    font-family: ${({ theme }) => theme.fontFamily.normal};
                    color: ${({ theme }) => theme.colors.primaryBlack};
                    text-align: left;
                    font-weight: bold;
                    font-size: 2rem;
                    line-height: 1.5;
                }

                h3 {
                    font-family: ${({ theme }) => theme.fontFamily.normal};
                    color: ${({ theme }) => theme.colors.primaryBlack};
                    text-align: left;
                    font-weight: bold;
                    font-size: 2rem;
                    line-height: 1.4;
                    padding-bottom: 1rem;
                }

                &--rightSection {
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    a {
                        font-family: ${({ theme }) => theme.fontFamily.normal};
                        cursor: pointer;
                        padding-left: 8px;
                        display: flex;
                        align-self: center;
                    }
                }
            }

            &__body {
                padding: ${({ isTitle }) => (isTitle ? '30px 0 0 0' : '15px 30px')};
                border-top: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
                overflow: auto;
                max-height: calc(100vh - 100px);
            }
        }
    }
`;
