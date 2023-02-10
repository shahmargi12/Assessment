import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { StyledInput, StyledInputContainer } from './CustomInput.styled';
import { numberInput } from '../../util/helper';
import { RADIX_PARAMETER } from '../../util/constant';

type AdormentType = {
    AdormentTypeIcon: JSX.Element;
    position: 'start' | 'end';
};

export type InputCompProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string) => void;
    onClickSuffix?: React.MouseEventHandler;
    type: 'text' | 'number' | 'password' | 'email' | 'file' | 'datetime-local';
    placeholder?: string;
    maxLength?: number;
    id: string;
    fullWidth?: boolean;
    labelType: string;
    defaultValue?: string;
    adornmentProps?: AdormentType;
    helperText?: string;
    error?: boolean;
    suffix?: JSX.Element | string;
    disabled?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
    bgColor?: string;
    restrictNegative?: boolean;
    autoFocus?: boolean;
    onBlur?: () => void;
    minHeight?: boolean;
    padding?: string;
    variant?: 'filled';
    required?: boolean;
    autoComplete?: string;
};

const CustomInput = ({
    value,
    onChange,
    onClickSuffix,
    type,
    labelType,
    fullWidth,
    adornmentProps,
    error,
    helperText,
    maxLength,
    suffix,
    disabled,
    inputRef,
    bgColor = '',
    restrictNegative,
    autoFocus,
    onBlur,
    minHeight,
    padding,
    placeholder,
    variant,
    required,
    autoComplete,
    ...otherProps
}: InputCompProps): React.ReactElement => {
    const icon = adornmentProps?.AdormentTypeIcon;
    const adornment =
        adornmentProps?.position === 'start'
            ? {
                  startAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
              }
            : {
                  endAdornment: <InputAdornment position="end">{icon}</InputAdornment>,
              };

    const helperTextVariable = <p>{helperText}</p>;

    return (
        <StyledInputContainer minHeight={minHeight}>
            <StyledInput
                type={type}
                padding={padding}
                onChange={(e) => onChange(type === 'file' ? e : e.target.value)}
                value={value}
                label={labelType}
                required={required}
                fullWidth={fullWidth}
                variant={variant}
                InputProps={{
                    ...adornment,
                    inputProps: { min: 0 },
                }}
                inputMode={type === 'number' && restrictNegative ? 'numeric' : null}
                error={error}
                helperText={helperTextVariable}
                onInput={
                    maxLength !== undefined
                        ? (e: React.ChangeEvent<HTMLInputElement>) =>
                              (e.target.value = Math.max(0, parseInt(e.target.value, RADIX_PARAMETER.DECIMAL))
                                  .toString()
                                  .slice(0, maxLength))
                        : null
                }
                classes={{
                    root: 'customRoot',
                }}
                disabled={disabled}
                inputRef={inputRef}
                bgColor={bgColor}
                onKeyDown={restrictNegative ? numberInput : null}
                autoFocus={autoFocus}
                placeholder={placeholder}
                onBlur={onBlur}
                autoComplete={autoComplete ? autoComplete : 'off'}
                {...otherProps}
            />
            {suffix && (
                <div aria-hidden onClick={onClickSuffix} className="suffix">
                    {suffix}
                </div>
            )}
        </StyledInputContainer>
    );
};

CustomInput.defaultProps = {
    onChange: () => console.log('pressed'),
    type: 'text',
    labelType: 'Filled',
    error: false,
    disabled: false,
    restrictNegative: false,
    variant: 'filled',
    required: false,
};

export default CustomInput;
