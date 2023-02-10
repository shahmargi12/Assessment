import React from 'react';
import Drawer, { DrawerProps } from '@mui/material/Drawer';

function DrawerComponent({ anchor, children, classes, open, ...others }: DrawerProps): JSX.Element {
    return (
        <Drawer anchor={anchor} open={open} classes={classes} {...others}>
            {children}
        </Drawer>
    );
}

DrawerComponent.defaultProps = {
    anchor: 'bottom',
    children: <></>,
    classes: '',
    open: 'false',
};

export default DrawerComponent;
