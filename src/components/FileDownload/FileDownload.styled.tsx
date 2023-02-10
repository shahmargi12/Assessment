import styled from 'styled-components';
import { Skeleton } from '@mui/material';

export const StyledFileContent = styled.div``;

export const StyledFileInfo = styled.div`
    width: 75%;

    h3 {
        font-family: ${({ theme }) => theme.fontFamily.normal};
        color: ${({ theme }) => theme.colors.primaryBlack};
        font-weight: normal;
        font-size: 15px;
        line-height: 1.27;
        margin-bottom: 1px;
    }

    p {
        color: ${({ theme }) => theme.colors.primaryBlack} !important;
        font-size: 15px;
        font-weight: 600;
        margin-top: 3px;
        margin-bottom: 0;

        span {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;

            &:first-child {
                text-overflow: ellipsis;
                width: 85%;
            }
        }
    }
`;

export const StyledFileBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledLoadingSkeleton = styled(Skeleton)`
    width: inherit;
    height: 65px !important;
`;
export const StyledIcons = styled.div`
    display: flex;
    align-items: center;

    button {
        padding: 10px 10px 5px 10px;
    }
`;
