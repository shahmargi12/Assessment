import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputTwin from './InputTwin.component';

export default {
    title: 'Input Twin',
    component: InputTwin,
    argTypes: {},
} as ComponentMeta<typeof InputTwin>;

const Template: ComponentStory<typeof InputTwin> = (args) => {
    return <InputTwin {...args} onChange={(val) => console.log(val)} />;
};

export const Input: ComponentStory<typeof InputTwin> = Template.bind({});
Input.args = {
    value1: 'value 1',
    value2: 'value 2',
    error: false,
    divider: <p style={{ fontSize: '2.2rem' }}>/</p>,
    input1: { type: 'number', placeholder: 'Obtained CGPA', width: '120px' },
    input2: { type: 'number', placeholder: 'Total CGPA' },
};
