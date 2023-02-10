import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextBoxInput from './Textbox.component';

export default {
    title: 'TextBox',
    component: TextBoxInput,
    asgTypes: {},
} as ComponentMeta<typeof TextBoxInput>;

const Template: ComponentStory<typeof TextBoxInput> = (args) => {
    return <TextBoxInput {...args} />;
};

export const TextBox: ComponentStory<typeof TextBoxInput> = Template.bind({});
TextBox.args = {
    value: undefined,
    onChange: (value) => {
        console.log(value);
    },
    fullWidth: true,
    placeholder: 'Write your remarks here...',
    maxLength: 1000,
};
