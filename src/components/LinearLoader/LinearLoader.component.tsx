import React from 'react';
import { LinearProgressProps } from '@mui/material/LinearProgress';
import { StyledLinearLoaderContainer } from './LinearLoader.styled';

const LinearLoader = (props: LinearProgressProps): JSX.Element => {
    return (
        <div className="linearLoader">
            <StyledLinearLoaderContainer {...props} />
        </div>
    );
};

export default LinearLoader;
