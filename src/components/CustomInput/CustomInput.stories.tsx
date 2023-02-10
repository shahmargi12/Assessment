import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomInput from './CustomInput.component';

export default {
    title: 'CustomInput',
    component: CustomInput,
    argTypes: {
        type: {
            options: ['text', 'number', 'password', 'email', 'file', 'datetime-local'],
            control: 'select',
        },
    },
} as ComponentMeta<typeof CustomInput>;

const Template: ComponentStory<typeof CustomInput> = (args) => <CustomInput {...args} />;

export const RegularState: ComponentStory<typeof CustomInput> = Template.bind({});
RegularState.args = {
    type: 'text',
    placeholder: 'Regular State',
};

export const FocusedState: ComponentStory<typeof CustomInput> = Template.bind({});
FocusedState.args = {
    type: 'text',
    placeholder: 'Focused State',
    autoFocus: true,
};

export const HelperState: ComponentStory<typeof CustomInput> = Template.bind({});
HelperState.args = {
    type: 'text',
    placeholder: 'Focused State',
    helperText: 'Helper Text',
};

export const ValidationState: ComponentStory<typeof CustomInput> = Template.bind({});
ValidationState.args = {
    type: 'text',
    placeholder: 'Validation State',
    helperText: 'Helper Text',
    error: true,
};
