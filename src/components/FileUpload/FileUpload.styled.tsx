import styled from 'styled-components';
import { FileDrop, FileDropProps, FileDropState } from 'react-file-drop';
import Avatar from '@mui/material/Avatar';

export const StyledFileDropWithUploadMainSection = styled.div`
    position: relative;
    height: 100%;
    small {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.alertColors.error.primary};
        line-height: 1;
    }
`;

interface ImageProps extends FileDropProps, FileDropState {
    allowUploadImage: boolean;
    errorMsgPosition?: boolean;
    isError: boolean;
}

export const StyledFileDropWithUploadContainer = styled(FileDrop)<ImageProps>`
    font-family: ${({ theme }) => theme.fontFamily.normal};
    color: ${({ theme }) => theme.colors.primaryBlack};
    border: dashed 2px ${({ theme, isError }) => (isError ? theme.colors.errorRed : theme.colors.primaryBlack20)};
    pointer-events: ${({ allowUploadImage }) => (allowUploadImage ? 'visible' : 'none')};
    opacity: ${({ allowUploadImage }) => (allowUploadImage ? 1 : 0.8)};
    background-color: ${({ theme, isError }) => (isError ? theme.colors.errorRed3 : theme.colors.white)};
    box-sizing: border-box;
    cursor: pointer;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    width: 100%;
    padding: 1rem 1.5rem;

    .file-drop-target {
        font-family: ${({ theme }) => theme.fontFamily.normal};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            color: ${({ theme }) => theme.colors.primaryBlack30};
            text-align: center;
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 1.63;
            margin: 0;

            button {
                color: ${({ theme }) => theme.colors.primaryBlack};
                font-family: ${({ theme }) => theme.fontFamily.normal};
                text-align: center;
                cursor: pointer;
                border: 0;
                font-size: 1.5rem;
                line-height: 1.63;
            }
        }
    }
`;

export const StyledAvatarContainer = styled(Avatar)`
    color: ${({ theme }) => theme.colors.primaryBlack};
    background-color: ${({ theme }) => theme.colors.primaryBlack10};
    font-weight: bold;
    text-align: center;
    width: 10rem !important;
    height: 100px !important;
    font-size: 2.4rem !important;
    line-height: 0.83;
`;

export const StyledFileUploadName = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;

    h3 {
        color: ${({ theme }) => theme.colors.primaryBlack};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 500;
        margin: 0;
        width: 20rem;
        max-width: 100%;
    }

    button {
        background-color: ${({ theme }) => theme.colors.blackColor};
        padding: 0.6rem;
        border-radius: 0.6rem;

        &:hover {
            background-color: ${({ theme }) => theme.colors.blackColor};
        }
    }
`;

export const StyledErrorMsg = styled.div`
    color: ${({ theme }) => theme.colors.errorRed};
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 1.23;
    margin-top: 0.7rem;
`;

export const StyledHintMsg = styled.div`
    color: ${({ theme }) => theme.colors.primaryBlack};
    font-weight: normal;
    font-size: 1.3rem;
    line-height: 1.23;
    margin-top: 0.7rem;
`;

export const StyledDv = styled.div`
    display: flex;
    align-items: center;

    span {
        font-weight: normal;
        margin: 0 0.4rem 0 1rem;
    }

    button {
        font-weight: normal;
        background: transparent;
        align-self: end;
    }
`;
