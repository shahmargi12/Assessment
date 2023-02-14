import styled from 'styled-components';

type TagProp = {
    type: 'average' | 'best' | 'worse' | 'primaryLight' | 'userRole';
    size: 'small' | 'medium';
};

export const StyledTag = styled.div<TagProp>`
    height: ${({ size }) => {
        if (size === 'medium') return '3rem';
        return '22px';
    }};
    min-width: ${({ size }) => {
        if (size === 'medium') return '10rem';
        return 'fit-content';
    }};
    width: fit-content;
    border-radius: 12px;
    font-size: ${({ theme, size }) => {
        if (size === 'medium') return '1.4rem';
        return '1rem';
    }};
    background-color: ${({ theme, type }) => {
        if (type === 'worse') return theme.colors.alertColors.error.primary;
        else if (type === 'average') return theme.colors.alertColors.warn.primary;
        else if (type === 'primaryLight') return theme.colors.primaryBlack10;
        else if (type === 'userRole') return '#dbd7d7';
        return theme.colors.alertColors.success.secondary;
    }};
    color: ${({ theme, type }) => {
        if (type === 'worse') return theme.colors.alertColors.error.primary;
        else if (type === 'average') return theme.colors.alertColors.warn.primary;
        else if (type === 'primaryLight') return theme.colors.primaryBlack;
        else if (type === 'userRole') return '#000';
        return theme.colors.alertColors.success.primary;
    }};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11px;
    font-weight: normal;
`;
