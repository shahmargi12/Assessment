import React from 'react';
import { TooltipProps } from '@mui/material/Tooltip';
import { PopperProps } from '@mui/material/Popper';
import { NonNullable } from '@root/types/comman';
import StyledTooltip from './Tooltip.styled';

export interface CustomTooltipProp extends TooltipProps {
    children: React.ReactElement;
    disableFocusListener?: boolean;
    disableHoverListener?: boolean;
    disableTouchListener?: boolean;
    id?: string;
    onOpen?: (event: React.SyntheticEvent) => void;
    open?: boolean;
    placement?:
        | 'bottom-end'
        | 'bottom-start'
        | 'bottom'
        | 'left-end'
        | 'left-start'
        | 'left'
        | 'right-end'
        | 'right-start'
        | 'right'
        | 'top-end'
        | 'top-start'
        | 'top';
    popperProps?: Partial<PopperProps>;
    title: NonNullable<React.ReactNode>;
    bgColor?: string;
    fontColor?: string;
}

function TooltipComp({
    children,
    disableFocusListener,
    disableHoverListener,
    disableTouchListener,
    title,
    onClose,
    onOpen,
    open,
    placement,
    popperProps,
    bgColor = '#1d1d1b',
    fontColor = '#fff',
}: CustomTooltipProp): JSX.Element {
    return (
        <StyledTooltip
            title={title}
            disableFocusListener={disableFocusListener}
            disableHoverListener={disableHoverListener}
            disableTouchListener={disableTouchListener}
            onClose={onClose}
            onOpen={onOpen}
            open={open}
            placement={placement}
            enterDelay={500}
            PopperProps={popperProps}
            arrow
            bgColor={bgColor}
            fontColor={fontColor}
        >
            {children}
        </StyledTooltip>
    );
}

export default TooltipComp;
