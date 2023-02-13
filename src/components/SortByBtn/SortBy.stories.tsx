import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SortByComp from './SortBy.component';
export default {
    title: 'SortByComp',
    component: SortByComp,
    argTypes: {},
} as ComponentMeta<typeof SortByComp>;

const items = [
    {
        id: 1,
        value: 'Newest First',
        apiValue: 'created_at:desc',
        isSelected: true,
    },
    {
        id: 2,
        value: 'Oldest First',
        apiValue: 'created_at:asc',
        isSelected: false,
    },
    {
        id: 3,
        value: 'A to Z',
        apiValue: 'name:asc',
        isSelected: false,
    },
    {
        id: 4,
        value: 'Z to A',
        apiValue: 'name:desc',
        isSelected: false,
    },
];
const Template: ComponentStory<typeof SortByComp> = (args) => {
    return <SortByComp {...args} menuItems={items} />;
};

export const SortBy: ComponentStory<typeof SortByComp> = Template.bind({});

SortBy.args = {
    menuItems: [
        {
            id: 1,
            value: 'Newest First',
            apiValue: 'created_at:desc',
            isSelected: true,
        },
        {
            id: 2,
            value: 'Oldest First',
            apiValue: 'created_at:asc',
            isSelected: false,
        },
        {
            id: 3,
            value: 'A to Z',
            apiValue: 'name:asc',
            isSelected: false,
        },
        {
            id: 4,
            value: 'Z to A',
            apiValue: 'name:desc',
            isSelected: false,
        },
    ],
};
