import React, { useEffect, useState, useRef } from "react";
import { ClickAwayListener } from "@mui/material";
import { KEY_CODES } from "../../util/constant";
import { Theme } from "../../theme/default";
import Icons from "../../Icons";
import {
  StyledChip,
  StyledInputContainer,
  StyledErrorContainer,
  StyleMinHeight,
} from "./InputChip.styled";

type InputChipPropType = {
  onChange: (value: string[]) => void;
  value: Array<string>;
  fireValidationBeforeChipAdd: boolean;
  helperText: string;
  error: boolean;
  id?: string;
  placeholder?: string;
  validatorFunction?: (email: string, value: string[]) => boolean;
  validationMessage?: string;
  allowDuplicateValues?: boolean;
  duplicateValueValidationMessage?: string;
  maxLimit?: number;
  maxLimitMessage?: string;
  setError?: (error: boolean) => void;
};

const InputChip = ({
  onChange,
  value,
  validatorFunction,
  fireValidationBeforeChipAdd,
  validationMessage,
  helperText,
  error,
  allowDuplicateValues,
  duplicateValueValidationMessage,
  maxLimit,
  maxLimitMessage,
  setError,
  ...props
}: InputChipPropType): JSX.Element => {
  const [currentValue, setCurrentValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(helperText);
  const [isError, setIsError] = useState(error);
  const inputElement = useRef();

  useEffect(() => {
    setErrorMessage(helperText);
  }, [helperText]);

  useEffect(() => {
    setIsError(error);
  }, [error]);

  /**
   * Add user entered value(current value) to current list or fire validation cases
   */
  const handleCurrentValue = () => {
    if (currentValue) {
      // if user entered any text
      if (fireValidationBeforeChipAdd) {
        if (maxLimit && value && value.length >= maxLimit) {
          // set error if maximum limit is reached
          setError(true);
          setIsError(true);
          setErrorMessage(maxLimitMessage);
        } else {
          checkValidation();
        }
      } else {
        onChange([...value, currentValue]);
        setCurrentValue("");
      }
    } else if (
      !currentValue &&
      value &&
      value.length > 0 &&
      value.length <= maxLimit
    ) {
      //if user not entered any text and chip value length is not more than maximum limit
      removeError();
    }
  };

  /**
   * Check if users entered value(current value) passes the validator function then add value to list else set, display error
   */
  const checkValidation = () => {
    if (validatorFunction(currentValue, value)) {
      //if user input passes the validator function
      if (allowDuplicateValues) {
        //if duplicate values is allowed then simple add value to the existing list
        value ? onChange([...value, currentValue]) : onChange([currentValue]);
        setCurrentValue("");
        removeError();
      } else {
        // check if current value is already exists in list or not, and if already exists then set error
        if (value.includes(currentValue)) {
          setError(true);
          setIsError(true);
          setErrorMessage(duplicateValueValidationMessage);
        } else {
          onChange([...value, currentValue]);
          setCurrentValue("");
          removeError();
        }
      }
    } else {
      //set error if current value not passes the validator function
      setError(true);
      setIsError(true);
      setErrorMessage(validationMessage);
    }
  };

  /**
   * Removes Error
   */
  const removeError = () => {
    setError(false);
    setIsError(false);
    setErrorMessage("");
  };

  /**
   *
   * @param item item which needs to be removed
   * @param index index of that particular item in array
   */
  const removeItem = (item: string, index: number) => {
    const tempValue: string[] = value.filter(
      (row: string, i) => row !== item || index !== i
    );
    onChange(tempValue);
  };

  /**
   *
   * @param e keyboard change event object
   */
  const handleKeyboardChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === KEY_CODES.ENTER) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (e.keyCode === KEY_CODES.BACKSPACE && !currentValue) {
      const tempValue = value;
      if (Array.isArray(tempValue)) {
        if (tempValue.length > 0) {
          tempValue.pop();
          onChange([...tempValue]);
        }
        if (tempValue.length === 0) {
          onChange([]);
        }
      }
    }
    if (e.keyCode === KEY_CODES.TAB) {
      e.preventDefault();
      handleCurrentValue();
    }
  };

  /**
   * To focus the input whenever use click on component
   */
  const handleFocus = () => {
    const element = inputElement.current as HTMLElement;
    element.focus();
  };

  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          handleCurrentValue();
        }}
      >
        <StyleMinHeight>
          <StyledInputContainer error={isError} onClick={handleFocus}>
            <>
              {Array.isArray(value) &&
                value.map((value, index) => {
                  return (
                    <StyledChip key={index}>
                      <div className="menu" key={index}>
                        <div className="menu__item">
                          <div className="menu__item__text">
                            <span>{value}</span>
                          </div>
                          <div
                            aria-hidden
                            className="menu__item__icon"
                            onClick={() => removeItem(value, index)}
                          >
                            <Icons.CloseIcon
                              fill={Theme.colors.primaryBlack}
                              width={8}
                              height={8}
                            />
                          </div>
                        </div>
                      </div>
                    </StyledChip>
                  );
                })}

              <input
                ref={inputElement}
                className="input"
                type="text"
                onKeyDown={(e) => {
                  handleKeyboardChange(e);
                }}
                onBlur={() => {
                  handleCurrentValue();
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setCurrentValue(e.target.value);
                }}
                value={currentValue}
                {...props}
                placeholder={
                  value
                    ? Array.isArray(value) && value.length > 0
                      ? ""
                      : props.placeholder
                    : props.placeholder
                }
              />
            </>
          </StyledInputContainer>
          {isError && errorMessage && (
            <StyledErrorContainer>{errorMessage}</StyledErrorContainer>
          )}
        </StyleMinHeight>
      </ClickAwayListener>
    </>
  );
};
InputChip.defaultProps = {
  value: [],
  fireValidationBeforeChipAdd: false,
  allowDuplicateValues: false,
  onChange: () => {
    console.log("on change");
  },
  maxLimit: 40,
  setError: () => {
    console.log("error");
  },
  validatorFunction: () => {
    console.log("validatorFunction");
  },
  validationMessage: "",
  duplicateValueValidationMessage: "",
  maxLimitMessage: "",
  id: "input-chip",
  placeholder: "Enter",
};

export default InputChip;
