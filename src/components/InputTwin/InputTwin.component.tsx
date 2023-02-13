import React, { ReactElement, useEffect, useState } from 'react';
import { StyledInputContainer } from './InputTwin.styled';

export type InputType = {
    placeholder: string;
    type: 'text' | 'number' | 'password' | 'email' | 'file' | 'datetime-local' | 'tel' | 'url';
    width?: string;
    readOnly?: boolean;
    disabled?: boolean;
};

type InputTwinProps = {
    onChange: (value: { value1: string; value2: string }) => void;
    input1: InputType;
    input2: InputType;
    value1: string;
    value2: string;
    error: boolean;
    divider: ReactElement;
};

const InputTwin = ({ onChange, input1, input2, error, divider, value1, value2 }: InputTwinProps): JSX.Element => {
    const [inputOneValue, setInputOneValue] = useState(value1);
    const [inputTwoValue, setInputTwoValue] = useState(value2);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        setInputOneValue(value1);
    }, [value1]);

    useEffect(() => {
        setInputTwoValue(value2);
    }, [value2]);

    const handleInputOneChange = (value: string) => {
        const obj = { value1: value, value2: inputTwoValue };
        onChange(obj);
        setInputOneValue(value);
    };

    const handleInputTwoChange = (value: string) => {
        const obj = { value1: inputOneValue, value2: value };
        onChange(obj);
        setInputTwoValue(value);
    };

    return (
        <StyledInputContainer error={error} focus={isFocused} inputOneWidth={input1.width} inputTwoWidth={input2.width}>
            <input
                id="input1"
                type={input1.type}
                placeholder={input1.placeholder}
                value={inputOneValue}
                onChange={(e) => handleInputOneChange(e.target.value)}
                onFocus={() => {
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                }}
                readOnly={input1?.readOnly}
                disabled={input1?.disabled}
            />
            {divider}
            <input
                id="input2"
                type={input2.type}
                placeholder={input2.placeholder}
                value={inputTwoValue}
                onChange={(e) => handleInputTwoChange(e.target.value)}
                onFocus={() => {
                    setIsFocused(true);
                }}
                onBlur={() => {
                    setIsFocused(false);
                }}
                readOnly={input2?.readOnly}
                disabled={input2?.disabled}
            />
        </StyledInputContainer>
    );
};

export default InputTwin;
