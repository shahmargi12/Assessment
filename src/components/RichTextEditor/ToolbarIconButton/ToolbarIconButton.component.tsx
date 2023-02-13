import React from 'react';
import { IconButtonProps } from '@mui/material/IconButton';
import { StyledIconButton } from './ToolbarIconButton.styled';

type RTEIconButtonProps = IconButtonProps & {
    isActive: boolean;
};

const RTEIconButton = ({ isActive, ...props }: RTEIconButtonProps): JSX.Element => {
    return <StyledIconButton isActive={isActive} {...props} />;
};

export default RTEIconButton;
