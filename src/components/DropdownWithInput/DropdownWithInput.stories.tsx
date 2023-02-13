import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropdownWithInput, { ItemType, ValueType } from './DropdownWithInput.component';

export default {
    title: 'DropdownWithInput',
    component: DropdownWithInput,
    argTypes: {},
} as ComponentMeta<typeof DropdownWithInput>;

type InputWithTwinType = {
    resultType: ItemType;
    result: string | ValueType;
};

const DIVIDER = <p style={{ fontSize: '2.2rem' }}>/</p>;

const EVALUATION_CRITERIA: ItemType[] = [
    {
        label: 'CGPA',
        value: 'cgpa',
        type: 'INPUT_TWIN',
        twinDivider: DIVIDER,
        inputTwinProps1: { placeholder: 'Obtained CGPA', type: 'number', width: '120px' },
        inputTwinProps2: { placeholder: 'Total CGPA', type: 'number', width: '120px' },
        inputTwinValue: { value1: '', value2: '10' },
    },
    { label: 'GPA', value: 'gpa', type: 'INPUT' },
    {
        label: 'Percentage',
        value: 'percentage',
        type: 'INPUT',
    },
];

const Template: ComponentStory<typeof DropdownWithInput> = (args) => {
    const [defaultValue, setDefaultValue] = useState<InputWithTwinType>({
        resultType: { label: 'Percentage', value: 'percentage' },
        result: '',
    });

    const handleCriteriaChange = (val: ItemType, val2: string | ValueType) => {
        if (val.label === 'CGPA') {
            setDefaultValue((prevValue) => {
                return {
                    ...prevValue,
                    resultType: val,
                    result: {
                        value1: typeof val2 !== 'string' ? val2.value1 : '',
                        value2: typeof val2 !== 'string' ? val2.value2 : '',
                    },
                };
            });
        } else {
            setDefaultValue((prevValue) => {
                return { ...prevValue, resultType: val, result: typeof val2 === 'string' ? val2 : '' };
            });
        }
    };

    return (
        <DropdownWithInput
            {...args}
            dropdownValue={defaultValue?.resultType}
            inputValue={defaultValue?.result}
            onChange={(val, val2) => {
                handleCriteriaChange(val, val2);
            }}
        />
    );
};

export const DropdownAndInput: ComponentStory<typeof DropdownWithInput> = Template.bind({});
DropdownAndInput.args = {
    items: EVALUATION_CRITERIA,
    dropdownWidth: '20%',
    inputWidth: '80%',
};
