import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextAreaInput from './TextArea.component';

export default {
    title: 'TextArea',
    component: TextAreaInput,
    asgTypes: {},
} as ComponentMeta<typeof TextAreaInput>;

const Template: ComponentStory<typeof TextAreaInput> = (args) => {
    return <TextAreaInput {...args} />;
};

export const TextArea: ComponentStory<typeof TextAreaInput> = Template.bind({});
TextArea.args = {
    value: undefined,
    onChange: (value: string) => {
        console.log(value);
    },
    fullWidth: true,
    placeholder: 'Write your remarks here...',
    maxLength: 1000,
    textCount: true,
};
