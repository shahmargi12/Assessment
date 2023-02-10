import styled from 'styled-components';
import { Modal } from '@mui/material';

export const StyledDiv = styled.div``;

type DialogProps = {
    width: string;
    height: string;
};

export const StyledModalContainer = styled(Modal)<DialogProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    .dialogContainer {
        border: solid 1px ${({ theme }) => theme.colors.primaryBlack80};
        background-color: ${({ theme }) => theme.colors.white};
        width: ${({ width }) => (width ? width : '50rem')};
        outline: none;
        cursor: default;
        max-height: 100%;
        border-radius: 2rem;
        padding: 0 0 2rem;

        @media (max-width: 767px) {
            width: ${({ width }) => (width ? width : '40rem')};
        }

        .dialog {
            .dialogHeader {
                border-bottom: solid 1px ${({ theme }) => theme.colors.primaryBlack10};
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 2rem 3rem;
                margin-bottom: 3rem;

                h2 {
                    color: ${({ theme }) => theme.colors.primaryBlack};
                    font-family: ${({ theme }) => theme.fontFamily.secondary};
                    font-weight: 800;
                    font-size: 2rem;
                    margin: 0;
                }

                .rightSection {
                    cursor: pointer;
                }
            }

            .body {
                color: ${({ theme }) => theme.colors.primaryBlack};
                font-size: 1.6rem;
                font-weight: 500;
                line-height: 1.5;
                margin-bottom: 2.7rem;
                padding: 0 3rem;
            }
        }

        .btn {
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            gap: 1rem;
            padding: 1.5rem 1.5rem 0;
        }
    }
`;
