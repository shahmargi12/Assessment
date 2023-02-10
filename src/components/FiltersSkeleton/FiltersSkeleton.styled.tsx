import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';

export const StyledContainer = styled.div`
    padding: 1rem 3rem;
`;

export const StyledRowContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledCheckboxSkelton = styled(Skeleton)`
    width: 25px;
    height: 40px !important;
    margin-right: 10px;
`;

export const StyledLabelSkelton = styled(Skeleton)`
    height: 40px !important;
    width: 140px;
`;

export const StyledHeaderSkeleton = styled(Skeleton)`
    width: 130px;
    height: 40px !important;
    margin-bottom: 10px !important;
`;
