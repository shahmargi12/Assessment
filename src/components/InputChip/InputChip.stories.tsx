import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputChipComp from './InputChip.component';
export default {
    title: 'InputChip',
    component: InputChipComp,
    argTypes: {},
} as ComponentMeta<typeof InputChipComp>;

const Template: ComponentStory<typeof InputChipComp> = (args) => {
    const [value, setValue] = useState([]);

    return <InputChipComp {...args} value={value} onChange={(newValue) => setValue([...newValue])} />;
};

export const InputChip: ComponentStory<typeof InputChipComp> = Template.bind({});
InputChip.args = {
    validationMessage: 'incorrect value',
    duplicateValueValidationMessage: '',
    maxLimitMessage: '',
    id: 'input-chip',
    placeholder: 'Enter',
    fireValidationBeforeChipAdd: false,
    allowDuplicateValues: false,
};
