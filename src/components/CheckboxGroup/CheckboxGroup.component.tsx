import React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Icons from '../../Icons';
import {
    StyledCheckbox,
    StyledFilter,
    StyledFormControl,
    StyledFormControlLabel,
    StyledFormGroup,
} from './CheckboxGroup.styled';

type CheckboxItem = {
    label: string;
    name: string;
    checked: boolean;
    disabled?: boolean;
    key: string;
    indeterminate?: boolean;
    value: string | number;
};

export interface CheckboxGroupProps {
    isDisable: boolean;
    items: CheckboxItem[];
    onChange: (item: CheckboxItem, flag: boolean) => void;
    error?: boolean;
    formHelperText?: string;
    formLabel?: string;
    size?: 'medium' | 'small';
    align: 'vertical' | 'horizontal';
    onBlur?: (e: React.FocusEvent<HTMLLabelElement, Element>, item: CheckboxItem) => void;
    height?: number;
    width?: number;
    statusNumber: { [key: string | number]: number };
}

function CheckboxGroup({
    items,
    onChange,
    error,
    formHelperText,
    formLabel,
    size,
    align,
    onBlur,
    isDisable,
    height,
    width,
    statusNumber,
}: CheckboxGroupProps): JSX.Element {
    return (
        <StyledFormControl component="fieldset" error={error}>
            {formLabel ? <FormLabel component="legend">{formLabel}</FormLabel> : null}
            <StyledFormGroup classes={{ root: align === 'vertical' ? 'verticalRoot' : 'horizontalRoot' }}>
                {items.map((item, index) => {
                    return (
                        <StyledFilter>
                            <StyledFormControlLabel
                                key={index}
                                control={
                                    <StyledCheckbox
                                        checked={item.checked}
                                        onChange={(e, other) => onChange(item, other)}
                                        name={item.name}
                                        color="primary"
                                        indeterminate={item.indeterminate}
                                        size={size}
                                        icon={<Icons.CheckboxIcon />}
                                        checkedIcon={<Icons.CheckboxSelectedIcon />}
                                        height={height}
                                        width={width}
                                    />
                                }
                                label={item.label}
                                disabled={isDisable ? isDisable : item.disabled}
                                onBlur={(e) => (onBlur ? onBlur(e, item) : null)}
                            />
                            {(statusNumber && item && statusNumber[item.value]) !== undefined ? (
                                <p>{statusNumber[item.value] === 0 ? null : statusNumber[item.value]}</p>
                            ) : null}
                        </StyledFilter>
                    );
                })}
            </StyledFormGroup>
            {formHelperText ? <FormHelperText>{formHelperText}</FormHelperText> : null}
        </StyledFormControl>
    );
}
CheckboxGroup.defaultProps = {
    size: 'medium',
    align: 'vertical',
    height: 22,
    width: 22,
    pendingCount: 0,
    statusNumber: {},
};
export default CheckboxGroup;
