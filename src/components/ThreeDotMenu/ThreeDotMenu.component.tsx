import React, { ReactElement } from 'react';
import Fade from '@mui/material/Fade';
import Tooltip from '../Tooltip';
import Button from '../Button';
import IconButton from '../IconButton';
import Icons from '../../Icons';
import { StyledMenu, StyledMenuItem, StyledIconContainer } from './ThreeDotMenu.styled';

const options = [{ label: 'Label', type: 'Label', canAccess: true }];

type SelectorType = {
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    buttonText?: string;
};

export type MenuItemType = {
    label: string;
    /*
     *This should be uniq
     * */
    type: string;
    canAccess: boolean;
    width?: string;
    disabled?: boolean;
    tooltip: string;
    className?: string;
    title: string;
};

export type SimpleMenuProps = {
    items: MenuItemType[];
    selectedItem?: MenuItemType | undefined;
    onItemClick: (item?: MenuItemType, e?: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    iconDir: 'horizontal' | 'vertical';
    icon?: JSX.Element;
    selector?: SelectorType;
    variant?: 'text' | 'outlined' | 'contained';
    className?: string;
    iconClassName?: string;
    width: string;
};
const ThreeDotMenu = ({
    items,
    selectedItem,
    onItemClick,
    iconDir,
    icon,
    width,
    selector,
    variant,
    className,
    iconClassName,
}: SimpleMenuProps): JSX.Element => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        event.stopPropagation();
    };

    const handleClose = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item?: MenuItemType) => {
        setAnchorEl(null);
        onItemClick(item, e);
        e.stopPropagation();
    };

    const isVisibleMenu = () => {
        let flag = false;
        items.forEach((item) => {
            if (item.canAccess === undefined) {
                flag = true;
            }
            if (item.canAccess) {
                flag = true;
            }
        });
        return flag;
    };

    return (
        <>
            {isVisibleMenu() ? (
                selector?.buttonText ? (
                    <Button
                        startIcon={selector?.startIcon}
                        endIcon={selector?.endIcon}
                        onClick={handleClick}
                        variant={variant}
                    >
                        {selector?.buttonText}
                    </Button>
                ) : (
                    <IconButton
                        className={iconClassName}
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <StyledIconContainer iconDir={iconDir}>
                            {icon ? icon : <Icons.ThreeDotIcon />}
                        </StyledIconContainer>
                    </IconButton>
                )
            ) : null}
            {isVisibleMenu() && (
                <StyledMenu
                    id="long-menu"
                    anchorEl={anchorEl}
                    className={className}
                    keepMounted
                    open={open}
                    onClose={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => handleClose(e)}
                    PaperProps={{
                        style: {
                            // maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                    }}
                    TransitionComponent={Fade}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {items.map((option) =>
                        option.canAccess === undefined || option.canAccess === true ? (
                            <StyledMenuItem
                                key={option.type}
                                selected={option.type === selectedItem?.type}
                                onClick={(e) => handleClose(e, option)}
                                width={width}
                                className={option.className ? option.className : ''}
                            >
                                {option.disabled ? (
                                    <div>
                                        <Tooltip placement="left" title={option.tooltip}>
                                            <div className="listItem">
                                                {option.label}{' '}
                                                <span className="infoIcon">
                                                    <Icons.InfoIcon />
                                                </span>
                                            </div>
                                        </Tooltip>
                                    </div>
                                ) : (
                                    option.label
                                )}
                            </StyledMenuItem>
                        ) : null,
                    )}
                </StyledMenu>
            )}
        </>
    );
};
ThreeDotMenu.defaultProps = {
    items: options,
    iconDir: 'vertical',
    width: 'fit-content',
};
export default ThreeDotMenu;
