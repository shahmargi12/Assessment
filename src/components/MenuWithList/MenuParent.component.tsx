import React from 'react';
import Menu from '@mui/material/Menu';
import { StyledMenuParent } from './MenuWithList.styled';
import MenuWithList, { MenuWithListProp } from './MenuWithList.component';
import Button from '../Button';

export type MenuWithParentProp = {
    menuProps: MenuWithListProp;
    text: string;
};

const MenuWithParent = (props: MenuWithParentProp): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <StyledMenuParent>
            <Button
                variant="text"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {props.text}
            </Button>
            <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuWithList {...props.menuProps} closeFilter={handleClose} />
            </Menu>
        </StyledMenuParent>
    );
};

export default MenuWithParent;
