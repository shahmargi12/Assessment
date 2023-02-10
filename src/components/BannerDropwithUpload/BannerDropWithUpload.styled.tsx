import styled from 'styled-components';
import { FileDrop } from 'react-file-drop';
import Avatar from '@mui/material/Avatar';

export const StyledFileDropWithUploadMainSection = styled.div`
    width: 100%;

    small {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.alertColors.error.primary};
        line-height: 1;
    }

    p {
        &.hintPara {
            color: ${({ theme }) => theme.colors.primaryBlack60};
            text-align: left;
            font-weight: normal;
            font-size: 13px;
            line-height: 1.23;
            margin: 3px 0 0;
        }

        &.studentHintPara {
            color: ${({ theme }) => theme.colors.white};
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
        }
    }
`;

type ImageProps = {
    allowUploadImage: boolean;
    bgImg: string;
    bannerError: boolean;
};

export const StyledBannerDropWithUploadContainer = styled(FileDrop)<ImageProps>`
    font-family: ${({ theme }) => theme.fontFamily.normal};
    background: ${({ theme, bannerError }) => (bannerError ? theme.colors.errorRed3 : theme.colors.white)};
    background-image: url(${({ bgImg }) => (bgImg ? bgImg : 'none')});
    pointer-events: ${({ allowUploadImage }) => (allowUploadImage ? 'visible' : 'none')};
    opacity: ${({ allowUploadImage }) => (allowUploadImage ? 1 : 0.8)};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    box-sizing: border-box;
    width: 100%;
    height: 18.5rem;

    .file-drop-target {
        font-family: ${({ theme }) => theme.fontFamily.normal};
        border: 2px dashed
            ${({ theme, bannerError }) => (bannerError ? theme.colors.errorRed : theme.colors.primaryBlack20)};
        border-radius: 1rem;
        overflow: hidden;
        height: 100%;
        width: 100%;
        border-radius: 1rem;
        position: relative;

        /* &:focus,
        &:hover {
            border: 2px dashed
                ${({ theme, bannerError }) => (bannerError ? theme.colors.errorRed : theme.colors.primaryBlack)};
        } */

        &.file-drop-dragging-over-target {
            border: 2px dashed ${({ theme }) => theme.colors.primaryBlack};
        }

        .image-circle {
            position: relative;
            height: 100%;
            width: 100%;

            img {
                object-fit: cover;
                object-position: top;
                height: 100%;
                width: 100%;
            }

            button {
                color: ${({ theme }) => theme.colors.primaryBlack};
                font-family: ${({ theme }) => theme.fontFamily.normal};
                position: absolute;
                background: none;
                cursor: pointer;
                font-size: 0;
                line-height: 0;
                border: 0;
                border-radius: 50%;
                top: 10px;
                right: 10px;
                padding: 0;
            }
        }
    }
`;

export const StyleBannerButton = styled.h6`
    font-family: ${({ theme }) => theme.fontFamily.normal};
    color: ${({ theme }) => theme.colors.primaryBlack80};
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.63;
    text-align: center;
    margin: 0;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 600;
    height: 100%;
    position: relative;
    margin: 0;

    button {
        color: ${({ fColor }) => fColor};
        font-family: ${({ theme }) => theme.fontFamily.normal};
        position: absolute;
        background: transparent;
        text-align: center;
        cursor: pointer;
        border: 0;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.63;
        width: 100%;
        height: 100%;
        left: 0;
        top: 5px;
        margin-top: 10px;

        p {
            color: ${({ theme }) => theme.colors.primaryBlack60};
            font-weight: normal;
            text-align: center;
            font-size: 1.6rem;
            line-height: 1.2;
            margin-top: 2rem;

            span {
                color: ${({ theme }) => theme.colors.primaryBlack};
                font-weight: 500;
            }
        }

        .fileUploadAllowMsg {
            color: ${({ theme }) => theme.colors.primaryBlack60};
            font-weight: normal;
            text-align: center;
            font-size: 1.2rem;
            line-height: 1.71;
            margin-top: 0.5rem;

            &.bannerError {
                color: ${({ theme }) => theme.colors.errorRed};
            }
        }
    }
`;

type StyledAvtarColorType = {
    fColor: string;
};

export const StyledBannerAvatarContainer = styled(Avatar)<StyledAvtarColorType>`
    color: ${({ theme }) => theme.colors.primaryBlack};
    background-color: ${({ theme }) => theme.colors.primaryBlack5};
    text-align: center;
    font-weight: bold;
    font-size: 2.4rem;
    line-height: 0.83;
    width: 50px;
    height: 50px;
    top: -37px;
    right: 0;
    left: 2px;
    margin: 0 auto;
    padding: 22px 11px 11px 11px;

    svg {
        fill: ${({ fColor }) => fColor};
    }
`;

export const StyleEditBannerBtn = styled.div`
    position: absolute;
    top: 10px;
    right: 51px;

    button {
        background: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        padding: 0;
        line-height: 0;
        border: none;
        outline: none;
        cursor: pointer;

        svg {
            position: relative;
            top: 7px;
            left: 7px;
        }
    }
`;
