import React, { useState, FocusEventHandler, useEffect } from 'react';
import { debounce } from 'debounce';
import { TIMEOUT } from '../../util/constant';
import { getTextLength } from '../../util/helper';
import { StyledInput, StyledInputContainer, StyledRichContainer, StyleCountText } from './TextArea.styled';

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
    textCount?: boolean;
    labelType: string;
    variant: 'filled';
    required?: boolean;
};

function TextArea({
    value,
    onChange,
    id,
    disabled,
    fullWidth,
    maxLength,
    placeholder,
    rows = 5,
    defaultValue,
    labelType,
    variant,
    required,
}: InputComponentProps): JSX.Element {
    const [count, setCount] = useState(0);
    const [displayCount, setDisplayCount] = useState<boolean>(false);

    useEffect(() => {
        handleTextCount(value);
    }, [value]);

    const handleTextCount = debounce((value: string) => {
        const textLength = getTextLength(value);
        setCount(textLength);
    }, TIMEOUT.DELAY_700);

    const requiredLabel = (
        <>
            <p>{labelType}</p>

            {required && (
                <span aria-hidden="true" className="MuiInputLabel-asterisk">
                    *
                </span>
            )}
        </>
    );

    return (
        <StyledRichContainer>
            <StyledInputContainer>
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
                    variant={variant}
                    onFocus={() => setDisplayCount(true)}
                    onBlur={() => setDisplayCount(false)}
                    defaultValue={defaultValue}
                    label={requiredLabel}
                />
                {displayCount ? (
                    <StyleCountText>
                        {count}/{maxLength}
                    </StyleCountText>
                ) : (
                    ''
                )}
            </StyledInputContainer>
        </StyledRichContainer>
    );
}

TextArea.defaultProps = {
    onChange: (e: MouseEvent) => {
        console.log(e);
    },
    type: 'text',
    labelType: 'Filled',
    error: false,
    disabled: false,
    variant: 'filled',
    required: false,
};

export default TextArea;
