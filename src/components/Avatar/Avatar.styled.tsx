import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const StyledAvatarContainer = styled.img`
    border-radius: 100px;
    object-fit: cover;
`;

type StyledInitialContainerProps = {
    widthContainer: string;
    heightContainer: string;
    fontSize: string;
    avatarBackgroundColor?: string;
    isAvatarColor: boolean;
    fontWeight?: string;
};
export const StyledInitialContainer = styled.div<StyledInitialContainerProps>`
    border-radius: 100px;
    color: ${({ theme }) => theme.colors.primaryBlack};
    background-color: ${({ isAvatarColor, avatarBackgroundColor, theme, color }) =>
        isAvatarColor
            ? avatarBackgroundColor
            : color === 'primary'
            ? theme.colors.primaryBlack10
            : theme.colors.primaryBlack20};
    width: ${({ widthContainer }) => widthContainer};
    height: ${({ heightContainer }) => heightContainer};
    ${({ fontSize }) => {
        if (fontSize) {
            return {
                fontSize: fontSize,
            };
        }
    }}
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '600')};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
`;

export const StyledAvatar = styled(Avatar)<StyledInitialContainerProps>`
    &.MuiAvatar-root {
        width: ${({ widthContainer }) => (widthContainer ? widthContainer : '30px')};
        height: ${({ heightContainer }) => (heightContainer ? heightContainer : '30px')};
    }

    &.rounded {
        border-radius: 8px;
        border: solid 1px ${({ theme }) => theme.colors.primaryBlack20};
    }

    &.MuiAvatar-colorDefault {
        background-color: ${({ theme }) => theme.colors.primaryBlack5};
        border: solid 1px ${({ theme }) => theme.colors.primaryBlack10};
        color: ${({ theme }) => theme.colors.primaryBlack};
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.36;
        text-align: center;
        font-weight: 600;
        //  border-radius: 100%;
    }
`;
