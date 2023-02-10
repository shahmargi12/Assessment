import { Divider, Stack } from '@mui/material';
import React, { useMemo } from 'react';
import ChipsComponent from '../Chips';
import Icons from '../../Icons';
import {
    StyledListItemIcon,
    StyledListItemText,
    StyledMenu,
    StyledMenuButton,
    StyledMenuItem,
    StyledResetButton,
} from './ChipFilterGroup.styled';

interface ChipFilterGroupProp {
    chipsData: { label: string; id: number }[];
    displayCount: number;
    onDelete: (data: { label: string; id: number }) => void;
    onClearAll: () => void;
}

function ChipFilterGroup({ chipsData, displayCount = 5, onDelete, onClearAll }: ChipFilterGroupProp): JSX.Element {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const slectedChipsData = useMemo(() => [...chipsData], [chipsData]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const displayedChips = useMemo(() => slectedChipsData.splice(0, displayCount), [displayCount, slectedChipsData]);

    const extraChipsCount = slectedChipsData.length;

    const handleOnDelete = (data: { label: string; id: number }) => {
        onDelete(data);
    };

    const handleClearAll = () => onClearAll();

    return (
        <Stack display="flex" direction="row" spacing={2}>
            {displayedChips.map((data) => (
                <ChipsComponent
                    label={data.label}
                    key={data.id}
                    variant="outlined"
                    onDelete={() => {
                        handleOnDelete(data);
                    }}
                ></ChipsComponent>
            ))}
            {extraChipsCount > 0 && (
                <div>
                    <StyledMenuButton
                        id="basic-button"
                        variant="contained"
                        size="small"
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        onClick={handleClick}
                    >
                        +{extraChipsCount}
                    </StyledMenuButton>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {slectedChipsData.map((chip) => (
                            <StyledMenuItem disableRipple disableTouchRipple key={chip.id}>
                                <StyledListItemText>{chip.label}</StyledListItemText>
                                <StyledListItemIcon onClick={() => handleOnDelete(chip)}>
                                    <Icons.CloseIcon />
                                </StyledListItemIcon>
                            </StyledMenuItem>
                        ))}
                    </StyledMenu>
                </div>
            )}
            {displayedChips.length > 0 && (
                <>
                    <Divider orientation="vertical" flexItem />
                    <StyledResetButton onClick={handleClearAll} size="small" variant="text">
                        Reset
                    </StyledResetButton>
                </>
            )}
        </Stack>
    );
}

export default ChipFilterGroup;
