import React, { ReactElement, useState, useEffect } from 'react';
import CustomInput from '../CustomInput';
import DropdownSelect from '../DropdownTheme';
import InputTwin, { InputType } from '../InputTwin/InputTwin.component';
import { InputCompProps } from '../CustomInput/CustomInput.component';
import { StyleDropdownWithInput } from './DropdownWithInput.styled';

export type ItemType = {
    label: string;
    value: string;
    type?: 'INPUT' | 'INPUT_TWIN';
    inputProps?: InputCompProps;
    inputTwinProps1: InputType;
    inputTwinProps2: InputType;
    twinDivider: ReactElement;
    inputTwinValue?: ValueType;
};

export type ValueType = { value1: string; value2: string };

type DropdownWithInputType = {
    items: ItemType[];
    onChange: (item: ItemType, val: ValueType | string) => void;
    dropdownValue: ItemType;
    inputValue: string | ValueType;
    dropdownWidth: string;
    inputWidth: string;
    dropdownPlaceholder: string;
    dropdownLabel?: string;
    placeholder?: string;
};

const DropdownWithInput = ({
    items,
    onChange,
    dropdownValue,
    inputValue,
    dropdownWidth,
    inputWidth,
    dropdownPlaceholder,
    dropdownLabel,
}: DropdownWithInputType): JSX.Element => {
    const [selectedItem, setSelectedItem] = useState<ItemType>();

    useEffect(() => {
        prepareInputField(dropdownValue);
    }, [dropdownValue, items]);

    const handleOnChange = (dropdownValue: ItemType, inputValue: ValueType | string) => {
        const currentItem = dropdownValue;
        onChange(currentItem, inputValue);
    };

    const handleDropdownChange = (value: ItemType) => {
        const currentItem = value;
        onChange(currentItem, '');
    };

    const prepareInputField = (dropdownValue: ItemType) => {
        if (dropdownValue && items) {
            items.forEach((item) => {
                if (item.label === dropdownValue.label && item.value === dropdownValue.value) {
                    setSelectedItem(item);
                }
            });
        }
    };

    return (
        <StyleDropdownWithInput dropdownWidth={dropdownWidth} inputWidth={inputWidth}>
            <div>
                <DropdownSelect
                    hideSelectedOptions={false}
                    isMulti={false}
                    onChange={(val: ItemType) => {
                        handleDropdownChange(val);
                    }}
                    items={items}
                    isClearable={false}
                    value={dropdownValue}
                    name="dropdown"
                    id="dropdown"
                    label={dropdownLabel}
                    placeholder={dropdownPlaceholder}
                />
            </div>
            {selectedItem ? (
                <div>
                    {selectedItem.type === 'INPUT_TWIN' ? (
                        <InputTwin
                            input1={{ ...selectedItem?.inputTwinProps1 }}
                            input2={{ ...selectedItem?.inputTwinProps2 }}
                            value1={typeof inputValue !== 'string' ? inputValue?.value1 : ''}
                            value2={typeof inputValue !== 'string' ? inputValue?.value2 : ''}
                            onChange={(val) => handleOnChange(dropdownValue, val)}
                            error={false}
                            divider={selectedItem?.twinDivider}
                        ></InputTwin>
                    ) : (
                        <CustomInput
                            {...selectedItem?.inputProps}
                            id="input"
                            value={typeof inputValue === 'string' ? inputValue : ''}
                            onChange={(val) => handleOnChange(dropdownValue, val as string)}
                        />
                    )}
                </div>
            ) : null}
        </StyleDropdownWithInput>
    );
};

DropdownWithInput.defaultProps = {
    dropdownPlaceholder: '',
};

export default DropdownWithInput;
