import React from 'react';
import { CircularProgress } from '@mui/material';
import { StyledCircularLoaderContainer } from './CircularLoader.styled';
import { Theme } from '../../theme/default';

type CircularLoaderProps = {
    height?: string;
    color?: string;
    size?: string | number;
};

const CircularLoader = ({ height, color, size }: CircularLoaderProps): JSX.Element => {
    return (
        <StyledCircularLoaderContainer height={height} color={color}>
            <CircularProgress size={size} />
        </StyledCircularLoaderContainer>
    );
};

CircularLoader.defaultProps = {
    color: Theme.colors.primaryBlack,
};

export default CircularLoader;
