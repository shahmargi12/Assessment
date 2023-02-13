import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Radio from '../RadioCard';
import Button from '../Button';
import Icons from '../../Icons';
import { DOWNLOAD_MENU_OPTIONS } from '../../util/constant';
import { StyledMenuMain, StyledMenu, StyledMenuChild, StyledMenuItem, StyledMenuItemBtn } from './Menu.styled';

const ITEM_HEIGHT = 48;

type itemsProps = {
    id: number;
    value: string | number;
    label: string;
    disabled?: boolean;
};

type MenuItemsProps = {
    menuItems: itemsProps[];
    handleItemClick: (item: itemsProps | { export_type: string }) => void;
    header: string;
    subTitle: string;
};

const ThreeDotItemMenu = ({ menuItems, handleItemClick, header, subTitle }: MenuItemsProps): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorElMenu, setAnchorElMenu] = React.useState<HTMLLIElement | null>(null);
    const [exportType, setExportType] = React.useState('CSV');

    const topMenuItems = DOWNLOAD_MENU_OPTIONS.filter((menuItem) => menuItem.Top);

    const open = Boolean(anchorEl);
    const openMenu = Boolean(anchorElMenu);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const onItemClick = (event: React.MouseEvent<HTMLLIElement>, item: itemsProps) => {
        if (item && item.value === 'DOWNLOAD') {
            setAnchorElMenu(event.currentTarget);
        } else {
            handleItemClick(item);
            handleClose();
        }
    };

    const handleDownload = () => {
        setAnchorEl(null);
        setAnchorElMenu(null);
        handleItemClick({ export_type: exportType });
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorElMenu(null);
    };

    return (
        <StyledMenuMain>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <Icons.ThreeDotIcon />
            </IconButton>
            <StyledMenu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                {menuItems.map((item) => (
                    <MenuItem key={item.id} onClick={(event) => onItemClick(event, item)}>
                        {item?.label}
                    </MenuItem>
                ))}
            </StyledMenu>
            <StyledMenuChild
                id="basic-menu"
                anchorEl={anchorElMenu}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <h2>{header}</h2>
                <p className="content">{subTitle}</p>
                <StyledMenuItem>
                    <Radio
                        items={topMenuItems}
                        selectedItemValue={exportType}
                        radioGroupName={'Export Type'}
                        handleChange={(value) => {
                            setExportType(value);
                        }}
                        type={'horizontal'}
                    />
                </StyledMenuItem>
                <StyledMenuItemBtn>
                    <Button onClick={handleDownload}>Download</Button>
                </StyledMenuItemBtn>
            </StyledMenuChild>
        </StyledMenuMain>
    );
};

export default ThreeDotItemMenu;
