import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TagComp from './Tag.component';
export default {
    title: 'Utility/Tag',
    component: TagComp,
    argTypes: {
        type: {
            control: {
                type: 'radio',
                options: ['best', 'average', 'worse', 'primaryLight'],
            },
        },
        size: {
            control: {
                type: 'radio',
                options: ['small', 'medium'],
            },
        },
    },
} as ComponentMeta<typeof TagComp>;

const Template: ComponentStory<typeof TagComp> = (args) => <TagComp {...args} />;

export const Tag: ComponentMeta<typeof TagComp> = Template.bind({});

Tag.args = {
    type: 'best',
    label: 'Best Fit',
    size: 'small',
};
