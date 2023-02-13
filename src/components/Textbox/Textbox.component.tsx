import React, { FocusEventHandler, MouseEventHandler } from 'react';
import { StyledInput, StyledInputContainer, StyledRichContainer } from './Textbox.styled';

type InputComponentProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    maxLength?: number;
    id: string;
    fullWidth?: boolean;
    disabled?: boolean;
    rows?: number;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    defaultValue?: unknown;
    onClick?: MouseEventHandler;
};

function TextBox({
    value,
    onChange,
    id,
    disabled,
    fullWidth,
    maxLength,
    placeholder,
    rows = 5,
    onFocus,
    defaultValue,
    onClick,
}: InputComponentProps): JSX.Element {
    return (
        <StyledRichContainer onClick={onClick}>
            <StyledInputContainer onClick={onClick}>
                <StyledInput
                    rows={rows}
                    multiline
                    onChange={(e) => onChange(e.target.value)}
                    value={value}
                    fullWidth={fullWidth}
                    disabled={disabled}
                    inputProps={{ maxLength: maxLength }}
                    placeholder={placeholder}
                    id={id}
                    variant="filled"
                    onFocus={onFocus}
                    onBlur={() => {
                        console.log();
                    }}
                    defaultValue={defaultValue}
                    onClick={onClick}
                />
            </StyledInputContainer>
        </StyledRichContainer>
    );
}

TextBox.defaultProps = {
    onChange: (e: MouseEvent) => {
        console.log(e);
    },
    type: 'text',
    labelType: 'Filled',
    error: false,
    disabled: false,
};

export default TextBox;
