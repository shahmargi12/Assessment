import React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
// import ThemeIcons from '@foster/ThemeIcons';
import { StyledCheckbox, StyledFormControlLabel, StyledFormGroup } from './CheckboxGroup.styled';

type CheckboxItem = {
    label: string;
    name: string;
    checked: boolean;
    disabled?: boolean;
    key: string;
    indeterminate?: boolean;
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
}: CheckboxGroupProps): JSX.Element {
    return (
        <FormControl component="fieldset" error={error}>
            {formLabel ? <FormLabel component="legend">{formLabel}</FormLabel> : null}
            <StyledFormGroup
                classes={{
                    root: align === 'vertical' ? 'verticalRoot' : 'horizontalRoot',
                }}
            >
                {items.map((item, index) => {
                    return (
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
                                    // icon={<ThemeIcons.CheckboxIcon />}
                                    // checkedIcon={<ThemeIcons.CheckboxSelectedIcon />}
                                    height={height}
                                    width={width}
                                />
                            }
                            label={item.label}
                            disabled={isDisable ? isDisable : item.disabled}
                            onBlur={(e) => (onBlur ? onBlur(e, item) : null)}
                        />
                    );
                })}
            </StyledFormGroup>
            {formHelperText ? <FormHelperText>{formHelperText}</FormHelperText> : null}
        </FormControl>
    );
}
CheckboxGroup.defaultProps = {
    size: 'medium',
    align: 'vertical',
    height: 22,
    width: 22,
};
export default CheckboxGroup;
