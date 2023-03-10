import React from 'react';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import Icons from '../../Icons';
import { StyledCheckbox } from './Checkbox.styled';

export interface CheckBoxProps extends CheckboxProps {
    height?: number;
    width?: number;
}

function CheckboxComp({ height, width, ...props }: CheckBoxProps): JSX.Element {
    return (
        <StyledCheckbox>
            <Checkbox
                {...props}
                icon={<Icons.CheckboxIcon height={height} width={width} />}
                checkedIcon={<Icons.CheckboxSelectedIcon height={height} width={width} />}
            />
        </StyledCheckbox>
    );
}

CheckboxComp.defaultProps = {
    height: 22,
    width: 22,
};

export default CheckboxComp;
