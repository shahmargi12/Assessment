import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChipFilterGroup from './ChipFilterGroup.component';

export default {
    title: 'ChipFilterGroup',
    component: ChipFilterGroup,
    argTypes: {},
} as ComponentMeta<typeof ChipFilterGroup>;

const CHIPS = [
    { label: 'label1', id: 1 },
    { label: 'label2', id: 2 },
    { label: 'label3', id: 3 },
    { label: 'label4', id: 4 },
    { label: 'label5', id: 5 },
    { label: 'label6', id: 6 },
    { label: 'label7', id: 7 },
    { label: 'label8', id: 8 },
    { label: 'label9', id: 9 },
    { label: 'label10', id: 10 },
    { label: 'label11', id: 11 },
    { label: 'label12', id: 12 },
    { label: 'label13', id: 13 },
    { label: 'label14', id: 14 },
    { label: 'label15', id: 15 },
];

const Template: ComponentStory<typeof ChipFilterGroup> = (args) => <ChipFilterGroup {...args} />;

export const Basic: ComponentStory<typeof ChipFilterGroup> = Template.bind({});

Basic.args = {
    chipsData: CHIPS,
    displayCount: 6,
};
