import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OverflowTip from './OverflowTip.component';

export default {
    title: 'Overflow Tooltip',
    component: OverflowTip,
    argTypes: {},
} as ComponentMeta<typeof OverflowTip>;

const Template: ComponentStory<typeof OverflowTip> = (args) => {
    return <OverflowTip {...args}></OverflowTip>;
};

export const OverflowTooltip: ComponentStory<typeof OverflowTip> = Template.bind({});
OverflowTooltip.args = {
    title: 'Overfow tooltip',
    children: (
        <div style={{ width: '200px' }}>
            Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
        </div>
    ),
};
