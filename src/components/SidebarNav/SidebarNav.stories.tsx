import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SidebarNavComponent from './SidebarNav.component';

export default {
    title: 'Sidebar',
    component: SidebarNavComponent,
    argTypes: {},
} as ComponentMeta<typeof SidebarNavComponent>;

const tabItemsEmployer = [
    {
        label: 'Account Members',
        value: 0,
    },
    {
        label: 'Job Settings',
        value: 1,
    },
    {
        label: 'School Settings',
        value: 2,
    },
    {
        label: 'Student Settings',
        value: 3,
    },
    {
        label: 'Event Settings',
        value: 4,
    },
    {
        label: 'Subscription & Payments',
        value: 5,
    },
    {
        label: 'Integrations',
        value: 6,
    },
];
const tabItemsSchool = [
    {
        label: 'Account Members',
        value: 0,
    },
    {
        label: 'Job Settings',
        value: 1,
    },
    {
        label: 'Company Settings',
        value: 2,
    },
    {
        label: 'Student Settings',
        value: 3,
    },
    {
        label: 'Event Settings',
        value: 4,
    },
    {
        label: 'Subscription & Payments',
        value: 5,
    },
    {
        label: 'Integrations',
        value: 6,
    },
];

const Template: ComponentStory<typeof SidebarNavComponent> = (args) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const [selectedValue, setSelectedvalue] = useState(true);

    const handleTabChange = (value: number) => {
        setSelectedTab(value);
    };

    return (
        <>
            {selectedValue ? (
                <>
                    <SidebarNavComponent {...args} handleTabChange={handleTabChange} items={tabItemsEmployer} />
                </>
            ) : (
                <>
                    <SidebarNavComponent {...args} handleTabChange={handleTabChange} items={tabItemsSchool} />
                </>
            )}
        </>
    );
};

export const Sidebar: ComponentStory<typeof SidebarNavComponent> = Template.bind({});
Sidebar.args = {
    items: [
        {
            label: 'My Templates',
            value: 0,
        },
        {
            label: 'General Templates',
            value: 1,
        },
    ],
};
