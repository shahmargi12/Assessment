import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chips from './Chips.component';

export default {
    title: 'Chips',
    component: Chips,
    argTypes: {},
} as ComponentMeta<typeof Chips>;

const Template: ComponentStory<typeof Chips> = (args) => {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <div style={{ display: 'flex', gap: '2rem' }}>
            <Chips {...args} label="Outlined Chip" variant="outlined" onDelete={handleDelete} />
            <Chips {...args} label="Filled Chip" variant="filled" onDelete={handleDelete} />
            <Chips {...args} label="Chip" variant="outlined" onDelete={handleDelete} />
        </div>
    );
};

export const Normal = Template.bind({});
