import React from 'react';
import { CollapseProps } from '@mui/material/Collapse';
import { StyleMuiCollapse } from './Collapse.styled';

function Collapse({ orientation, children, ...others }: CollapseProps): JSX.Element {
    return (
        <StyleMuiCollapse orientation={orientation} {...others}>
            {children}
        </StyleMuiCollapse>
    );
}

export default Collapse;
