import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox.component';
export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
    return <Checkbox {...args} />;
};

export const CheckBoxSingle = Template.bind({});
