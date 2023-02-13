import styled from 'styled-components';
import { FileDrop } from 'react-file-drop';
import Avatar from '@mui/material/Avatar';

type FileDropProp = {
    isImageUrl: boolean;
};

export const StyledFileDropWithUploadMainSection = styled.div<FileDropProp>`
    margin-bottom: ${({ isImageUrl }) => (isImageUrl ? '10rem' : '5rem')};

    small {
        color: ${({ theme }) => theme.colors.primaryBlack60};
        line-height: 1.4;
        font-size: 13px;
        font-weight: normal;
        text-align: center;
        display: block;
        margin-top: 30px;
    }

    .errorText {
        display: inline-block;
        margin-top: 0.5rem;
    }
`;

type ImageProps = {
    allowUploadImage: boolean;
    error: string;
    isRoundShape: boolean;
};

export const StyledFileDropWithUploadContainer = styled(FileDrop)<ImageProps>`
    font-family: ${({ theme }) => theme.fontFamily.normal};
    pointer-events: ${({ allowUploadImage }) => (allowUploadImage ? 'visible' : 'none')};
    opacity: ${({ allowUploadImage }) => (allowUploadImage ? 1 : 0.8)};
    background-color: ${({ theme, error }) => (error ? theme.colors.errorRed3 : theme.colors.primaryBlack5)};
    color: ${({ theme }) => theme.colors.primaryBlack};
    width: 140px;
    height: 140px;
    box-sizing: border-box;
    margin: 0 auto;
    border-radius: ${({ isRoundShape }) => (isRoundShape ? '100%' : '1rem')};

    .file-drop-target {
        border-radius: ${({ isRoundShape }) => (isRoundShape ? '100%' : '1rem')};
        background-color: ${({ theme, error }) => (error ? theme.colors.errorRed3 : theme.colors.primaryBlack5)};
        width: 140px;
        height: 140px;
        border: 2px dashed ${({ theme, error }) => (error ? theme.colors.errorRed : 'transparent')};

        h6 {
            font-family: ${({ theme }) => theme.fontFamily.normal};
            color: ${({ theme }) => theme.colors.primaryBlack80};
            font-size: 1.6rem;
            font-weight: 600;
            line-height: 1.63;
            text-align: right;
            margin: 0;

            p {
                color: ${({ theme }) => theme.colors.primaryBlack60};
                font-size: 12px;
                line-height: 18px;
                font-weight: normal;
            }
        }

        .image-circle {
            position: relative;

            img {
                object-fit: cover;
                width: 100%;
                height: 136px;
                border-radius: ${({ isRoundShape }) => (isRoundShape ? '100%' : '10px')};
            }

            button {
                color: ${({ theme }) => theme.colors.primaryBlack};
                font-family: ${({ theme }) => theme.fontFamily.normal};
                box-shadow: 0 0 1px 1px ${({ theme }) => theme.colors.primaryBlack20};
                background: ${({ theme }) => theme.colors.primaryBlack5};
                border: 0;
                position: absolute;
                right: 0px;
                top: 6px;
                cursor: pointer;
                font-size: 0;
                line-height: 0;
                padding: 5px;
                border-radius: 50%;
            }
        }

        &.file-drop-dragging-over-target,
        &:focus {
            border: 2px dashed ${({ theme }) => theme.colors.primaryBlack};
        }
    }
`;

type ActionButtonPros = {
    isRoundShape: boolean;
};

export const StyledActionButtonContainer = styled.div<ActionButtonPros>`
    text-align: center;
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    button {
        background: ${({ theme }) => theme.colors.primaryBlack10};
        font-family: ${({ theme }) => theme.fontFamily.normal};
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
        border-radius: 25px;
        padding: 9px 8px 6px 8px;
        width: 40px;
        height: 40px;
        position: relative;
        right: 22px;
        margin-top: 10px;

        &.upload-icon {
            background: ${({ theme }) => theme.colors.primaryBlack};
            font-family: ${({ theme }) => theme.fontFamily.normal};
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
            cursor: pointer;
            border-radius: 25px;
            padding: 9px 8px 6px 8px;
            width: 40px;
            height: 40px;
            position: relative;
            top: ${({ isRoundShape }) => (isRoundShape ? '-40px' : '-26px')};
            right: 8px;
        }
    }
`;

export const StyledAvatarContainer = styled(Avatar)`
    color: ${({ theme }) => theme.colors.primaryBlack};
    background-color: transparent;
    width: 100%;
    height: 136px;
    font-weight: bold;
    line-height: 0.83;
    text-align: center;
    font-size: 2rem;

    img {
        height: 140px;
    }
`;
