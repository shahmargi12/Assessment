import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabComponent from './Tab.component';
import Grid, { GridItem } from '../Grid';

export default {
    title: 'Tab',
    component: TabComponent,
    argTypes: {},
} as ComponentMeta<typeof TabComponent>;

const CricleTabItems = [
    {
        label: 'Active',
        value: 0,
    },
    {
        label: 'Draft',
        value: 1,
    },
    {
        label: 'Inactive',
        value: 2,
    },
];

const tabItems = [
    {
        label: 'Activity',
        value: 0,
    },
    {
        label: 'Resume',
        value: 1,
    },
    {
        label: 'Chat',
        value: 2,
    },
    {
        label: 'Message',
        value: 3,
    },
];

const Template: ComponentStory<typeof TabComponent> = (args) => {
    const [selectedTab, setSelectedTab] = useState(args.selectedTabValue);
    const handleTabChange = (value: React.SetStateAction<number>) => {
        setSelectedTab(value);
    };
    return (
        <div>
            <Grid col={2}>
                <GridItem description="Standard / Square">
                    <TabComponent
                        {...args}
                        selectedTabValue={selectedTab}
                        handleTabChange={handleTabChange}
                        type="square"
                    />
                </GridItem>
                <GridItem description="Standard / Circle">
                    <TabComponent
                        {...args}
                        selectedTabValue={selectedTab}
                        handleTabChange={handleTabChange}
                        type="circle"
                        items={CricleTabItems}
                    />
                </GridItem>
                <GridItem description="Standard / Squre">
                    <TabComponent
                        {...args}
                        selectedTabValue={selectedTab}
                        handleTabChange={handleTabChange}
                        type="normal"
                        items={tabItems}
                    />
                </GridItem>
            </Grid>
        </div>
    );
};

export const Tab: ComponentMeta<typeof TabComponent> = Template.bind({});
Tab.args = {
    selectedTabValue: 1,
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
